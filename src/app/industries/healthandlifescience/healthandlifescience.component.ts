import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';

@Component({
  selector: 'app-healthandlifescience',
  imports: [RouterModule,InsightComponent],
  templateUrl: './healthandlifescience.component.html',
  styleUrl: './healthandlifescience.component.scss'
})
export class HealthandlifescienceComponent {
  
        constructor(private route: ActivatedRoute, private router: Router){
        }
        navigateTo(ind:any){
          console.log(ind)
          this.router.navigate(['/'+ind])
        }
}
