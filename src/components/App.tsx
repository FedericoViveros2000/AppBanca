import { useState, useEffect } from 'react'
import { AppState } from '../interfaces/userInterface';

const App = () => {
  const ENPOINT_PLACEHOLDER = "https://jsonplaceholder.typicode.com/users";
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<AppState['user']>([]);

  const getData = async () => {
    try{
      let response = await fetch(ENPOINT_PLACEHOLDER);
      let data = await response.json();
      setUser(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <div>
        {
          user.map(us => <p key={us.id}>{us.name}</p>)
        }
        <p>{count}</p>
        <button className="bg-blue-500 p-3" onClick={() => setCount(count + 1)}>Sumar</button>
      </div>
    </div>
  )
}

export default App
