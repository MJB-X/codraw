import {v } from 'convex/values';
import{mutation} from "./_generated/server"




const images:string[]=["/png1.png","/png2.png","/png3.png","/png4.png","/png5.png","/png6.png","/png7.png"]

export const create= mutation ({
    args:{
        orgId:v.string(),
        title:v.string(),

    },
    handler: async(ctx,args)=>{
        const identity=await ctx.auth.getUserIdentity();
        const random=Math.floor(Math.random()*images.length)

        if (!identity){
            throw new Error("Unauthorized");
        }

        const board=await ctx.db.insert("boards",{
            orgId:args.orgId,
            title:args.title,
            authorId:identity.subject,
            authorName:identity.name!,
            imageUrl:images[random]
        })
    }
})

export const remove=mutation({
    args:{id:v.id("boards")},
    handler:async(ctx,args)=>{
        const identity=await ctx.auth.getUserIdentity();
        if (!identity){
            throw new Error("Unauthorized");
        }
       
        const userId=identity.subject
        const existingFavorites=await ctx.db.query("userFavorites")
        .withIndex("by_board", (q) => q
        .eq("boardId", args.id)
        .eq("userId",userId)
       
        
    )
    .unique()

        if (existingFavorites){
            await ctx.db.delete(    
                existingFavorites._id)
        }
        await ctx.db.delete(args.id)
        }
    

    }
)
export const favorites=mutation({
    args:{id:v.id("boards"),orgId:v.string()},
    handler:async(ctx,args)=>{
        const identity=await ctx.auth.getUserIdentity();
        if (!identity){
            throw new Error("Unauthorized");
        }
        const board=await ctx.db.get(args.id)
        if (!board){
            throw new Error("Board not found");
        }
        const userId=identity.subject
        const existingFavorites=await ctx.db.query("userFavorites")
        .withIndex("by_board_user", (q) => q
        .eq("orgId",args.orgId)
        .eq("userId",userId)
        .eq("boardId", board._id)
        
    )
    .unique()

    if (existingFavorites){
        throw new Error("Already favorited")
    }
    await ctx.db.insert("userFavorites",{
        userId:userId,
        boardId:board._id,
        orgId:args.orgId
    })
    return board

    }
})
export const unfavorites=mutation({
    args:{id:v.id("boards")},
    handler:async(ctx,args)=>{
        const identity=await ctx.auth.getUserIdentity();
        if (!identity){
            throw new Error("Unauthorized");
        }
        const board=await ctx.db.get(args.id)
        if (!board){
            throw new Error("Board not found");
        }
        const userId=identity.subject
        const existingFavorites=await ctx.db.query("userFavorites")
        .withIndex("by_board", (q) => q
        .eq("boardId", board._id)
        .eq("userId",userId)
       
        
    )
    .unique()

    if (!existingFavorites){
        throw new Error("not favorited")
    }
    await ctx.db.delete(    
        existingFavorites._id)
    return board

    }
})