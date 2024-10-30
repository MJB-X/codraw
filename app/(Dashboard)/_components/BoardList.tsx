import React from "react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import BoardCard from "./BoardCard"
import { Skeleton } from "@/components/ui/skeleton"
import EmptySearch from "./EmptySearch";
import EmptyFav from "./EmptyFavorites";
import EmptyBoards from "./EmptyBoards";
import NewBoardButton from "./NewBoardButton"
import { favorites } from "@/convex/board"


interface BoardListProps {
  orgId: string
  query: {
    search?: string
    favorites?: boolean
  }
}

export default function BoardList({ orgId, query }: BoardListProps) {
  const data = useQuery(api.boards.get, { orgId,...query
  })

  if (data === undefined) {
    return <LoadingSkeleton />
  }

  if (!data?.length && query.search) {
    return <EmptySearch></EmptySearch>;
  }
  if (!data?.length && query.favorites) {
    return <EmptyFav></EmptyFav>;
  }
  if (!data?.length) {
    return <EmptyBoards></EmptyBoards>;
  }
  const title = query.favorites ? "Favorite Boards" : "Team Boards"

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NewBoardButton orgId={orgId} disabled={query.favorites} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.favorites}
          />
        ))}
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="w-48 h-8 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <Skeleton key={index} className="w-full aspect-video" />
        ))}
      </div>
    </div>
  )
}
