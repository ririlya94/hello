import { Title1 } from "../Text/Title1";
import { GettingReady } from "./GettingReady";

export type ContactProps = {};

export const Contact: React.FC<ContactProps> = () => {
    return (
        <>
            {/* <Title1 text="Contact" textColor={"text-black dark:text-white"} /> */}
            <GettingReady />
        </>
    )
}