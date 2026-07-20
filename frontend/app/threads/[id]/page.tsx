export const runtime = 'edge';

export default async function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="threadPlaceholder">
      <a href="/">← Back to DevTeams</a>
      <h1>Thread view</h1>
      <p>Full thread functionality for <strong>{id}</strong> will land here.</p>
    </main>
  );
}
