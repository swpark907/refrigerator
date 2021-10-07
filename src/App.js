import './App.css';
import Search from './component/Search';
import SelectedItem from './component/SelectedItem';
import Result from './component/Result';
import Loading from './component/Loading';
import { useState } from 'react';

function App({itemsData, naver, youtube}) {

  const [data, setData] = useState(itemsData.items)
  const [filteredItem, setFilteredItem] = useState();
  const [selectedItem, setSelectedItem] = useState([]);
  const [keyword, setKeyword] = useState();  
  const [naverData, setNaverData] = useState([]);
  const [youtubeData, setYoutubeData] = useState();
  


  const connectAPI = () => {    
    naver.search(selectedItem.join(' ') + ' 요리')
    .then((res)=> {setNaverData(res)}) ;
    youtube.search(selectedItem.join(' ')+' 요리').then((res)=> setYoutubeData(res)) ;
    
  }

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

  const autoComplete = (e) => {
    const currentValue = e.target.value;
    setKeyword(currentValue);

    const filtered = data.filter(item => item.name.includes(currentValue));    
    setFilteredItem(filtered);    
  }

  const resetSelected = () => {
    setSelectedItem([]);
    setYoutubeData();
    setNaverData();
  }

  return (
    <div className="App">     
      <Loading></Loading> 
      <div className="container">
        <Search
          itemsData={itemsData}
          addSelectedItem={addSelectedItem}
          autoComplete={autoComplete}
          filteredItem={filteredItem}          
          resetSelected={resetSelected}
          selectedItem={selectedItem}
          connectAPI={connectAPI}
        />
        <SelectedItem selectedItem={selectedItem}/>
      </div>

      <Result
        naverData={naverData}
        youtubeData={youtubeData}
      />
    </div>
  );
}

export default App;
