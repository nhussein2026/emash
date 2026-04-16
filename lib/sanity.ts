import sanityClient from "@sanity/client";
import { groqGetPosts, groqGetPostBySlug } from "./queries";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

if (!projectId) {
  console.warn("Warning: Missing SANITY_PROJECT_ID in environment variables.");
}

export const client = sanityClient({
  projectId: projectId || "8nasmnlb", // Fallback for build phase
  dataset: dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getPosts() {
  if (!projectId) return [];
  const query = groqGetPosts;
  try {
    const res = await client.fetch(query);
    return res || [];
  } catch (error) {
    console.warn("Failed to fetch posts from Sanity:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!projectId) return null;
  const query = groqGetPostBySlug;
  const params = { slug };
  try {
    const res = await client.fetch(query, params);
    return res?.length ? res[0] : null;
  } catch (error) {
    console.warn(`Failed to fetch post by slug ${slug}:`, error);
    return null;
  }
}
