import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react"

export function Footer() {
  const footerLinks = {
    services: [
      { name: "CRM Implementation", href: "/features" },
      { name: "System Integration", href: "/features" },
      { name: "Training & Support", href: "/features" },
      { name: "Data Migration", href: "/features" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/blog" },
      { name: "Whitepapers", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">Finnthelabel Solutions</span>
            </Link>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Your trusted partner for CRM implementation and optimization. We help businesses transform their sales
              processes with expert consulting and proven methodologies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-100">123 Business Center Drive, Raleigh, NC 27601</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-100">(919) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-100">info@finnthelabel.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-800">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-100 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-blue-100 text-sm mb-4">
              Get the latest CRM insights and best practices delivered to your inbox
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-blue-800/50 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-4">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-blue-100">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-blue-100">
              <span>© 2024 Finnthelabel Solutions. All rights reserved.</span>
              <span>|</span>
              <Link
                href="https://salescentri.com?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network"
                className="hover:text-white transition-colors"
              >
                Powered by Sales Intelligence Platform
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
