import '../styles/App.css';
// import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>

        <div className="flexcenter">
          This is 'Home' page
        </div>

      </div>
    </div>
  );
}
