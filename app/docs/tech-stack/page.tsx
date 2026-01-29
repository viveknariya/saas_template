export default function TechStackPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Tech Stack</h1>
        <p className="text-lg text-muted-foreground">
          A modern, performant, and scalable technical foundation built with the
          best tools in the industry.
        </p>
      </div>

      <div className="space-y-6">
        {/* Core Stack */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Core Foundation</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">Next.js</h3>
              <p className="text-sm text-muted-foreground">
                The React Framework for the Web, providing optimized SSR, App
                Router, and seamless developer experience.
              </p>
            </div>
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">PostgreSQL</h3>
              <p className="text-sm text-muted-foreground">
                The world's most advanced open-source relational database for
                reliable and scalable data management.
              </p>
            </div>
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground">
                Beautifully designed components built with Radix UI and Tailwind
                CSS, providing full control over your UI.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Key Integrations</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">Stripe</h3>
              <p className="text-sm text-muted-foreground">
                Industry-standard payment processing for subscriptions, one-time
                payments, and billing management.
              </p>
            </div>
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">ZeptoMail by Zoho</h3>
              <p className="text-sm text-muted-foreground">
                Reliable transactional email service to ensure your
                notifications reach users' inboxes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
