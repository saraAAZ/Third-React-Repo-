import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import CircularColor from './Loading'
import MediaCard from './Card2'

function App() {
    const url = "https://dummyapi.io/data/v1/user?limit=50";
    const [data, getData] = useState("");
    const getAllData = () => {
        axios.get(url, {
            'headers': {
                'app-id': "613e64e2748b558d779ce190"
            }
        }).then(response => {
            const allData = response.data.data;
            getData(allData);
        }).catch(err => alert(err))
    }
    useEffect(() => {
        getAllData()
    }, [])
    console.log(data)
    return (
        <div> 
          {
            !data ? <CircularColor/>: <div> {
                data.map((element, key) => {
                    return (
                        
                        <div key={key}>
                            <MediaCard data={element}/>
                            <hr></hr>
                        </div>
                    )

                })
            } </div>
        } </div>
    )

}

export default App;
