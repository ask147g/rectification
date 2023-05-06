import React from "react";
import Calculate from "./calculate";
import * as equation from "../consts/equation"

class Output extends React.Component {
  constructor() {
    super();
    this.calculate();
  }

  state = {
    end: false
 }

 calculate() {
    const res_temperature = document.getElementsByName("temperature");
    const temperature = res_temperature[0].value;

    const res_concentrationProduct = document.getElementsByName("concentrationProduct");
    const concentrationProduct = res_concentrationProduct[0].value;

    const res_concentrationWaste = document.getElementsByName("concentrationWaste");
    const concentrationWaste = res_concentrationWaste[0].value;

    const res_nozzle = document.getElementsByName("nozzle");
    const nozzle = res_nozzle[0].value;

    // Nozzle
    const nozzleDiameter = equation.NozzleDiameter(nozzle);

    // Primary
    const separation = equation.Separation(temperature);
    const enrichment = equation.Enrichment(separation);
    const concentrationProductPrimary = equation.ConcentrationProduct(separation);
    const flegma = equation.Flegma(separation, concentrationProductPrimary);
    const workFlegma = equation.WorkFlegma(flegma);

    // Multy
    const numberEnrichment = equation.NumberPlatesEnrichment(enrichment, concentrationProduct);
    const numberImpoverishment = equation.NumberPlatesImpoverishment(enrichment, concentrationWaste);
    const number = equation.NumberPlates(numberEnrichment, numberImpoverishment);

    this.state = {
        separation: separation.toFixed(4),
        enrichment: enrichment.toFixed(4),
        concentrationProductPrimary: concentrationProductPrimary.toFixed(4),
        flegma: flegma.toFixed(4),
        workFlegma: workFlegma.toFixed(4),
        numberEnrichment: numberEnrichment,
        numberImpoverishment: numberImpoverishment,
        number: number,
        nozzleDiameter: nozzleDiameter.toFixed(4),
        end: true
    }
}


  render() {
  return (
    <>
        {this.state.end && <Calculate output={this.state} />}
    </>
  )
}
}

export default Output;