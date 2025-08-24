import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
})

export async function getHomepage() {
  return await client.fetch(`*[_type == "homepage"][0]`)
}

export async function getServices() {
  return await client.fetch(`*[_type == "service"] | order(order asc)`)
}

export async function getAbout() {
  return await client.fetch(`*[_type == "about"][0]`)
}

export async function getContact() {
  return await client.fetch(`*[_type == "contact"][0]`)
}

export async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"][0]`)
}