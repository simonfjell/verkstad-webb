import { placeholders } from "@/lib/site";

// Visar text och markerar den gult om det är en platshållare.
export default function Text({ children }: { children: string }) {
  if (placeholders.has(children)) {
    return (
      <span className="ph" title="Platshållare – byts mot riktig uppgift">
        {children}
      </span>
    );
  }
  return <>{children}</>;
}
