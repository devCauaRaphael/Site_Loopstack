import { ChevronDown, ChevronUp } from "lucide-react";

const ArrowNav = () => {
  const sectionSelectors = ["#sobre", "#projetos", "#equipe", "#clientes", "#contato"];

  const getCurrentSectionIndex = () => {
    if (!sectionSelectors.length) return -1;
    const positions = sectionSelectors.map((sel) => {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (!el) return { sel, dist: Number.POSITIVE_INFINITY };
      const rect = el.getBoundingClientRect();
      return { sel, dist: Math.abs(rect.top) };
    });
    let min = Number.POSITIVE_INFINITY;
    let idx = -1;
    positions.forEach((p, i) => {
      if (p.dist < min) {
        min = p.dist;
        idx = i;
      }
    });
    return idx;
  };

  const scrollToRelativeSection = (dir: "up" | "down") => {
    const current = getCurrentSectionIndex();
    if (current === -1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const nextIndex =
      dir === "down"
        ? Math.min(current + 1, sectionSelectors.length - 1)
        : Math.max(current - 1, 0);
    const nextSel = sectionSelectors[nextIndex];
    const el = document.querySelector(nextSel) as HTMLElement | null;
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl p-2 flex flex-col gap-2">
        <button
          onClick={() => scrollToRelativeSection("up")}
          aria-label="Seção anterior"
          className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-transparent hover:bg-gradient-primary/10 transition-all duration-300 hover:scale-110 text-foreground border border-border/50"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollToRelativeSection("down")}
          aria-label="Próxima seção"
          className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-transparent hover:bg-gradient-primary/10 transition-all duration-300 hover:scale-110 text-foreground border border-border/50"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ArrowNav;