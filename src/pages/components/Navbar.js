
import { Link } from 'react-router-dom';

export default function Profile(test) {
  // console.log('nav', test)

  function handleLogout() {
    sessionStorage.setItem("login", 'false')
  }

  return (
    <div className="navbar">
      <div className='container'>
        <div className='navBarCenter'>

          <div className='navPart flexleft'>
            <Link to={test.send?.nav?.navleft.path}>
              {test.send?.nav?.navleft.name}
            </Link>
          </div>

          <div className='navPart flexcenter'>
            { (test.send?.isLogin === 'true') 
              ? <div className='counterBorder'>
                  <div className='counter'> 15 </div>
                </div>
              : <></>
            }
          </div>

          <div className='navPart flexright'>
            { (test.send?.isLogin === 'true') 
              ? <div onClick={handleLogout}>
                  <Link to={test.send?.nav?.navright.path}>
                    {test.send?.nav?.navright.name}
                  </Link>
                </div>
              : <Link to={test.send?.nav?.navright.path}>
                  {test.send?.nav?.navright.name}
                </Link>
            }
          </div>

        </div>
      </div>
    </div>
  );
}
