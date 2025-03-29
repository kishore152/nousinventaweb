import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beta';

  constructor(private route: ActivatedRoute, private router: Router){
  
    }
  
     
    
    navigateTo(ind:any){
      console.log(ind)
      this.router.navigate(['/'+ind])
    }
}
