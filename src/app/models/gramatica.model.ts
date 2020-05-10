import { N } from './N.model';
import { T } from './T.model';
import { Produccion } from './produccion.model';

export class Gramatica {
  private N: N[];
  private T: T[];
  private producciones: Produccion[];
  private tipoGramatica: string;

  constructor(
    n: N[],
    t: T[],
    producciones: Produccion[],
    tipoGramatica: string
  ) {
    this.N = n;
    this.T = t;
    this.producciones = producciones;
    this.tipoGramatica = tipoGramatica;
  }

  get tipo() {
    return this.tipoGramatica;
  }

  isS(): boolean {
    return false;
  }
}
