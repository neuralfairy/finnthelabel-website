import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Target, TrendingUp, CheckCircle, ArrowRight, Clock, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Successful Implementations", icon: CheckCircle },
    { number: "10+", label: "Years of Experience", icon: Clock },
    { number: "99%", label: "Client Satisfaction Rate", icon: Award },
    { number: "40%", label: "Average ROI Increase", icon: TrendingUp },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We measure our success by your success. Every implementation is designed to deliver measurable business outcomes.",
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description:
        "We build long-term relationships with our clients, providing ongoing support and strategic guidance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "We stay ahead of CRM trends and technologies to ensure your solution remains competitive and effective.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We conduct a comprehensive analysis of your current processes, pain points, and business objectives.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Our experts design a customized CRM strategy aligned with your specific business requirements.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the implementation with minimal disruption to your daily operations.",
    },
    {
      step: "04",
      title: "Training & Adoption",
      description: "Comprehensive training ensures your team can leverage the full power of your new CRM system.",
    },
    {
      step: "05",
      title: "Optimization",
      description: "Ongoing monitoring and optimization to ensure continued success and maximum ROI.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 mb-6">About Finnthelabel Solutions</Badge>
            <h1 className="text-5xl font-bold mb-6">Your Trusted CRM Implementation Partner</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              For over a decade, we've been helping businesses transform their sales processes through expert CRM
              implementations. Our proven methodology and deep expertise ensure your success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To empower businesses with CRM solutions that drive measurable growth and operational excellence. We
                believe that the right CRM implementation can transform not just your sales process, but your entire
                business trajectory.
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-slate-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Team Strategy Meeting"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful CRM implementations that deliver results from day one
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified CRM specialists bring decades of combined experience to every implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((member) => (
              <Card
                key={member}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Member {member}</h3>
                  <p className="text-blue-600 font-medium mb-3">Senior CRM Consultant</p>
                  <p className="text-gray-600 text-sm">
                    Certified CRM specialist with 10+ years of enterprise implementation experience
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="https://salescentri.com/company/about-us/leadership-team">
                Meet the Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our proven expertise and systematic approach drive your CRM success
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
              <Link href="https://salescentri.com/contact/sales-inquiry/request-quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
