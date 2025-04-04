import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';
import { CasestudiesComponent } from '../common/casestudies/casestudies.component';

@Component({
  selector: 'app-education',
  imports: [RouterModule, InsightComponent, CasestudiesComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  
  constructor(private route: ActivatedRoute, private router: Router){
    
  }

  navigateTo(ind:any){
    console.log(ind)
    this.router.navigate(['/'+ind])
  }
}

