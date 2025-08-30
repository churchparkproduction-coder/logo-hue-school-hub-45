import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SCHOOL_CONFIG } from "@/lib/config";

const logoImage = "/lovable-uploads/e4c0b133-5288-42ac-a554-48584cdcec13.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academic Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events & News", href: "/events" },
    { name: "Contact Us", href: "/contact" }
  ];

  const academics = [
    { name: "Elementary School", href: "#" },
    { name: "Middle School", href: "#" },
    { name: "High School", href: "#" },
    { name: "Special Programs", href: "#" },
    { name: "Extracurriculars", href: "#" },
    { name: "Summer Camps", href: "#" }
  ];

  const resources = [
    { name: "Parent Portal", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Academic Calendar", href: "#" },
    { name: "School Handbook", href: "#" },
    { name: "Lunch Menu", href: "#" },
    { name: "Transportation", href: "#" }
  ];

  return (
    <footer className="bg-warm-brown text-cream">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 py-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt={`${SCHOOL_CONFIG.name} Logo`} 
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">{SCHOOL_CONFIG.name}</h3>
                <p className="text-sm text-cream/80">{SCHOOL_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-cream/80 mb-6 leading-relaxed">
              {SCHOOL_CONFIG.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-sm">{SCHOOL_CONFIG.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-sm">{SCHOOL_CONFIG.contact.phone.main}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-sm">{SCHOOL_CONFIG.contact.email.main}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-cream/80 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Academics</h4>
            <ul className="space-y-3">
              {academics.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-cream/80 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Resources</h4>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    className="text-cream/80 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-4 text-gold">Follow Us</h5>
              <div className="flex space-x-4">
                <a href={SCHOOL_CONFIG.social.facebook} className="w-8 h-8 bg-gold rounded-full flex items-center justify-center hover:bg-bronze transition-colors duration-200">
                  <Facebook className="h-4 w-4 text-warm-brown" />
                </a>
                <a href={SCHOOL_CONFIG.social.twitter} className="w-8 h-8 bg-gold rounded-full flex items-center justify-center hover:bg-bronze transition-colors duration-200">
                  <Twitter className="h-4 w-4 text-warm-brown" />
                </a>
                <a href={SCHOOL_CONFIG.social.instagram} className="w-8 h-8 bg-gold rounded-full flex items-center justify-center hover:bg-bronze transition-colors duration-200">
                  <Instagram className="h-4 w-4 text-warm-brown" />
                </a>
                <a href={SCHOOL_CONFIG.social.youtube} className="w-8 h-8 bg-gold rounded-full flex items-center justify-center hover:bg-bronze transition-colors duration-200">
                  <Youtube className="h-4 w-4 text-warm-brown" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-cream/60">
              <p>&copy; 2024 {SCHOOL_CONFIG.name}. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;