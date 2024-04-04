import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonSlimComponent } from '../../../buttons/src/public-api';
import { CardNumberComponent } from '../../../cards/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonSlimComponent, CardNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '@station/app';
}
