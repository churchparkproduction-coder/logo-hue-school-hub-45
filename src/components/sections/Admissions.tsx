import { Calendar, Download, FileText, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
const Admissions = () => {
  const admissionSteps = [{
    step: "1",
    title: "Submit Inquiry",
    description: "Fill out our online inquiry form to express your interest."
  }, {
    step: "2",
    title: "Schedule Visit",
    description: "Book a campus tour to experience our learning environment."
  }, {
    step: "3",
    title: "Application",
    description: "Complete the formal application with required documents."
  }, {
    step: "4",
    title: "Assessment",
    description: "Student assessment and parent interview process."
  }, {
    step: "5",
    title: "Enrollment",
    description: "Welcome to the Church Park School family!"
  }];
  return <section id="admissions" className="py-20 bg-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Admissions</span> & Enrollment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Begin your child's journey of faith, learning, and growth with us. 
            We welcome families who share our commitment to academic excellence and Christian values.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Admission Process</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => <Card key={index} className="card-elegant text-center relative group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg group-hover:animate-golden-glow">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < admissionSteps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-gold transform -translate-y-1/2"></div>}
              </Card>)}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Admission Inquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parent-name">Parent/Guardian Name *</Label>
                  <Input id="parent-name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="child-name">Child's Name *</Label>
                  <Input id="child-name" placeholder="Child's full name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade Level *</Label>
                  <Input id="grade" placeholder="e.g., Kindergarten, Grade 1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Academic Year *</Label>
                  <Input id="year" placeholder="e.g., 2024-2025" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea id="message" placeholder="Tell us about your child's interests, needs, or any questions you have..." className="min-h-[100px]" />
              </div>

              <Button className="w-full btn-golden">
                Submit Inquiry
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions & Information */}
          <div className="space-y-6">
            {/* Schedule Visit */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Schedule a Campus Visit</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Experience our learning environment firsthand. Tours available Monday-Friday.
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Book a Tour
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Brochure */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bronze rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Download Admission Brochure</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get detailed information about our programs, facilities, and admission requirements.
                    </p>
                    <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze hover:text-white">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Admissions Office</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+91 76399 69976</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">churchpark101@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">No-6, Melasooriyathotam, Madukkur, Pattukottai, Tanjavur - 614903</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Office Hours: Monday - Friday, 8:00 AM - 4:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Admissions;