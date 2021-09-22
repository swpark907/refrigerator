import './App.css';
import Search from './component/Search';
import SelectedItem from './component/SelectedItem';
import Result from './component/Result';
import { useState } from 'react';

function App({itemsData}) {

  const [selectedItem, setSelectedItem] = useState([]);

  const addSelectedItem = (item) => {
    const updated = [...selectedItem, item ]
    if(selectedItem.includes(item)){
      setSelectedItem(updated)
    }
    
  }

  return (
    <div className="App">
      <div className="container">
        <Search itemsData={itemsData} addSelectedItem={addSelectedItem}></Search>      
        <SelectedItem selectedItem={selectedItem}></SelectedItem>
      </div>
      
      <Result></Result>
    </div>
  );
}

export default App;
