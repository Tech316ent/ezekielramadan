"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, Mic } from "lucide-react";

type SpeakingTopic = {
  id: string;
  title: string;
  description: string;
  duration: string;
  audience: string;
  format: string;
  status: "active" | "inactive";
};

export default function SpeakingEditorPage() {
  const [saved, setSaved] = useState(false);
  const [topics, setTopics] = useState<SpeakingTopic[]>([
    {
      id: "1",
      title: "First Principles Leadership",
      description: "A transformative keynote on rebuilding leadership from universal governing laws.",
      duration: "60-90 minutes",
      audience: "Executives, Leaders, Entrepreneurs",
      format: "Keynote",
      status: "active",
    },
    {
      id: "2",
      title: "Building Leadership Systems",
      description: "Workshop on designing organizational infrastructure that scales beyond individual capacity.",
      duration: "Half-day / Full-day",
      audience: "Leadership Teams, HR Leaders",
      format: "Workshop",
      status: "active",
    },
    {
      id: "3",
      title: "The Six Laws of Leadership",
      description: "Deep dive into purpose, identity, vision, responsibility, service, and influence.",
      duration: "45-60 minutes",
      audience: "All Levels",
      format: "Keynote / Breakout",
      status: "active",
    },
  ]);

  const [editingTopic, setEditingTopic] = useState<SpeakingTopic | null>(null);

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAddTopic = () => {
    const newTopic: SpeakingTopic = {
      id: Date.now().toString(),
      title: "New Speaking Topic",
      description: "Topic description",
      duration: "60 minutes",
      audience: "All Levels",
      format: "Keynote",
      status: "inactive",
    };
    setTopics([...topics, newTopic]);
    setEditingTopic(newTopic);
  };

  const handleDeleteTopic = (id: string) => {
    setTopics(topics.filter((t) => t.id !== id));
    if (editingTopic?.id === id) {
      setEditingTopic(null);
    }
  };

  const handleUpdateTopic = (field: keyof SpeakingTopic, value: string) => {
    if (!editingTopic) return;
    const updated = { ...editingTopic, [field]: value };
    setEditingTopic(updated);
    setTopics(topics.map((t) => (t.id === updated.id ? updated : t)));
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
              <h1 className="text-3xl font-bold text-foreground">Speaking Topics Manager</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your speaking topics and presentations
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddTopic}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 font-semibold text-foreground hover:bg-muted"
              >
                <Plus className="h-5 w-5" />
                Add Topic
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
          {/* Topic List */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">All Topics ({topics.length})</h2>
            <div className="space-y-3">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className={`rounded border p-4 cursor-pointer transition-all ${
                    editingTopic?.id === topic.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                  onClick={() => setEditingTopic(topic)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.format} • {topic.duration}</p>
                    </div>
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${
                        topic.status === "active"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {topic.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Editor */}
          <div className="rounded-lg border border-border bg-card p-6">
            {editingTopic ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mic className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Edit Topic</h2>
                  </div>
                  <button
                    onClick={() => handleDeleteTopic(editingTopic.id)}
                    className="rounded p-2 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Topic Title
                    </label>
                    <input
                      type="text"
                      value={editingTopic.title}
                      onChange={(e) => handleUpdateTopic("title", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      value={editingTopic.description}
                      onChange={(e) => handleUpdateTopic("description", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={editingTopic.duration}
                        onChange={(e) => handleUpdateTopic("duration", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Format
                      </label>
                      <select
                        value={editingTopic.format}
                        onChange={(e) => handleUpdateTopic("format", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option>Keynote</option>
                        <option>Workshop</option>
                        <option>Breakout Session</option>
                        <option>Panel</option>
                        <option>Webinar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Target Audience
                    </label>
                    <input
                      type="text"
                      value={editingTopic.audience}
                      onChange={(e) => handleUpdateTopic("audience", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Status
                    </label>
                    <select
                      value={editingTopic.status}
                      onChange={(e) => handleUpdateTopic("status", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Mic className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground">Select a Topic</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on a topic from the list to edit its details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
