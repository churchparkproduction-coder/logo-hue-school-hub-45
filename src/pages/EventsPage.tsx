import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, MapPin, Users, ExternalLink, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: "Parent-Teacher Conference",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "School Campus",
      category: "Academic",
      description: "Meet with your child's teachers to discuss academic progress and development.",
      attendees: "Parents & Teachers"
    },
    {
      title: "Spring Sports Day",
      date: "March 22, 2024", 
      time: "8:00 AM - 3:00 PM",
      location: "School Sports Complex",
      category: "Sports",
      description: "Annual sports competition featuring track and field events for all grade levels.",
      attendees: "All Students"
    },
    {
      title: "Science Fair Exhibition",
      date: "April 5, 2024",
      time: "10:00 AM - 2:00 PM", 
      location: "Main Auditorium",
      category: "Academic",
      description: "Students showcase their innovative science projects and experiments.",
      attendees: "Students & Families"
    },
    {
      title: "Easter Service & Celebration",
      date: "April 10, 2024",
      time: "10:30 AM - 12:00 PM",
      location: "School Chapel",
      category: "Religious",
      description: "Special Easter service followed by community celebration and lunch.",
      attendees: "School Community"
    },
    {
      title: "Art Exhibition Opening",
      date: "April 18, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Art Gallery",
      category: "Arts",
      description: "Showcase of student artwork from all grade levels throughout the year.",
      attendees: "Students & Families"
    },
    {
      title: "Middle School Graduation",
      date: "May 15, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Main Auditorium", 
      category: "Graduation",
      description: "Celebration of our 8th grade students as they transition to high school.",
      attendees: "Grade 8 Families"
    }
  ];

  const recentNews = [
    {
      title: "Church Park School Wins State Academic Competition",
      date: "February 28, 2024",
      summary: "Our debate team secured first place in the state academic competition, demonstrating excellence in critical thinking and public speaking.",
      category: "Achievement"
    },
    {
      title: "New STEM Lab Opens to Students",
      date: "February 20, 2024", 
      summary: "State-of-the-art STEM laboratory now available, featuring robotics equipment and advanced technology for hands-on learning.",
      category: "Facilities"
    },
    {
      title: "Winter Concert Raises Funds for Local Charity",
      date: "February 15, 2024",
      summary: "Our annual winter concert was a tremendous success, raising $5,000 for the local food bank through ticket sales and donations.",
      category: "Community"
    },
    {
      title: "Teacher Recognition: Mrs. Johnson Named Educator of the Year",
      date: "February 10, 2024",
      summary: "5th grade teacher Mrs. Johnson receives district recognition for her innovative teaching methods and dedication to student success.",
      category: "Recognition"
    }
  ];

  const categoryColors = {
    Academic: "bg-blue-500",
    Sports: "bg-green-500", 
    Religious: "bg-purple-500",
    Arts: "bg-pink-500",
    Graduation: "bg-gold",
    Achievement: "bg-gold",
    Facilities: "bg-blue-500",
    Community: "bg-green-500",
    Recognition: "bg-purple-500"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-hero py-20">
          <div className="container-max section-padding">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Events & <span className="text-gradient">News</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay connected with our vibrant school community. Discover upcoming events, 
                recent achievements, and important announcements that keep our Church Park family informed and engaged.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <Button className="btn-golden">
                <Bell className="h-4 w-4 mr-2" />
                Subscribe to Updates
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="card-elegant group hover:shadow-golden transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]} text-white`}>
                            {event.category}
                          </Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </CardTitle>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        {event.attendees}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Add to Calendar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-20 bg-gradient-warm">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-center mb-12">Recent News & Announcements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {recentNews.map((news, index) => (
                <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`${categoryColors[news.category as keyof typeof categoryColors]} text-white`}>
                        {news.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{news.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{news.summary}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-normal text-primary hover:text-primary-hover">
                      Read more →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <Card className="card-elegant bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Subscribe to our newsletter to receive the latest updates about events, 
                    achievements, and important school announcements directly in your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Button className="btn-golden">
                      <Bell className="h-4 w-4 mr-2" />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gradient-warm">
          <div className="container-max section-padding">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="card-elegant text-center group hover:shadow-golden transition-all duration-300">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Academic Calendar</h3>
                  <p className="text-sm text-muted-foreground mb-4">View the full academic year calendar</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-elegant text-center group hover:shadow-golden transition-all duration-300">
                <CardContent className="p-6">
                  <Bell className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Emergency Alerts</h3>
                  <p className="text-sm text-muted-foreground mb-4">Sign up for emergency notifications</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                    Sign Up
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-elegant text-center group hover:shadow-golden transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Parent Portal</h3>
                  <p className="text-sm text-muted-foreground mb-4">Access grades and schedules</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                    Login
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-elegant text-center group hover:shadow-golden transition-all duration-300">
                <CardContent className="p-6">
                  <ExternalLink className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Weekly Bulletin</h3>
                  <p className="text-sm text-muted-foreground mb-4">Read this week's announcements</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                    View Online
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;