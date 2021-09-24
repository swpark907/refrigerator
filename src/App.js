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
      
      const updated2 = updated.filter(selected => selected !== item)    
      console.log(updated2)  
      setSelectedItem(updated2)
      return;
    }

    setSelectedItem(updated)
  }

  function autoComplete(e){
    const currentValue = e.target.value;
    setKeyword(currentValue);

    const filtered = data.filter(item => item.name.includes(currentValue));    
    setFilteredItem(filtered);    
  }

  function resetSelected(){
    setSelectedItem([]);
  }

  return (
    <div className="App">
      <div className="container">
        <Search itemsData={itemsData} addSelectedItem={addSelectedItem} autoComplete={autoComplete} filteredItem={filteredItem} itemsData={itemsData} resetSelected={resetSelected} selectedItem={selectedItem}></Search>      
        <SelectedItem selectedItem={selectedItem}></SelectedItem>
      </div>
      
      <Result></Result>
    </div>
  );
}

export default App;
