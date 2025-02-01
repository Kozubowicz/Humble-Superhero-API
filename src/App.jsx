import './App.css';
import { ListOfHeroes } from './Components/ListOfHeroes';
import { NewHero } from './Components/NewHero';

function App() {
  return (
    <>
      <NewHero />

      {/* 
			The list of heroes should be rendered conditionally: 
				- Initially, the array with data is `undefined`, so a loader should be displayed. 
				- If there are no heroes, a message should appear: "No heroes have been added yet." 
				- Once heroes are downloaded, the table should be shown.
			*/}
      <ListOfHeroes />
    </>
  );
}

export default App;
