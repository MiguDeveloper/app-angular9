import {RouterModule, Routes} from "@angular/router";
import {PrimerTestComponent} from "./components/primer-test/primer-test.component";

const APP_ROUTES: Routes = [
  {path:'asincrono', component: PrimerTestComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'asincrono'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
