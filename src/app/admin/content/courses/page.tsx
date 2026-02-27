"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, GraduationCap, Eye, Edit } from "lucide-react";

type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  status: "draft" | "published";
};

export default function CoursesEditorPage() {
  const [saved, setSaved] = useState(false);
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "1",
      title: "First Principles Leadership Fundamentals",
      description: "Master the foundational laws of leadership effectiveness",
      duration: "8 weeks",
      level: "Beginner",
      price: "$997",
      status: "published",
    },
    {
      id: "2",
      title: "Executive Leadership Mastery",
      description: "Advanced strategies for C-suite executives",
      duration: "12 weeks",
      level: "Advanced",
      price: "$2,497",
      status: "published",
    },
    {
      id: "3",
      title: "Organizational Design Systems",
      description: "Build scalable leadership infrastructure",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$1,497",
      status: "draft",
    },
  ]);

  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAddCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      title: "New Course",
      description: "Course description",
      duration: "4 weeks",
      level: "Beginner",
      price: "$0",
      status: "draft",
    };
    setCourses([...courses, newCourse]);
    setEditingCourse(newCourse);
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
    if (editingCourse?.id === id) {
      setEditingCourse(null);
    }
  };

  const handleUpdateCourse = (field: keyof Course, value: string) => {
    if (!editingCourse) return;
    const updated = { ...editingCourse, [field]: value };
    setEditingCourse(updated);
    setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));
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
              <h1 className="text-3xl font-bold text-foreground">Courses Manager</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your course offerings and descriptions
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddCourse}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 font-semibold text-foreground hover:bg-muted"
              >
                <Plus className="h-5 w-5" />
                Add Course
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
          {/* Course List */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">All Courses ({courses.length})</h2>
            <div className="space-y-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`rounded border p-4 cursor-pointer transition-all ${
                    editingCourse?.id === course.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                  onClick={() => setEditingCourse(course)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.duration} • {course.level}</p>
                    </div>
                    <span
                      className={`rounded px-2 py-1 text-xs font-medium ${
                        course.status === "published"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Editor */}
          <div className="rounded-lg border border-border bg-card p-6">
            {editingCourse ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Edit Course</h2>
                  </div>
                  <button
                    onClick={() => handleDeleteCourse(editingCourse.id)}
                    className="rounded p-2 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Course Title
                    </label>
                    <input
                      type="text"
                      value={editingCourse.title}
                      onChange={(e) => handleUpdateCourse("title", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      value={editingCourse.description}
                      onChange={(e) => handleUpdateCourse("description", e.target.value)}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={editingCourse.duration}
                        onChange={(e) => handleUpdateCourse("duration", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Level
                      </label>
                      <select
                        value={editingCourse.level}
                        onChange={(e) => handleUpdateCourse("level", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Price
                      </label>
                      <input
                        type="text"
                        value={editingCourse.price}
                        onChange={(e) => handleUpdateCourse("price", e.target.value)}
                        className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Status
                    </label>
                    <select
                      value={editingCourse.status}
                      onChange={(e) => handleUpdateCourse("status", e.target.value)}
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
                <GraduationCap className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground">Select a Course</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on a course from the list to edit its details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
