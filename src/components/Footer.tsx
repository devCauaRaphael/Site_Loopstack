import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#sobre" },
        { name: "Nossa Equipe", href: "#equipe" },
        { name: "Projetos", href: "#projetos" },
        { name: "Clientes", href: "#clientes" }
      ]
    },
    {
      title: "Serviços",
      links: [
        { name: "Desenvolvimento Web", href: "#" },
        { name: "Aplicativos Mobile", href: "#" },
        { name: "Sistemas Corporativos", href: "#" },
        { name: "Consultoria em TI", href: "#" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Contato", href: "#contato" },
        { name: "FAQ", href: "#" },
        { name: "Documentação", href: "#" },
        { name: "Suporte Técnico", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/LoopstacktechSolutions",
      color: "hover:text-pink-500"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/5511932795288",
      color: "hover:text-green-500"
    },
    {
      name: "E-mail",
      icon: Mail,
      href: "mailto:LoopstackTechSolutions@gmail.comr",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              LoopStack
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformamos ideias em soluções digitais inovadoras. 
              Desenvolvemos sistemas que impulsionam o crescimento do seu negócio.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">(11) 93279-5288</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">LoopstackTechSolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © {currentYear} LoopStack. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm mr-2">Siga-nos:</span>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`text-muted-foreground ${social.color} transition-colors hover:bg-primary/10`}
                  asChild
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;