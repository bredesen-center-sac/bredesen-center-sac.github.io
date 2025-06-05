import { defineCollection, z } from 'astro:content';

const announcementsCollection = defineCollection({
  type: 'content', // 'content' for MDX
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().optional(),
    // Add other fields like 'image', 'tags' if needed later
  })
});

export const collections = {
  'announcements': announcementsCollection,
}; 