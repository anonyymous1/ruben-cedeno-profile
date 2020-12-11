import {BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Weather from './components/Weather'
import Github from './components/Github'

import './App.css';
import PortfolioDetails from './components/PortfolioDetails'

function App() {

  const portfolioPieces= [
    {
      name:"BatteSnake",
      id: 1,
      language: "Javascript",
      difficulty:"Medium",
      completed:"Yes"
    },
    {
      name:"Pokedex",
      id: 2,
      language: "Javascript",
      difficulty:"Easy",
      completed:"Yes"
    },
    {
      name:"MyCloset",
      id: 3,
      language: "Javascript",
      difficulty:"Medium",
      completed:"Yes"
    },
    {
      name:"BurgerStacker",
      id: 4,
      language: "Javascript",
      difficulty:"Hard",
      completed:"Yes"
    },
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        
        <Route path="/" exact component={Home}/>
        <Route path="/Weather" exact component={Weather}/>
        <Route path="/Github" exact component={Github}/>
        <Route path="/portfolio" exact render={()=>{ return <Portfolio portfolioPieces={portfolioPieces}/> }}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio/:id"
          render={(info)=>{
            const id = info.match.params.id;
            const targetProject = portfolioPieces.find((p)=> p.id === parseInt(id))
            console.log(targetProject)
            return <PortfolioDetails project={targetProject}/>
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
