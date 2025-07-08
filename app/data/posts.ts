// /data/posts.ts
export const posts = [
    {
      slug: 'learn-nextjs',
      title: 'Learn Next.js with TypeScript',
      summary: 'A guide to mastering Next.js using TypeScript and App Router.',
    },
    {
      slug: 'seo-in-nextjs',
      title: 'SEO in Next.js 15',
      summary: 'Implement modern SEO with metadata and dynamic routes.',
    },
  ];
  
  export function getPost(slug: string) {
    return posts.find(post => post.slug === slug);
  }
  