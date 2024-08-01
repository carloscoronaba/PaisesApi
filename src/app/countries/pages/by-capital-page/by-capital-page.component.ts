import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/contry';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countrieService: CountriesService) { }

  searchByCapital(term: string) {
    // console.log('desde by capital page')
    // console.log({term})
    this.countrieService.searchCapital(term)
    .subscribe(countries =>{
      this.countries = countries
    })
  }
}
