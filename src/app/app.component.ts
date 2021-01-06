import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  SearchCountryField,
  TooltipLabel,
  CountryISO,
  PhoneNumberFormat
} from "ngx-intl-tel-input";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.France,
    CountryISO.FrenchGuiana,
    CountryISO.FrenchPolynesia
  ];
  onlyCountries: CountryISO[] = [
    CountryISO.France,
    CountryISO.FrenchGuiana,
    CountryISO.FrenchPolynesia,
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
    CountryISO.Portugal,
    CountryISO.Spain,
    CountryISO.Italy,

    CountryISO.Belgium,
    CountryISO.Germany
  ];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
}
