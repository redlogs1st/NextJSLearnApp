// /app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { getPost } from '../.././data/posts';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://yourdomain.com/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.summary,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) return <h1>Post Not Found</h1>;
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
    </article>
  );
}
