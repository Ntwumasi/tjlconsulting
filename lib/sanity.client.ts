import { createClient } from '@sanity/client'

// Only create client if projectId is configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const client = projectId ? createClient({
  projectId,
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
}) : null

export async function getHomepage() {
  if (!client) return null
  try {
    return await client.fetch(`*[_type == "homepage"][0]`)
  } catch (error) {
    console.log('Failed to fetch homepage from Sanity:', error)
    return null
  }
}

export async function getServices() {
  if (!client) return []
  try {
    return await client.fetch(`*[_type == "service"] | order(order asc)`)
  } catch (error) {
    console.log('Failed to fetch services from Sanity:', error)
    return []
  }
}

export async function getAbout() {
  if (!client) return null
  try {
    return await client.fetch(`*[_type == "about"][0]`)
  } catch (error) {
    console.log('Failed to fetch about from Sanity:', error)
    return null
  }
}

export async function getContact() {
  if (!client) return null
  try {
    return await client.fetch(`*[_type == "contact"][0]`)
  } catch (error) {
    console.log('Failed to fetch contact from Sanity:', error)
    return null
  }
}

export async function getSiteSettings() {
  if (!client) return null
  try {
    return await client.fetch(`*[_type == "siteSettings"][0]`)
  } catch (error) {
    console.log('Failed to fetch site settings from Sanity:', error)
    return null
  }
}