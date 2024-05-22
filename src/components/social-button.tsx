import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  href: string;
  Icon: LucideIcon;
}

export const SocialButton = ({ href, Icon }: SocialButtonProps) => {
  return (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a href={href} target="_blank">
        <Icon className="size-4" />
      </a>
    </Button>
  );
};
