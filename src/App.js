import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Homepage} from "./pages/homepage/homepage"
import {Rules} from "./pages/rulespage/rules"
import {Quizzpage} from "./pages/quizzpage/quizzpage"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/rules" element={<Rules/>} />
      <Route path="/quizz" element={<Quizzpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
