import Button from 'react-bootstrap/Button';
import './App.css'
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './assets/components/Header/Header';
import Home from './assets/components/Home/Home';

function App() {

  const navigation = useNavigation


  return (
    <div className="App">
      <Header></Header>
      <div>{navigation.state === 'loading' && 'Loading..'} </div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
