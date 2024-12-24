import './App.css';
import Toggle from './components/state/toggle';
import YoutubeList from './components/youtube/YoutubeList';
function App() {
  const name="HcThanh";
  return (
    <div>
      {/* {<YoutubeList>
        {name}
      </YoutubeList>} */}
      <Toggle></Toggle>
    </div>
  );
}

export default App;
