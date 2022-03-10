import {useState, useEffect} from "react";


const InfiniteLoop = () => {

    //const [data,setData] = useState(null);
    const [count,setCount] = useState(0)

    /* useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setData(data))
    }, []) */

    useEffect(() => {
        setCount((prev) => prev + 1)
    }, []) //they call it independncies array




    console.log('rendered');
    return <p>Mounted</p> 
}

export default InfiniteLoop