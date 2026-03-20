"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, BookOpen, Edit } from "lucide-react";

type Book = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  publishDate: string;
  amazonLink: string;
  status: "coming-soon" | "published";
};

export default function BooksEditorPage() {
  const [saved, setSaved] = useState(false);
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "First Principles Leadership",
      subtitle: "Rebuilding Authority from Universal Laws",
      description: "A comprehensive guide to leadership built on timeless principles rather than trends.",
      publishDate: "2025",
      amazonLink: "",
      status: "coming-soon",
    },
    {
      id: "2",
      title: "The Six Laws",
      subtitle: "A Framework for Organizational Excellence",
      description: "Deep dive into the six governing laws that determine leadership effectiveness.",
      publishDate: "2025",
      amazonLink: "",
      status: "coming-soon",
    },
  ]);

  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAddBook = () => {
    const newBook: Book = {
      id: Date.now().toString(),
      title: "New Book",
      subtitle: "Book subtitle",
      description: "Book description",
      publishDate: "2025",
      amazonLink: "",
      status: "coming-soon",
    };
    setBooks([...books, newBook]);
    setEditingBook(newBook);
  };

  const handleDeleteBook = (id: string) => {
    setBooks(books.filter((b) => b.id !== id));
    if (editingBook?.id === id) {
      setEditingBook(null);
    }
  };

  const handleUpdateBook = (field: keyof Book, value: string) => {
    if (!editingBook) return;
    const updated = { ...editingBook, [field]: value };
    setEditingBook(updated);
    setBooks(books.map((b) => (b.id === updated.id ? updated : b)));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Content Management
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Books Manager</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your publications and books
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddBook}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 font-semibold text-foreground hover:bg-muted"
              >
                <Plus className="h-5 w-5" />
                Add Book
              </button>
              <button
                onClick={handleSave}
                className={`inline-flex items-center gap-2 rounded px-6 py-2 font-semibold transition-all ${
                  saved
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Save className="h-5 w-5" />
                {saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Book List */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">All Books ({books.length})</h2>
            <div className="space-y-3">
              {books.map((book) => (
                <div
                  key={book.id}
                  className={`rounded border p-4 cursor-pointer transition-all ${
                    editingBook?.id === book.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                  onClick={() => setEditingBook(book)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">{book.publishDate}</p>
                    </div>
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${
                        book.status === "published"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {book.status === "coming-soon" ? "Coming Soon" : "Published"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Editor */}
          <div className="rounded-lg border border-border bg-card p-6">
            {editingBook ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Edit Book</h2>
                  </div>
                  <button
                    onClick={() => handleDeleteBook(editingBook.id)}
                    className="rounded p-2 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Book Title
                    </label>
                    <input
                      type="text"
                      value={editingBook.title}
                      onChange={(e) => handleUpdateBook("title", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      value={editingBook.subtitle}
                      onChange={(e) => handleUpdateBook("subtitle", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      value={editingBook.description}
                      onChange={(e) => handleUpdateBook("description", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Publish Date
                      </label>
                      <input
                        type="text"
                        value={editingBook.publishDate}
                        onChange={(e) => handleUpdateBook("publishDate", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Status
                      </label>
                      <select
                        value={editingBook.status}
                        onChange={(e) => handleUpdateBook("status", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="coming-soon">Coming Soon</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Amazon/Purchase Link
                    </label>
                    <input
                      type="url"
                      value={editingBook.amazonLink}
                      onChange={(e) => handleUpdateBook("amazonLink", e.target.value)}
                      placeholder="https://amazon.com/..."
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground">Select a Book</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on a book from the list to edit its details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
