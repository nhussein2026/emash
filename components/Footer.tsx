import React from 'react'
import Link from 'next/link'
import { Sprout } from 'lucide-react'

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.54 8.54 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.24 3.88A12.06 12.06 0 0 1 3.15 4.6a4.25 4.25 0 0 0 1.32 5.67c-.66-.02-1.28-.2-1.82-.5v.05a4.25 4.25 0 0 0 3.41 4.17c-.32.09-.66.14-1.01.14-.25 0-.5-.02-.74-.07a4.26 4.26 0 0 0 3.97 2.95A8.53 8.53 0 0 1 2 19.54a12.04 12.04 0 0 0 6.52 1.91c7.83 0 12.11-6.48 12.11-12.1v-.55A8.6 8.6 0 0 0 22.46 6z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 .001 5.001A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21H9z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.7 2 .9.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.8 5.2 18.8 5.5 18.8 5.5c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sprout className="w-6 h-6 text-primary-600" />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Emash<span className="text-primary-600">Agriculture</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
              جسر الفجوة بين الهندسة الزراعية والتكنولوجيا الحديثة. مشاركة الأفكار والأبحاث والملاحظات الميدانية العملية.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">التنقل</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-primary-700 transition-colors">الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-primary-700 transition-colors">من أنا</Link></li>
              <li><Link href="/blog" className="hover:text-primary-700 transition-colors">أحدث المنشورات</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">تواصل</h4>
            <div className="flex gap-4">
              <Link href="https://twitter.com/" aria-label="Twitter" className="p-2 bg-white rounded-full border border-gray-200 text-gray-400 hover:text-primary-600 hover:border-primary-100 transition-all shadow-sm">
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/" aria-label="LinkedIn" className="p-2 bg-white rounded-full border border-gray-200 text-gray-400 hover:text-primary-600 hover:border-primary-100 transition-all shadow-sm">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/" aria-label="GitHub" className="p-2 bg-white rounded-full border border-gray-200 text-gray-400 hover:text-primary-600 hover:border-primary-100 transition-all shadow-sm">
                <GitHubIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Emash Agriculture. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">سياسة الخصوصية</a>
            <a href="#" className="hover:text-gray-600">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}