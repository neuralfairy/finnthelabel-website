"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronUp, HelpCircle, ArrowRight, BookOpen, Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "CRM Implementation",
      faqs: [
        {
          question: "How long does a typical CRM implementation take?",
          answer:
            "Implementation timelines vary based on complexity and scope. Our Starter plan typically takes 30 days, Professional implementations take 60 days, and Enterprise solutions can take 90-120 days. We provide detailed project timelines during the discovery phase to set clear expectations.",
        },
        {
          question: "What's included in the implementation process?",
          answer:
            "Our comprehensive implementation includes discovery and analysis, system configuration, data migration, custom integrations, user training, testing, go-live support, and post-implementation optimization. Each plan includes different levels of these services.",
        },
        {
          question: "Do you provide training for our team?",
          answer:
            "Yes, comprehensive training is included in all our plans. We offer role-based training modules, interactive onboarding flows, and ongoing support resources. Professional and Enterprise plans include additional training sessions and materials.",
        },
        {
          question: "Can you migrate data from our existing system?",
          answer:
            "Absolutely. Data migration is included in our Professional and Enterprise plans, and available as an add-on for Starter plans. We handle data cleansing, mapping, and validation to ensure a smooth transition.",
        },
      ],
    },
    {
      title: "Integrations & Technical",
      faqs: [
        {
          question: "Which CRM platforms do you work with?",
          answer:
            "We specialize in all major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, Pipedrive, and many others. Our team has certified experts for each platform to ensure optimal implementation.",
        },
        {
          question: "Can you integrate with our existing tools?",
          answer:
            "Yes, we provide custom integrations with marketing automation platforms, ERP systems, accounting software, and other business-critical tools. Integration capabilities vary by plan level.",
        },
        {
          question: "What about data security and compliance?",
          answer:
            "We maintain SOC 2 certification and GDPR compliance. All implementations follow enterprise-grade security protocols, including data encryption, access controls, and regular security audits.",
        },
        {
          question: "Do you offer API development services?",
          answer:
            "Yes, our team can develop custom APIs for unique integration requirements. This service is included in Enterprise plans and available as a custom add-on for other plans.",
        },
      ],
    },
    {
      title: "Pricing & Support",
      faqs: [
        {
          question: "What's included in ongoing support?",
          answer:
            "All plans include post-implementation support with varying levels of service. This includes bug fixes, minor configuration changes, user support, and system monitoring. Enterprise plans include dedicated account management.",
        },
        {
          question: "Can I upgrade my plan later?",
          answer:
            "Yes, you can upgrade your plan at any time. We'll assess your current configuration and provide a seamless transition to the higher service level with additional features and support.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, we offer flexible payment options for larger implementations. Enterprise clients can choose from various payment schedules to align with their budget and cash flow requirements.",
        },
        {
          question: "What if we're not satisfied with the implementation?",
          answer:
            "We stand behind our work with a satisfaction guarantee. If you're not completely satisfied, we'll work with you to address any concerns at no additional cost until you're happy with the results.",
        },
      ],
    },
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I know which plan is right for my business?",
          answer:
            "We offer a free consultation to assess your needs and recommend the best plan. Factors include team size, complexity requirements, integration needs, and budget. Our experts will guide you to the optimal solution.",
        },
        {
          question: "What information do you need to get started?",
          answer:
            "We'll need details about your current processes, existing systems, team structure, and business objectives. During our discovery call, we'll gather all necessary information to create your implementation plan.",
        },
        {
          question: "Can we start with a pilot program?",
          answer:
            "Yes, we often recommend pilot implementations for larger organizations. This allows you to test the solution with a smaller group before full deployment, reducing risk and ensuring optimal configuration.",
        },
        {
          question: "Do you provide demos before we commit?",
          answer:
            "Absolutely. We offer comprehensive demos tailored to your specific use case. This includes showing how the CRM would work with your processes and demonstrating key features relevant to your business.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 mb-6">Frequently Asked Questions</Badge>
            <h1 className="text-5xl font-bold mb-6">Get Answers to Your CRM Questions</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Find quick answers to common questions about our CRM implementation services, pricing, and support
              options.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <HelpCircle className="h-4 w-4 text-white" />
                  </div>
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openItems.includes(globalIndex)

                    return (
                      <Card key={faqIndex} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full text-left p-6 hover:bg-blue-50/50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need More Information?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive documentation and resources for detailed information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full Documentation</h3>
                <p className="text-gray-600 mb-6">
                  Access our complete user guide with step-by-step instructions and best practices
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://salescentri.com/docs/user-guide">
                    View Documentation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">PSA Features</h3>
                <p className="text-gray-600 mb-6">
                  Explore our Professional Services Automation suite and advanced features
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link href="https://salescentri.com/solutions/psa-suite/features">
                    View PSA Features
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our CRM experts are here to help. Get personalized answers to your specific questions.
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
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
