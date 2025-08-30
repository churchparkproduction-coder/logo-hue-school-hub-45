import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SCHOOL_CONFIG } from "@/lib/config";

const ScheduleVisitPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitType: "",
    preferredDate: "",
    preferredTime: "",
    studentAge: "",
    interests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle visit scheduling logic here
    // TODO: Implement actual visit scheduling functionality
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 section-padding bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container-max py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gradient mb-4">Schedule Your Visit</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience {SCHOOL_CONFIG.name} firsthand. Book a personalized tour and discover why families choose us for their children's educational journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Visit Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-gold/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Visit Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What to Expect</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Campus tour with a staff member</li>
                        <li>• Meet our educators and administrators</li>
                        <li>• Visit classrooms and facilities</li>
                        <li>• Q&A session about our programs</li>
                        <li>• Information about admissions process</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Visit Duration</h4>
                      <p className="text-sm text-muted-foreground">
                        Approximately 45-60 minutes
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Available Times</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Monday - Friday: 9:00 AM - 3:00 PM</li>
                        <li>• Saturday: 10:00 AM - 1:00 PM</li>
                        <li>• Sunday: By special arrangement</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Phone:</strong> {SCHOOL_CONFIG.contact.phone.main}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Email:</strong> {SCHOOL_CONFIG.contact.email.admissions}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Address:</strong> {SCHOOL_CONFIG.contact.address.full}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-golden border-gold/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Book Your Visit
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll confirm your visit within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder={SCHOOL_CONFIG.placeholders.firstName}
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder={SCHOOL_CONFIG.placeholders.lastName}
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder={SCHOOL_CONFIG.placeholders.email}
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder={SCHOOL_CONFIG.placeholders.phone}
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="visitType">Type of Visit</Label>
                        <Select onValueChange={(value) => setFormData({...formData, visitType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select visit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="campus-tour">Campus Tour</SelectItem>
                            <SelectItem value="program-information">Program Information Session</SelectItem>
                            <SelectItem value="meet-teachers">Meet with Teachers</SelectItem>
                            <SelectItem value="admissions-consultation">Admissions Consultation</SelectItem>
                            <SelectItem value="shadow-day">Student Shadow Day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="preferredDate"
                              name="preferredDate"
                              type="date"
                              value={formData.preferredDate}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time</Label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                              <SelectTrigger className="pl-10">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="9:00-am">9:00 AM</SelectItem>
                                <SelectItem value="10:00-am">10:00 AM</SelectItem>
                                <SelectItem value="11:00-am">11:00 AM</SelectItem>
                                <SelectItem value="1:00-pm">1:00 PM</SelectItem>
                                <SelectItem value="2:00-pm">2:00 PM</SelectItem>
                                <SelectItem value="3:00-pm">3:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="studentAge">Student Age</Label>
                          <Input
                            id="studentAge"
                            name="studentAge"
                            type="number"
                            placeholder="Age"
                            value={formData.studentAge}
                            onChange={handleInputChange}
                            min="3"
                            max="18"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interests">Areas of Interest</Label>
                        <Input
                          id="interests"
                          name="interests"
                          type="text"
                          placeholder="e.g., STEM programs, Arts, Sports, Special needs support"
                          value={formData.interests}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Comments or Questions</Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us more about what you'd like to know or any special accommodations needed..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className="pl-10 min-h-[100px]"
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full btn-golden">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule My Visit
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScheduleVisitPage;