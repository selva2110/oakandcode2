import { BookOpen, Target, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Our Academy
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              &ldquo;We cannot teach anybody anything, we can only make them think.&rdquo;
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Ours is a purposeful and industrious undertaking to enable those who are preparing 
                for Civil Services exam an access to accurate strategy and master notes which helped 
                producing toppers.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Since its humble start in 2005, Cracking IAS Academy has grown manifold not just in 
                size but also in terms of invaluable experience and knowledge in the domain of Civil 
                Services Exam.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With its close-knit team of highly competent and dedicated professionals, CrackingIAS 
                has successfully mentored thousands of students and enabled several to pursue the 
                career of their choice.
              </p>
            </div>

            {/* About Raja Sir */}
            <div className="bg-background p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">About Raja Sir</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Resigned from the post of Senior Scientific Officer, Ministry of Defence to pursue 
                his passionate profession of teaching with his learned self experience of UPSC Civil 
                Services Exam after giving three Mains &amp; two interviews.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                With his stellar academic brilliance, he pursued his Graduation in Engineering at 
                Anna University, Guindy Campus. Propelled by his unconditional love towards humanitarian 
                sciences, pursued his Post Graduation in Political Science and International Relations 
                at Pondicherry University.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Being a Mathematics Wizard, he consistently scored 100% marks in Mathematics in his 
                board exams at class 10th and 12th level.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Limited Batch Size",
                description: "700+ hours of exam-oriented curriculum with personalized attention"
              },
              {
                icon: Target,
                title: "Skillful Coverage",
                description: "PYQ-leaned methodologies in sync with emerging UPSC trends"
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "UPSC tuned faculty league with real exam experience"
              },
              {
                icon: Lightbulb,
                title: "Answer Writing",
                description: "UPSC styled evaluation to master structured answers"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
