import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src="./dictionarylogo2 (3).png" className="App-logo" alt="logo" />
      </header>
      
      <main>
      <Dictionary />

      </main>

      <footer>
        <strong>Created by Shanese Mattiske <a href="https://github.com/moooosh/dictionary-project" target="_blank" rel="noreferrer">Github</a> | <a href="https://pedantic-pasteur-dc21dc.netlify.app/" target="_blank" rel="noreferrer">Netlify</a> </strong>
        </footer>
    </div>
  );
}

export default App;
