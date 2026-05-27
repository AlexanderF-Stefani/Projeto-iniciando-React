import Header from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

function Contact(){
    return(
        <>
            <Header />
            <Banner title="Contact" image="contact.jpg" />
            <divv>
                <ContactForm />
            </divv>
        </>
    )
}

export default Contact
