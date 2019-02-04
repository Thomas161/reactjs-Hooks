import React, {useState,useEffect, useRef} from "react";
import axios from "axios";


export default function App2(){

  

    const [results, setResults]= useState([]);
    const [query, setQuery] = useState('react hooks');
    const clearInputRef =useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
//     useEffect(()=> {

//         getResults();
//     }, []);
    
//     const getResults= async ()=>{
//         const response = await axios.get("http://hn.algolia.com/api/v1/search?query=reacthooks");

// setResults(response.data.hits)
//     }

  //useEffects with cleanup to ensure that component unmounts
    useEffect(()=> {

        getResults();
    }, []);

    const getResults= async ()=>{
        try{
        setLoading(true);
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);

setResults(response.data.hits);
        }catch(err){

setError(err);
        }
        setLoading(false);
    }

const handleSearch=(event)=> {
event.preventDefault();
getResults();
}
const handleClearSearch=()=> {
setQuery("");
clearInputRef.current.focus();
}

    return (
    <>
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest=true shadow-lg rounded">
            <img src="https://icon.now.sh/monetization_on/6FD61D" alt="Money" className="float-right h-12" />
    <h1 className="text-grey-darkest font-thin">Hook News</h1>
    <form onSubmit={handleSearch} className="mb-2">
    <input type="text" onChange={(e)=> setQuery(e.target.value)}
    value={query}
    ref={clearInputRef} className="border p-1 rounded"
    ></input>
    <button type="submit" className="bg-orange rounded m-1 p-1">Search</button>
            <button type="button" onClick={handleClearSearch} className="bg-teal  text-white p-1 rounded">Clear Search</button>
    </form>
{loading ? <h1 className="font-bold text-orange-dark">Not Yet Loaded</h1> :<ul className="list-reset leading-normal">
    {results.map(result => <li key={result.objectID}>
    <a href={result.url} className="hover:text-indigo-darkest">{result.title}</a>
        </li>
    )}
</ul>}
{error && <div className="text-red font-bold">{error.message}</div>}
        </div>
</>
    );
    
}