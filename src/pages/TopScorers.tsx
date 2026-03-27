import { motion } from "framer-motion";
import { Star, Trophy, Award, Medal } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const topScorers = [
  {
    name: "Aisha Malik",
    score: "Band 9.0",
    country: "🇵🇰 Pakistan",
    course: "IELTS Academic",
    destination: "University of Oxford, UK",
    quote: "Mahdi IELTS gave me the exact strategies I needed. The writing feedback was incredible.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&backgroundColor=ffd5dc",
    rank: 1,
    year: "2024",
    breakdown: { L: 9.0, R: 9.0, W: 8.5, S: 9.0 },
  },
  {
    name: "Arjun Patel",
    score: "Band 8.5",
    country: "🇮🇳 India",
    course: "1-on-1 Coaching",
    destination: "University of Toronto, Canada",
    quote: "The personalised sessions helped me jump from 6.5 to 8.5 in just 6 weeks. Unbelievable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=c0e0ff",
    rank: 2,
    year: "2024",
    breakdown: { L: 9.0, R: 8.5, W: 8.0, S: 8.5 },
  },
  {
    name: "Fatima Al-Hassan",
    score: "Band 8.5",
    country: "🇦🇪 UAE",
    course: "IELTS Academic",
    destination: "University of Melbourne, Australia",
    quote: "Every single trainer at Mahdi IELTS is passionate. The mock tests were incredibly realistic.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima&backgroundColor=ffe0c0",
    rank: 3,
    year: "2024",
    breakdown: { L: 8.5, R: 9.0, W: 8.0, S: 8.5 },
  },
  {
    name: "David Okonkwo",
    score: "Band 8.0",
    country: "🇳🇬 Nigeria",
    course: "Online Batch",
    destination: "Imperial College London, UK",
    quote: "The online batch was just as good as in-person. Flexible timings made all the difference.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=d4f0d4",
    rank: 4,
    year: "2024",
    breakdown: { L: 8.0, R: 8.5, W: 7.5, S: 8.0 },
  },
  {
    name: "Maria Santos",
    score: "Band 8.0",
    country: "🇵🇭 Philippines",
    course: "IELTS General",
    destination: "Permanent Residency — Canada",
    quote: "I needed Band 7 for PR. Mahdi IELTS helped me go way beyond that. Forever grateful!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&backgroundColor=ffe0e0",
    rank: 5,
    year: "2024",
    breakdown: { L: 8.5, R: 8.0, W: 7.5, S: 8.0 },
  },
  {
    name: "Tariq Al-Rashid",
    score: "Band 8.0",
    country: "🇸🇦 Saudi Arabia",
    course: "Weekend Batch",
    destination: "University of Edinburgh, UK",
    quote: "The weekend batch fit perfectly around my work schedule. World-class teaching.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tariq&backgroundColor=e0d4ff",
    rank: 6,
    year: "2024",
    breakdown: { L: 8.0, R: 8.0, W: 7.5, S: 8.5 },
  },
  {
    name: "Priya Krishnamurthy",
    score: "Band 7.5",
    country: "🇮🇳 India",
    course: "IELTS Academic",
    destination: "Monash University, Australia",
    quote: "Went from Band 6 to 7.5 in 8 weeks. The Reading strategies were a game-changer.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffd5dc",
    rank: 7,
    year: "2024",
    breakdown: { L: 7.5, R: 8.0, W: 7.0, S: 7.5 },
  },
  {
    name: "Chen Wei",
    score: "Band 7.5",
    country: "🇨🇳 China",
    course: "1-on-1 Coaching",
    destination: "LSE, London, UK",
    quote: "The speaking training helped me overcome my fear of English. My trainer was phenomenal.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen&backgroundColor=c0e8ff",
    rank: 8,
    year: "2024",
    breakdown: { L: 7.5, R: 8.0, W: 7.0, S: 7.5 },
  },
  {
    name: "Nadia Kowalski",
    score: "Band 7.5",
    country: "🇵🇱 Poland",
    course: "Online Batch",
    destination: "University of Amsterdam, Netherlands",
    quote: "Incredible value. Joining online from Warsaw — the live sessions were interactive and fun.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia&backgroundColor=ffe8d4",
    rank: 9,
    year: "2024",
    breakdown: { L: 8.0, R: 7.5, W: 7.0, S: 7.5 },
  },
];

const rankIcon = (rank: number) => {
  if (rank === 1) return <Trophy size={28} className="text-yellow-400" />;
  if (rank === 2) return <Award size={28} className="text-slate-400" />;
  if (rank === 3) return <Medal size={28} className="text-amber-600" />;
  return <Star size={22} className="text-primary" fill="currentColor" />;
};

const rankBorder = (rank: number) => {
  if (rank === 1) return "border-yellow-400 ring-2 ring-yellow-300/40";
  if (rank === 2) return "border-slate-400 ring-2 ring-slate-300/40";
  if (rank === 3) return "border-amber-600 ring-2 ring-amber-400/30";
  return "border-border";
};

export default function TopScorers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0 bg-[url('/course-bg.png')] bg-cover bg-bottom opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6">
              <Trophy size={16} />
              Hall of Fame — 2024
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-primary">Top Scorers</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Meet the brilliant students who achieved outstanding IELTS results with Mahdi IELTS. Their success is our greatest achievement.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-14 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { val: "9.0", label: "Highest Band" },
              { val: "200+", label: "Band 8+ Achievers" },
              { val: "98%", label: "Pass Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{s.val}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold mb-14">
            🏆 <span className="text-primary">Podium</span> — Top 3 Achievers
          </h2>
          <div className="flex flex-col md:flex-row items-end justify-center gap-6">
            {[topScorers[1], topScorers[0], topScorers[2]].map((scorer, i) => {
              const heights = ["h-48", "h-64", "h-44"];
              const actualRank = i === 1 ? 1 : i === 0 ? 2 : 3;
              return (
                <motion.div
                  key={scorer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex-1 max-w-xs"
                >
                  <div className="text-center mb-4">
                    <img
                      src={scorer.avatar}
                      alt={scorer.name}
                      className={`w-20 h-20 rounded-full border-4 mx-auto shadow-lg bg-slate-100 ${rankBorder(actualRank)}`}
                    />
                    <div className="mt-3 flex justify-center">{rankIcon(actualRank)}</div>
                    <h3 className="font-bold text-foreground mt-1">{scorer.name}</h3>
                    <p className="text-2xl font-black text-primary">{scorer.score}</p>
                    <p className="text-sm text-muted-foreground">{scorer.country}</p>
                  </div>
                  <div className={`${heights[i]} rounded-t-xl flex items-end justify-center pb-4 ${i === 1 ? "bg-primary" : i === 0 ? "bg-slate-400" : "bg-amber-600"}`}>
                    <span className="text-white font-black text-4xl">#{actualRank}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Scorers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-14">
            All <span className="text-primary">Star Performers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topScorers.map((scorer, index) => (
              <motion.div
                key={scorer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`bg-white rounded-xl border-2 ${rankBorder(scorer.rank)} p-6 shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={scorer.avatar}
                    alt={scorer.name}
                    className="w-16 h-16 rounded-full bg-slate-100 border-2 border-white shadow"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground text-lg">{scorer.name}</h3>
                      {rankIcon(scorer.rank)}
                    </div>
                    <p className="text-2xl font-black text-primary leading-tight">{scorer.score}</p>
                    <p className="text-sm text-muted-foreground">{scorer.country} · {scorer.year}</p>
                  </div>
                </div>

                {/* Band breakdown */}
                <div className="grid grid-cols-4 gap-2 mb-4 bg-secondary/50 rounded-lg p-3">
                  {Object.entries(scorer.breakdown).map(([skill, band]) => (
                    <div key={skill} className="text-center">
                      <div className="text-xs text-muted-foreground font-medium">{skill}</div>
                      <div className="text-base font-bold text-foreground">{band}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                  "{scorer.quote}"
                </p>

                <div className="border-t border-border pt-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Course:</span>
                    <span className="font-semibold text-foreground">{scorer.course}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Destination:</span>
                    <span className="font-semibold text-primary text-right max-w-[60%]">{scorer.destination}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Your Name Could Be Here Next</h2>
          <p className="text-white/80 text-lg mb-8">
            Join Mahdi IELTS and start your journey to a top band score today.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-primary font-bold px-10 py-4 text-lg hover:bg-white/90 transition-colors"
          >
            Enrol Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
