import {useDispatch, useSelector} from 'react-redux'; 
import {useEffect} from 'react'; 
import { fetchPostsAction } from '../redux/actions/postAction';
import Loading from './Loading';

const Posts = () => {
  const dispatch = useDispatch(); 

  const loading = useSelector((state:any) => state.loading); 
  const error = useSelector((state: any) => state.error); 
  const posts = useSelector((state: any) => state.posts); 

  
  useEffect(() => {
    dispatch(fetchPostsAction()); 
  }, []); 

  return (
    <>
        <h1 className="text-3xl py-3 font-bold">Total Posts: {loading? (<span>loading...</span>) : posts.length } </h1>
        <div className="md:w-2/3 mx-auto bg-gray-50 rounded-md mb-3 py-4 font-bold">
        { 
          loading ? (<Loading/>) : 
          error ? (<span>{error.message}</span>) : (
            posts.map((post:any) => (
              <>
                <div key={post.id} className="md:w-2/3 mx-auto bg-gray-200 rounded-md mb-3 border">
                  <h1 className="text-3xl py-3 font-bold mb-3">{post.title} </h1>
                  <p>{post.body}</p>
                </div>      
              </>
            )) 
          )
        }
        </div>          

    </>
  );
}

    //  <div key={posts.id} className="md:w-2/3 mx-auto bg-gray-50 rounded-md mb-3">
    //    <h1 className="text-3xl py-3 font-bold mb-3">{posts.title} </h1>
    //    <p>{posts.body}</p>
    //  </div>       


export default Posts;
