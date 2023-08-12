import './App.css';
import Board from './TicTokToeGame/Board';

function App() {
  return (
    <div className="App">
    <section class="wrapper">
  <div class="top">Welcome To Tic Tac Toe</div>
  <div class="bottom" aria-hidden="true">Welcome To Tic Tac Toe</div>
 </section>
      <Board />
      
      <button className="btn" onClick={() => window.location.reload(false)}>
        
     
    <section class="wrapper">
  <div class="top">Restart</div>
  <div class="bottom" aria-hidden="true">Restart</div>
 </section>
        </button>
    </div>
    
  );
}

export default App;
