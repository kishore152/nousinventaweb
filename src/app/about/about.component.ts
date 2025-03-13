import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {

}
