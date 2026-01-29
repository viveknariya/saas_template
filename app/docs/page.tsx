export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to our comprehensive documentation. This guide will help you
          get started with our platform and explore all the features available
          to you.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Getting Started</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our platform is designed to be intuitive and user-friendly. Whether
            you're a first-time user or an experienced developer, you'll find
            everything you need to succeed in this documentation.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Create an account and authenticate securely</li>
            <li>Set up your profile and billing information</li>
            <li>Explore the main dashboard and available tools</li>
            <li>Configure your preferences and settings</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our platform provides a range of powerful features designed to help
            you accomplish your goals:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold mb-2">User Management</h3>
              <p className="text-sm text-muted-foreground">
                Manage your profile, authentication, and account preferences
                with ease.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold mb-2">Billing & Plans</h3>
              <p className="text-sm text-muted-foreground">
                Flexible pricing plans and straightforward billing management.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive insights into your usage and performance metrics.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold mb-2">Security</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security to protect your data and privacy.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Documentation Structure</h2>
          <p className="text-muted-foreground leading-relaxed">
            This documentation is organized into the following sections:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Getting Started:</strong> Learn the basics and set up your
              account
            </li>
            <li>
              <strong>Guides:</strong> Detailed tutorials for common tasks
            </li>
            <li>
              <strong>API Reference:</strong> Complete API documentation and
              endpoints
            </li>
            <li>
              <strong>FAQ:</strong> Answers to frequently asked questions
            </li>
            <li>
              <strong>Support:</strong> Contact information and support
              resources
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Support & Help</h2>
          <p className="text-muted-foreground leading-relaxed">
            We're here to help! If you have any questions or need assistance:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Check our{" "}
              <a href="/contact" className="text-primary hover:underline">
                contact page
              </a>{" "}
              for support options
            </li>
            <li>
              Review the{" "}
              <a
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                privacy policy
              </a>{" "}
              and{" "}
              <a
                href="/terms-and-conditions"
                className="text-primary hover:underline"
              >
                terms of service
              </a>
            </li>
            <li>Explore our blog for tips, updates, and best practices</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Next Steps</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready to get started? Here are some recommended next steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Create your account and log in</li>
            <li>Complete your user profile and billing setup</li>
            <li>
              Explore the dashboard and familiarize yourself with the interface
            </li>
            <li>Read through relevant guides based on your use case</li>
            <li>Reach out to our support team if you need help</li>
          </ol>
        </section>
      </div>

      <div className="rounded-lg border bg-muted p-6">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Tip:</strong> Bookmark this documentation for easy
          reference. Use the search functionality to quickly find answers to
          your questions.
        </p>
      </div>
    </div>
  );
}
