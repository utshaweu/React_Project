import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundSection from "../components/RefundDescription/RefundSection";
import Footer from "../components/Footer/Footer";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy"/>
                <PageTop pagetitle="Refund Policy"/>
                <RefundSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;