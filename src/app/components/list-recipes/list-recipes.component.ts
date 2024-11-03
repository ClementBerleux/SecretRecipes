import { Component, inject } from '@angular/core';
import { RecipeCard, RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { HttpClient } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

type RecipeCards = {
  recipes: RecipeCard[],
  total: number
}

@Component({
  selector: 'app-list-recipes',
  standalone: true,
  imports: [RecipeCardComponent, MatPaginatorModule],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.css'
})

export class ListRecipesComponent {
  private readonly http = inject(HttpClient);
  recipes: RecipeCards | undefined = undefined;
  limit = 6;
  skip = 0;

  ngOnInit() {
    // fetch('https://dummyjson.com/recipes')
    //   .then(res => res.json())
    //   .then(data => this.recipe = data);
    this.http.get<RecipeCards>('https://dummyjson.com/recipes?limit=' + this.limit + '&skip=' + this.skip + '&select=id,name,image').subscribe(data => this.recipes = data);
  }

  handlePageEvent(e: PageEvent) {
    this.limit = e.pageSize;
    this.skip = e.pageIndex * e.pageSize;
    this.http.get<RecipeCards>('https://dummyjson.com/recipes?limit=' + this.limit + '&skip=' + this.skip + '&select=id,name,image').subscribe(data => this.recipes = data);
  }
}
