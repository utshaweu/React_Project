import React, {Component, Fragment} from 'react';
import whiteLogo from '../../assets/image/logo1.png';
import blueLogo from '../../assets/image/logo2.png';
import {Nav, Navbar} from "react-bootstrap";
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark",
            pageTitle:props.title,
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll',navBarLogo:[blueLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand><NavLink className={this.state.navBarTitle}  to="/"><img src={this.state.navBarLogo} className="logo"/> Sajib Mahmud</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#1ABC9C'}} className={this.state.navBarItem} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#1ABC9C'}} className={this.state.navBarItem} to="/service">Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#1ABC9C'}} className={this.state.navBarItem} to="/course">Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#1ABC9C'}} className={this.state.navBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#1ABC9C'}} className={this.state.navBarItem} to="/contact">Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#1ABC9C'}} className={this.state.navBarItem} to="/about">About</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;