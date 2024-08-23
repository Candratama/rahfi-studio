import {useState} from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

import {getSortedProjectsData} from "@library/projects";
import Masonry from "@components/Masonry";

const Projects = (props) => {
    return (
        <Layouts>
            <PageBanner pageTitle={"Designing a <br> Better <span className=\"mil-thin\">World Today</span>"}
                        breadTitle={"Portfolio"} anchorLabel={"Our works"} anchorLink={"#portfolio"}/>

            <Masonry projects={props.projects}/>

            <CallToActionSection/>

        </Layouts>
    );
};
export default Projects;

export async function getStaticProps() {
    const allProjects = getSortedProjectsData();

    return {
        props: {
            projects: allProjects
        }
    }
}