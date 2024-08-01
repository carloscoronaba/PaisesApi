import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country, Idd } from '../../interfaces/contry';
import { CountriesService } from '../../services/countries.services';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-countriy-page',
  templateUrl: './countriy-page.component.html',
  styles: ``
})
export class CountriyPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) {
          return this.router.navigateByUrl('')
        }
        return this.country = country
        // return
      })
  }

  searchCountry(code: string) {
    this.countriesService.searchCountryByAlphaCode(code)
      .subscribe(country => {
        console.log(country)
      })
  }
}
