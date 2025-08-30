import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Camera, Play, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const categories = [
    { name: "Campus", count: 24 },
    { name: "Classrooms", count: 18 },
    { name: "Events", count: 36 },
    { name: "Sports", count: 22 },
    { name: "Graduation", count: 15 },
    { name: "Activities", count: 28 }
  ];

  const featuredImages = [
    {
      title: "Main Campus Building",
      category: "Campus",
      description: "Our beautiful main building houses the administrative offices and elementary classrooms"
    },
    {
      title: "Science Laboratory",
      category: "Classrooms", 
      description: "State-of-the-art science lab where students conduct hands-on experiments"
    },
    {
      title: "Annual Sports Day",
      category: "Events",
      description: "Students showcasing their athletic abilities during our annual sports day celebration"
    },
    {
      title: "Basketball Court",
      category: "Sports",
      description: "Professional-grade basketball court for our competitive sports programs"
    },
    {
      title: "Graduation Ceremony 2024",
      category: "Graduation",
      description: "Celebrating our graduates as they embark on their next journey"
    },
    {
      title: "Art Exhibition",
      category: "Activities",
      description: "Student artwork displayed during our annual art exhibition"
    },
    {
      title: "Library & Reading Area",
      category: "Campus",
      description: "Quiet study spaces and extensive collection of books and digital resources"
    },
    {
      title: "Music Room",
      category: "Classrooms",
      description: "Dedicated space for music education with instruments and recording equipment"
    },
    {
      title: "Christmas Concert",
      category: "Events",
      description: "Annual Christmas concert featuring our talented choir and musicians"
    }
  ];

  const videos = [
    {
      title: "School Tour Video",
      description: "Take a virtual tour of our beautiful campus and facilities",
      duration: "3:45"
    },
    {
      title: "Student Life at Church Park",
      description: "See what a typical day looks like for our students",
      duration: "5:22"
    },
    {
      title: "Principal's Welcome Message",
      description: "A personal welcome from our principal to prospective families",
      duration: "2:18"
    }
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
                School <span className="text-gradient">Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our vibrant school community through photos and videos. See our beautiful 
                campus, engaged students, dedicated teachers, and memorable moments that make 
                Church Park School special.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-background">
          <div className="container-max section-padding">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                All ({categories.reduce((sum, cat) => sum + cat.count, 0)})
              </Button>
              {categories.map((category, index) => (
                <Button key={index} variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-12 bg-background">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredImages.map((image, index) => (
                <Card key={index} className="card-elegant group overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="relative h-48 bg-gradient-gold flex items-center justify-center">
                    <Camera className="h-12 w-12 text-white opacity-60" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-2 right-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="btn-golden">
                Load More Photos
              </Button>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-20 bg-gradient-warm">
          <div className="container-max section-padding">
            <h2 className="text-3xl font-bold text-center mb-12">Video Gallery</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="card-elegant group overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <Card className="card-elegant bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">Take a Virtual Tour</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Can't visit in person? Experience our campus from the comfort of your home 
                    with our interactive 360° virtual tour.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="btn-golden">
                      <Camera className="h-5 w-5 mr-2" />
                      Start Virtual Tour
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Download className="h-5 w-5 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;