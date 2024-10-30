import { v } from "convex/values";
import { query } from "./_generated/server";
import{getAllOrThrow} from "convex-helpers/server/relationships"

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favorites: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    if (args.favorites) {
      const favoritedBoards=await ctx.db
      .query("userFavorites")
      .withIndex("by_board_user", (q) =>
         q
          .eq("orgId", args.orgId)
          .eq("userId", identity.subject))
          .collect()
      const ids=favoritedBoards.map((board:any)=>board.boardId)
      const boards=await getAllOrThrow(ctx.db,ids)
      return boards.map((board)=>({
        ...board,
        favorites:true
      }))   
    }

    const title = args.search as string;
    let boards: any = [];

    if (title) {
      boards = await ctx.db
        .query("boards")
        .withSearchIndex("by_title",q=> q.search("title", title).eq("orgId", args.orgId))
        .collect();
    } else {
      boards = await ctx.db
        .query("boards")
        .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
        .order("desc")
        .collect();
    }

    const boardsWithFavoritesRelation = boards.map((board:any) => {
      return ctx.db
        .query("userFavorites")
        .withIndex("by_board", (q) =>
          q.eq("boardId", board._id).eq("userId", identity.subject)
        )
        .unique()
        .then((favorites) => {
          return { ...board, favorites: !!favorites };
        });
    });
    const boardsWithFavorites = await Promise.all(boardsWithFavoritesRelation);
    return boardsWithFavorites;
  },
});
