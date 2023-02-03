import { Header } from "./Header";

export type MainProps = {
    component?: JSX.Element
};

export const Main: React.FC<MainProps> = ({
    component
}) => {
    return (
        <>
            <Header />
            {component}
        </>
    )
}