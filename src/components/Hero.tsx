import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import profileImage from "@/assets/ariclenes-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border mb-6"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Luanda, Angola</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-4 leading-tight"
            >
              <span className="text-gradient">Ariclenes</span>
              <br />
              <span className="text-gradient-primary">Santos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              <span className="text-foreground font-medium">Designer Multimídia</span> • Criador Digital • Desenvolvedor Front-end
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projetos"
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-8 py-4 glass border border-border rounded-lg font-medium hover:border-primary/50 transition-all duration-300"
              >
                Entrar em Contato
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-110" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-gradient shadow-elevated animate-float">
                <img
                  src={profileImage}
                  alt="Ariclenes Santos"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 transform scale-110" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
