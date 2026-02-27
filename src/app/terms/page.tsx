export const metadata = {
  title: "Terms of Use | Ezekiel Ramadan",
  description: "Terms of use for EzekielRamadan.com",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground">Terms of Use</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: December 2024</p>

        <div className="mt-12 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-4">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
            <p className="mt-4">
              Permission is granted to temporarily access the materials on this website for personal,
              non-commercial use only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
            <p className="mt-4">
              All content, frameworks, and materials on this website are the intellectual property
              of Ezekiel Ramadan and are protected by copyright law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Disclaimer</h2>
            <p className="mt-4">
              The materials on this website are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim all other warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Limitations</h2>
            <p className="mt-4">
              In no event shall Ezekiel Ramadan be liable for any damages arising out of the use
              or inability to use the materials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">6. Contact</h2>
            <p className="mt-4">
              For questions regarding these terms, please{" "}
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
