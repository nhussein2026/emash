export const groqGetPosts = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "excerpt": pt::text(body)[0...100],
  author->{
    name,
    image,
    slug
  },
  categories[]->{
    title,
    description
  }
}`;

export const groqGetPostBySlug = `*[_type == "post" && slug.current == $slug] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body,
  author->{
    name,
    image,
    bio,
    slug
  },
  categories[]->{
    title,
    description
  }
}`;
