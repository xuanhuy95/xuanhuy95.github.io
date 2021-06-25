import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from './hero/hero.component'

const routes: Routes = [
    {path: 'heroes', component: HeroComponent},
    {
        path: '**',
        redirectTo: 'heroes'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}