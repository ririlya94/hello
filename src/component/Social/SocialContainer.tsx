import React from "react";
import { SOCIAL_SECTION } from "../../constant/constant";
import { useContext } from 'react'
import ThemeContext from "../../context/ThemeContext";
import { CustomLink } from "../../link/CustomLink";
import { Title2 } from "../Text/Title2";

export type SocialContainerProps = {};

export const SocialContainer: React.FC<SocialContainerProps> = () => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

    return (
        <div className="flex flex-row space-x-6">
            {SOCIAL_SECTION.map((social, index) => {
                return (
                    <CustomLink href={social.link} key={index}>
                        {currentTheme === 'light' ?
                            <social.icon className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" /> :
                            <social.iconDark className="h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" />
                        }

                        {/* <div>
                        <social.icon className="block dark:hidden h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" />
                        <social.iconDark className="hidden dark:block h-[60px] w-[60px] lg:h-[60px] lg:w-[60px]" /> </div>*/}
                    </CustomLink>
                );
            })}

            <button className="bg-transparent px-6 py-2 text-T2 text-base-light dark:text-base-text-purple dark:hover:text-white hover:text-black font-poppins font-semibold 
            border-base-light dark:border-base-text-purple border-2  
            hover:shadow-[inset_13rem_0_0_0]
             hover:shadow-base-light dark:hover:shadow-base-text-purple duration-[400ms,700ms] transition-[color,box-shadow]"
                onClick={() => { }}>
                RESUME
                {/* <a href={"https://drive.google.com/uc?export=download&id=1hxcCX5viKAe89BPQQgANUVFRbgz4ruvo"} download> RESUME </a> */}

            </button>

        </div >
    );
};