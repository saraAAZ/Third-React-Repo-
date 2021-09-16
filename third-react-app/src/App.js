import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Information from './Data';
import CircularColor from './Loading'
import MediaCard from './Card'

function App() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [data, getData] = useState("");
    const getAllData = () => {
        axios.get(url).then(response => {
            const allData = response.data;
            getData(allData);
        }).catch(err => alert(err))
    }
    useEffect(() => {
        getAllData()
    }, [])
    return (
        <div> {
          !data ? <CircularColor/> : <div> {data.map((element, key) => {
                    return (
                        <div key={key}>
                            <MediaCard data={element} />
                            <hr></hr>
                        </div>
                    )

                })
            } </div>
        } </div>
    )

}

export default App;
