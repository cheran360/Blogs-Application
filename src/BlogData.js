import { useParams } from "react-router-dom";
import {Button} from "react-bootstrap";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";
const BlogData = () => {
    const { id } = useParams();
    const { error, isPending, data:blog } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id,{
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="Blog-data">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}  
            {blog && <div>
                <article>
                 <h2>{blog.title}</h2>
                 <hr />
                 <h5>{blog.body}</h5>
                 <hr /> 
                 --by <h3>{blog.author}</h3>
                </article>
                <div className='btns'>
                <Button 
                variant="danger"
                onClick={handleClick}>Delete</Button>
                </div>
                </div>
                
                }
        </div>
     );
}
 
export default BlogData;