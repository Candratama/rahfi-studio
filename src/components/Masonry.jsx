import React, {useState} from "react";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown"; // Import the new component

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
                <div className="mil-category-buttons-wrapper">
                    <div className="mil-category-buttons d-flex justify-content-center mb-4">
                        <button
                            type='button'
                            className={`mil-button-portfolio mil-icon-button mil-btn-space ${selectedCategory === "all" ? "selected" : ""}`}
                            onClick={() => handleCategoryChange("all")}
                        >
                            <span className="mil-button-text">All Projects</span>
                            <span className="mil-button-icon">&#128193;</span> {/* Camera icon */}
                        </button>
                        <button
                            type='button'
                            className={`mil-button-portfolio mil-icon-button mil-btn-space ${selectedCategory === "photography" ? "selected" : ""}`}
                            onClick={() => handleCategoryChange("photography")}
                        >
                            <span className="mil-button-text">Photography</span>
                            <span className="mil-button-icon">&#128248;</span> {/* Camera with flash icon */}
                        </button>
                        <button
                            type='button'
                            className={`mil-button-portfolio mil-icon-button mil-btn-space ${selectedCategory === "videography" ? "selected" : ""}`}
                            onClick={() => handleCategoryChange("videography")}
                        >
                            <span className="mil-button-text">Videography</span>
                            <span className="mil-button-icon">&#127909;</span> {/* Video camera icon */}
                        </button>
                    </div>
                </div>
                <div className="container-portfolio mil-portfolio mil-mb-60 masonry">
                    {filteredProjects.map((project, key) => (
                        <Link href={`/projects/${project.id}`} className="mil-more" key={`project-${key}`}>
                            <div className={`masonry-item ${project.category}`}>
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