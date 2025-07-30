import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Zap, Building } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$2,500",
      period: "one-time setup",
      description: "Perfect for small businesses getting started with CRM",
      features: [
        "Basic CRM setup and configuration",
        "Up to 5 user accounts",
        "Standard integrations (3 included)",
        "Email support",
        "Basic training (2 sessions)",
        "30-day implementation timeline",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      icon: Building,
      price: "$7,500",
      period: "one-time setup",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Advanced CRM configuration",
        "Up to 25 user accounts",
        "Custom integrations (10 included)",
        "Priority phone & email support",
        "Comprehensive training program",
        "Custom workflow automation",
        "Data migration services",
        "60-day implementation timeline",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Enterprise",
      icon: Star,
      price: "Custom",
      period: "quote required",
      description: "Tailored solutions for large organizations",
      features: [
        "Fully customized CRM architecture",
        "Unlimited user accounts",
        "Unlimited custom integrations",
        "Dedicated account manager",
        "On-site training and support",
        "Advanced security features",
        "Custom reporting dashboards",
        "White-glove implementation",
        "Ongoing optimization services",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const addOns = [
    {
      name: "AI Contact Intelligence",
      price: "$500/month",
      description: "Advanced AI-powered contact enrichment and lead scoring",
    },
    {
      name: "Voice AI Integration",
      price: "$300/month",
      description: "Automated call logging and sentiment analysis",
    },
    {
      name: "Advanced Analytics",
      price: "$200/month",
      description: "Custom dashboards and predictive analytics",
    },
    {
      name: "24/7 Priority Support",
      price: "$150/month",
      description: "Round-the-clock technical support and maintenance",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 mb-6">Transparent Pricing</Badge>
            <h1 className="text-5xl font-bold mb-6">Choose the Right Plan for Your Business</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Flexible pricing options designed to scale with your business needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm ${
                  plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-blue-600">{plan.price}</div>
                    <div className="text-gray-500">{plan.period}</div>
                  </div>
                  <p className="text-gray-600 mt-4">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 text-lg font-semibold ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white text-black border border-gray-300 hover:bg-gray-50"
                    }`}
                    asChild
                  >
                    <Link href="https://salescentri.com/contact/sales-inquiry/request-quote">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Optional Add-ons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your CRM with these powerful additional features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{addon.name}</h3>
                    <div className="text-lg font-bold text-blue-600">{addon.price}</div>
                  </div>
                  <p className="text-gray-600">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Every business is unique. Let us create a tailored CRM implementation plan that fits your specific
              requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="https://salescentri.com/contact/sales-inquiry/request-quote">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/get-started/book-demo">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the implementation timeline?",
                answer:
                  "Our implementation includes discovery, configuration, data migration, testing, training, and go-live support. Timeline varies by plan complexity.",
              },
              {
                question: "Do you offer ongoing support after implementation?",
                answer:
                  "Yes, all plans include post-implementation support. Professional and Enterprise plans include extended support periods and priority assistance.",
              },
              {
                question: "Can I upgrade my plan later?",
                answer:
                  "Absolutely. You can upgrade your plan at any time. We'll help migrate your existing configuration to the new plan level.",
              },
              {
                question: "What if I need custom integrations?",
                answer:
                  "Custom integrations are included in Professional (10) and Enterprise (unlimited) plans. Additional integrations can be added to any plan.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
