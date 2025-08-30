// School Configuration - Centralized data management
export const SCHOOL_CONFIG = {
  // Basic Information
  name: "School Name", // To be configured by admin
  tagline: "Learn • Play • Grow",
  description: "Nurturing young minds through faith, knowledge, and character development.",
  
  // Contact Information
  contact: {
    phone: {
      main: "+91 76399 69976",
      admissions: "+91 76399 69976",
      emergency: "+91 76399 69976",
    },
    email: {
      main: "churchpark101@gmail.com",
      admissions: "churchpark101@gmail.com",
    },
    address: {
      street: "No-6, Melasooriyathotam",
      city: "Madukkur, Pattukottai",
      state: "Tanjavur",
      zip: "614903",
      full: "No-6, Melasooriyathotam, Madukkur, Pattukottai, Tanjavur - 614903"
    }
  },
  
  // Office Hours
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 4:00 PM",
    saturday: "Saturday: 9:00 AM - 1:00 PM", 
    sunday: "Sunday: Closed"
  },
  
  // Statistics (for Hero section)
  stats: {
    students: "500+",
    teachers: "50+", 
    yearsOfService: "25+"
  },
  
  // Social Media Links
  social: {
    facebook: "#",
    twitter: "#", 
    instagram: "#",
    youtube: "#"
  },
  
  // Placeholders for forms
  placeholders: {
    email: "Enter your email address",
    phone: "Enter phone number",
    firstName: "First name",
    lastName: "Last name",
    fullName: "Your full name",
    message: "Your message..."
  }
} as const;

// Admin configurable content
export const ADMIN_CONTENT = {
  // Leadership section
  leadership: {
    founder: {
      name: "", // To be set by admin
      title: "Founder & Chairman",
      description: "Under the visionary leadership of our founder and chairman, {schoolName} has grown from a small community school to a recognized institution of educational excellence, maintaining our core values while embracing modern educational practices.",
      image: "" // To be uploaded by admin
    },
    principal: {
      name: "", // To be set by admin  
      title: "Principal",
      message: "At {schoolName}, we believe that every child is a gift from God with unique talents and potential. Our dedicated faculty and staff work tirelessly to create an environment where students can thrive academically, socially, and spiritually.",
      image: "" // To be uploaded by admin
    }
  },
  
  // About section
  about: {
    description: "For over {yearsOfService} years, {schoolName} has been a beacon of excellence in education, combining academic rigor with Christian values to shape tomorrow's leaders."
  }
};