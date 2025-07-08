// /app/page.tsx
import Link from 'next/link';
import { posts } from './data/posts';

export default function HomePage() {
  return (
    <main>
      <h1>MiniBlog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
