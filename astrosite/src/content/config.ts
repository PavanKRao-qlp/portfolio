import { z, defineCollection } from "astro:content";

// const storeSchema = z.object({
//     title: z.string(),
//     description: z.string(),
//     custom_link_label: z.string(),
//     custom_link: z.string().optional(),
//     updatedDate: z.coerce.date(),
//     pricing: z.string().optional(),
//     oldPricing: z.string().optional(),
//     badge: z.string().optional(),
//     checkoutUrl: z.string().optional(),
//     heroImage: z.string().optional(),
// });

const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
  }),
});


const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    pinned: z.boolean().default(false).optional(),
});
export type BlogSchema = z.infer<typeof blogSchema>;
const blogCollection = defineCollection({ schema: blogSchema });



const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    coverImage: z.string().optional(),
    badge: z.string().optional(),    
    priority: z.number().int().optional(),
    pin: z.boolean().default(false).optional(),
    type: z.enum(["work", "personal"]).default("personal")// 👈 added
});
export type ProjectSchema = z.infer<typeof projectSchema>;
const projectCollection = defineCollection({schema: projectSchema});

//export type StoreSchema = z.infer<typeof storeSchema>;

//const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    about,
    'blog': blogCollection,
    'projects': projectCollection
}