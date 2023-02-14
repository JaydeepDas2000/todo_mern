import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';


function App() {
  return (
    <div className="container">
      <Header/>
      <TodoForm/>
    </div>
  );
}

export default App;
