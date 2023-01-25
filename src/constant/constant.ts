import { ReactComponent as IconGithubDark } from ".././assets/svg/github_dark.svg";
import { ReactComponent as IconGithubLight } from ".././assets/svg/github_dark.svg";
import { ReactComponent as IconBitbucketLight } from ".././assets/svg/bitbucket-light.svg";
import { ReactComponent as IconBitbucketDark } from ".././assets/svg/bitbucket-dark.svg";
import { ReactComponent as IconLinkedInLight } from ".././assets/svg/linkedin_light.svg";
import { ReactComponent as IconLinkedInDark } from ".././assets/svg/linkedin_dark.svg";

export type SocialSection = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    iconDark: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
  };
  
  export const SOCIAL_SECTION: SocialSection[] = [
    {
      icon: IconGithubLight,
      iconDark: IconGithubDark,
      link: "https://github.com/ririlya94"
    },
    {
      icon: IconBitbucketLight,
      iconDark: IconBitbucketDark,
      link: "https://bitbucket.org/ririlya",
    },
    {
      icon: IconLinkedInLight,
      iconDark: IconLinkedInDark,
      link: "https://www.linkedin.com/in/puteri-alyaa/",
    }
  ];