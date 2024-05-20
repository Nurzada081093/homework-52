import './App.css';
import Card from './components/Card/Card.tsx';

const App = () => {

  return (
    <>
      <div className="playingCards faceImages">
        <Card rank={"k"} suit={"diams"}/>
        <Card rank={"9"} suit={"hearts"}/>
        <Card rank={"q"} suit={"clubs"}/>
      </div>
    </>
  );
};

export default App;
