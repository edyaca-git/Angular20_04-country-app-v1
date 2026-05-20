import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/resp-contries.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

 private http = inject( HttpClient );


 searchByCapital( query: string ): Observable<Country[]>   {
   query = query.toLocaleLowerCase();

   return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query }`)
    .pipe(
      map( respuestaConuntries =>  CountryMapper.mapRestArrayToCountryArray( respuestaConuntries ) ),
      catchError( err => {
        console.log('Error en la consulta HTTP:', err);
        return throwError(() => new Error(`Error en la consulta HTTP No se pudieron obtener Capitales: ${query}`));
      })
    )
 }
 
 searchByCountry( query: string ): Observable<Country[]>   {
   query = query.toLocaleLowerCase();
    console.log(`${API_URL}/name/${ query }`);
   return this.http.get<RESTCountry[]>(`${API_URL}/name/${ query }`)
    .pipe(
      map( respuestaConuntries =>  CountryMapper.mapRestArrayToCountryArray( respuestaConuntries ) ),
      delay(1000), // Simula un retraso de 1 segundo para mostrar el loader
      catchError( err => {
        console.log('Error en la consulta HTTP:', err);
        return throwError(() => new Error(`Error en la consulta HTTP No se pudieron obtener Países: ${query}`));
      })
    )
 }
 
 searchCountryByAlphaCode( code: string ): Observable<Country | undefined>   {
   return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${ code }`)
    .pipe(
      map( respuestaConuntries =>  CountryMapper.mapRestArrayToCountryArray( respuestaConuntries ) ),      
      map( countries => countries.length > 0 ? countries[0] : undefined ), // Si el array tiene elementos, devuelve el primero, sino devuelve undefined
      catchError( err => {
        console.log('Error en la consulta HTTP:', err);
        return throwError(() => new Error(`Error en la consulta HTTP No se pudieron obtener Países con el codigo: ${code}`));
      })
    )
 }


}
