import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private route: ActivatedRoute, private router: Router){
  
    }

  navigateTo(ind:any){
    console.log(ind)
    this.router.navigate(['/'+ind])
  }

}
