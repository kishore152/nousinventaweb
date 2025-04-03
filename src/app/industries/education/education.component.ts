import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsightComponent } from '../common/insight/insight.component';

@Component({
  selector: 'app-education',
  imports: [RouterModule,InsightComponent],
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

