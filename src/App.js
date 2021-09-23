import './App.css';
import Search from './component/Search';
import SelectedItem from './component/SelectedItem';
import Result from './component/Result';
import { useState } from 'react';

function App({itemsData}) {

  const [data, setData] = useState(itemsData.items)
  const [filteredItem, setFilteredItem] = useState();
  const [selectedItem, setSelectedItem] = useState([]);
  const [keyword, setKeyword] = useState();
  


  const addSelectedItem = (item) => {
    const updated = [...selectedItem, item ]
    if(selectedItem.includes(item)){
      setSelectedItem(updated)
    }
  }

  function autoComplete(e){

    const currentValue = e.target.value;
    setKeyword(currentValue)       
    let keyLeng = currentValue.length;

    const filtered = data.filter(item => item.name.includes(currentValue));
    console.log(filtered)
    setFilteredItem(filtered);
    
}

  

  return (
    <div className="App">
      <div className="container">
        <Search itemsData={itemsData} addSelectedItem={addSelectedItem} autoComplete={autoComplete} filteredItem={filteredItem}></Search>      
        <SelectedItem selectedItem={selectedItem}></SelectedItem>
      </div>
      
      <Result></Result>
    </div>
  );
}

export default App;
