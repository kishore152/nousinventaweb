import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';

@Component({
  selector: 'app-retailandecommrece',
  imports: [RouterModule,InsightComponent],
  templateUrl: './retailandecommrece.component.html',
  styleUrl: './retailandecommrece.component.scss'
})
export class RetailandecommreceComponent {
      constructor(private route: ActivatedRoute, private router: Router){
      }
      navigateTo(ind:any){
        console.log(ind)
        this.router.navigate(['/'+ind])
      }
}
