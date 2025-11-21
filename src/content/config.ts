import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		url: z.string().optional(),
		github: z.string().optional(),
		tags: z.array(z.string()).optional(),
		featured: z.boolean().default(false),
		order: z.number().default(999),
	}),
});

export const collections = {
	projects: projectsCollection,
};
