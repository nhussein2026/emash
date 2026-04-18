"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Sprout, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-full hover:bg-primary-800 transition-all shadow-md shadow-primary-700/20 active:scale-95"
          >
            اشترك
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((state) => !state)}
            className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-green-100 bg-white/95 backdrop-blur-md md:hidden">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            <Link href="/" className="text-base font-medium text-gray-700 hover:text-primary-700 transition-colors">الرئيسية</Link>
            <Link href="/about" className="text-base font-medium text-gray-700 hover:text-primary-700 transition-colors">من أنا</Link>
            <Link href="/categories" className="text-base font-medium text-gray-700 hover:text-primary-700 transition-colors">الفئات</Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center w-full rounded-full bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 transition-all"
            >
              اشترك
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
