import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Design & Multimídia",
    color: "primary",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "CapCut",
      "Motion Design",
      "Fotografia Digital",
    ],
  },
  {
    title: "UI/UX Design",
    color: "primary",
    skills: [
      "Figma",
      "Wireframes",
      "Prototipagem",
      "Design Responsivo",
      "Design Centrado no Usuário",
    ],
  },
  {
    title: "Desenvolvimento",
    color: "primary",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "Tkinter",
    ],
  },
  {
    title: "Marketing & Comunicação",
    color: "primary",
    skills: [
      "Campanhas de Marketing",
      "Conteúdo Visual",
      "Marketing Digital",
      "Redes Sociais",
      "Branding",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Competências
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Habilidades{" "}
            <span className="text-gradient-primary">Técnicas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-card border-gradient rounded-2xl p-6 lg:p-8 shadow-card"
            >
              <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
