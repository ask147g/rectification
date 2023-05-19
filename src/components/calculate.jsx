import React from "react";

class Calculate extends React.Component {
  constructor() {
    super();
  }

  state = {
    calculate: false,
    temperature: 0
 }

 tablicza = function (arr) {
    return `<table><thead><tr>${arr[0].map(i=>`<th>${i}</th>`).join("")}</tr></thead><tbody>${arr.slice(1).map(i=>`<tr>${i.map(i=>`<th>${i}</th>`).join("")}</tr>`).join("")}</tbody></table>`;
 }


  render() {
  return (
    <>
        <h2>Насадка</h2>
        <div className="output">
            Эквивалентный диаметр, м: {this.props.output.nozzleDiameter}.
        </div>
        <h2>Однократный эффект разделения</h2>
        <div className="output">
            Коэффициент разделения: {this.props.output.separation}.
        </div>
        <div className="output">
            Коэффициент обогащения: {this.props.output.enrichment}.
        </div>
        <div className="output">
            Концентрация отбора: {this.props.output.concentrationProductPrimary}.
        </div>
        <h2>Многократный эффект разделения</h2>
        <div className="output">
            Флегмовое число: {this.props.output.flegma}.
        </div>
        <div className="output">
            Рабочее флегмовое число: {this.props.output.workFlegma}.
        </div>
        <div className="output">
            Поток отвала, г/с: {this.props.output.flowWaste}.
        </div>
        <div className="output">
            Поток отбора, г/с: {this.props.output.flowProduct}.
        </div>
        <div className="output">
            Поток жидкости, г/с: {this.props.output.innerL}.
        </div>
        <div className="output">
            Поток пара, г/с: {this.props.output.innerG}.
        </div>
        <div className="output">
            ВЭТС (базовый), см: {this.props.output.vetsBase}.
        </div>
        <div className="output">
            Коэффициент масштабного перехода: {this.props.output.kmp}.
        </div>
        <div className="output">
            ВЭТС, см: {this.props.output.vets}.
        </div>
        <div className="output">
            ЧТСР: {this.props.output.numberPlates}.
        </div>
        {/*
        <div className="output">
            Re: {this.props.output.reynolds}.
        </div>
        <div className="output">
            Рабочая скорость, м/с: {this.props.output.velocity}.
        </div>
  */}
        <div className="output">
            Степень разделения: {this.props.output.coeffSeparation}.
        </div>
        <div className="output">
            Концентрация отбора после 1й колонны: {this.props.output.concentrationProductColumn}.
        </div>
        <div className="output">
            <table className='result'>
                <thead>
                    <tr>
                    <th>ЧТСР</th>
                    <th>Давление, Па</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.output.pressure.map((result) =>
                            <tr>
                                <td><div>{result.plate}</div></td>
                                <td><div>{result.pressure.toFixed(6)}</div></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}
}

export default Calculate;