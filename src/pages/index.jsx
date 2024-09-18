import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import {getSortedPostsData} from "@library/posts";
import {getSortedProjectsData} from "@library/projects";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import TeamSection from "@components/sections/Team";
import Maps from "@components/sections/Maps";
import Video from "@components/sections/Video";
import ProjectsMasonry from "@components/ProjectsMasonry";
import Masonry from "@components/sections/Masonry";

const TestimonialSlider = dynamic(
    () => import("@components/sliders/Testimonial"),
    {ssr: false}
);
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
    ssr: false,
});


const Home1 = (props) => {
    return (
        <Layouts>
            <HeroOneSection/>
            <Video videoId="46yXOSytDas"/>
            <AboutSection/>
            <Masonry projects={props.projects}/>
            {/*<ProjectsMasonry projects={props.projects} />*/}
            <TestimonialSlider/>
            <TeamSection/>
            <Maps/>
        </Layouts>
    );
};
export default Home1;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();
    const allProjects = getSortedProjectsData();

    return {
        props: {
            posts: allPosts,
            projects: allProjects,
        },
    };
}
