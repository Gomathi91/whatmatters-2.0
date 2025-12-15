import React from 'react';
import { getContentfulClient } from '@/utils/contentful';
import PageContent from '@/components/PageContent';

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const isPreview = params?.preview === 'true';
  const slug = params?.slug;

  const client = getContentfulClient(isPreview);

  const res = await client.getEntries({
    content_type: 'deluxePage',
    'fields.slug': slug,
    include: 3,
  });

  const settingsRes = await client.getEntries({
    content_type: 'siteSettings',
    limit: 1,
  });

  const siteSettings = settingsRes.items[0]?.fields;
  const posts = res.items;

  if (!posts || posts.length === 0) {
    return <p>No content found.</p>;
  }

  const imageUrl = siteSettings?.logo?.fields?.file?.url;
  const imageTitle = siteSettings?.logo?.fields?.title || 'Logo';

  return (
    <>
      <div>
        <a href="/" className="heading">
          {imageUrl ? (
            <img
              src={`https:${imageUrl}`}
              alt={imageTitle}
              className="img-fluid"
              style={{ width: '200px', objectFit: 'cover' }}
            />
          ) : (
            <div className="text-center" style={{ color: "var(--bs-red)" }}>
              {siteSettings?.title}
            </div>
          )}
        </a>
      </div>

      <PageContent post={posts[0]} isPreview={isPreview} />
    </>
  );
}
