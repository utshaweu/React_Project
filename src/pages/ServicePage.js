import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
               <TopNavigation title="Service"/>
               <PageTop pagetitle="Get My Service"/>
               <Services/>
               <ContactSection/>
               <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;