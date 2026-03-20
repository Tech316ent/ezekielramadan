"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, Briefcase } from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  status: "active" | "inactive";
};

export default function AdvisoryEditorPage() {
  const [saved, setSaved] = useState(false);
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      title: "Executive Advisory",
      description: "Strategic guidance for C-suite leaders navigating complex organizational challenges.",
      features: ["Monthly strategy sessions", "On-demand advisory calls", "Leadership assessment", "Action planning"],
      price: "Custom",
      duration: "6-12 months",
      status: "active",
    },
    {
      id: "2",
      title: "Leadership Consulting",
      description: "Comprehensive consulting for organizations building leadership systems.",
      features: ["Organizational assessment", "System design", "Implementation support", "Team training"],
      price: "Custom",
      duration: "3-6 months",
      status: "active",
    },
    {
      id: "3",
      title: "Board Advisory",
      description: "Strategic counsel for boards and governance bodies.",
      features: ["Governance review", "Strategic planning", "Leadership development", "Succession planning"],
      price: "Custom",
      duration: "Ongoing",
      status: "active",
    },
  ]);

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [newFeature, setNewFeature] = useState("");

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAddService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      title: "New Service",
      description: "Service description",
      features: [],
      price: "Custom",
      duration: "TBD",
      status: "inactive",
    };
    setServices([...services, newService]);
    setEditingService(newService);
  };

  const handleDeleteService = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
    if (editingService?.id === id) {
      setEditingService(null);
    }
  };

  const handleUpdateService = (field: keyof Service, value: string | string[]) => {
    if (!editingService) return;
    const updated = { ...editingService, [field]: value };
    setEditingService(updated);
    setServices(services.map((s) => (s.id === updated.id ? updated : s)));
  };

  const handleAddFeature = () => {
    if (!newFeature.trim() || !editingService) return;
    const updated = { ...editingService, features: [...editingService.features, newFeature.trim()] };
    setEditingService(updated);
    setServices(services.map((s) => (s.id === updated.id ? updated : s)));
    setNewFeature("");
  };

  const handleRemoveFeature = (index: number) => {
    if (!editingService) return;
    const updated = { ...editingService, features: editingService.features.filter((_, i) => i !== index) };
    setEditingService(updated);
    setServices(services.map((s) => (s.id === updated.id ? updated : s)));
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
              <h1 className="text-3xl font-bold text-foreground">Advisory Services Manager</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your advisory and consulting offerings
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddService}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 font-semibold text-foreground hover:bg-muted"
              >
                <Plus className="h-5 w-5" />
                Add Service
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
          {/* Service List */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">All Services ({services.length})</h2>
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`rounded border p-4 cursor-pointer transition-all ${
                    editingService?.id === service.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                  onClick={() => setEditingService(service)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${
                        service.status === "active"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Editor */}
          <div className="rounded-lg border border-border bg-card p-6">
            {editingService ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Edit Service</h2>
                  </div>
                  <button
                    onClick={() => handleDeleteService(editingService.id)}
                    className="rounded p-2 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Title
                    </label>
                    <input
                      type="text"
                      value={editingService.title}
                      onChange={(e) => handleUpdateService("title", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      value={editingService.description}
                      onChange={(e) => handleUpdateService("description", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Features
                    </label>
                    <div className="space-y-2 mb-3">
                      {editingService.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="flex-1 rounded border border-border bg-muted px-3 py-2 text-sm">
                            {feature}
                          </span>
                          <button
                            onClick={() => handleRemoveFeature(index)}
                            className="rounded p-1 text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder="Add a feature..."
                        className="flex-1 rounded border border-border bg-background px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        onKeyDown={(e) => e.key === "Enter" && handleAddFeature()}
                      />
                      <button
                        onClick={handleAddFeature}
                        className="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Price
                      </label>
                      <input
                        type="text"
                        value={editingService.price}
                        onChange={(e) => handleUpdateService("price", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={editingService.duration}
                        onChange={(e) => handleUpdateService("duration", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Status
                      </label>
                      <select
                        value={editingService.status}
                        onChange={(e) => handleUpdateService("status", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground">Select a Service</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on a service from the list to edit its details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
