import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Globe, Laptop, Calendar, UserCheck, FileText } from "lucide-react";
import { useLocation } from "wouter";
import { courses } from "@/data/courses";

const icons = [BookOpen, Globe, Laptop, Calendar, UserCheck, FileText];

export const Courses = () => {
  const [, setLocation] = useLocation();

  return (
    <section id="courses" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the right path for your journey. We offer diverse learning models tailored to your schedule and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  {course.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />

                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col relative z-10">
                    <p className="text-muted-foreground mb-6 flex-1">
                      {course.tagline}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold text-foreground">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Fee:</span>
                        <span className="font-bold text-primary">{course.fee}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      variant={course.popular ? "default" : "outline"}
                      onClick={() => {
                        setLocation(`/course/${course.id}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Enquire Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
