import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Posts from './components/posts';

function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/posts"
                    render={props => <Posts sortBy="newest" {...props} />}
                    />
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </div>
      </div>
  );
 }
 
 export default App;