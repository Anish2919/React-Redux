import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostAction } from "../redux/actions/postAction";

const SearchPost = () => {
  const [id, setId] = useState<number>(); 

  const dispatch = useDispatch(); 

  const handleSearch = (e:any) => {
    e.preventDefault(); 
    
    dispatch(fetchPostAction(id)); 

  }
  return (
    <>
        <form action="" className='md:w-[500px] mx-auto'  >
            <input onChange={(e) => setId(parseInt(e.target.value))} type="text" placeholder='search for post' className='md:w-[300px] my-3 rounded-sm px-1 text-black' />
            <button onClick={handleSearch} type='submit' className='block w-auto px-4 py-1 bg-cyan-700 mx-auto mb-3 hover:bg-cyan-600 rounded-md'>Search</button>
        </form>      
    </>
  );
}

export default SearchPost;
