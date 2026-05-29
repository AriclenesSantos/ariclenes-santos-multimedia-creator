import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight, Camera, Video, Palette, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Gallery images
import brandingProject from "@/assets/gallery/branding-project.jpg";
import videoProduction from "@/assets/gallery/video-production.jpg";
import eventPhotography from "@/assets/gallery/event-photography.jpg";
import uiDesign from "@/assets/gallery/ui-design.jpg";
import motionGraphics from "@/assets/gallery/motion-graphics.jpg";
import socialMedia from "@/assets/gallery/social-media.jpg";
import diaEducacao from "@/assets/gallery/dia-educacao.jpg";
import diaIndependencia from "@/assets/gallery/dia-independencia.png";
import diaBalconista from "@/assets/gallery/dia-balconista.png";
import diaHeroiNacional from "@/assets/gallery/dia-heroi-nacional.png";
import diaObrigado from "@/assets/gallery/dia-obrigado.jpg";
import diaInformatica from "@/assets/gallery/dia-informatica.jpg";
import ezvizLc3 from "@/assets/gallery/ezviz-lc3.png";
import ezvizBm1 from "@/assets/gallery/ezviz-bm1.jpg";
import ezvizH3c from "@/assets/gallery/ezviz-h3c.jpg";
import ezvizH8c from "@/assets/gallery/ezviz-h8c.jpg";
import ezvizH7c from "@/assets/gallery/ezviz-h7c.jpg";

type Category = "todos" | "design" | "video" | "foto";

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  type: "image" | "video";
  videoUrl?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Identidade Visual ConnCare",
    category: "design",
    image: brandingProject,
    description: "Desenvolvimento completo de identidade visual, incluindo logo, papelaria e materiais promocionais.",
    type: "image",
  },
  {
    id: 2,
    title: "Produção Audiovisual",
    category: "video",
    image: videoProduction,
    description: "Produção e edição de vídeos institucionais e promocionais com equipamentos profissionais.",
    type: "video",
  },
  {
    id: 3,
    title: "Fotografia de Evento",
    category: "foto",
    image: eventPhotography,
    description: "Cobertura fotográfica de eventos corporativos capturando momentos únicos.",
    type: "image",
  },
  {
    id: 4,
    title: "Dashboard UI/UX",
    category: "design",
    image: uiDesign,
    description: "Design de interface para aplicação de análise de dados com foco em usabilidade.",
    type: "image",
  },
  {
    id: 5,
    title: "Motion Graphics Abstract",
    category: "video",
    image: motionGraphics,
    description: "Animações abstratas para campanhas de marketing e abertura de vídeos.",
    type: "video",
  },
  {
    id: 6,
    title: "Social Media Design",
    category: "design",
    image: socialMedia,
    description: "Criação de conteúdo visual para redes sociais e campanhas de marketing digital.",
    type: "image",
  },
  {
    id: 7,
    title: "EZVIZ Motion - Dezembro",
    category: "video",
    image: "/videos/ezviz-dezembro.mp4",
    description: "Motion graphics promocional para campanha EZVIZ com animações dinâmicas e visuais impactantes.",
    type: "video",
    videoUrl: "/videos/ezviz-dezembro.mp4",
  },
  {
    id: 8,
    title: "EZVIZ Novos Produtos",
    category: "video",
    image: "/videos/ezviz-novos.mp4",
    description: "Vídeo promocional animado apresentando novos produtos EZVIZ com motion graphics modernos.",
    type: "video",
    videoUrl: "/videos/ezviz-novos.mp4",
  },
  {
    id: 9,
    title: "EZVIZ Motion Graphics",
    category: "video",
    image: "/videos/ezviz9.mp4",
    description: "Animação criativa para marca EZVIZ com elementos visuais dinâmicos e transições fluidas.",
    type: "video",
    videoUrl: "/videos/ezviz9.mp4",
  },
  {
    id: 10,
    title: "Dia Internacional da Educação",
    category: "design",
    image: diaEducacao,
    description: "Arte comemorativa para o Dia Internacional da Educação - Golderio Group.",
    type: "image",
  },
  {
    id: 11,
    title: "Independência de Angola",
    category: "design",
    image: diaIndependencia,
    description: "Celebração dos 50 anos da Independência Nacional de Angola - Golderio Group.",
    type: "image",
  },
  {
    id: 12,
    title: "Dia do Balconista",
    category: "design",
    image: diaBalconista,
    description: "Homenagem ao Dia do Balconista - Golderio Group.",
    type: "image",
  },
  {
    id: 13,
    title: "Dia do Herói Nacional",
    category: "design",
    image: diaHeroiNacional,
    description: "Arte comemorativa do Dia do Herói Nacional, homenageando Agostinho Neto - Golderio Group.",
    type: "image",
  },
  {
    id: 14,
    title: "Dia do Obrigado",
    category: "design",
    image: diaObrigado,
    description: "Celebração do Dia do Obrigado com parceria Golderio e Hikvision.",
    type: "image",
  },
  {
    id: 15,
    title: "Dia do Profissional de Informática",
    category: "design",
    image: diaInformatica,
    description: "Homenagem aos profissionais de informática - Golderio Group.",
    type: "image",
  },
  {
    id: 16,
    title: "EZVIZ LC3 - Câmera com Iluminação",
    category: "design",
    image: ezvizLc3,
    description: "Arte promocional da câmera inteligente LC3 com iluminação integrada - Golden Rio / EZVIZ.",
    type: "image",
  },
  {
    id: 17,
    title: "EZVIZ BM1 - Monitor de Bebê",
    category: "design",
    image: ezvizBm1,
    description: "Design promocional do monitor de bebê inteligente BM1 - Golden Rio / EZVIZ.",
    type: "image",
  },
  {
    id: 18,
    title: "EZVIZ H3c - Câmera Externa",
    category: "design",
    image: ezvizH3c,
    description: "Arte publicitária da câmera H3c com visão noturna colorida - Golden Rio / EZVIZ.",
    type: "image",
  },
  {
    id: 19,
    title: "EZVIZ H8C - Câmera 360°",
    category: "design",
    image: ezvizH8c,
    description: "Design promocional da câmera de vigilância externa H8C com rotação 360° - Golden Rio / EZVIZ.",
    type: "image",
  },
  {
    id: 20,
    title: "EZVIZ H7c Dual",
    category: "design",
    image: ezvizH7c,
    description: "Arte promocional da câmera H7c Dual com vigilância panorâmica em alta resolução - Golden Rio / EZVIZ.",
    type: "image",
  },
];

const categories = [
  { id: "todos" as Category, label: "Todos", icon: Sparkles },
  { id: "design" as Category, label: "Design", icon: Palette },
  { id: "video" as Category, label: "Vídeo", icon: Video },
  { id: "foto" as Category, label: "Fotografia", icon: Camera },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("todos");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel setup for "todos" view
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Auto-scroll for carousel
  useEffect(() => {
    if (!emblaApi || activeCategory !== "todos") return;
    
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [emblaApi, activeCategory]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const filteredItems =
    activeCategory === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id));
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  // Render gallery item card
  const renderGalleryCard = (item: GalleryItem, index: number) => (
    <div
      key={item.id}
      className="group cursor-pointer"
      onClick={() => openLightbox(item)}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-card border-gradient shadow-card">
        {/* Video or Image */}
        {item.videoUrl ? (
          <>
            <video
              src={item.videoUrl}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              onLoadedData={(e) => {
                const v = e.currentTarget;
                v.play().catch(() => {});
              }}
              onCanPlay={(e) => {
                const v = e.currentTarget;
                if (v.paused) v.play().catch(() => {});
              }}
            />
            {/* Cinematic vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(var(--background)/0.55)_100%)]" />
            {/* Live badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/60 backdrop-blur-md border border-primary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/90">Reel</span>
            </div>
          </>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 mb-2">
              {item.type === "video" && (
                <span className="flex items-center gap-1 px-2 py-1 bg-primary/20 rounded-full text-xs text-primary">
                  <Play className="w-3 h-3" /> Vídeo
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold font-display">{item.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
          </div>
        </div>

        {/* Play button for videos */}
        {item.type === "video" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        )}

        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="galeria" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Meus{" "}
            <span className="text-gradient-primary">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de projetos em design, vídeo, fotografia e motion graphics.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "glass border border-border hover:border-primary/50"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Carousel view for "todos" */}
        {activeCategory === "todos" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Carousel container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {galleryItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  >
                    {renderGalleryCard(item, index)}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Progress indicator */}
            <div className="flex justify-center gap-2 mt-8">
              <span className="text-sm text-muted-foreground">
                Deslize para ver mais trabalhos
              </span>
            </div>
          </motion.div>
        ) : (
          /* Grid view for filtered categories */
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {renderGalleryCard(item, index)}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            
            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video or Image container */}
              <div className="relative flex-1 aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden bg-card shadow-elevated">
                {selectedItem.videoUrl ? (
                  <video
                    src={selectedItem.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <>
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {selectedItem.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow cursor-pointer hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Info panel */}
              <div className="lg:w-80 flex flex-col">
                <div className="bg-gradient-card border-gradient rounded-2xl p-6 shadow-card flex-1">
                  <span className="inline-block text-primary text-xs font-medium uppercase tracking-widest mb-3">
                    {categories.find((c) => c.id === selectedItem.category)?.label}
                  </span>
                  <h3 className="text-2xl font-bold font-display mb-4">{selectedItem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedItem.description}</p>
                  
                  {/* Navigation dots */}
                  <div className="flex items-center gap-2 mt-8">
                    {filteredItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setSelectedItem(filteredItems[idx]);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? "w-6 bg-primary" : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 lg:top-0 lg:-right-12 w-10 h-10 rounded-full glass border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 lg:-right-28 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
