import type { FC } from "react";
import { MainContainer } from "../containers/main-container";
import { TeamList, TeamMemberCard, type Social } from "../ui/team-list";
import avatarImage from "@/assets/images/julia-avatar.jpg";
import { Button } from "../ui/button";

const emptySocials: Array<Social> = [
  { name: "instagram", link: "#" },
  { name: "linkedin", link: "#" },
];

const team = [
  {
    name: "Олександр",
    experience: 5,
    socials: emptySocials,
  },
  {
    name: "Володимир",
    experience: 7,
    socials: emptySocials,
  },
  {
    name: "Ірина",
    experience: 1,
    socials: emptySocials,
  },
  {
    name: "Михайло",
    experience: 1,
    socials: emptySocials,
  },
  {
    name: "Юлія",
    experience: 2,
    avatar: avatarImage,
    socials: emptySocials,
  },
];

export const Team: FC = () => {
  const teamCount = team.length + 2;

  return (
    <MainContainer
      title="Наші водії"
      action={
        <Button variant="ghost" className="p-0!">
          Усі водії ({teamCount})
        </Button>
      }
      className="relative"
    >
      <TeamList>
        {team.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </TeamList>
      <hr className="absolute bottom-0 w-[calc(100%-32px)] border-foreground/20" />
    </MainContainer>
  );
};
