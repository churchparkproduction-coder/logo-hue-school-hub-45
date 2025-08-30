import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Book, Users, Trophy, Music, Palette, Globe, Calculator, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsPage = () => {
  const programs = [
    {
      icon: Book,
      title: "Elementary Program",
      description: "Foundation building with focus on literacy, numeracy, and character development",
      grades: "K-5",
      features: ["Small class sizes", "Individual attention", "Faith integration", "STEM foundation"]
    },
    {
      icon: Calculator,
      title: "Middle School Program", 
      description: "Transitional years with advanced academics and leadership development",
      grades: "6-8",
      features: ["Advanced mathematics", "Science labs", "Leadership training", "Community service"]
    },
    {
      icon: Trophy,
      title: "High School Program",
      description: "College preparatory curriculum with specialized tracks",
      grades: "9-12", 
      features: ["AP courses", "College counseling", "Internships", "Graduation preparation"]
    }
  ];

  const subjects = [
    { icon: Book, name: "Language Arts", description: "Reading, writing, literature, and communication skills" },
    { icon: Calculator, name: "Mathematics", description: "From basic arithmetic to advanced calculus and statistics" },
    { icon: FlaskConical, name: "Science", description: "Biology, chemistry, physics, and environmental science" },
    { icon: Globe, name: "Social Studies", description: "History, geography, civics, and cultural studies" },
    { icon: Palette, name: "Fine Arts", description: "Visual arts, music, drama, and creative expression" },
    { icon: Users, name: "Physical Education", description: "Sports, fitness, health, and teamwork" },
    { icon: Music, name: "Music Program", description: "Choir, band, music theory, and performance opportunities" },
    { icon: Book, name: "Bible Studies", description: "Scripture study, Christian values, and spiritual development" }
  ];

  const extracurricular = [
    "Student Government", "Drama Club", "Science Fair", "Math Olympiad",
    "Art Club", "Chess Club", "Debate Team", "Community Service",
    "Basketball", "Soccer", "Track & Field", "Volleyball",
    "School Newspaper", "Yearbook Committee", "Honor Society", "Robotics Club"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-hero py-20">
          <div className="container-max section-padding">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Academic <span className="text-gradient">Programs</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive academic programs are designed to challenge, inspire, and prepare 
                students for success in higher education and life. From foundational skills to advanced 
                studies, we provide excellence at every level.
              </p>
            </div>
          </div>
        </section>

        {/* Grade Level Programs */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-center mb-16">Grade Level Programs</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-golden-glow">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <p className="text-sm text-primary font-semibold">Grades {program.grades}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Subjects */}
        <section className="py-20 bg-gradient-warm">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-center mb-16">Core Academic Subjects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <Card key={index} className="card-elegant text-center group hover:shadow-golden transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <subject.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{subject.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Extracurricular Activities</h2>
              <p className="text-lg text-muted-foreground">
                Beyond academics, we offer diverse opportunities for students to explore their 
                interests, develop talents, and build lasting friendships.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {extracurricular.map((activity, index) => (
                <Card key={index} className="card-elegant group hover:bg-primary/5 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                      {activity}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="py-20 bg-gradient-warm">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-center mb-16">Special Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Advanced Placement (AP) Courses</h3>
                  <p className="text-muted-foreground mb-4">
                    Our high school students can earn college credit through our comprehensive AP program, 
                    featuring courses in mathematics, sciences, humanities, and arts.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• AP Calculus AB/BC</li>
                    <li>• AP Biology & Chemistry</li>
                    <li>• AP English Literature</li>
                    <li>• AP History & Government</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">STEM Excellence Program</h3>
                  <p className="text-muted-foreground mb-4">
                    Innovative science, technology, engineering, and mathematics curriculum designed 
                    to prepare students for the challenges of tomorrow.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Robotics & Programming</li>
                    <li>• Engineering Design</li>
                    <li>• Scientific Research</li>
                    <li>• Technology Integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Character Education</h3>
                  <p className="text-muted-foreground mb-4">
                    Integrated throughout all programs, our character education emphasizes Christian 
                    values, leadership, and service to others.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Leadership Development</li>
                    <li>• Community Service</li>
                    <li>• Peer Mentoring</li>
                    <li>• Ethics & Values</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">College Preparation</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive support to ensure our graduates are ready for higher education 
                    and career success.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• College Counseling</li>
                    <li>• SAT/ACT Preparation</li>
                    <li>• Scholarship Guidance</li>
                    <li>• Career Exploration</li>
                  </ul>
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

export default ProgramsPage;