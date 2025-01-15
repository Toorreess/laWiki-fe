import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
})
export class EntryFormComponent implements OnInit {
  formulario!: FormGroup;
  wikiId!: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.wikiId = Number(this.route.snapshot.paramMap.get('id')); // Obtén el ID de la wiki
    this.formulario = this.fb.group({
      titulo: [''],
      texto: [''],
      latitud: [''],
      altitud: [''],
      imagenes: [null],
    });
  }

  onSubmit(): void {
    console.log('Wiki ID:', this.wikiId);
    console.log('Formulario:', this.formulario.value);
  }
}
