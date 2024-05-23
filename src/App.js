import './App.css';
import { ClubAchievements } from './components/ClubAchievements/ClubAchievements';
import { ClubInfo } from './components/ClubInfo/ClubInfo';
import { ClubMembers } from './components/ClubMembers/ClubMembers';

function App() {
  return (
    <div className="App">
      <ClubInfo/>
      <ClubAchievements/>
      <ClubMembers/>
    </div>
  );
}

export default App;
