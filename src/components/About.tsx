import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code, Camera, Palette } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Design Gráfico",
    description: "Identidade visual, branding e materiais promocionais",
  },
  {
    icon: Camera,
    title: "Produção Audiovisual",
    description: "Vídeo, fotografia e motion graphics",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Front-end responsivo e interfaces em Python",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    description: "Experiências digitais centradas no usuário",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Sobre Mim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Transformando ideias em{" "}
            <span className="text-gradient-primary">experiências visuais</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sou um Designer Multimídia e Criador Digital com forte atuação em design gráfico, 
            produção de vídeo, fotografia e motion graphics, aliando criatividade visual a 
            conhecimentos sólidos em tecnologia e desenvolvimento.
          </p>
        </motion.div>

        {/* Current role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-gradient-card border-gradient rounded-2xl p-6 lg:p-8 shadow-card">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Designer Gráfico e Assistente de Marketing</h3>
                <p className="text-primary font-medium">Golderio Group</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Criação de materiais gráficos, conteúdos visuais para campanhas e apoio às estratégias de comunicação
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-card border-gradient rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-3xl mx-auto text-center mt-16 px-6"
        >
          <p className="text-xl lg:text-2xl text-muted-foreground italic font-light leading-relaxed">
            "Design não é apenas estética, mas uma ferramenta para{" "}
            <span className="text-foreground font-normal">resolver problemas</span>, contar{" "}
            <span className="text-foreground font-normal">histórias</span> e gerar{" "}
            <span className="text-primary font-normal">impacto real</span>."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default About;
