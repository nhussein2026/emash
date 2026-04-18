import React from 'react'
import { getPostBySlug } from '../../../../lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '../../../../lib/image'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'

export const revalidate = 0

type Props = { params: Promise<{ slug: string }> }

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  let post
  try {
    post = await getPostBySlug(slug)
  } catch (err) {
    return (
      <div className="text-center py-20 bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المقال غير موجود</h2>
        <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> العودة إلى المدونة
        </Link>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="text-center py-20 bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المقال غير موجود</h2>
        <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> العودة إلى المدونة
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Navigation & Categories */}
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-700 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          العودة إلى جميع المقالات
        </Link>

        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category: any, idx: number) => (
              <span 
                key={idx} 
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-xs font-bold uppercase tracking-wider text-primary-700 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {category.title}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Header */}
      <header className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1]">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary-600" />
            {new Date(post.publishedAt).toLocaleDateString(undefined, { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </div>
          {post.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary-600" />
              بواسطة {post.author.name}
            </div>
          )}
        </div>
      </header>

      {/* Main Image */}
      {post.mainImage && (
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 border border-gray-100">
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            width={1200}
            height={675}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="prose prose-lg prose-primary max-w-none 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900
            prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
            prose-p:leading-relaxed prose-p:text-gray-700">
            <PortableText value={post.body} />
          </div>
        </div>

        {/* Sidebar / Author Info */}
        {post.author && (
          <aside className="lg:w-72">
            <div className="sticky top-28 p-6 bg-white rounded-3xl border border-green-50 shadow-sm shadow-green-900/5 transition-all hover:shadow-md">
              <div className="flex flex-col items-center text-center">
                {post.author.image ? (
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-4 rotate-3 shadow-lg">
                    <Image 
                      src={urlForImage(post.author.image).width(200).height(200).url()} 
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4 rotate-3 shadow-lg">
                    <User className="w-10 h-10" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">كتبه</h3>
                <h4 className="text-xl font-black text-primary-700 mb-4">{post.author.name}</h4>
                {post.author.bio && (
                  <div className="text-sm text-gray-500 leading-relaxed mb-6">
                    <PortableText value={post.author.bio} />
                  </div>
                )}
                <Link 
                  href={`/author/${post.author.slug?.current || '#'}`}
                  className="w-full py-2 bg-primary-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-primary-700 transition-colors"
                >
                  عرض الملف الشخصي
                </Link>
              </div>
            </div>
          </aside>
        )}
      </div>
    </article>
  )
}
