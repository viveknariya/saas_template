export default function SetupPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Setup Guide</h1>
        <p className="text-lg text-muted-foreground">
          Get your project up and running in just a{" "}
          <strong>few simple steps</strong>.
        </p>
      </div>

      <div className="space-y-6">
        {/* Project Setup Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Setup</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Clone the repository, navigate to the folder, and run{" "}
            <strong>npm install</strong>.
          </p>
        </section>

        {/* Database Setup Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Database Setup</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Default database is PostgreSQL. Find the database schema in the{" "}
            <strong>scripts/</strong> folder and run them in order{" "}
            <strong>(schema-1.sql, schema-2.sql, ...)</strong> to set up your
            database.
          </p>
        </section>

        {/* Environment Variable Setup Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Environment Variable Setup</h2>
          <p className="text-muted-foreground leading-relaxed">
            Create a <strong>.env</strong> file in the root directory with the
            following variables.
          </p>
          <div className="rounded-lg border bg-muted p-4 font-mono text-sm space-y-2 text-muted-foreground">
            <div>
              DATABASE_URL=postgres://username:password@localhost:5432/your_database
            </div>
            <div>JWT_SECRET=your-jwt-secret-key-here</div>
            <div>ZEPTOMAIL_API_KEY=your-zeptomail-api-key</div>
            <div>ZEPTOMAIL_FROM_ADDRESS=noreply@yourdomain.com</div>
            <div>STRIPE_SECRET_KEY=sk_live_your-stripe-secret-key</div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Next Steps</h2>
          <p className="text-muted-foreground leading-relaxed">
            Once you've completed the setup, you're ready to dive in! Here's
            what to do next:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Run <strong>npm run dev</strong> to start the development server
            </li>
            <li>
              Navigate to <strong>http://localhost:3000</strong> in your browser
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
