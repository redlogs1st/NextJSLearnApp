export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ margin: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
      <h2>About Page</h2>
      {children}
    </section>
  );
}
