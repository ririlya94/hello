import { Title1 } from "../Text/Title1";
import { GettingReady } from "./GettingReady";

export type ExperienceProps = {};

export const Experience: React.FC<ExperienceProps> = () => {
    return (
        <>
            {/* <Title1 text="Experience" textColor={"text-black dark:text-white"} /> */}
            <GettingReady />
        </>
    )
}