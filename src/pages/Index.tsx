import { Coffee, Clock, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const menuItems = [
  {
    name: "Caramel Macchiato",
    description: "Espresso with steamed milk, vanilla syrup, and a caramel drizzle. Rich, sweet, and perfectly balanced.",
    price: "$5.50",
    image: "https://img.vibestack.site/s/caramel%20macchiato%20coffee/600/400",
  },
  {
    name: "Avocado Toast",
    description: "Sourdough bread topped with smashed avocado, cherry tomatoes, microgreens, and everything bagel seasoning.",
    price: "$9.00",
    image: "https://img.vibestack.site/s/avocado%20toast%20plated/600/400",
  },
  {
    name: "Blueberry Muffin",
    description: "Freshly baked every morning with wild blueberries, a buttery crumble top, and a hint of lemon zest.",
    price: "$4.25",
    image: "https://img.vibestack.site/s/blueberry%20muffin%20bakery/600/400",
  },
];

const hours = [
  { day: "Monday – Friday", time: "6:30 AM – 7:00 PM" },
  { day: "Saturday", time: "7:00 AM – 8:00 PM" },
  { day: "Sunday", time: "8:00 AM – 5:00 PM" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-primary" />
            <span
              className="text-xl font-semibold tracking-tight text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bean There
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#hours" className="hover:text-primary transition-colors">Hours</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Order Online
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative pt-16">
        <div className="relative h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden">
          <img
            src="https://img.vibestack.site/s/coffee%20shop%20warm%20interior/1600/900"
            alt="Warm interior of Bean There coffee shop with natural light"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-accent font-medium tracking-widest uppercase text-sm mb-4"
              >
                Est. 2018 · Portland, Oregon
              </motion.p>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Life's too short for bad coffee.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg text-white/80 mb-8 leading-relaxed"
              >
                Handcrafted drinks, locally roasted beans, and a space that feels like home. Come for the coffee, stay for the community.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                  View Our Menu
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Find Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Our Favorites
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We're Known For
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-md mx-auto">
              From our signature espresso drinks to freshly baked pastries — here are a few crowd favorites.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="overflow-hidden border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </h3>
                      <span className="text-accent font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="py-20 sm:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-accent font-medium tracking-widest uppercase text-sm">Visit Us</p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Opening Hours
                  </h2>
                </div>
              </motion.div>

              <div className="space-y-0">
                {hours.map((h, i) => (
                  <motion.div
                    key={h.day}
                    variants={fadeUp}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between py-5 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeUp}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 text-sm text-muted-foreground italic"
              >
                * We close early on major holidays. Follow us on Instagram for updates.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://img.vibestack.site/s/latte%20art%20closeup/600/600"
                  alt="Beautiful latte art in a ceramic cup"
                  loading="lazy"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://img.vibestack.site/s/coffee%20beans%20roasting/1600/600"
              alt="Freshly roasted coffee beans"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
            <div className="relative z-10 text-center py-16 sm:py-24 px-6">
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Start Your Morning Right
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 max-w-md mx-auto mb-8 text-lg">
                Join our loyalty program and get your 10th drink free. Because good things come to those who caffeinate.
              </motion.p>
              <motion.div variants={fadeUp} custom={2}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 text-base">
                  Join Bean Rewards
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-6 h-6 text-accent" />
                <span
                  className="text-xl font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Bean There
                </span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed">
                Your neighborhood coffee shop, serving handcrafted drinks and fresh pastries since 2018.
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-semibold mb-4 text-background/90">Location</h4>
              <div className="flex items-start gap-3 text-background/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>742 NW Everett Street</p>
                  <p>Portland, OR 97209</p>
                  <p className="mt-2">Pearl District, next to Powell's Books</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-background/90">Contact</h4>
              <div className="space-y-3 text-background/60 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-accent" />
                  <span>(503) 555-0142</span>
                </div>
                <p className="pl-7">hello@beanthere.coffee</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-background/90">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-background/70" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-background/70" />
                </a>
              </div>
              <p className="text-background/40 text-sm mt-4">@beanthere.pdx</p>
            </div>
          </div>

          <Separator className="my-10 bg-background/10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-background/40 text-sm">
            <p>© 2024 Bean There Coffee Co. All rights reserved.</p>
            <p>Made with ☕ in Portland</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
