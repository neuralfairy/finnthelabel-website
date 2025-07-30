import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  Users,
  Zap,
  BarChart3,
  Shield,
  Workflow,
  Brain,
  Mic,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      category: "CRM Optimization",
      icon: Settings,
      title: "Advanced CRM Configuration",
      description:
        "Custom workflows, automation rules, and data architecture designed for your specific business needs.",
      benefits: [
        "Custom field mapping and validation",
        "Automated lead scoring and routing",
        "Advanced reporting dashboards",
        "Integration with existing tools",
      ],
    },
    {
      category: "Onboarding Workflows",
      icon: Users,
      title: "Streamlined User Adoption",
      description: "Comprehensive training programs and change management strategies to ensure rapid user adoption.",
      benefits: [
        "Role-based training modules",
        "Interactive onboarding flows",
        "Performance tracking metrics",
        "Ongoing support resources",
      ],
    },
    {
      category: "Systems Integration",
      icon: Workflow,
      title: "Seamless Data Flow",
      description: "Connect your CRM with marketing automation, ERP, and other business-critical systems.",
      benefits: [
        "Real-time data synchronization",
        "Custom API integrations",
        "Data migration services",
        "Legacy system compatibility",
      ],
    },
  ]

  const aiFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Contact Intelligence",
      description: "Leverage advanced AI to enrich contact data and identify high-value prospects automatically.",
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator",
      linkText: "Explore AI Aggregator",
    },
    {
      icon: Mic,
      title: "Voice AI Integration",
      description: "Automate call logging, sentiment analysis, and follow-up tasks with intelligent voice processing.",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
      linkText: "Voice AI Integration",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 mb-6">Enterprise Features</Badge>
            <h1 className="text-5xl font-bold mb-6">Powerful CRM Features That Drive Results</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our comprehensive suite of CRM optimization tools and services ensures your sales team has everything they
              need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Implementation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every implementation includes these essential services to ensure your CRM delivers maximum value
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {feature.category}
                  </Badge>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Next-Generation AI Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to supercharge your CRM capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      <Button
                        variant="outline"
                        className="group/btn hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                        asChild
                      >
                        <Link href={feature.link}>
                          {feature.linkText}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Performance Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our implementations consistently deliver measurable improvements across key business metrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "40%", label: "Increase in Sales Productivity", icon: BarChart3 },
              { metric: "60%", label: "Faster Lead Response Time", icon: Zap },
              { metric: "25%", label: "Higher Conversion Rates", icon: TrendingUp },
              { metric: "99%", label: "System Uptime Guarantee", icon: Shield },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how our comprehensive CRM solutions can transform your sales process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg" asChild>
              <Link href="https://salescentri.com/get-started/book-demo">
                Book Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
