import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';

@Component({
  selector: 'app-travelandlogistic',
    imports: [RouterModule,InsightComponent],
  templateUrl: './travelandlogistic.component.html',
  styleUrl: './travelandlogistic.component.scss'
})
export class TravelandlogisticComponent {

      constructor(private route: ActivatedRoute, private router: Router){
    
      }

      navigateTo(ind:any){
        console.log(ind)
        this.router.navigate(['/'+ind])
      }
}