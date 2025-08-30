import { Heart, Target, Eye, Star, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SCHOOL_CONFIG, ADMIN_CONTENT } from "@/lib/config";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Faith & Character",
      description: "Building strong moral foundations and Christian values in every student."
    },
    {
      icon: Target,
      title: "Academic Excellence",
      description: "Committed to providing quality education that prepares students for success."
    },
    {
      icon: Eye,
      title: "Holistic Development",
      description: "Nurturing intellectual, physical, social, and spiritual growth in harmony."
    },
    {
      icon: Star,
      title: "Individual Attention",
      description: "Recognizing and developing each child's unique talents and potential."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">{SCHOOL_CONFIG.name}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {ADMIN_CONTENT.about.description
              .replace('{yearsOfService}', SCHOOL_CONFIG.stats.yearsOfService)
              .replace('{schoolName}', SCHOOL_CONFIG.name)}
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="card-elegant text-center group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-golden-glow">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a nurturing environment where students excel academically, 
                grow spiritually, and develop strong character traits that will serve them throughout life.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="card-elegant text-center group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-golden-glow">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading educational institution that produces confident, 
                compassionate, and capable individuals who make positive contributions to society.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="card-elegant text-center group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-golden-glow">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, Excellence, Compassion, Respect, and Faith guide everything we do, 
                creating a foundation for lifelong success and meaningful relationships.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="card-elegant text-center group hover:shadow-golden transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="space-y-8">
          {/* Founder & Chairman */}
          <Card className="card-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold mb-4">{ADMIN_CONTENT.leadership.founder.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {ADMIN_CONTENT.leadership.founder.description.replace('{schoolName}', SCHOOL_CONFIG.name)}
                  </p>
                  {ADMIN_CONTENT.leadership.founder.name && (
                    <div className="pt-4">
                      <p className="font-semibold">{ADMIN_CONTENT.leadership.founder.name}</p>
                      <p className="text-sm text-muted-foreground">{ADMIN_CONTENT.leadership.founder.title}, {SCHOOL_CONFIG.name}</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                    <Avatar className="w-40 h-40 border-4 border-gradient-gold">
                      <AvatarImage 
                        src="/lovable-uploads/bffac34c-18f5-48a7-9069-2069552c513e.png" 
                        alt={`${ADMIN_CONTENT.leadership.founder.title}`} 
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-muted text-muted-foreground">
                        <div className="flex flex-col items-center justify-center h-full">
                          <Upload className="h-8 w-8 mb-2 opacity-50" />
                          <span className="text-xs text-center">Upload Image</span>
                        </div>
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs">Admin Upload</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Principal's Message */}
          <Card className="card-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Principal's Message</h3>
                  <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                    "{ADMIN_CONTENT.leadership.principal.message.replace('{schoolName}', SCHOOL_CONFIG.name)}"
                  </blockquote>
                  {ADMIN_CONTENT.leadership.principal.name && (
                    <div className="pt-4">
                      <p className="font-semibold">{ADMIN_CONTENT.leadership.principal.name}</p>
                      <p className="text-sm text-muted-foreground">{ADMIN_CONTENT.leadership.principal.title}, {SCHOOL_CONFIG.name}</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                    <Avatar className="w-40 h-40 border-4 border-gradient-gold">
                      <AvatarImage 
                        src="/lovable-uploads/137e1b5a-4e54-4ebc-acf0-9b5dff748600.png" 
                        alt={`${ADMIN_CONTENT.leadership.principal.title}`} 
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-muted text-muted-foreground">
                        <div className="flex flex-col items-center justify-center h-full">
                          <Upload className="h-8 w-8 mb-2 opacity-50" />
                          <span className="text-xs text-center">Upload Image</span>
                        </div>
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs">Admin Upload</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;