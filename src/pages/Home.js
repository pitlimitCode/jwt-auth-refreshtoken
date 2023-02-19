
import Navbar from './components/Navbar';

export default function Home() {
  const isLogin = sessionStorage.getItem('login');
  let nav;
  if (isLogin === 'true'){
    nav = 
      {
        navleft: {
          path: '/profile',
          name: 'Profile'
        },
        navright: {
          path: '/login',
          name: 'Logout'
        }
      }
  } else {
    nav = 
    {
      navleft: {
        path: '/profile',
        name: ''
      },
      navright: {
        path: '/login',
        name: 'Register / Login'
      }
    }
  }

  return (
    <div className="App">
      <Navbar send={{nav, isLogin}} />
      <div className='container'>

        <div className="flexcenter">
          This is 'Home' page
        </div>

      </div>
    </div>
  );
}
