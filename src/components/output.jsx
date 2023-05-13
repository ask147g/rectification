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

    const res_feed = document.getElementsByName("flowFeed");
    const feed = res_feed[0].value;

    const res_nozzle = document.getElementsByName("nozzle");
    const nozzle = res_nozzle[0].value;

    const res_flowBase = document.getElementsByName("flowBase");
    const flowBase = res_flowBase[0].value;

    const res_diameterBase = document.getElementsByName("diameterBase");
    const diameterBase = res_diameterBase[0].value;

    const res_diameter = document.getElementsByName("diameter");
    const diameter = res_diameter[0].value;

    // Nozzle
    const nozzleDiameter = equation.NozzleDiameter(nozzle);

    // Primary
    const separation = equation.Separation(temperature);
    const enrichment = equation.Enrichment(separation);
    const concentrationProductPrimary = equation.ConcentrationProduct(separation);
    

    // Multy
    const flegma = equation.Flegma(separation, concentrationWaste);
    const workFlegma = equation.WorkFlegma(flegma);
    const flowWaste = equation.flowWaste(feed, concentrationWaste, concentrationProduct);
    const flowProduct = equation.flowProduct(feed, flowWaste);
    const innerL = equation.InnerFlowL(workFlegma, flowWaste);
    const innerG = equation.InnerFlowG(innerL, flowWaste);
    const vetsBase = equation.VETS(flowBase, diameterBase);
    const kmp = equation.KMP(diameterBase, diameter);
    const vets = equation.VETSRes(vetsBase, kmp);

    this.state = {
        separation: separation.toFixed(4),
        enrichment: enrichment.toFixed(4),
        concentrationProductPrimary: concentrationProductPrimary.toFixed(4),
        flegma: flegma.toFixed(4),
        workFlegma: workFlegma.toFixed(4),
        nozzleDiameter: nozzleDiameter.toFixed(4),
        flowWaste: flowWaste.toFixed(4),
        flowProduct: flowProduct.toFixed(4),
        innerL: innerL.toFixed(4),
        innerG: innerG.toFixed(4),
        vetsBase: vetsBase.toFixed(4),
        kmp: kmp.toFixed(4),
        vets: vets.toFixed(4),
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