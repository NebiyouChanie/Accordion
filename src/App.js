import Reactcd from 'react';
import Questions from './Questions';

function App() {
  return (
    <div className="contianer">
        <h1>General Questions</h1>
        <div className="accordion">
            <Questions />
        </div>
    </div>
  );
}

export default App;
