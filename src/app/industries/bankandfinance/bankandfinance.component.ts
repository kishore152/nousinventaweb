import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';


@Component({
  selector: 'app-bankandfinance',
 imports: [RouterModule,InsightComponent],
  templateUrl: './bankandfinance.component.html',
  styleUrl: './bankandfinance.component.scss'
})
export class BankandfinanceComponent {

    constructor(private route: ActivatedRoute, private router: Router){
  
    }
  
  
 
    
    navigateTo(ind:any){
      console.log(ind)
      this.router.navigate(['/'+ind])
    }
}
