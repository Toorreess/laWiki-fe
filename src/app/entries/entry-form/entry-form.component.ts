import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MarkdownModule
  ]
})
export class EntryFormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      titulo: [''],
      texto: [''],
      latitud: [''],
      altitud: [''],
      imagenes: [null]
    });
  }

  onSubmit(): void {
    console.log(this.formulario.value);
  }
}