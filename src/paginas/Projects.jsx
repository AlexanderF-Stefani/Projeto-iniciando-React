import Header from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

function Projects(){
    return(
        <>
            <Header />
            <Banner title ="Projects" image="project.jpg" />
            <div className="container">
                <ProjectList />
            </div>
            <Footer />
        </>
    )
}

export default Projects
