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
        <div className="output">
            Флегмовое число: {this.props.output.flegma}.
        </div>
        <div className="output">
            Рабочее флегмовое число: {this.props.output.workFlegma}.
        </div>
        <h2>Многократный эффект разделения</h2>
        <div className="output">
            Число ступеней обогащения: {this.props.output.numberEnrichment}.
        </div>
        <div className="output">
            Число ступеней обеднения: {this.props.output.numberImpoverishment}.
        </div>
        <div className="output">
            Число ступеней: {this.props.output.number}.
        </div>
    </>
  )
}
}

export default Calculate;