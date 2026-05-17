import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"

function Home(){
    return(
        <>
            <Header/>
            <h1>HOME</h1>
            <p>Subtitulo</p>
            <Button buttonStyle="pimary" arrow>Olá!</Button>
            <Footer/>
        </>
    )
}

export default Home