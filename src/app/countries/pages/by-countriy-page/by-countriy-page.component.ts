import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry';
import { CountriesService } from '../../services/countries.services';

@Component({
  selector: 'app-by-countriy-page',
  templateUrl: './by-countriy-page.component.html',
  styles: ``
})
export class ByCountriyPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  SearchByCountry(term:string){
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
    })
  }
}
