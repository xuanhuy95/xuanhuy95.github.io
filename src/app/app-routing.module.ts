import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from './hero/hero.component'
import {AppComponent} from './app.component'

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'heroes', component: HeroComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}