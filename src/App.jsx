import './App.css';
import Search from './component/Search';
import SelectedItem from './component/SelectedItem';
import Result from './component/Result';
import { useState } from 'react';
import Hero from './component/Hero';

function App({itemsData, naver, youtube}) {

  const [data, setData] = useState(itemsData.items)
  const [filteredItem, setFilteredItem] = useState();
  const [selectedItem, setSelectedItem] = useState([]);
  const [keyword, setKeyword] = useState();  
  const [naverData, setNaverData] = useState([]);
  const [youtubeData, setYoutubeData] = useState();
  const [NLoading, setNLoading] = useState(false);
  const [YLoading, setYLoading] = useState(false);
  


  const connectAPI = () => {
    setNLoading(true);
    setYLoading(true);
    naver
      .search(selectedItem.join(" ") + " 요리")
      .then((res) => {
        setNaverData(res);
      })
      .then((res) => {
        setNLoading(false);
      });
    youtube
      .search(selectedItem.join(" ") + " 요리")
      .then((res) => {
        setYoutubeData(res);
      })
      .then((res) => {
        setYLoading(false);
      });
  }

  const addSelectedItem = (item) => {
    const updated = [...selectedItem, item ]

    if(selectedItem.includes(item)){
      
      const updated2 = updated.filter(selected => selected !== item);
      setSelectedItem(updated2);
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
      <Hero></Hero>  
      <div className="container">
        <section className="search">
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
        </section>        
        <Result
        naverData={naverData}
        youtubeData={youtubeData}
        NLoading={NLoading}
      />
      </div>
    </div>
  );
}

export default App;
