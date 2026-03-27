import { useState, useEffect, useCallback } from "react";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Clock, Users, Calendar,
  CheckCircle2, BookOpen, Star, ArrowLeft, ChevronDown, ChevronUp,
  MapPin, Phone, Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { courses } from "@/data/courses";

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const course = courses.find((c) => c.id === id);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const nextSlide = useCallback(() => {
    if (!course) return;
    setCurrentSlide((p) => (p + 1) % course.slides.length);
  }, [course]);

  const prevSlide = () => {
    if (!course) return;
    setCurrentSlide((p) => (p - 1 + course.slides.length) % course.slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Button onClick={() => setLocation("/")}>Go Home</Button>
      </div>
    );
  }

  const skillColors: Record<string, string> = {
    L: "bg-blue-100 text-blue-700",
    R: "bg-green-100 text-green-700",
    W: "bg-purple-100 text-purple-700",
    S: "bg-amber-100 text-amber-700",
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Fixed background — behind everything */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/course-bg.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* White overlay so text is always readable */}
      <div className="fixed inset-0 -z-10 bg-white/88" />

      {/* ── SLIDER ── */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${course.slides[currentSlide].bg} flex flex-col items-center justify-center text-white px-6`}
          >
            {/* Decorative SVG wave at bottom */}
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              fill="white"
              fillOpacity="0.08"
            >
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
            </svg>

            {/* Decorative circles */}
            <div className="absolute top-10 right-20 w-40 h-40 rounded-full border border-white/20" />
            <div className="absolute bottom-16 left-16 w-24 h-24 rounded-full border border-white/20" />
            <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-white/10" />

            <div className="relative z-10 text-center max-w-2xl">
              <div className="inline-block text-5xl mb-4">{course.icon}</div>
              <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight drop-shadow">
                {course.slides[currentSlide].label}
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-light">
                {course.slides[currentSlide].sub}
              </p>

              {/* Course name badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold">
                <BookOpen size={14} />
                {course.title}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {course.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-white w-7" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>

        {/* Back button overlay */}
        <button
          onClick={() => { setLocation("/"); window.scrollTo(0, 0); }}
          className="absolute top-24 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 hover:bg-black/50 text-white text-sm font-medium backdrop-blur-sm transition-all"
        >
          <ArrowLeft size={16} />
          Back to Courses
        </button>
      </div>

      {/* ── SCROLLABLE CONTENT ── */}
      <div className="relative">

        {/* Course header bar */}
        <div className="bg-white/80 backdrop-blur-md border-b border-border shadow-sm sticky top-[64px] z-30">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-2xl font-black text-foreground">{course.title}</h1>
              <p className="text-sm text-muted-foreground">{course.tagline}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-primary">{course.fee}</span>
              <a
                href="#enquire"
                className="inline-block bg-primary text-white font-bold px-6 py-3 hover:bg-primary/90 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — details */}
          <div className="lg:col-span-2 space-y-10">

            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-7 bg-primary rounded-full inline-block" />
                About This Course
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-sm">
                {course.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1 h-7 bg-primary rounded-full inline-block" />
                Course Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-sm"
                  >
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{h}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1 h-7 bg-primary rounded-full inline-block" />
                Curriculum
              </h2>
              <div className="space-y-3">
                {course.curriculum.map((mod, i) => (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-foreground">{mod.module}</span>
                      </div>
                      {openModule === i ? (
                        <ChevronUp size={18} className="text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openModule === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 border-t border-border/40">
                            <ul className="space-y-2">
                              {mod.topics.map((topic, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-foreground/75">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1 h-7 bg-primary rounded-full inline-block" />
                What You'll Achieve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.outcomes.map((o, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4"
                  >
                    <Star size={18} className="text-primary mt-0.5 shrink-0" fill="currentColor" />
                    <span className="text-foreground/80 text-sm font-medium">{o}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">

            {/* Quick info card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-border/50 shadow-lg overflow-hidden sticky top-[135px]">
              <div className={`bg-gradient-to-r ${course.slides[0].bg} p-6 text-white`}>
                <div className="text-4xl mb-2">{course.icon}</div>
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-white/80 text-sm mt-1">{course.tagline}</p>
                <div className="mt-4 text-3xl font-black">{course.fee}</div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  { icon: Clock, label: "Duration", value: course.duration },
                  { icon: Users, label: "Batch Size", value: course.batchSize },
                  { icon: Calendar, label: "Schedule", value: course.schedule },
                  { icon: BookOpen, label: "Level", value: course.level },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">{label}</div>
                      <div className="font-semibold text-foreground">{value}</div>
                    </div>
                  </div>
                ))}

                <a
                  href="#enquire"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block mt-2 text-center bg-primary text-white font-bold py-3 hover:bg-primary/90 transition-colors w-full rounded-sm"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── ENQUIRY FORM ── */}
        <div id="enquire" className="bg-foreground/95 backdrop-blur-md py-20">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left info */}
            <div className="text-white">
              <h2 className="text-3xl font-black mb-3">
                Ready to <span className="text-primary">Enrol?</span>
              </h2>
              <p className="text-white/70 mb-10 text-lg">
                Fill out the form and our team will contact you within 24 hours to discuss your requirements and next steps.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Visit Us", text: "123 Education Hub, Knowledge Avenue, London, UK" },
                  { icon: Phone, title: "Call Us", text: "+44 20 7123 4567" },
                  { icon: Mail, title: "Email Us", text: "admissions@mahdiielts.com" },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm">{title}</div>
                      <div className="text-white font-medium">{text}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="mt-12 flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} fill="#E51D27" className="text-primary" />
                  ))}
                </div>
                <span className="text-white/70 text-sm">Rated 4.9/5 by 2,400+ students</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Enquire about: <span className="text-primary">{course.title}</span>
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll be in touch within 24 hours.");
                }}
                className="space-y-4"
              >
                {[
                  { field: "name", label: "Full Name", placeholder: "Your full name", type: "text" },
                  { field: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                  { field: "phone", label: "Phone Number", placeholder: "+44 7700 000000", type: "tel" },
                ].map(({ field, label, placeholder, type }) => (
                  <div key={field}>
                    <label className="block text-white/70 text-sm font-medium mb-1.5">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[field as keyof typeof formData]}
                      onChange={(e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }))}
                      required
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific questions or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 hover:bg-primary/90 transition-colors text-base mt-2"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer mini */}
        <div className="bg-foreground text-white/50 text-center py-6 text-sm">
          © {new Date().getFullYear()} Mahdi IELTS Coaching. All rights reserved.
        </div>
      </div>
    </div>
  );
}
