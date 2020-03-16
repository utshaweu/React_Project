import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <PageTop pagetitle="Project Name"/>
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;