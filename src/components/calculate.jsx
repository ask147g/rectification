import React from "react";

class Calculate extends React.Component {
  constructor() {
    super();
  }

  state = {
    calculate: false,
    temperature: 0
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
            Поток отвала: {this.props.output.flowWaste}.
        </div>
        <div className="output">
            Поток отбора: {this.props.output.flowProduct}.
        </div>
        <div className="output">
            L: {this.props.output.innerL}.
        </div>
        <div className="output">
            G: {this.props.output.innerG}.
        </div>
        <div className="output">
            ВЭТС, базовый, см: {this.props.output.vetsBase}.
        </div>
        <div className="output">
            КМП: {this.props.output.kmp}.
        </div>
        <div className="output">
            ВЭТС, см: {this.props.output.vets}.
        </div>
    </>
  )
}
}

export default Calculate;