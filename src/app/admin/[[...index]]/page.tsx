'use client'

export default function StudioPage() {
  // Return a placeholder if Sanity is not configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Sanity Studio Not Configured</h1>
        <p>Please set up your Sanity project ID to access the admin panel.</p>
      </div>
    )
  }

  // Dynamically import Studio only when configured
  const { NextStudio } = require('next-sanity/studio')
  const config = require('../../../../sanity.config').default

  return <NextStudio config={config} />
}