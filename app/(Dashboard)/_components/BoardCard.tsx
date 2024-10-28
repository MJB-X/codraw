'use client'

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Action } from '@/components/Actions'
import { useRouter } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

interface BoardCardProps {
  id: string
  title: string
  imageUrl: string
  authorName: string
  createdAt: number
  isFavorite: boolean
  orgId:string
}

export default function BoardCard({
  id,
  title,
  imageUrl,
  authorName,
  createdAt,
  isFavorite,
  orgId
}: BoardCardProps) {
  const router = useRouter()
  const [favorite, setFavorite] = useState(isFavorite)
  const makeFavorite=useMutation(api.board.favorites)
  const unFavorite=useMutation(api.board.unfavorites)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (favorite){
      unFavorite({id})
      setFavorite(!favorite)
    }
    else{
      makeFavorite({id,orgId})
      setFavorite(!favorite)
    }
    
    
  }

  const handleCardClick = () => {
    router.push(`/board/${id}`)
  }

  const relativeTime = formatDistanceToNow(new Date(createdAt), { addSuffix: true })

  return (
    <Card
      onClick={handleCardClick} 
      className="w-full max-w-sm border transition duration-300 hover:border-primary hover:border-2 hover:bg-background"
    >
      <CardHeader className="pb-0">
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            width={500}
            height={500}
            alt={`${title} board`}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div
          onClick={(e)=>{e.stopPropagation()}} 
          className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleFavoriteClick}
              aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
              className="bg-secondary"
            >
              <Star
                className={`h-5 w-5 ${
                  favorite ? "text-yellow-400 fill-current" : "text-muted-foreground"
                }`}
              />
            </Button>
            <Action id={id} title={title} />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-sm text-muted-foreground">Created by {authorName}</p>
          <p className="text-xs text-muted-foreground">Created {relativeTime}</p>
        </div>
      </CardContent>
    </Card>
  )
}