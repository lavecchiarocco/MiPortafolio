import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
})
export class Contacto {
  private readonly FORM_ENDPOINT = 'https://formspree.io/f/xbdzrzay'; // <-- pegá tu endpoint

  loading = false;
  success = false;
  error = false;

  form = {
    name: '',
    email: '',
    presupuesto: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  submit() {
    this.loading = true;
    this.success = false;
    this.error = false;

    const headers = new HttpHeaders({ Accept: 'application/json' });

    this.http.post(this.FORM_ENDPOINT, this.form, { headers }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.form = { name: '', email: '', presupuesto: '', message: '' };
      },
      error: () => {
        this.loading = false;
        this.error = true;
      },
    });
  }
}
