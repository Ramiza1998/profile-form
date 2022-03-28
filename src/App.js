
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileForm'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [Profiles, setProfiles]= useLocalStorage("profiles", [])

  
  const updateProfiles = (profile) =>{
    let arr =allProfiles;
    arr.push(profile);
    setProfiles([...arr]);
  };
  return (
    <div className='app'>
    <h1>Profile Maker</h1>
    <div>
    <ProfileForm submit={updateProfiles}/>
    <hr/>
    <div className='list'>
    {Profiles.map((person,index)=>(
      <ProfileCard key={index} card={person}/>
    ))}

    </div>
    </div>
    
    </div>
  )
}

export default App