import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/content/projects"}),
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		image: image().optional(),
		url: z.string().optional(),
		github: z.string().optional(),
		tags: z.array(z.string()).optional(),
		featured: z.boolean().default(false),
		order: z.number().default(999),
	}),
});

const experienceCollection = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/content/experience"}),
	schema: z.object({
		company: z.string(),
		position: z.string(),
		startDate: z.string(),
		endDate: z.string().optional(),
		logo: z.string(),
		description: z.string(),
		link: z.string().optional(),
	}),
})

export const collections = {
	projects: projectsCollection,
	experience: experienceCollection,
};
