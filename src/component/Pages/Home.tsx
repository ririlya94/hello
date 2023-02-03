import { Title1 } from "../Text/Title1";
import { Title3 } from "../Text/Title3";
import { TitleX } from "../Text/TitleX";
import { SocialContainer } from "../Social/SocialContainer";

export type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center space-x-[15px] mt-20 mb-10 ">
                <TitleX text="Ola, I'm" textColor={"text-black dark:text-white"} />
                <TitleX text="Puteri Alyaa Afzan." textColor={"text-base-light dark:text-base-text-purple"} />
            </div>

            <Title1 text="A Mobile App Developer." textColor={"text-black dark:text-white"} />
            <div className="py-5 w-1/2">
                <Title3 text="6 years experience as Mobile Developer who loves mobile technologies. Developed 10 apps and released on App Store and Google Play.Mainly focus on Android and do have experiences with iOS and Flutter environment." textColor={"text-black dark:text-white"} />
            </div>
            <div className="py-6" />
            <SocialContainer />
        </div>
    )
}