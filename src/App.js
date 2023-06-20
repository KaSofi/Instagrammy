
import About from './About';
import './App.css';
import BlockOfPosts from './BlockOfPosts';
import Carusel from './Carusel';
import Header from './Header';
import UnderLines from './UnderLines';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className='monitorSize'>
    <About/>
    <Carusel/>
    <hr />
    <UnderLines/>
    <BlockOfPosts/>
    </div>
    </div>

  );
}

export default App;
