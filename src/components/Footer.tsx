import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/eramadan/",
      icon: Linkedin,
    },
    {
      name: "Twitter/X",
      href: "https://x.com/ezekielramadan",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@EzekielRamadan",
      icon: Youtube,
    },
  ];

  const footerLinks = {
    sevenLaws: [
      { name: "Law of Identity", href: "/laws/identity" },
      { name: "Law of Authority", href: "/laws/authority" },
      { name: "Law of Stewardship", href: "/laws/stewardship" },
      { name: "Law of Alignment", href: "/laws/alignment" },
      { name: "Law of Vision", href: "/laws/vision" },
      { name: "Law of Incentives", href: "/laws/incentives" },
      { name: "Law of Accountability", href: "/laws/accountability" },
    ],
    platform: [
      { name: "The Philosophy", href: "/philosophy" },
      { name: "The Seven Laws", href: "/laws" },
      { name: "Essays", href: "/essays" },
      { name: "Teaching", href: "/teaching" },
    ],
    about: [
      { name: "About", href: "/about" },
      { name: "Subscribe", href: "/subscribe" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">The Seven Laws</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.sevenLaws.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">About</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-6">
            <div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded border border-border bg-background transition-all hover:border-primary/50 hover:bg-muted"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center border border-primary/50 bg-primary/10">
                <span className="text-sm font-bold text-primary">ER</span>
              </div>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Ezekiel Ramadan. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="/admin/login"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                title="Admin Dashboard"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
