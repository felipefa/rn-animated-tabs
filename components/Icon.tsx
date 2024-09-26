import { icons, LucideIcon } from "lucide-react-native";
import { type MotiProps } from "moti";
import { motifySvg } from "moti/svg";
import { ComponentClass } from "react";

type IconProps = {
  name: keyof typeof icons;
} & MotiProps;

export function Icon({ name, ...rest }: IconProps) {
  const IconComponent: LucideIcon = motifySvg(
    icons[name] as unknown as ComponentClass
  )();

  return <IconComponent size={24} {...rest} />;
}
