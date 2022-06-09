import "./App.css"
import FormInput from "./components/FormInput";


const App = () => {
  return <div className="app">
    <form>
      <FormInput placeholder="Username"/>
      <FormInput placeholder="Email"/>
      <FormInput placeholder="Full name"/>
      <FormInput placeholder="Age"/>
    </form>

  </div>;
};

export default App;