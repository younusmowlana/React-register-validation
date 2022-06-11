import { useState } from "react";
import "./App.css"
import FormInput from "./components/FormInput";


const App = () => {
  // const [username,setusername] = useState('');

  const handlesubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
  }

  console.log(username);
  return <div className="app">
    <form onSubmit={handlesubmit}>
      <FormInput name="username" placeholder="Username" />
      <FormInput name="email" placeholder="Email"/>
      <FormInput name="fullname" placeholder="Full name"/>
      <FormInput name="age" placeholder="Age"/>
      <button>Submit</button>
    </form>

  </div>;
};

export default App;