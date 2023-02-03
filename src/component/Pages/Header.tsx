import React from "react";
import { useContext } from 'react'
import { HEADER_SECTION } from "../../constant/routes";
import ThemeContext from "../../context/ThemeContext";
import { CustomLink } from "../../link/CustomLink";
import { Title2 } from "../Text/Title2";
import { ReactComponent as IconLight } from "../../assets/svg/icon_light.svg";
import { ReactComponent as IconDark } from "../../assets/svg/icon-dark.svg";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
    const { currentTheme, changeCurrentTheme, tabSelection, changeTab } = useContext(ThemeContext)
    const underlineColorSelected = currentTheme === 'light' ? "bg-base-light" : "bg-base-text-purple"
    const underlineColorHover = currentTheme === 'light' ? "bg-black" : "bg-white"
    const iconUse = currentTheme === 'light' ? <IconDark className="h-[32px] w-[32px] lg:h-[32px] lg:w-[32px]" /> : <IconLight className="h-[32px] w-[32px] lg:h-[32px] lg:w-[32px]" />

    return (
        <div className="flex items-center space-x-6 my-10 bg-transparent ">
            <div className="py-5" />
            {HEADER_SECTION.map((header, index) => {
                return (
                    <CustomLink href={header.link} key={index} onClick={() => { changeTab(index) }}>
                        <div className="group text-white transition duration-300">
                            <Title2 text={header.title} textColor={index === tabSelection ? "text-base-light dark:text-base-text-purple" : "text-black dark:text-white"} />
                            <span className={index === tabSelection ? `block max-w-1 h-1.5 mt-1 ${underlineColorSelected}`
                                : `block max-w-0 group-hover:max-w-full transition-all duration-500 h-1.5 mt-1 ${underlineColorHover}`}></span>
                        </div>
                    </CustomLink>
                );
            })}

            <span className="bg-transparent self-start" onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}>
                {iconUse}
            </span>

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
                Go {currentTheme === 'light' ? 'DARK' : 'LIGHT'} MODE {tabSelection}
            </button> */}
            {/* <div className="bg-image-one dark:bg-image-two h-screen w-screen bg-cover"></div> */}
        </div>
    );
};