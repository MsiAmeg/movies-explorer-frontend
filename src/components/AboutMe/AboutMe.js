import LandingTitle from '../LandingTitle/LandingTitle.js';
import './AboutMe.css';
import MyCard from '../MyCard/MyCard.js';

function AboutMe() {
  return (
    <section className='about-me'>
      <LandingTitle text='Студент' className='landing-title_about-me' />
      <MyCard />
    </section>
  );
};

export default AboutMe;
