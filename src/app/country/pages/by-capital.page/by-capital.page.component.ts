import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.services';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'by-capital.page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-capital.page.component.html',
})
export class ByCapitalPageComponent {


  countryService = inject(CountryService);

  // este signal se va a actualizar cada vez que el usuario realice una búsqueda, y el resource 
  // se va a encargar de hacer la petición al servicio cada vez que el signal se actualice, y de 
  // manejar el estado de carga y error de la petición.
  query = signal('');

  // el resource (es una señal con esteroides) se encarga de manejar el estado de carga y error de la petición, y de actualizar 
  // la vista automáticamente cuando el signal query se actualice.
  // y este bloque hace lo mismo y con menos codigo y sustituye al que comente abajo. ojo ambos funcionan
  // resource trabaja con promises, por eso el loader es una función asíncrona, y el resultado de 
  // la petición se obtiene con firstValueFrom, que convierte un observable en una promesa.
  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if (!params.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCapital(params.query)
      );
    },
  });


  // se comenta el código de la página para mostrar el funcionamiento de resources y signals en la siguiente 
  // sección del curso, pero el código se puede revisar en el commit anterior.
  // isLoading = signal(false);
  // isError = signal<string|null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string): void {

  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);
  //   this.countries.set([]); 

  //   this.countryService.searchByCapital(query)
  //     .subscribe({
  //       next: ( respuestaConuntries ) => {
  //         this.isLoading.set(false);
  //         this.countries.set(respuestaConuntries);
  //       },
  //       error: (err) => {
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         this.isError.set(err );
  //       } 
  //     });

// }

}
