import './App.css';
import Dictionary from './Dictionary';

const dictionaryData=
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <Dictionary data={dictionaryData}/>
    </div>
  );
}

export default App;
