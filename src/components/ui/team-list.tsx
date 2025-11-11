import type { FC, PropsWithChildren } from "react";
import emptyAvatarImage from "@/assets/images/empty-avatar.png";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
export const TeamList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {children}
    </div>
  );
};

export type Social = {
  name: "instagram" | "linkedin";
  link: string;
};

type TeamMemberCard = {
  name: string;
  experience: number;
  avatar?: string;
  socials: Array<Social>;
};

export const TeamMemberCard: FC<TeamMemberCard> = ({
  name,
  experience,
  avatar = emptyAvatarImage,
  socials,
}) => {
  return (
    <article className="border border-foreground/20 rounded flex flex-col justify-center items-center text-center gap-4 py-6">
      <img
        src={avatar}
        className="size-20 rounded-full object-cover"
        width={80}
        height={80}
        alt="Team member avatar"
      />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted">Досвід роботи: {experience} років</p>
      </div>
      <div className="flex flex-row items-center gap-3 [&_svg]:size-6 [&_svg]:text-secondary">
        {socials.map(({ link, name }, index) => (
          <a key={index} href={link}>
            {getSocialIcon(name)}
          </a>
        ))}
      </div>
    </article>
  );
};

function getSocialIcon(name: Social["name"]) {
  const socialIcons = {
    instagram: <InstagramIcon />,
    linkedin: <LinkedinIcon />,
  };

  return socialIcons[name];
}
