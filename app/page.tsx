import React from 'react'
import { getPosts } from '../lib/sanity'
import PostCard from '../components/PostCard'
import { Post } from '../types/post'

export default async function HomePage() {
  let posts: Post[]
  try {
    posts = await getPosts()
  } catch (err) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold">Failed to load posts</h2>
        <p className="text-sm text-gray-500 mt-2">Please check your Sanity configuration.</p>
      </div>
    )
  }

  return (
    <section>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Latest Posts</h1>
        <p className="text-sm text-gray-600 mt-1">Thoughts and practical notes on agriculture</p>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}
