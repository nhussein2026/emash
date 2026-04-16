export interface Author {
  name: string;
  image?: any;
  bio?: any;
  slug: { current: string };
}

export interface Category {
  title: string;
  description?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: any;
  body?: any;
  excerpt?: string;
  author?: Author;
  categories?: Category[];
}
