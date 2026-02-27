"use client";

import { useState, useEffect } from "react";
import { Share2, Twitter, Linkedin, Facebook, Link2, Check, Mail } from "lucide-react";

interface SocialShareProps {
  url?: string;
  title: string;
  description?: string;
  className?: string;
  variant?: "horizontal" | "vertical" | "compact";
}

export default function SocialShare({
  url,
  title,
  description = "",
  className = "",
  variant = "horizontal",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || "");

  // Get URL on client side only to avoid hydration mismatch
  useEffect(() => {
    if (!url) {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareUrl = currentUrl;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:text-[#1DA1F2]",
      bgColor: "hover:bg-[#1DA1F2]/10",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-[#0A66C2]",
      bgColor: "hover:bg-[#0A66C2]/10",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-[#1877F2]",
      bgColor: "hover:bg-[#1877F2]/10",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "hover:text-primary",
      bgColor: "hover:bg-primary/10",
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (href: string) => {
    window.open(href, "_blank", "width=600,height=400,noopener,noreferrer");
  };

  if (variant === "compact") {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-card p-2 shadow-lg">
              {shareLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleShare(link.href);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded px-3 py-2 text-sm text-foreground transition-all ${link.bgColor}`}
                >
                  <link.icon className={`h-4 w-4 ${link.color}`} />
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  handleCopyLink();
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded px-3 py-2 text-sm text-foreground transition-all hover:bg-muted"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Link2 className="h-4 w-4" />
                )}
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  const containerClass =
    variant === "vertical"
      ? "flex flex-col gap-2"
      : "flex flex-wrap items-center gap-2";

  return (
    <div className={`${containerClass} ${className}`}>
      <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
      {shareLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => handleShare(link.href)}
          className={`flex h-9 w-9 items-center justify-center rounded border border-border bg-card text-muted-foreground transition-all ${link.color} ${link.bgColor}`}
          title={`Share on ${link.name}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon className="h-4 w-4" />
        </button>
      ))}
      <button
        onClick={handleCopyLink}
        className="flex h-9 w-9 items-center justify-center rounded border border-border bg-card text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        title={copied ? "Copied!" : "Copy link"}
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
