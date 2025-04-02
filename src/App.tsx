import {Title} from "./components/title.tsx";
import {Intro} from "./components/intro.tsx";
import {Hobby1} from "./components/hobby1.tsx";
import {Hobby2} from "./components/hobby2.tsx";
import './App.css'

function App() {

    const names = ["Jacob Curtis", "Vincent Grassi"]


  return (
    <>
      <Title></Title>
        <Intro names={names}></Intro>
        <h1>Magic: the Gathering</h1>
        <Hobby1></Hobby1>
        <h1>Hiking</h1>
        <Hobby2></Hobby2>
    </>
  )
}

export default App
