import { TbArrowBarUp, TbArrowsHorizontal, TbCircleDot, TbClipboardCheck, TbDisc, TbFlame } from "react-icons/tb";
import type { Service } from "@/lib/site";

const icons = {
  floor: TbArrowsHorizontal,
  brake: TbDisc,
  service: TbClipboardCheck,
  lift: TbArrowBarUp,
  weld: TbFlame,
  tire: TbCircleDot,
};

export default function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden />;
}
