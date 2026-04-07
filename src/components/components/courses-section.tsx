import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, BookOpen, FileText, Newspaper, GraduationCap, PenTool } from "lucide-react"

const courses = [
  {
    icon: GraduationCap,
    title: "Political Science & International Relations",
    description: "Raja Sir himself scored 340 in PSIR [190 - Paper 2 (2nd HIGHEST SCORE)] and has guided many aspirants to achieve scores 300+, 285+",
    features: ["Complete syllabus coverage", "Previous year analysis", "Answer writing practice"]
  },
  {
    icon: BookOpen,
    title: "Sociology",
    description: "Raja Sir himself scored 171 in Paper 2 & 166 in Paper 1 and has guided many aspirants to achieve scores 300+, 285+ in Sociology",
    features: ["Conceptual clarity", "Contemporary examples", "Model answers"]
  },
  {
    icon: FileText,
    title: "General Studies",
    description: "Comprehensive coverage of all GS papers with focus on current affairs integration and answer writing skills",
    features: ["All 4 GS papers", "Current affairs integration", "Test series"]
  },
  {
    icon: PenTool,
    title: "Ethics, Integrity & Aptitude",
    description: "Developing ethical reasoning and case study analysis skills essential for GS Paper IV",
    features: ["Case study practice", "Ethical frameworks", "Value-based answers"]
  },
  {
    icon: Newspaper,
    title: "Current Affairs & Daily News Analysis",
    description: "Stay updated with EDITED DNA - empowering aspirants to prioritize and understand daily news through our portal",
    features: ["Daily analysis", "Monthly compilations", "UPSC relevance mapping"]
  }
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 uppercase tracking-wider">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Courses & Programs
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Your Efforts + Our Expertise = Your Excellency
            </p>
          </div>

          {/* Formula Banner */}
          <div className="bg-primary text-primary-foreground p-6 rounded-2xl mb-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl md:text-2xl font-bold">
              <span>YOUR EFFORTS</span>
              <span className="text-3xl">+</span>
              <span>OUR EXPERTISE</span>
              <span className="text-3xl">=</span>
              <span>YOUR EXCELLENCY</span>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg group h-full">
                <CardHeader>
                  <course.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Study Materials CTA */}
          <div className="mt-12 bg-background p-8 rounded-2xl border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Books Specially Prepared for UPSC CSE
            </h3>
            <p className="text-muted-foreground text-lg italic mb-4 text-balance">
              &ldquo;That&apos;s the thing about books - they let you travel without moving your feet&rdquo;
            </p>
            <p className="text-foreground/80">
              With our expertise and meticulous efforts we have prepared our study materials to help 
              aspirants feel the ease of preparation for UPSC Civil Services Examination.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
