"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, MapPin, Globe, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 uppercase tracking-wider">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Begin your journey towards becoming a Civil Servant today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <div>
              <Card className="bg-background border-border shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Send Us an Enquiry</h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Thank You!</h4>
                      <p className="text-muted-foreground mb-6">
                        Your enquiry has been submitted successfully. Our team will contact you shortly.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Submit Another Enquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="bg-card border-border focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Phone Number <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter phone number"
                            required
                            className="bg-card border-border focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="bg-card border-border focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="course" className="text-sm font-medium text-foreground">
                            Course Interested In <span className="text-primary">*</span>
                          </label>
                          <Select name="course" required>
                            <SelectTrigger className="bg-card border-border focus:border-primary focus:ring-primary">
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="political-science">Political Science & IR</SelectItem>
                              <SelectItem value="sociology">Sociology</SelectItem>
                              <SelectItem value="general-studies">General Studies</SelectItem>
                              <SelectItem value="ethics">Ethics, Integrity & Aptitude</SelectItem>
                              <SelectItem value="current-affairs">Current Affairs</SelectItem>
                              <SelectItem value="complete-package">Complete IAS Package</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="attempts" className="text-sm font-medium text-foreground">
                            UPSC Attempt
                          </label>
                          <Select name="attempts">
                            <SelectTrigger className="bg-card border-border focus:border-primary focus:ring-primary">
                              <SelectValue placeholder="Select attempt" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fresh">Fresh / 1st Attempt</SelectItem>
                              <SelectItem value="2nd">2nd Attempt</SelectItem>
                              <SelectItem value="3rd">3rd Attempt</SelectItem>
                              <SelectItem value="4th-plus">4th+ Attempt</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="education" className="text-sm font-medium text-foreground">
                          Educational Qualification
                        </label>
                        <Input
                          id="education"
                          name="education"
                          placeholder="e.g., B.Tech, BA, B.Sc, etc."
                          className="bg-card border-border focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Your Message / Query
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your preparation journey or any specific queries..."
                          rows={4}
                          className="bg-card border-border focus:border-primary focus:ring-primary resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Submit Enquiry
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to be contacted by our team regarding your enquiry.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                      <a href="tel:9884554654" className="text-foreground/80 text-lg block hover:text-primary transition-colors">9884 554 654</a>
                      <a href="tel:9962527528" className="text-foreground/80 text-lg block hover:text-primary transition-colors">9962 527 528</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-foreground/80">
                        Door No: 1124, 1st Street, G-Block,<br />
                        11th Main Road, Anna Nagar<br />
                        Landmark: Anna Nagar Arisikaran Kadai,<br />
                        Behind LKS GOLD HOUSE<br />
                        Chennai, Tamil Nadu 600040
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Website</h3>
                      <a 
                        href="https://iasgoogle.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-lg"
                      >
                        iasgoogle.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Personal Touch</h3>
                      <p className="text-foreground/80">
                        Our faculty is available even after 9 PM for student queries. 
                        That&apos;s the kind of personal touch every student gets at our Institute.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Call CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Prefer to Talk?</h4>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Call us directly to speak with our counselors about your IAS preparation journey.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a href="tel:9884554654">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 9884 554 654
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
