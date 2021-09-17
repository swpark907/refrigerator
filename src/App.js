import './App.css';
import Search from './component/Search';
import SelectedItem from './component/SelectedItem';
import Result from './component/Result';

function App({items}) {
  return (
    <div className="App">
      <div className="container">
        <Search items={items}></Search>      
        <SelectedItem></SelectedItem>
      </div>
      
      <Result></Result>
    </div>
  );
}

export default App;
