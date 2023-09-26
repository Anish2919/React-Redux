import './App.css'
import Posts from './components/Posts'
import SearchPost from './components/SearchPost'

function App() {
  
  return (
    <>
      <div className="mt-0">
        <div className="form_body bg-cyan-900 text-white text-center">
            <h2 className='text-3xl font-semibold py-4 '>React Redux Project</h2>
            <p className='py-3'>This project is simple React Redux project that fetches data with search functionality from an API</p>
            <div className="form w-full pb-2">
              <SearchPost/>
            </div>
        </div> 
        <div className="post_body bg-gray-200 text-center text-xl py-4">
            <Posts/>
        </div>
      </div>
    </> 
  )
}

export default App
