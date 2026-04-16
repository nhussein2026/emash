import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '../lib/image'
import { Post } from '../types/post'
import { Calendar, User } from 'lucide-react'

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 flex flex-col h-full">
      <Link href={`/post/${post.slug.current}`} className="block relative aspect-[16/10] overflow-hidden">
        {post.mainImage ? (
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-primary-800 rounded-full shadow-sm"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
      </Link>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3 text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          {post.author && (
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <User className="w-3 h-3" />
              {post.author.name}
            </div>
          )}
        </div>

        <Link href={`/post/${post.slug.current}`} className="block mb-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        {post.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1">
            {post.excerpt}...
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image ? (
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-100">
                  <Image 
                     src={urlForImage(post.author.image).width(48).height(48).url()} 
                     alt={post.author.name}
                     fill
                     className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <User className="w-3 h-3" />
                </div>
              )}
              <span className="text-xs font-semibold text-gray-700">{post.author.name}</span>
            </div>
          )}
          
          <Link 
            href={`/post/${post.slug.current}`} 
            className="text-xs font-bold text-primary-700 hover:text-primary-800 flex items-center gap-1 group/btn"
          >
            Read More
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
