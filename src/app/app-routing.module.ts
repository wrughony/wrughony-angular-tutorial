import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';

const routes: Routes = [
    { path: '', redirectTo: '/number-one', pathMatch: 'full' },
    { path: 'number-one', component: PageOneComponent },
    { path: 'number-two', component: PageTwoComponent },
    { path: 'number-three/:name', component: PageThreeComponent },
    { path: '**', component: PageOneComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}