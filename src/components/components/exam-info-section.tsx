import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, FileText, Users, Info } from "lucide-react"

const eligibility = [
  { category: "General", age: "21-32", attempts: "6" },
  { category: "OBC", age: "21-35", attempts: "9" },
  { category: "SC/ST", age: "21-37", attempts: "Unlimited" },
  { category: "Physically Disabled", age: "21-42", attempts: "Gen/OBC-9, SC/ST-Unlimited" }
]

const schedule = [
  { month: "Jan/Feb", event: "Notification" },
  { month: "May/Jun", event: "Preliminary Exam" },
  { month: "Jul/Aug", event: "Prelims Results" },
  { month: "Sep/Oct", event: "Mains Exam" },
  { month: "January", event: "Mains Results" },
  { month: "Feb/Mar", event: "Personality Test" },
  { month: "Apr/May", event: "Final Results" }
]

export function ExamInfoSection() {
  return (
    <section id="exam-info" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 uppercase tracking-wider">Know Your Exam</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              UPSC Civil Services Examination
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic text-balance">
              &ldquo;It always seems impossible until it is done&rdquo;
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Eligibility */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Info className="w-6 h-6 text-primary" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Age calculated from 1st August of Notification year
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold text-foreground">Category</th>
                        <th className="text-left py-2 font-semibold text-foreground">Age</th>
                        <th className="text-left py-2 font-semibold text-foreground">Attempts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eligibility.map((item, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-2 text-foreground/80">{item.category}</td>
                          <td className="py-2 text-foreground/80">{item.age}</td>
                          <td className="py-2 text-foreground/80">{item.attempts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <CalendarDays className="w-6 h-6 text-primary" />
                  Examination Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Approximately 18 months process
                </p>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="w-20 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded text-center">
                        {item.month}
                      </span>
                      <span className="text-sm text-foreground/80">{item.event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exam Pattern */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Preliminary */}
            <Card className="bg-card border-border">
              <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-foreground text-lg">
                  <FileText className="w-5 h-5 text-primary" />
                  Stage 1: Preliminary
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Paper I:</strong> General Studies (200 marks)</li>
                  <li><strong>Paper II:</strong> CSAT - Qualifying (200 marks)</li>
                  <li className="text-muted-foreground text-xs">* CSAT requires minimum 33% to qualify</li>
                  <li className="text-muted-foreground text-xs">* Negative marking: 1/3rd for wrong answers</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mains */}
            <Card className="bg-card border-border">
              <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-foreground text-lg">
                  <FileText className="w-5 h-5 text-primary" />
                  Stage 2: Mains (1750 marks)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>Paper A & B: Languages (Qualifying)</li>
                  <li>Paper I: Essay (250 marks)</li>
                  <li>Paper II-V: GS I to IV (250 each)</li>
                  <li>Paper VI-VII: Optional (250 each)</li>
                  <li className="text-muted-foreground text-xs">* Each paper is 3 hours duration</li>
                </ul>
              </CardContent>
            </Card>

            {/* Personality Test */}
            <Card className="bg-card border-border">
              <CardHeader className="bg-primary/10 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-foreground text-lg">
                  <Users className="w-5 h-5 text-primary" />
                  Stage 3: Interview (275 marks)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">Qualities judged:</p>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>Mental alertness</li>
                  <li>Critical powers of assimilation</li>
                  <li>Clear and logical exposition</li>
                  <li>Balance of judgement</li>
                  <li>Intellectual and moral integrity</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Total */}
          <div className="mt-8 bg-primary text-primary-foreground p-6 rounded-xl text-center">
            <p className="text-xl font-bold">
              Total Marks: Mains (1750) + Interview (275) = <span className="text-2xl">2025 Marks</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
