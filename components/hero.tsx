import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PageHero() {
  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 " />
        <div className="container relative px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              🚀 Trusted by 100+ Businesses
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              The free <span className="text-primary">SaaS</span> template with simple architecture
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              An open-source, feature-rich, full-stack Next.js + PostgreSQL starter kit that manages boilerplate for you. Powered by Zallyy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="text-lg px-8">
                  Try Demo App
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
