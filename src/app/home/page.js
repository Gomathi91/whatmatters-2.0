import { deliveryclient, previewclient } from "@/utils/contentful";
import ImageBlock from "@/components/Blocks/ImageBlock";
import TextImageBlock from "@/components/Blocks/ImageTextBlock";
import FullWidthTextBlock from "@/components/Blocks/TextBlock";

function BlockRenderer({ block }) {
  const contentType = block.sys.contentType?.sys?.id;
  if (!contentType) return null;

  switch (contentType) {
    case "fullWidthImageBlock":
      return <ImageBlock data={block.fields} />;
    case "textImageBlock":
      return <TextImageBlock data={block.fields} />;
    case "fullWidthTextBlock":
      return <FullWidthTextBlock data={block.fields} />;
    default:
      return null;
  }
}

export default async function Home({ searchParams }) {

  const params = await searchParams;
  const isPreview = params?.preview === "true";
  const slug = params?.slug;

  const client = isPreview ? previewclient : deliveryclient;

  const res = await client.getEntries({
    content_type: "deluxePage",
    "fields.slug": slug,
    include: 3,
  });
  const posts = res.items;

  if (!posts || posts.length === 0) {
    return <p>No content found.</p>;
  }

  return (
    <div>
      <div>
        <a className="heading">What Matters</a>
      </div>
      {/* <h1>{isPreview ? "Preview Mode" : "Published Mode"}</h1> */}
      {posts.map((post) => (
        <div key={post.sys.id}>
          {/* <h2>{post.fields.title}</h2> */}
          {post.fields.pageBlocks?.map((block, index) => (
            <BlockRenderer key={block.sys.id || index} block={block} />
          ))}
        </div>
      ))}
    </div>
  );
}
