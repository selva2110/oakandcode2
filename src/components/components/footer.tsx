import { Phone, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">R</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-background">Raja Sir&apos;s</p>
                  <p className="text-sm text-background/70">IAS Academy</p>
                </div>
              </div>
              <p className="text-background/70 text-sm mb-4">
                Feel the Pulse of UPSC
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  21 Years
                </span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  533+ Officers
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-background mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-background/70 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#success" className="text-background/70 hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#courses" className="text-background/70 hover:text-primary transition-colors">Courses</a></li>
                <li><a href="#exam-info" className="text-background/70 hover:text-primary transition-colors">Exam Info</a></li>
                <li><a href="#contact" className="text-background/70 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-background mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-background/70">
                  <Phone className="w-4 h-4 text-primary" />
                  9884 554 654 / 9962 527 528
                </li>
                <li className="flex items-start gap-2 text-background/70">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Door No: 1124, 1st Street, G-Block, 11th Main Road, Anna Nagar, Chennai - 600040
                </li>
                <li className="flex items-center gap-2 text-background/70">
                  <Globe className="w-4 h-4 text-primary" />
                  <a href="https://iasgoogle.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    iasgoogle.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="border-t border-background/20 pt-8 mb-8 text-center">
            <blockquote className="text-lg italic text-background/80 text-balance">
              &ldquo;Be the change you wish to see in the world&rdquo;
            </blockquote>
            <p className="text-sm text-background/50 mt-2">- Mahatma Gandhi</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6 text-center">
            <p className="text-sm text-background/50">
              Pledged to Ethics | Since 2005
            </p>
            <p className="text-xs text-background/40 mt-2">
              &copy; {new Date().getFullYear()} Raja Sir&apos;s Cracking IAS Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
