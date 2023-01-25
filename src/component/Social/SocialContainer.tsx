import React from "react";
import { SOCIAL_SECTION } from "../../constant/constant";
import { Link } from "../../link/Link";
import { useContext } from 'react'
import ThemeContext from "../../context/ThemeContext";

export type SocialContainerProps = {};

export const SocialContainer: React.FC<SocialContainerProps> = () => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

    return (
        <div className="flex flex-row space-x-6">
            {SOCIAL_SECTION.map((social, index) => {
                return (
                    <Link href={social.link} key={index}>
                        {/* <social.icon className="block dark:hidden h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" />
                        <social.iconDark className="hidden dark:block h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" /> */}
                        {currentTheme == 'light' ?
                                <social.icon className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" />:
                                <social.iconDark className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" />
                        }
                    </Link>
                );
            })}
        </div>
    );
};