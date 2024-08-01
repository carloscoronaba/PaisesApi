import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry';
import { CountriesService } from '../../services/countries.services';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(public countriesService:CountriesService){}

  SearchByRegion(region: string){
    this.countriesService.searchRegion(region)
    .subscribe((data: Country[]) => {
      this.countries = data;
    });
  }
}
