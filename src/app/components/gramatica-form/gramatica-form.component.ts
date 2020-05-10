import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Produccion } from 'src/app/models/produccion.model';

@Component({
  selector: 'app-gramatica-form',
  templateUrl: './gramatica-form.component.html',
})
export class GramaticaFormComponent implements OnInit {
  gramaticaForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.gramaticaForm = this.createGramaticaForm();
  }

  createGramaticaForm(): FormGroup {
    return this.fb.group({
      producciones: this.fb.array([]),
    });
  }

  get producciones(): FormArray {
    return this.gramaticaForm.get('producciones') as FormArray;
  }

  get produccionesControls(): AbstractControl[] {
    const producciones = this.gramaticaForm.get('producciones') as FormArray;
    return producciones.controls;
  }

  createProduccionControl(): FormGroup {
    return this.fb.group({
      ladoIzquierdo: [null, Validators.required],
      ladoDerecho: [null, Validators.required],
    });
  }

  addProduccion(): void {
    this.producciones.push(this.createProduccionControl());
  }

  removeProduccion(index: number): void {
    if (!this.producciones || this.producciones.length === 1) {
      return;
    }
    this.producciones.removeAt(index);
  }

  submit(): void {
    if (this.gramaticaForm.invalid) {
      this.gramaticaForm.markAllAsTouched();
      return;
    }
    const producciones = this.gramaticaForm.get('producciones').value as [];
    const gramatica: Produccion[] = producciones.map(
      (produccion: Produccion, index: number) => ({
        indice: index + 1,
        ...produccion,
      })
    );
    console.log('GRAMATICA', gramatica);
  }
}
