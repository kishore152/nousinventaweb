import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beta';
  isScrolled:boolean=false
  url:any;
  constructor(private route: ActivatedRoute, private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      this.url = event.url
      if(this.url === '/contact' || this.url === '/aipage'){
        this.isScrolled = true
      }else{
        this.isScrolled = false
      }
     }
    });
    }
  
     
    
    navigateTo(ind:any){
      console.log(ind)
      this.router.navigate(['/'+ind])
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
      console.log(window.scrollY)
      if(this.url === '/contact' || this.url === '/aipage'){
        this.isScrolled = true;
      }else{
        this.isScrolled = window.scrollY > 50;
      }

      
    }
}
