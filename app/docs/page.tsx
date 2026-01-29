export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground">
          SaaS template is to enable developers to test their ideas at lightning
          speed.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What?</h2>
          <p className="text-muted-foreground leading-relaxed">
            This is a production-ready SaaS template built with Next.js and
            PostgreSQL.
          </p>
        </section>
      </div>
    </div>
  );
}
