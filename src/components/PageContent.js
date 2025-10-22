'use client';

import {
  ContentfulLivePreviewProvider,
  useContentfulLiveUpdates,
  useContentfulInspectorMode,
} from '@contentful/live-preview/react';

import ImageBlock from '@/components/Blocks/ImageBlock';
import TextImageBlock from '@/components/Blocks/ImageTextBlock';
import FullWidthTextBlock from '@/components/Blocks/TextBlock';
import ThreeGridBlock from '@/components/Blocks/ThreeGridBlock';

function BlockRenderer({ block }) {
  const contentType = block.sys.contentType?.sys?.id;
  if (!contentType) return null;

  switch (contentType) {
    case 'fullWidthImageBlock':
      return <ImageBlock data={block.fields} />;
    case 'textImageBlock':
      return <TextImageBlock data={block.fields} />;
    case 'fullWidthTextBlock':
      return <FullWidthTextBlock data={block.fields} />;
    case 'storiesListingBlock':
      return <ThreeGridBlock data={block.fields} />;
    default:
      return null;
  }
}

export default function PageContent({ post, isPreview }) {
  const updatedPost = useContentfulLiveUpdates(post);
  const inspectorProps = useContentfulInspectorMode({ entryId: post.sys.id });

  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates={isPreview}
      enableInspectorMode={isPreview}
    >
      <div {...inspectorProps({ fieldId: 'title' })}>
        <div>
          <a className="heading">What Matters</a>
        </div>
        {updatedPost.fields.pageBlocks?.map((block, index) => (
          <BlockRenderer key={block.sys.id || index} block={block} />
        ))}
      </div>
    </ContentfulLivePreviewProvider>
  );
}
