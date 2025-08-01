import { Home, Info, FolderOpen, Users, UserCheck, Mail } from "lucide-react";
import { useState } from "react";
import loopstacklogo from "./assets/loopstacklogo.jpeg";
const AppSidebar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigationItems = [
    { title: "Início", url: "#", icon: Home, color: "hover:text-blue-500" },
    { title: "Sobre Nós", url: "#sobre", icon: Info, color: "hover:text-purple-500" },
    { title: "Projetos", url: "#projetos", icon: FolderOpen, color: "hover:text-green-500" },
    { title: "Equipe", url: "#equipe", icon: Users, color: "hover:text-orange-500" },
    { title: "Clientes", url: "#clientes", icon: UserCheck, color: "hover:text-pink-500" },
    { title: "Contato", url: "#contato", icon: Mail, color: "hover:text-cyan-500" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
     };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-3 space-y-2">
        {/* Logo */}
        <div className="flex justify-center mb-4 pb-3 border-b border-border/30">
          <div className="relative group">
            <img 
              src={loopstacklogo} 
              alt="LoopStack"  />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => scrollToSection(item.url)}
                className={`
                  relative w-12 h-12 rounded-xl flex items-center justify-center
                  bg-transparent hover:bg-gradient-primary/10 
                  transition-all duration-300 hover:scale-110
                  ${item.color} group
                `}
              >
                <item.icon className="h-5 w-5 transition-all duration-300 group-hover:scale-125" />
                
                {/* Animated background circle */}
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-300 group-hover:scale-110"></div>
                
                {/* Glowing dot indicator */}
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              </button>

              {/* Tooltip */}
              <div className={`
                absolute left-16 top-1/2 -translate-y-1/2 
                bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium
                opacity-0 pointer-events-none transition-all duration-300 whitespace-nowrap
                shadow-lg border border-border/20
                ${hoveredItem === item.title ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
              `}>
                {item.title}
                {/* Arrow */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-foreground"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-4 pt-3 border-t border-border/30">
          <div className="w-8 h-1 bg-gradient-primary rounded-full mx-auto opacity-60"></div>
        </div>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-xl -z-10 opacity-50"></div>
    </div>
  );
};

export default AppSidebar;