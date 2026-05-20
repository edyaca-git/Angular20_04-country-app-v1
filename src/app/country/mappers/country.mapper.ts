import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/resp-contries.interface";

// Mapper para convertir RESTCountry a country
export class CountryMapper {

    // Método para mapear un solo RESTCountry a country
    static mapResttoCountry( restCountry: RESTCountry ): Country {
        return {
            cca2: restCountry.cca2,
            flag: restCountry.flags.png,
            flagSvg: restCountry.flags.svg,
            name: restCountry.translations['spa']?.common, // Usamos la traducción al español para el nombre
            capital: restCountry.capital ? restCountry.capital.join(', ') : 'N/A', //  Validación Unir múltiples capitales si existen
            population: restCountry.population,
            region: restCountry.region,
            subregion: restCountry.subregion,
        }
    }

    // Método para mapear un array de RESTCountry a un array de country
    static mapRestArrayToCountryArray( restCountries: RESTCountry[] ): Country[] {  
        return restCountries.map( restCountry => this.mapResttoCountry( restCountry ) );
    }
}