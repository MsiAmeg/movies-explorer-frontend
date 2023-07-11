import './LandingTitle.css';

function LandingTitle({ text, className }) {
  return (
    <h3 className={className ? "landing-title " + className : "landing-title"}>
      {text}
    </h3>
  );
};

export default LandingTitle;
