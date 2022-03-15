import "./App.css";
import { Profile } from "./components/profile/profile.component";
import { Login } from "./components/login/login.component";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Profile></Profile>
    </div>
  );
}

export default App;
