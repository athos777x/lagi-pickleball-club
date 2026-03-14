import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Trophy, Zap, Clock, Award, Star, ChevronRight, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  // Image URLs from generated assets
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438044642/GEwFLYvqwVqyzSVFw4kpxn/hero-action-shot-E8SaUTSst2A2EZrFnsN76e.webp";
  const trainingImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438044642/GEwFLYvqwVqyzSVFw4kpxn/training-group-ANKbzFKkV544eifx5aTa5c.webp";
  const courtsImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438044642/GEwFLYvqwVqyzSVFw4kpxn/courts-facility-meRtRuoFefbX4b3MMwqxwX.webp";
  const membershipImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438044642/GEwFLYvqwVqyzSVFw4kpxn/membership-benefits-T3Cv425F5hBuUqfMQbhWVD.webp";
  const logoUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438044642/GEwFLYvqwVqyzSVFw4kpxn/lagi-logo_9f20cfc9.jpg";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Pickleball Action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>

        {/* Logo watermark in hero */}
        <div className="absolute top-32 right-0 z-5 opacity-10 pointer-events-none">
          <img src={logoUrl} alt="" className="h-96 w-auto" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
              Play Strong.
              <br />
              <span className="text-accent neon-glow">Serve Smart.</span>
              <br />
              Thrive Together.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Join our pickleball community where players of all levels train, compete, and connect. Experience world-class facilities, expert coaching, and an energetic community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-background font-semibold group"
              >
                Join the Club
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10"
              >
                View Memberships
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-card/30 border-t border-accent/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Pickleball Programs
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                From beginners to competitive players, we offer comprehensive training programs designed to elevate your game.
              </p>
            </div>
            <img
              src={trainingImage}
              alt="Training Group"
              className="rounded-xl overflow-hidden shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Beginner Clinics",
                description: "Learn the fundamentals in a welcoming environment",
                icon: Zap,
              },
              {
                title: "Intermediate Training",
                description: "Develop advanced techniques and strategy",
                icon: Award,
              },
              {
                title: "Competitive League",
                description: "Test your skills in organized tournaments",
                icon: Trophy,
              },
              {
                title: "Private Coaching",
                description: "One-on-one sessions with certified coaches",
                icon: Users,
              },
            ].map((program, idx) => {
              const Icon = program.icon;
              return (
                <Card
                  key={idx}
                  className="bg-card border-accent/20 hover:border-accent/50 p-6 transition-smooth group cursor-pointer hover:shadow-lg hover:shadow-accent/20"
                >
                  <Icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="text-lg font-semibold font-poppins mb-2">{program.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{program.description}</p>
                  <a href="#" className="text-accent text-sm font-semibold flex items-center gap-2 group/link">
                    Learn More
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section id="memberships" className="py-20 bg-background border-t border-accent/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Choose Your Membership
            </h2>
            <p className="text-lg text-foreground/70">
              Flexible plans designed for every player
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$49",
                period: "/month",
                features: [
                  "Court access (peak hours)",
                  "Community events",
                  "Beginner clinics",
                  "Member discounts",
                ],
                highlight: false,
              },
              {
                name: "Pro Player",
                price: "$99",
                period: "/month",
                features: [
                  "Unlimited court access",
                  "League participation",
                  "Training sessions",
                  "Priority scheduling",
                  "Guest passes (4/month)",
                ],
                highlight: true,
              },
              {
                name: "Elite Club",
                price: "$199",
                period: "/month",
                features: [
                  "Priority court booking",
                  "Private coaching discounts",
                  "Tournament access",
                  "VIP events",
                  "Unlimited guest passes",
                ],
                highlight: false,
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 transition-smooth ${
                  plan.highlight
                    ? "bg-gradient-to-b from-accent/10 to-card border-accent/50 ring-2 ring-accent/30 relative scale-105"
                    : "bg-card border-accent/20 hover:border-accent/50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-background px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold font-poppins mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-foreground/60">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-accent hover:bg-accent/90 text-background"
                      : "bg-card border border-accent/50 text-accent hover:bg-accent/10"
                  }`}
                >
                  Join Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courts & Facilities Section */}
      <section id="courts" className="py-20 bg-card/30 border-t border-accent/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={courtsImage}
              alt="Professional Courts"
              className="rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                World-Class Pickleball Courts
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Our state-of-the-art facility features professional-grade courts with premium surfaces, night lighting, and complete amenities.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "8 Professional indoor courts",
                  "Premium court surfaces",
                  "Professional night lighting",
                  "Equipment rental available",
                  "Climate-controlled facility",
                  "Pro shop on-site",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-background font-semibold">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-t border-accent/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Members" },
              { number: "8", label: "Professional Courts" },
              { number: "52", label: "Weekly Tournaments" },
              { number: "12", label: "Certified Coaches" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-poppins text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card/30 border-t border-accent/20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16 text-center">
            What Our Members Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Pro Player Member",
                text: "The coaching here transformed my game. The community is welcoming and the facilities are top-notch!",
              },
              {
                name: "Mike Chen",
                role: "Competitive League",
                text: "Best investment in my fitness. The tournaments are well-organized and the energy is incredible.",
              },
              {
                name: "Lisa Martinez",
                role: "Beginner Clinics",
                text: "Started as a complete beginner and now I'm playing regularly. The instructors are patient and knowledgeable.",
              },
            ].map((testimonial, idx) => (
              <Card
                key={idx}
                className="bg-card border-accent/20 p-6 hover:border-accent/50 transition-smooth"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-card to-card/50 border-t border-accent/20">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-center">
            Stay Updated
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            Get the latest news, tournament schedules, and exclusive member offers
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="flex gap-2 flex-col sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-background border border-accent/30 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/70 transition-colors"
              required
            />
            <Button className="bg-accent hover:bg-accent/90 text-background font-semibold whitespace-nowrap">
              <Mail size={18} className="mr-2" />
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-accent/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoUrl} alt="Lagi Logo" className="h-16 w-auto" />
              </div>
              <p className="text-sm text-foreground/60">
                Lagi Pickleball Social Club - Your premier destination for pickleball excellence and community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Schedule</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>📍 123 Court Lane, City, ST</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@pickleballclub.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-accent/70 transition-colors">Facebook</a>
                <a href="#" className="text-accent hover:text-accent/70 transition-colors">Instagram</a>
                <a href="#" className="text-accent hover:text-accent/70 transition-colors">Twitter</a>
              </div>
            </div>
          </div>

          <div className="border-t border-accent/20 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Pickleball Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
