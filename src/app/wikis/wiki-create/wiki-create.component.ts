/*import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wiki-create',
  standalone: true,
  imports: [],
  templateUrl: './wiki-create.component.html',
  styleUrls: ['./wiki-create.component.css']
})
export class WikiCreateComponent {
// Lógica para crear un nuevo wiki
  

}*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WikiService } from '../shared/wiki.service';
import { Wiki } from '../shared/wiki.model';

@Component({
  selector: 'app-wiki-creation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wiki-create.component.html',
  styleUrls: ['./wiki-create.component.css']
})
export class WikiCreateComponent {
  newWiki: Wiki = {
    id: 0,
    name: '',
    description: '',
    image: '',
  };

  constructor(private wikiService: WikiService, private router: Router) {}

  createWiki(): void {
    if (this.newWiki.name.trim() && this.newWiki.description.trim() && this.newWiki.image.trim()) {
      this.wikiService.addWiki(this.newWiki).subscribe(() => {
        alert('Wiki creada con éxito!');
        this.router.navigate(['/wikis']);
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
