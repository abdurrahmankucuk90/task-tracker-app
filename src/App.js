
import './App.css';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks'

function App() {
  return (
    <div className='mainDiv container text-danger' style={{width:'30rem'}}>
      <Header/>
      <Tasks/>
    </div>
  );
}

export default App;
