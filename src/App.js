import './App.css'
import {
  Switch, Route
} from "react-router-dom";
import { Container } from 'react-bootstrap'
import SimpleInput from './components/SimpleInput';
import SimpleForm from "./components/SimpleForm";
import MainNavbar from "./components/layout/Navbar";
import Pokedex from "./components/Pokedex";
import PokedexWithCustomHook from './components/PokedexWithCustomHook';

function App() {
  return (
    <>
      <MainNavbar />
      <Container>
        <div className="first-section">
          <Switch>
            <Route exact path="/" render={() => <SimpleInput />} />
            <Route exact path="/simple/input" render={() => <SimpleInput />} />
            <Route exact path="/simple/form" render={() => <SimpleForm />} />
            <Route exact path="/pokemon/:id" render={(props) => <Pokedex {...props} />} />
            <Route exact path="/custom/pokemon/:id" render={(props) => <PokedexWithCustomHook {...props} />} />
          </Switch>
        </div>
      </Container>
    </>
  );
}

export default App;
