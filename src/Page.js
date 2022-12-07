import './styles/App.css';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="App">
      <header className="App-header">
        This is 'Page' page

        <div>Link to: <span><Link to='/'>Home</Link></span></div>
      </header>
    </div>
  );
}
