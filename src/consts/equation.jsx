import { concentrationFeed } from "./init";
import { nozzlesParameters } from "./nozzle";

export function Separation(temperature) {
    return 1.0438*Math.exp(-6.01114/(parseFloat(temperature)+273));
}

export function Enrichment(separation) {
    return separation-1;
}

export function ConcentrationProduct(separation) {
    return separation*concentrationFeed/(1+(separation-1)*concentrationFeed);
}

export function Flegma(separation, concentrationProduct) {
    return 1/(separation-1)*(concentrationProduct/concentrationFeed-separation*(1-concentrationProduct/concentrationFeed));
}

export function WorkFlegma(flegma) {
    return 1.3*flegma+0.3;
}

export function NumberPlatesEnrichment(enrichment, concentrationProduct) {
    concentrationProduct = parseFloat(concentrationProduct);
    return Math.ceil(1/enrichment*Math.log(concentrationProduct*(1-concentrationFeed)/(concentrationFeed*(1-concentrationProduct))));
}

export function NumberPlatesImpoverishment(enrichment, concentrationWaste) {
    concentrationWaste = parseFloat(concentrationWaste);
    return Math.ceil(1/enrichment*Math.log(concentrationFeed*(1-concentrationWaste)/(concentrationWaste*(1-concentrationFeed))));
}

export function NumberPlates(numberEnrichment, numberImpoverishment) {
    return numberEnrichment+numberImpoverishment;
}

export function NozzleDiameter(name) {
    for (let i = 0; i < nozzlesParameters.length; i++) {
        if (name == nozzlesParameters[i].name) {
            return 4*nozzlesParameters[i].volume/nozzlesParameters[i].surfaceArea;
        };
    }
}