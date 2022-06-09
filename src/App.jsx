import { useState } from "react";
import "./App.css"
import FormInput from "./components/FormInput";


const App = () => {
  const [username,setusername] = useState('');

  console.log(username);
  return <div className="app">
    <form>
      <FormInput placeholder="Username" setusername={setusername}/>
      <FormInput placeholder="Email"/>
      <FormInput placeholder="Full name"/>
      <FormInput placeholder="Age"/>
      <button>Submit</button>
    </form>

  </div>;
};

export default App;