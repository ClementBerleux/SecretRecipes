import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export type RecipeCard = {
  id: number,
  name: string,
  image: string
}

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})

export class RecipeCardComponent {
  recipe = input.required<RecipeCard>();
}
