import LandingHeader from '../LandingHeader/LandingHeader.js';
import Promo from '../Promo/Promo.js';
import About from '../About/About.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';
import './Main.css';

function Main () {
    return (
        <>
            <LandingHeader />
            <main>
                <Promo />
                <About />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
};

export default Main;