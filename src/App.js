import MastermindBoard from "./components/MastermindBoard/MastermindBoard";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Guess the secret combination, you can try ten times!</h1>
      </header>
      <main>
        <MastermindBoard />
      </main>
    </div>
  );
}

export default App;
