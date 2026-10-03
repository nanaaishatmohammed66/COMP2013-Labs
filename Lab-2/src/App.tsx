
import './App.css'
import ResortContainer from "./components/cardblock"; 
import listings from "./Data/data";

function App() {
  return (
    <div>
      <h1>Resorts Lite</h1>
      <ResortContainer data={listings} />
    </div>
  );
}

export default App;
