export const metadata = {
  title: "Privacy Policy | Ezekiel Ramadan",
  description: "Privacy policy for EzekielRamadan.com",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: December 2024</p>

        <div className="mt-12 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p className="mt-4">
              We collect information that you provide directly to us when you subscribe to our newsletter,
              register for courses, or contact us for advisory services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p className="mt-4">
              We use the information we collect to provide, maintain, and improve our services,
              communicate with you, and send you relevant content and updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Information Sharing</h2>
            <p className="mt-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
            <p className="mt-4">
              We implement appropriate security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Your Rights</h2>
            <p className="mt-4">
              You have the right to access, correct, or delete your personal information at any time.
              You may also unsubscribe from our communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
            <p className="mt-4">
              If you have questions about this Privacy Policy, please{" "}
              <a href="/contact" className="text-primary hover:underline">
                contact us through our secure form
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
