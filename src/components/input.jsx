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
        {
        }
        <div className="input">
            Насадка:
            <select defaultValue={nozzles[0]} name="nozzle">
                <option>{nozzles[0]}</option>
                <option>{nozzles[1]}</option>
                <option>{nozzles[2]}</option>
                <option>{nozzles[3]}</option>
                <option>{nozzles[4]}</option>
                <option>{nozzles[5]}</option>
                <option>{nozzles[6]}</option>
                <option>{nozzles[7]}</option>
                <option>{nozzles[8]}</option>
                <option>{nozzles[9]}</option>
                <option>{nozzles[10]}</option>
            </select>
        </div>
        <button className="calculate" onClick={() => this.add()}>{this.props.textButton}</button>
        {this.state.calculate &&  <Output />}
    </>
  )
}
}

export default Input;