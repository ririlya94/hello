import { GettingReady } from "./GettingReady";
import { Header } from "./Header";


export type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <GettingReady />
        </>
    )
}