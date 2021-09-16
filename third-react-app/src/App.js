import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Information from './Data';

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
console.log(data)
    return (
        <div>

            <div>
              {
                // <Information dataArray = {data}/>
                data.map((element,key)=>{
                  return(
                    <div key={key}>
                      <Information element={element}/>
                    </div>
                  )
                })
               
              }
            </div>
        </div>
    )

}

export default App;
