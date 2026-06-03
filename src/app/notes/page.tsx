import PageTransition from "@/components/layout/PageTransition";
import NotesList from "./NotesList";
import { getAllNotes } from "@/lib/markdown";

export const revalidate = 3600; // Revalidate every hour

export default function NotesDashboard() {
  const notes = getAllNotes();

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <header className="mb-8 flex items-center justify-between border-b border-border/50 pb-4">
          <div>
            <p className="font-mono text-xs text-accent">// KNOWLEDGE_BASE</p>
            <h1 className="mt-1 text-2xl font-bold text-text">Engineering Notes</h1>
          </div>
        </header>

        <NotesList notes={notes} />
      </div>
    </PageTransition>
  );
}
