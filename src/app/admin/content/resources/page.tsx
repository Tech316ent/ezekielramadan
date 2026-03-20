"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, FileText, Download } from "lucide-react";

type Resource = {
  id: string;
  title: string;
  description: string;
  type: string;
  downloadUrl: string;
  category: string;
  status: "published" | "draft";
};

export default function ResourcesEditorPage() {
  const [saved, setSaved] = useState(false);
  const [resources, setResources] = useState<Resource[]>([
    {
      id: "1",
      title: "Leadership Assessment Framework",
      description: "A comprehensive self-assessment tool based on the six laws of leadership.",
      type: "PDF",
      downloadUrl: "",
      category: "Assessment",
      status: "published",
    },
    {
      id: "2",
      title: "First Principles Workbook",
      description: "Interactive workbook for applying first principles thinking to your leadership.",
      type: "PDF",
      downloadUrl: "",
      category: "Workbook",
      status: "published",
    },
    {
      id: "3",
      title: "Organizational Design Template",
      description: "Template for mapping and designing your organizational structure.",
      type: "Template",
      downloadUrl: "",
      category: "Template",
      status: "draft",
    },
  ]);

  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAddResource = () => {
    const newResource: Resource = {
      id: Date.now().toString(),
      title: "New Resource",
      description: "Resource description",
      type: "PDF",
      downloadUrl: "",
      category: "General",
      status: "draft",
    };
    setResources([...resources, newResource]);
    setEditingResource(newResource);
  };

  const handleDeleteResource = (id: string) => {
    setResources(resources.filter((r) => r.id !== id));
    if (editingResource?.id === id) {
      setEditingResource(null);
    }
  };

  const handleUpdateResource = (field: keyof Resource, value: string) => {
    if (!editingResource) return;
    const updated = { ...editingResource, [field]: value };
    setEditingResource(updated);
    setResources(resources.map((r) => (r.id === updated.id ? updated : r)));
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
              <h1 className="text-3xl font-bold text-foreground">Resources Manager</h1>
              <p className="mt-2 text-muted-foreground">
                Manage downloadable resources and tools
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddResource}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 font-semibold text-foreground hover:bg-muted"
              >
                <Plus className="h-5 w-5" />
                Add Resource
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
          {/* Resource List */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">All Resources ({resources.length})</h2>
            <div className="space-y-3">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className={`rounded border p-4 cursor-pointer transition-all ${
                    editingResource?.id === resource.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                  onClick={() => setEditingResource(resource)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">{resource.type} • {resource.category}</p>
                    </div>
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${
                        resource.status === "published"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {resource.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Editor */}
          <div className="rounded-lg border border-border bg-card p-6">
            {editingResource ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Edit Resource</h2>
                  </div>
                  <button
                    onClick={() => handleDeleteResource(editingResource.id)}
                    className="rounded p-2 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Resource Title
                    </label>
                    <input
                      type="text"
                      value={editingResource.title}
                      onChange={(e) => handleUpdateResource("title", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      value={editingResource.description}
                      onChange={(e) => handleUpdateResource("description", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Type
                      </label>
                      <select
                        value={editingResource.type}
                        onChange={(e) => handleUpdateResource("type", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option>PDF</option>
                        <option>Template</option>
                        <option>Workbook</option>
                        <option>Guide</option>
                        <option>Checklist</option>
                        <option>Video</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Category
                      </label>
                      <select
                        value={editingResource.category}
                        onChange={(e) => handleUpdateResource("category", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option>Assessment</option>
                        <option>Workbook</option>
                        <option>Template</option>
                        <option>Guide</option>
                        <option>General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Download URL
                    </label>
                    <input
                      type="url"
                      value={editingResource.downloadUrl}
                      onChange={(e) => handleUpdateResource("downloadUrl", e.target.value)}
                      placeholder="https://..."
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Status
                    </label>
                    <select
                      value={editingResource.status}
                      onChange={(e) => handleUpdateResource("status", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground">Select a Resource</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on a resource from the list to edit its details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
