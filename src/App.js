import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Homepage} from "./pages/homepage/homepage"
import {Rules} from "./pages/rulespage/rules"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/rules" element={<Rules/>} />
      </Routes>
    </div>
  );
}

export default App;
