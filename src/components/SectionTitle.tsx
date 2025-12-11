import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  className?: string;
}

const SectionTitle = ({ subtitle, title, className }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      {subtitle && (
        <span className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};

export default SectionTitle;
