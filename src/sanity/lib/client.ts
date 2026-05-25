import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9vsl2e3c'; // Use your project ID as fallback
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-05-04',
  useCdn: false, // Set to false for real-time updates
})
