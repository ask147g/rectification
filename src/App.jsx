import { useState } from 'react'
import './App.css'
import Input from './components/input'
import { buttonText } from "./consts/text";

function App() {
  const [textButton, setButtonText] = useState(buttonText[0]);

  const changeText = () => {
    if (textButton == buttonText[0]) {
      setButtonText(buttonText[1]);
    } else {
      setButtonText(buttonText[0])
    }
  };

  return (
    <>
      <h1>Параметры ректификации бора</h1>
      <Input textButton={textButton} changeText={changeText}/>
    </>
  )
}

export default App
