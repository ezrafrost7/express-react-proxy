import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import LocalPage from './pages/LocalPage';
import PricePage from './pages/PricePage';

class App extends React.Component {
    _omnioutConnection;
    _omnioutLoaded;
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            title: 'Garrett Love',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Partners', path: '/partners' },
                { title: 'Contact', path: '/contact' },
                { title: 'Price', path: '/path' },
            ],
            home: {
                title: "Steward's Insurance Co",
                subTitle: 'Prices that are negotiable',
                text: 'View Our Quotes',
            },
            about: {
                title: 'About Us',
            },
            contact: {
                title: 'Contact Information',
            },
            quote: {
                title: 'Our Quotes',
            },
            price: {
                title: 'Our Prices',
                subTitle: 'Affordable for All',
            },
        };
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="primary" variant="dark" expand="lg">
                        <Navbar.Brand>Steward's Insurance Co</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                                <Link className="nav-link" to="/quote">
                                    Quote
                                </Link>
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                                <Link className="nav-link" to="/price">
                                    Price
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route
                        path="/home"
                        render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}
                    />
                    <Route
                        path="/"
                        exact
                        render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}
                    />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/quote" render={() => <QuotePage title={this.state.quote.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                    <Route path="/price" render={() => <PricePage title={this.state.price.title} subTitle={this.state.price.subTitle} />} />
                    <Route
                        path="/vlocityomniscript/offplatformLifeInsuranceExample2English"
                        render={() => <QuotePage title={this.state.quote.title} />}
                    />
                    <Footer />
                </Container>
            </Router>
        );
    }
}
export default App;
