import './App.css';
import Characters from './Components/Characters'
import { useEffect, useState } from 'react';


function App() {

  const [characterList, setcharacterList] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((response) => setcharacterList(response.results))
      .catch((err) => console.log(err))

    return;
  }, [])

  console.log(characterList);

  return (
    <div>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
