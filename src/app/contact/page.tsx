import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Ezekiel Ramadan",
  description: "Get in touch with Ezekiel Ramadan for inquiries about governance philosophy, institutional leadership, and collaboration opportunities.",
  keywords: "contact Ezekiel Ramadan, governance philosophy inquiry, institutional leadership",
  openGraph: {
    title: "Contact | Ezekiel Ramadan",
    description: "Get in touch for inquiries and collaboration",
    url: "https://ezekielramadan.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            For inquiries regarding governance philosophy, institutional leadership,
            or potential collaboration.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
            <p className="text-muted-foreground mb-8">
              Please provide details about your inquiry. Responses are typically
              provided within 3-5 business days.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Connect Online */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground">Connect Online</h2>
          <p className="mt-2 text-muted-foreground">
            Follow for essays and insights on governance and institutional leadership.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/eramadan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded border border-border bg-background transition-all hover:border-primary/50 hover:bg-muted"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://x.com/ezekielramadan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded border border-border bg-background transition-all hover:border-primary/50 hover:bg-muted"
              aria-label="Twitter/X"
            >
              <Twitter className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://youtube.com/@EzekielRamadan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded border border-border bg-background transition-all hover:border-primary/50 hover:bg-muted"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Receive Essays
          </h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to receive long-form essays on governance and institutional order.
          </p>

          <div className="mt-8">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
