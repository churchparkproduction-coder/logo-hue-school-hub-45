import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;