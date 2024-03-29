import Navbar from './components/Navbar';

export default function Home(props) {
  const userDatas = sessionStorage.getItem('users');
  const parse = JSON.parse(userDatas);

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
      <Navbar send={{nav, isLogin, cd: props.cd}} />
      <div className='container'>

        <div className="flexcenter">All Users and Password:</div>
        <br/>
        <div className="flexcenter">
          <pre style={{ display: 'block' }}>
            <code>
              {JSON.stringify(parse, null, 2)}
            </code>
          </pre>
        </div>

      </div>
    </div>
  );
}
