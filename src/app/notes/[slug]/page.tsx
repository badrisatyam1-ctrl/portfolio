import { getNoteById, getAllNotes } from "@/lib/markdown";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";
import PageTransition from "@/components/layout/PageTransition";

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.id,
  }));
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const note = getNoteById(resolvedParams.slug);

  if (!note) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
        <Link
          href="/notes"
          className="group mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          BACK_TO_KNOWLEDGE_BASE
        </Link>

        <header className="mb-10 border-b border-border/50 pb-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <Badge key={tag} variant="default">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-text sm:text-4xl">
            {note.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-faint">
            <span className="flex items-center gap-1 font-mono text-[11px] uppercase">
              <Calendar size={14} />{" "}
              {new Date(note.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </header>

        <article className="prose prose-invert prose-p:text-muted prose-headings:text-text prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent prose-pre:bg-surface-2 prose-pre:border prose-pre:border-border/50 max-w-none pb-20">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {note.content}
          </ReactMarkdown>
        </article>
      </div>
    </PageTransition>
  );
}
