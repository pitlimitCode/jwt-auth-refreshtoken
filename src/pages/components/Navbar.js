import { Link } from 'react-router-dom';

export default function Profile(porps) {
  function handleLogout() {
    sessionStorage.setItem('activeUser', null);
    sessionStorage.setItem("login", 'false');
    sessionStorage.setItem('token', null);
    sessionStorage.setItem('tokenExpired', null);
  }
  
  return (
    <div className="navbar">
      <div className='container'>
        <div className='navBarCenter'>

          <div className='navPart flexleft'>
            <Link to={porps.send?.nav?.navleft.path}>
              {porps.send?.nav?.navleft.name}
            </Link>
          </div>

          <div className='navPart flexcenter'>
            { (porps.send?.isLogin === 'true') 
              ? <div className='counterBorder'>
                  <div className='counter'> {porps.send?.cd} </div>
                </div>
              : <></>
            }
          </div>

          <div className='navPart flexright'>
            { (porps.send?.isLogin === 'true') 
              ? <div onClick={handleLogout}>
                  <Link to={porps.send?.nav?.navright.path}>
                    {porps.send?.nav?.navright.name}
                  </Link>
                </div>
              : <Link to={porps.send?.nav?.navright.path}>
                  {porps.send?.nav?.navright.name}
                </Link>
            }
          </div>

        </div>
      </div>
    </div>
  );
}
