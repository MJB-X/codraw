import {v} from 'convex/values';
import{ defineSchema, defineTable } from 'convex/server';

// Define the schema for the boards table
export default defineSchema({
    boards: defineTable({
        // Define the title field as a string
        title: v.string(),
        orgId: v.string(),
        authorId: v.string(),    
        authorName: v.string(),      
        imageUrl: v.string(),
    })
        // Index the table by orgId
        .index("by_org", ["orgId"])
        // Create a search index by title
        .searchIndex("by_title", {
            searchField: "title",
            filterFields: ["orgId"]
        }),  
    userFavorites:defineTable({
        orgId:v.string(),
        userId:v.string(),
        boardId:v.string()


    })
    .index("by_user",["userId"])
    .index("by_board",["boardId","userId"])
    .index("by_org",["orgId"])
    .index("by_board_user",["boardId","userId","orgId"])
})


