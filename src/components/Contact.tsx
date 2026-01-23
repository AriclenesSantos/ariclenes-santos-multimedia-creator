import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Vamos{" "}
            <span className="text-gradient-primary">Trabalhar Juntos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para projetos freelance, oportunidades de trabalho e colaborações criativas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-card border-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">ariclenes@email.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card border-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium">+244 XXX XXX XXX</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card border-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium">Luanda, Angola</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social links and CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-between"
            >
              <div className="bg-gradient-card border-gradient rounded-2xl p-6 lg:p-8 shadow-card mb-6">
                <h3 className="text-lg font-bold font-display mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-2xl p-6 lg:p-8 shadow-glow">
                <h3 className="text-lg font-bold font-display text-primary-foreground mb-2">
                  Pronto para começar?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Entre em contato para discutir seu próximo projeto.
                </p>
                <a
                  href="mailto:ariclenes@email.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Enviar Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
