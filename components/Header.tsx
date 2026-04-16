import Link from 'next/link'
import React from 'react'
import { Sprout, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Sprout className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Emash<span className="text-primary-600">Agriculture</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors">الرئيسية</Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors">من أنا</Link>
          <Link href="/categories" className="text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors">الفئات</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-full hover:bg-primary-800 transition-all shadow-md shadow-primary-700/20 active:scale-95"
          >
            اشترك
          </Link>
        </div>
      </div>
    </header>
  )
}
