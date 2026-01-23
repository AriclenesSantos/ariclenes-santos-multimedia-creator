import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-gradient-primary">AS</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Ariclenes Santos
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center md:text-right">
            Designer Multimídia • Luanda, Angola
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
