import './styles/App.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        This is 'Home' page

        <div>Link to: <span><Link to='/page'>Page</Link></span></div>
      </header>
    </div>
  );
}
