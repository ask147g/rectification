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
            Поток питания, г/с: <input name="flowFeed" defaultValue={Init.flowFeed}></input>
        </div>
        <div className="input">
            Удельный поток (базовый*), см3/см3*сек: <input name="flowBase" defaultValue={Init.flowBase}></input>
        </div>
        <div className="input">
            Диаметр колонны (базовый*), мм: <input name="diameterBase" defaultValue={Init.diameterBase}></input>
        </div>
        <div className="input">
        Диаметр колонны, мм: <input name="diameter" defaultValue={Init.diameter}></input>
        </div>
        

        <div className="input">
            Насадка:
            <select defaultValue={nozzles[0]} name="nozzle">
            <option>{nozzles[0]}</option>
            <option>{nozzles[1]}</option>
            </select>
        </div>
        <div className="input">
        Высота насадки, см: <input name="hightNozzle" defaultValue={Init.hightNozzle}></input>
        </div>
        <div>
          *Базовый - для которого известно значение ВЭТС. Удельная циркуляция [8.3; 24.8]. Диаметр колонны [1.8; 2.3].
        </div>
        <button className="calculate" onClick={() => this.add()}>{this.props.textButton}</button>
        {this.state.calculate &&  <Output />}
    </>
  )
}
}

export default Input;