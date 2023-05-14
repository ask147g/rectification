import React from "react";
import * as Init from '../consts/init'
import Output from "./output";
import { nozzles } from "../consts/text";

class Input extends React.Component {
  constructor() {
    super();
  }

  state = {
    calculate: false,
    temperature: 0
 }

  add() {
    this.props.changeText();
    this.setState({calculate: !this.state.calculate})
  }

  render() {
  return (
    <>
        <div className="input">
            Температура, °C: <input name="temperature" defaultValue={Init.temperature}></input>
        </div>
        <div className="input">
            Концентрация отбора: <input name="concentrationProduct" defaultValue={Init.concentrationProduct}></input>
        </div>
        <div className="input">
            Концентрация отвала: <input name="concentrationWaste" defaultValue={Init.concentrationWaste}></input>
        </div>
        <div className="input">
            Поток питания: <input name="flowFeed" defaultValue={Init.flowFeed}></input>
        </div>
        <div className="input">
            Удельный поток, базовый: <input name="flowBase" defaultValue={Init.flowBase}></input>
        </div>
        <div className="input">
            Диаметр колонны, базовый, мм: <input name="diameterBase" defaultValue={Init.diameterBase}></input>
        </div>
        <div className="input">
        Диаметр колонны, мм: <input name="diameter" defaultValue={Init.diameter}></input>
        </div>

        <div className="input">
            Насадка:
            <select defaultValue={nozzles[0]} name="nozzle">
                <option>{nozzles[0]}</option>
            </select>
        </div>
        <button className="calculate" onClick={() => this.add()}>{this.props.textButton}</button>
        {this.state.calculate &&  <Output />}
    </>
  )
}
}

export default Input;