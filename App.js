import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>To Do App</h1>
        <main>
        <TodoList/>
        
        </main>
        <footer>
          <p>All rights reserved &copy;</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
