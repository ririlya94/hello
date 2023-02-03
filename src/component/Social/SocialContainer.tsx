import React from "react";
import { SOCIAL_SECTION } from "../../constant/constant";
import { useContext } from 'react'
import ThemeContext from "../../context/ThemeContext";
import { CustomLink } from "../../link/CustomLink";

export type SocialContainerProps = {};

export const SocialContainer: React.FC<SocialContainerProps> = () => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

    return (
        <div className="flex flex-row space-x-6">
            {SOCIAL_SECTION.map((social, index) => {
                return (
                    <CustomLink href={social.link} key={index}>
                        {currentTheme == 'light' ?
                            <social.icon className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" /> :
                            <social.iconDark className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" />
                        }

                        {/* <div>
                        <social.icon className="block dark:hidden h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" />
                        <social.iconDark className="hidden dark:block h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" /> </div>*/}
                    </CustomLink>
                );
            })}
        </div>
    );
};