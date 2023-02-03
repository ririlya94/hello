import { Contact } from "../component/Pages/Contact";
import { Experience } from "../component/Pages/Experience";
import { Home } from "../component/Pages/Home";
import { Project } from "../component/Pages/Project";

export type HeaderSection = {
    title: string;
    link: string;
    component?: any
};

export const HEADER_SECTION: HeaderSection[] = [
    {
        title: "HOME",
        link: "/hello",
        component: <Home />
    },
    {
        title: "EXPERIENCE",
        link: "/hello/experience",
        component: <Experience />
    },
    {
        title: "PROJECT",
        link: "/hello/project",
        component: <Project />
    },
    {
        title: "CONTACT",
        link: "/contact",
        component: <Contact />
    }
];