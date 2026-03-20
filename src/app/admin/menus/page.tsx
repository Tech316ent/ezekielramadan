"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Edit, Trash2, Eye, EyeOff, GripVertical, Save } from "lucide-react";

type MenuItem = {
  id: string;
  label: string;
  href: string;
  parent_id: string | null;
  order_index: number;
  is_visible: boolean;
  target: string;
  icon: string | null;
};

export default function MenuManagerPage() {
  const supabase = createClient();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  const fetchMenuItems = useCallback(async () => {
    const { data } = await supabase
      .from('menu_items')
      .select('*')
      .order('order_index');

    if (data) {
      setMenuItems(data);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  const toggleVisibility = async (item: MenuItem) => {
    await supabase
      .from('menu_items')
      .update({ is_visible: !item.is_visible })
      .eq('id', item.id);

    fetchMenuItems();
  };

  const deleteItem = async (id: string) => {
    if (confirm('Delete this menu item?')) {
      await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);

      fetchMenuItems();
    }
  };

  const saveItem = async (item: Partial<MenuItem>) => {
    if (editingItem?.id) {
      await supabase
        .from('menu_items')
        .update(item)
        .eq('id', editingItem.id);
    } else {
      await supabase
        .from('menu_items')
        .insert([{ ...item, order_index: menuItems.length }]);
    }

    setEditingItem(null);
    setShowForm(false);
    fetchMenuItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Menu Manager</h1>
          <p className="mt-2 text-muted-foreground">
            Control navigation menu items, visibility, and order
          </p>
        </div>
        <button
          onClick={() => {
            setEditingItem(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 rounded bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-5 w-5" />
          Add Menu Item
        </button>
      </div>

      {showForm && (
        <MenuItemForm
          item={editingItem}
          onSave={saveItem}
          onCancel={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      )}

      <div className="rounded-lg border border-border bg-card">
        <table className="w-full">
          <thead className="border-b border-border bg-muted/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase">Order</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase">Label</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase">Link</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase">Visible</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-foreground uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {menuItems.map((item) => (
              <tr key={item.id} className="hover:bg-muted/50">
                <td className="px-6 py-4">
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                </td>
                <td className="px-6 py-4 font-medium text-foreground">{item.label}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{item.href}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleVisibility(item)}
                    className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium ${
                      item.is_visible
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-gray-500/10 text-gray-500'
                    }`}
                  >
                    {item.is_visible ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                    {item.is_visible ? 'Visible' : 'Hidden'}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingItem(item);
                        setShowForm(true);
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded border border-border hover:bg-muted"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded border border-destructive/30 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MenuItemForm({
  item,
  onSave,
  onCancel
}: {
  item: MenuItem | null;
  onSave: (item: Partial<MenuItem>) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    label: item?.label || '',
    href: item?.href || '',
    target: item?.target || '_self',
    is_visible: item?.is_visible ?? true,
  });

  return (
    <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        {item ? 'Edit' : 'New'} Menu Item
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Label</label>
          <input
            type="text"
            value={formData.label}
            onChange={(e) => setFormData({ ...formData, label: e.target.value })}
            className="w-full rounded border border-border bg-background px-4 py-2"
            placeholder="About"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Link</label>
          <input
            type="text"
            value={formData.href}
            onChange={(e) => setFormData({ ...formData, href: e.target.value })}
            className="w-full rounded border border-border bg-background px-4 py-2"
            placeholder="/about"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Target</label>
          <select
            value={formData.target}
            onChange={(e) => setFormData({ ...formData, target: e.target.value })}
            className="w-full rounded border border-border bg-background px-4 py-2"
          >
            <option value="_self">Same Window</option>
            <option value="_blank">New Window</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Visibility</label>
          <select
            value={formData.is_visible ? 'visible' : 'hidden'}
            onChange={(e) => setFormData({ ...formData, is_visible: e.target.value === 'visible' })}
            className="w-full rounded border border-border bg-background px-4 py-2"
          >
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onSave(formData)}
          className="flex items-center gap-2 rounded bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <Save className="h-5 w-5" />
          Save
        </button>
        <button
          onClick={onCancel}
          className="rounded border border-border bg-background px-4 py-2 font-semibold hover:bg-muted"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
