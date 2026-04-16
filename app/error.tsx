'use client'

import React from 'react'

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="py-20 text-center">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <pre className="mt-4 text-sm text-red-600">{error.message}</pre>
    </div>
  )
}
