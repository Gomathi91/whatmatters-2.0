import React from 'react'
import { getContentfulClient} from '@/utils/contentful';
import PageContent from '@/components/PageContent';

export default async function page({ searchParams }) {
  const params = await searchParams; 
  
    const isPreview = params?.preview === 'true';
    const slug = params?.slug;
  
    const client = getContentfulClient(isPreview);
  
    const res = await client.getEntries({
      content_type: 'deluxePage',
      'fields.slug': slug,
      include: 3,
    });
  
    const posts = res.items;
  
    if (!posts || posts.length === 0) {
      return <p>No content found.</p>;
    }
  
    // Pass data & theme down to client component
    return <PageContent post={posts[0]} isPreview={isPreview} />;
}