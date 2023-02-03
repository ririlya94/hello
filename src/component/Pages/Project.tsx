import { Title1 } from "../Text/Title1";
import { GettingReady } from "./GettingReady";

export type ProjectProps = {};

export const Project: React.FC<ProjectProps> = () => {
    return (
        <>
            {/* <Title1 text="Project" textColor={"text-black dark:text-white"} /> */}
            <GettingReady />
        </>
    )
}