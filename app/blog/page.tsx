import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, BookOpen, FileText, Video, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const categories = [
    "All Posts",
    "CRM Implementation",
    "Integration Guides",
    "Best Practices",
    "Case Studies",
    "Industry Insights",
  ]

  const featuredPosts = [
    {
      title: "Complete Guide to CRM Implementation Success",
      excerpt:
        "Learn the essential steps and best practices for implementing a CRM system that drives real business results.",
      category: "CRM Implementation",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Top 10 CRM Integration Mistakes to Avoid",
      excerpt:
        "Discover the most common pitfalls in CRM integrations and how to avoid them for a smooth implementation.",
      category: "Integration Guides",
      author: "Mike Chen",
      date: "Jan 12, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "ROI Measurement: Proving CRM Value to Stakeholders",
      excerpt:
        "Practical strategies for measuring and demonstrating the return on investment of your CRM implementation.",
      category: "Best Practices",
      author: "Lisa Rodriguez",
      date: "Jan 10, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const recentPosts = [
    {
      title: "Salesforce vs HubSpot: Which CRM is Right for Your Business?",
      excerpt: "A comprehensive comparison of two leading CRM platforms to help you make the right choice.",
      category: "Industry Insights",
      author: "David Park",
      date: "Jan 8, 2024",
      readTime: "12 min read",
    },
    {
      title: "Automating Lead Qualification with AI",
      excerpt:
        "How artificial intelligence can streamline your lead qualification process and improve conversion rates.",
      category: "Best Practices",
      author: "Emma Wilson",
      date: "Jan 5, 2024",
      readTime: "7 min read",
    },
    {
      title: "Case Study: 300% Sales Increase with Custom CRM",
      excerpt: "How a mid-size company tripled their sales with a tailored CRM implementation strategy.",
      category: "Case Studies",
      author: "Tom Anderson",
      date: "Jan 3, 2024",
      readTime: "9 min read",
    },
    {
      title: "Mobile CRM: Empowering Your Sales Team on the Go",
      excerpt: "Best practices for implementing mobile CRM solutions that boost field sales productivity.",
      category: "CRM Implementation",
      author: "Rachel Kim",
      date: "Dec 28, 2023",
      readTime: "6 min read",
    },
  ]

  const resources = [
    {
      icon: FileText,
      title: "CRM Implementation Checklist",
      description: "Complete 50-point checklist for successful CRM implementations",
      type: "Whitepaper",
      link: "https://salescentri.com/resources/whitepapers-ebooks",
    },
    {
      icon: Video,
      title: "CRM Tutorial Library",
      description: "Step-by-step video tutorials for popular CRM platforms",
      type: "Video Series",
      link: "https://salescentri.com/resources/tutorials-webinars",
    },
    {
      icon: BookOpen,
      title: "Sales Pipeline Optimization Guide",
      description: "Comprehensive guide to optimizing your sales pipeline with CRM",
      type: "eBook",
      link: "https://salescentri.com/resources/whitepapers-ebooks",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200 mb-6">Blog & Resources</Badge>
            <h1 className="text-5xl font-bold mb-6">CRM Insights & Best Practices</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Expert insights, implementation guides, and strategic resources to help you maximize your CRM investment.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content to help you succeed with CRM
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 bg-transparent"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="flex-shrink-0 group-hover:bg-blue-50 group-hover:border-blue-300 bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resource Library</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive guides, whitepapers, and tools to accelerate your CRM success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    {resource.type}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href={resource.link}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </Link>
                  </Button>
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
              <Link href="https://salescentri.com/resources/whitepapers-ebooks">
                View All Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with CRM Insights</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest CRM tips, best practices, and industry insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
            />
            <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-6">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
