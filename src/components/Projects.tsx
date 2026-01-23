import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Eye, Code2, Palette, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "SIAV – Sistema de IA Visual",
    category: "Python & IA",
    description:
      "Sistema de monitoramento com detecção de pessoas usando Python, OpenCV e MobileNet SSD. Interface gráfica desktop com geração de relatórios em PDF e logs em JSON.",
    tags: ["Python", "OpenCV", "IA", "Desktop"],
    icon: Eye,
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Interfaces Web Modernas",
    category: "UI/UX & Desenvolvimento",
    description:
      "Desenvolvimento de interfaces responsivas em HTML, CSS e JavaScript. Projetos com Next.js e Tailwind CSS, focados em experiência do usuário.",
    tags: ["Next.js", "Tailwind", "React", "UI/UX"],
    icon: Code2,
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Identidades Visuais & Branding",
    category: "Design Gráfico",
    description:
      "Criação de logotipos, identidades visuais completas e materiais de branding para marcas e eventos. Design para redes sociais e motion graphics.",
    tags: ["Branding", "Logo", "Motion", "Social Media"],
    icon: Palette,
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Projetos de Jogos & Narrativa",
    category: "Game Design",
    description:
      "Desenvolvimento de histórias e conceitos visuais para jogos 2D e 3D. Projetos com Unity integrando narrativa, design e mecânicas de jogo.",
    tags: ["Unity", "Game Design", "Narrativa", "3D"],
    icon: Gamepad2,
    gradient: "from-accent/20 to-primary/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Projetos{" "}
            <span className="text-gradient-primary">Recentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais relevantes em multimídia, desenvolvimento e design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-card border-gradient rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                {/* Project header with gradient */}
                <div className={`h-40 lg:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold font-display mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
