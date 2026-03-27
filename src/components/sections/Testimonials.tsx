import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Jenkins",
    score: "Band 8.5",
    quote: "The personalized feedback on my writing tasks was a game-changer. The trainers know exactly what examiners look for. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf"
  },
  {
    name: "Rahul Sharma",
    score: "Band 8.0",
    quote: "I was stuck at 6.5 in Reading for months. The skimming and scanning strategies taught here helped me score an 8.5 in just 6 weeks.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=c0aede"
  },
  {
    name: "David Chen",
    score: "Band 7.5",
    quote: "The speaking mock interviews gave me the confidence I needed. The environment is extremely supportive and professional.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=d1d4f9"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from our students who have successfully achieved their dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative pt-8">
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote size={48} />
                </div>
                <CardContent className="flex flex-col h-full relative z-10">
                  <div className="flex gap-1 text-[#FFB800] mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 italic mb-8 flex-1 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-border pt-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-slate-100"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm font-semibold text-primary">{testimonial.score}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
