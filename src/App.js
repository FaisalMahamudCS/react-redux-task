import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Header from './component/Header';
import { Routes, Route, Link } from "react-router-dom";
import Counter1 from './component/Counter1'
import Counter3 from './component/Counter3';
function App() {
  return (
    <div className="App">
      <Header></Header>
    
     <Routes>
        <Route path="/counter1" element={<Counter1></Counter1>} />
        <Route path="/counter3" element={<Counter3></Counter3>} />
        <Route path="/" element={<Counter></Counter>} />
     
      </Routes>
    </div>
  );
}

export default App;
