import Link from "next/link"
import { ArrowLeft, ListTree } from "lucide-react"

export const runtime = "edge"

export default async function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <main className="thread-page"><Link href="/" className="text-link"><ArrowLeft /> Back to feed</Link><section className="empty-state"><div className="empty-icon"><ListTree /></div><p className="eyebrow">Thread / {id}</p><h1>Thread content is on its way.</h1><p>This route is ready to render the conversation when the backend is connected.</p></section></main>
}
