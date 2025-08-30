import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SCHOOL_CONFIG } from "@/lib/config";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [SCHOOL_CONFIG.contact.address.street, SCHOOL_CONFIG.contact.address.city, `${SCHOOL_CONFIG.contact.address.state} - ${SCHOOL_CONFIG.contact.address.zip}`]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [`Admissions: ${SCHOOL_CONFIG.contact.phone.admissions}`, `Main Office: ${SCHOOL_CONFIG.contact.phone.main}`]
    },
    {
      icon: Mail,
      title: "Email",
      details: [SCHOOL_CONFIG.contact.email.main, `Admissions: ${SCHOOL_CONFIG.contact.email.admissions}`]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [SCHOOL_CONFIG.hours.weekdays, SCHOOL_CONFIG.hours.saturday, SCHOOL_CONFIG.hours.sunday]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Contact Us</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We'd love to hear from you. Get in touch with us for any questions, 
            concerns, or to learn more about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant group hover:shadow-golden transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-golden-glow">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input id="contact-name" placeholder={SCHOOL_CONFIG.placeholders.fullName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input id="contact-email" type="email" placeholder={SCHOOL_CONFIG.placeholders.email} />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" placeholder={SCHOOL_CONFIG.placeholders.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Input id="contact-subject" placeholder="What is this regarding?" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea 
                    id="contact-message" 
                    placeholder={SCHOOL_CONFIG.placeholders.message}
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full btn-golden">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">{SCHOOL_CONFIG.contact.address.full}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="card-elegant mt-12 bg-accent/10 border-accent">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-accent">Emergency Contact</h3>
              <p className="text-muted-foreground mb-4">
                For urgent matters outside office hours, please contact our emergency line.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                <Phone className="h-5 w-5" />
                <span>{SCHOOL_CONFIG.contact.phone.emergency}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;