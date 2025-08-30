import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Admissions from "@/components/sections/Admissions";

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Admissions />
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;