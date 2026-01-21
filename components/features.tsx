import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Blocks,
  CheckCircle,
  DollarSign,
  Mail,
  MessageCircle,
  PanelTop,
  Users,
} from "lucide-react";

export default function PageFeatures() {
  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Features
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Everything you need to build your SaaS application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Blocks className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Simple Architecture</CardTitle>
              <CardDescription>
                Simple and clean architecture to build your SaaS application.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <PanelTop className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Landing Page</CardTitle>
              <CardDescription>
                Beautifully designed, responsive landing page to showcase your
                product.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Auth</CardTitle>
              <CardDescription>
                Simple email and otp based authentication
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Stripe</CardTitle>
              <CardDescription>Stripe integration for payments</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Mail</CardTitle>
              <CardDescription>
                Zoho mail integration for email marketing (10000 emails/2-3$)
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
