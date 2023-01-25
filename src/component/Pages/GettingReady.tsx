import React from "react";
import { SocialContainer } from "../Social/SocialContainer";
import { Title1 } from "../Text/Title1";
import { TitleX } from "../Text/TitleX";
import { useContext } from 'react'
import ThemeContext from "../../context/ThemeContext";

export type GettingReadyProps = {
    resume?: boolean;
    portfolio?: boolean;
};

export const GettingReady: React.FC<GettingReadyProps> = ({
    resume,
    portfolio
}) => {

    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

    return (
        <>
            <span className='mt-[81px]' />
            <TitleX text={"Getting READY!"} />
            <span className='mt-[56px]' />
            <Title1 text={"Stay tune! You can check and reach me out at:- "} textColor={"text-black dark:text-white"} />
            <span className='mt-[56px]' />
            <SocialContainer />
            {/* <button
                data-testid='switch-theme-btn'
                style={{
                    padding: 5,
                    borderRadius: 5,
                    color: currentTheme === 'light' ? 'white' : 'black',
                    background: currentTheme === 'light' ? 'black' : 'white',
                }}
                onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
            >
                Go {currentTheme === 'light' ? 'DARK' : 'LIGHT'} MODE
            </button> */}
            {/* <div className="bg-image-one dark:bg-image-two h-screen w-screen bg-cover"></div> */}
        </>
    );
};