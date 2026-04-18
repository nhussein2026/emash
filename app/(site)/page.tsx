import React from 'react'
import { getPosts } from '../../lib/sanity'
import PostCard from '../../components/PostCard'
import { Post } from '../../types/post'

export const revalidate = 0

export default async function HomePage() {
  let posts: Post[]
  try {
    posts = await getPosts()
  } catch (err) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold">فشل تحميل المنشورات</h2>
        <p className="text-sm text-gray-500 mt-2">يرجى التحقق من إعدادات Sanity.</p>
      </div>
    )
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">أحدث المنشورات</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">أفكار وملاحظات عملية حول الزراعة</p>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}
