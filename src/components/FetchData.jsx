import {useState, useEffect} from "react";


const FetchData = () => {
    const [data, setData] = useState(null)
    const [search, setSearch] = useState(1);

    const url = `https://jsonplaceholder.typicode.com/posts/${search}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [url])
    console.log(url);



    return (
        //<div>{data ? data.map(user => <p key={user.id}>{user.name}</p>) : <p>Loading...</p> }</div>
        //<div>{data && data.map(user => <p key={user.id}>{user.name}</p>) : <p>Loading...</p> }</div>
        <div>
            {data && <p>{data.title}</p>}
            <button onClick={() =>setSearch((prev) => prev + 1)}>Next Post</button>

        </div>
    )
}

export default FetchData;