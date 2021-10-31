import {Link} from 'react-router-dom';
const NotFound = () => {
    return (  
        <div className="not-found">
          <h2>Sorry</h2>
          <h6>Invalid url</h6>
          <Link to='/'>Back to home page..</Link>
        </div>
    );
}
 
export default NotFound;