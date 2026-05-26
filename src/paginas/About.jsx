import Header from "../components/Banner/Banner"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

function About(){
    return(
        <>
            <Header />
            <Banner title="About" image="about.jpg" />
            <div className="container">
                ---------
            </div>
            <Footer />
        </>
    )
}

export default About
