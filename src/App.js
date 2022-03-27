import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume';
import resume from './resume';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Resume about={resume.about} jobs={resume.jobs} />
    </div>
  );
}

export default App;
