import { BookOpen, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-sm inline-flex">
                <BookOpen size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Mahdi IELTS
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering students to achieve their dream IELTS scores with expert guidance, comprehensive materials, and personalized attention.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses', 'Top Scorers', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {['IELTS Academic', 'IELTS General', 'Spoken English', 'PTE Coaching', 'OET Training'].map((course) => (
                <li key={course}>
                  <a href="#" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/70 text-sm">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123 Education Hub, Knowledge Avenue, London, UK</span>
              </li>
              <li className="flex gap-3 text-white/70 text-sm">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+44 20 7123 4567</span>
              </li>
              <li className="flex gap-3 text-white/70 text-sm">
                <Mail className="text-primary shrink-0" size={20} />
                <span>admissions@mahdiielts.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} Mahdi IELTS Coaching. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
