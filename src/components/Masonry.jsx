import React, {useState} from "react";
import Link from "next/link";
import LinesIcon from "@layouts/svg-icons/Lines";
import Data from "@data/sections/about.json";

const Masonry = ({projects}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <>
            {/* portfolio */}
            <section id="portfolio">
                <h2 className="mil-up mil-mb-60 mil-mt-60 d-flex justify-content-center">Portfolio</h2>
                <div className="d-flex justify-content-center mb-4">
                    <button
                        type='button'
                        className={`mil-button-portfolio mil-icon-button mil-btn-space ${selectedCategory === "all" ? "selected" : ""}`}
                        onClick={() => handleCategoryChange("all")}
                    >
                        All Projects
                    </button>
                    <button
                        type='button'
                        className={`mil-button-portfolio mil-icon-button mil-btn-space ${selectedCategory === "photography" ? "selected" : ""}`}
                        onClick={() => handleCategoryChange("photography")}
                    >
                        Photography
                    </button>
                    <button
                        type='button'
                        className={`mil-button-portfolio mil-icon-button mil-btn-space ${selectedCategory === "videography" ? "selected" : ""}`}
                        onClick={() => handleCategoryChange("videography")}
                    >
                        Videography
                    </button>
                </div>
                <div className="container-portfolio mil-portfolio mil-mb-60 masonry">
                    {filteredProjects.map((project, key) => (
                        <Link href={`/projects/${project.id}`} className="mil-more">
                            <div key={`project-${key}`} className={`masonry-item ${project.category}`}>
                                <img className="img-fluid" src={project.image} alt={project.image}/>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Masonry;