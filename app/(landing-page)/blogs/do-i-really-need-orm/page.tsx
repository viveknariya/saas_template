import { getMetadataSitemap } from "@/lib/seo";

const seoData = getMetadataSitemap("/blogs/do-i-really-need-orm");

export async function generateMetadata() {
  return seoData.metaData;
}

export default function DoIReallyNeedORM() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Do I Really Need an ORM?
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Many developers starting with Next.js and Supabase wonder if adding an
          ORM like Prisma or Drizzle is necessary or just an extra step.
        </p>
      </div>

      <div className="space-y-6">
        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Short Answer</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            No, you don't <strong>need</strong> an ORM. However, as your
            application grows, an ORM can help maintain type safety, handle
            migrations, and make your database interactions more readable.
          </p>
        </section>

        {/* Drizzle Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Drizzle ORM</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Drizzle is a lightweight approach. It feels like writing JavaScript
            instead of a new query language.
          </p>
          <div className="rounded-lg border bg-muted p-4 font-mono text-sm space-y-2 text-muted-foreground">
            <div>SQL-like syntax that is easy to understand.</div>
            <div>Excellent performance with minimal overhead.</div>
            <div>Full TypeScript support with auto-generated types.</div>
          </div>
        </section>

        {/* Prisma Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Prisma</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Prisma offers an exceptional developer experience (DX) but comes
            with some performance trade-offs, particularly in serverless
            environments.
          </p>
        </section>

        {/* Supabase Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Supabase Native Library</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Supabase provides its own library that acts as a query builder. You
            can generate types directly from your database, which might make an
            additional ORM unnecessary for simpler projects.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="space-y-4 pt-4 border-t">
          <h2 className="text-2xl font-semibold">Next Steps</h2>
          <p className="text-muted-foreground leading-relaxed">
            When choosing between an ORM and raw SQL, consider the following:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Use <strong>Drizzle</strong> for raw SQL performance and type
              safety.
            </li>
            <li>
              Use <strong>Prisma</strong> for productivity and ease of use.
            </li>
            <li>
              Stick with <strong>Supabase UI/Library</strong> for a lean tech
              stack.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
