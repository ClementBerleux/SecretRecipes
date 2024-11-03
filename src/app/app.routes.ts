import { Routes } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { ListRecipesComponent } from './components/list-recipes/list-recipes.component';

export const routes: Routes = [
    { path: 'recipes', component: ListRecipesComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: '**', component: ListRecipesComponent }
];
