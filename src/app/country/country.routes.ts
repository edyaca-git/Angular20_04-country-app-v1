import { Routes } from '@angular/router';
import { CounrtyLayoutComponent } from './layout/counrtyLayout/counrtyLayout.component';
import { ByCapitalPageComponent } from './pages/by-capital.page/by-capital.page.component';
import { ByCountryPageComponent } from './pages/by-country.page/by-country.page.component';
import { ByRegionPageComponent } from './pages/by-region.page/by-region.page.component';
import { CountryPageComponent } from './pages/country-page.component/country-page.component';
 
export const countryRoutes: Routes = [
    {
        path: '',
        component: CounrtyLayoutComponent,
        children:[
            {
                path: 'by-capital',
                component: ByCapitalPageComponent,
            },
            {
                path: 'by-pais',
                component: ByCountryPageComponent,
            },
            {
                path: 'by-region',
                component: ByRegionPageComponent,
            },
            // Aqui se agrega el path [by/] y el argumento dinamico [:code] para mostrar la informacion del pais seleccionado, 
            // se le pasa el parametro code que es el alpha3Code del pais seleccionado
            {
                path: 'by/:code',
                component: CountryPageComponent,
            },
            {
                path: '**',
                redirectTo: 'by-capital',
            }
        ] 
 
    },
];

export default countryRoutes