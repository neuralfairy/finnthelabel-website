import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Users, TrendingUp, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">Trusted CRM Implementation Partner</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Sales Process with
                <span className="bg-gradient-to-r from-blue-400 to-silver-300 bg-clip-text text-transparent">
                  {" "}
                  Expert CRM Solutions
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Finnthelabel Solutions delivers enterprise-grade CRM implementations that drive measurable results. Join
                500+ companies who've accelerated their growth with our proven methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="https://salescentri.com/get-started/free-trial">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/solutions/use-case-navigator/demo">See It in Action</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-slate-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="CRM Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over 500 companies have transformed their sales processes with our expert CRM implementations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120&query=company logo ${i}`}
                  alt={`Client ${i}`}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="text-sm font-medium text-gray-700">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">4.9/5 Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Finnthelabel Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology and deep expertise ensure your CRM implementation delivers measurable ROI from day
              one
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Average 40% increase in sales productivity within 90 days of implementation",
                metric: "40% Increase",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified CRM specialists with 10+ years of enterprise implementation experience",
                metric: "500+ Projects",
              },
              {
                icon: CheckCircle,
                title: "Complete Solution",
                description: "End-to-end implementation including training, integration, and ongoing support",
                metric: "99% Success Rate",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies who've accelerated their growth with our expert CRM solutions
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
              <Link href="https://salescentri.com/pricing">Get Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
