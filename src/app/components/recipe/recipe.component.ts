import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Recipe = {
  name: string,
  ingredients: string[],
  instructions: string[],
  image: string
}

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})

@Injectable({ providedIn: 'root' })
export class RecipeComponent {
  private readonly http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  idRecipe = 0;
  recipe: Recipe | undefined = undefined;

  ngOnInit() {
    // fetch('https://dummyjson.com/recipes/1')
    //   .then(res => res.json())
    //   .then(data => this.recipe = data);

    this.route.params.subscribe(params => {
      this.idRecipe = +params['id'];
    });

    this.http.get<Recipe>('https://dummyjson.com/recipes/' + this.idRecipe).subscribe(data => this.recipe = data);
  }
}
