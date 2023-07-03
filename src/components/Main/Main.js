import Header from '../Header/Header.js';
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
            <Header />
            <main className='main'>
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