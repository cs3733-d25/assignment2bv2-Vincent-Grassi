import {Title} from "./components/title.tsx";
import {Intro} from "./components/intro.tsx";
import './App.css'
import {Hobby1} from "./components/hobby1.tsx";

function App() {

    const names = ["Jacob Curtis", "_____"]


  return (
    <>
      <Title></Title>
        <Intro names={names}></Intro>
        <h1>Magic: the Gathering</h1>
        <Hobby1></Hobby1>
    </>
  )
}

export default App
