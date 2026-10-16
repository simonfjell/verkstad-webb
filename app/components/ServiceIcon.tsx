import { TbBolt, TbCircleDot, TbClipboardCheck, TbDisc, TbFlame, TbTool } from "react-icons/tb";
import type { Service } from "@/lib/site";

const icons = {
  service: TbTool,
  brake: TbDisc,
  electric: TbBolt,
  axle: TbCircleDot,
  weld: TbFlame,
  inspect: TbClipboardCheck,
};

export default function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden />;
}
