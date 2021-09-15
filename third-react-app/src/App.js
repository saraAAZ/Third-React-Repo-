import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Information  from './Data';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
    const [data, getData] = useState("");
    const getAllData = () =>{
      axios.get(url).then(response=>{
        const allData= response;
        getData(allData);
      }).catch(err=>alert(err))
    }
    useEffect(() => {
      getAllData()
      console.log({data})

    })
    
    return (<div>
      <Information data={data}/>           
      
    </div>)
}

export default App;
