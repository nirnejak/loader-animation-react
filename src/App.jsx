import React from "react";

import Loader from "./components/Loader";

import "./App.scss";

function App() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [animations, setAnimations] = React.useState([]);

  React.useEffect(() => {
    if (!isAnimating) {
      if (animations.length) {
        animateLoader();
      }
    }
  }, [isAnimating]);

  const handleClick = () => {
    addToAnimationQueue();
  };

  const addToAnimationQueue = () => {
    if (isAnimating) {
      setAnimations([...animations, 1]);
    } else {
      animateLoader();
    }
  };

  const animateLoader = () => {
    const updatedAnimations = animations;
    updatedAnimations.pop();

    setAnimations(animations);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div className="App">
      <div className="App__container">
        {isAnimating && <Loader isAnimating={isAnimating} />}
        <br />
        <button className="button" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
