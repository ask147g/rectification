import { concentrationFeed, etta, mu, ro} from "./init";
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

export function Flegma(separation, concentrationWaste) {
    concentrationWaste = parseFloat(concentrationWaste);
    return (1-separation*concentrationWaste/concentrationFeed+(separation-1)*concentrationWaste)/((separation-1)*(1-concentrationFeed));
}

export function WorkFlegma(flegma) {
    return 1.3*flegma;
}

export function flowWaste(feed, concentrationWaste, concentrationProduct) {
    concentrationWaste = parseFloat(concentrationWaste);
    concentrationProduct = parseFloat(concentrationProduct);
    feed = parseFloat(feed);
    return feed*(concentrationFeed-concentrationProduct)/(concentrationWaste-concentrationProduct);
}

export function flowProduct(feed, waste) {
    feed = parseFloat(feed);
    return feed-waste;
}

export function InnerFlowL(flegma, waste) {
    return flegma*waste;
}

export function InnerFlowG(inner, waste) {
    return inner+waste;
}


export function NozzleDiameter(name) {
    for (let i = 0; i < nozzlesParameters.length; i++) {
        if (name == nozzlesParameters[i].name) {
            return 4*nozzlesParameters[i].volume/nozzlesParameters[i].surfaceArea;
        };
    }
}

export function VETS(flow, diameter) {
    flow = parseFloat(flow);
    diameter = parseFloat(diameter);
    return (0.024*flow+1.6131)*(0.0134*diameter+0.8984);
}

export function KMP(diameterBase, diameter) {
    diameter = parseFloat(diameter);
    diameterBase = parseFloat(diameterBase);
    return 1+2*(1-etta)/etta*Math.log10(diameter/diameterBase)
}


export function KMP2(diameterBase, flowBase, flow) {
    diameterBase = parseFloat(diameterBase);
    flowBase = parseFloat(flowBase);
    return 1+(1-etta)/etta*Math.log10(4*flow/(3.14*flowBase*Math.pow(diameterBase/100,2)))
}

export function VETSRes(vets, kmp, kmp2) {
    return vets*kmp*kmp2;
}

export function NumberPlates(hightNozzle, vets) {
    hightNozzle = parseFloat(hightNozzle);
    return hightNozzle/vets;
}

export function Area(diameter) {
    diameter = parseFloat(diameter);
    return 3.14*Math.pow(diameter/10, 2)/4;
}

export function Reynolds(name, diameter, flow) {
    let area = Area(diameter);
    for (let i = 0; i < nozzlesParameters.length; i++) {
        if (name == nozzlesParameters[i].name) {
            return 4*flow/(area*nozzlesParameters[i].volume/100*mu);
        };
    }
}

export function Resistance(name, reynolds) {
    for (let i = 0; i < nozzlesParameters.length; i++) {
        if (name == nozzlesParameters[i].name) {
            return nozzlesParameters[i].A/Math.pow(reynolds, nozzlesParameters[i].B);
        };
    }
}

export function Velocity(flow, diameter) {
    diameter = parseFloat(diameter);
    return 4*flow/(3.14*diameter/10*diameter/10*ro);
}

export function deltaPressure(name, reynolds, velocity, numberPlates, vets) {
    let resistance = Resistance(name, reynolds);
    let pressure = [];
    for (let i = 0; i < nozzlesParameters.length; i++) {
        if (name == nozzlesParameters[i].name) {
            pressure[0] = vets/100*resistance*velocity*velocity*nozzlesParameters[i].surfaceArea*ro/(8*Math.pow(nozzlesParameters[i].volume-vets/100, 3));
        };
    }
    
    for (let k = 1; k < numberPlates; k++) {
        for (let i = 0; i < nozzlesParameters.length; i++) {
            if (name == nozzlesParameters[i].name) {
                pressure[k] = pressure[k-1] + vets/100*resistance*velocity*velocity*nozzlesParameters[i].surfaceArea*ro/(8*Math.pow(nozzlesParameters[i].volume-(k+1)*vets/100, 3));
            };
        }
    }
    let output = rePressure(numberPlates, pressure);
    return output;
}

export function rePressure(numberPlates, pressure) {
    let output = [];
    for (let i = 0; i < numberPlates; i++) {
        output[i] = {pressure: pressure[i],
                    plate: i+1
        }
    }
    return output;
}

export function CoefficientSeparation(separation, numberPlates) {
    return Math.pow(separation, numberPlates);
}