import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"
import ProjectsList from "../components/ProjectsList/ProjectsList"

function Home(){
    return(
        <>
            <Header/>
            <h1>HOME</h1>
            <p>Subtitulo</p>
            <Button buttonStyle="primary" arrow>Olá!</Button>
            <div className="container">
                <Hero/>
                <ProjectsList/>
            </div>
           
            <Banner title="Home" image="about.jpg"/>
            
            <Footer/>
        </>
    )
}

export default Home