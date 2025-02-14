import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  imagenes: string[] = [
    'assets/img/Foto1.jpg',
    'assets/img/Foto2.jpg',
    'assets/img/Foto3.jpg',
    'assets/img/Foto4.jpg',
    'assets/img/Foto5.jpg',
    'assets/img/Foto6.jpg'
  ];
}
