import {Component, Input} from '@angular/core';
import {SlideComponent} from "../../../utility/component/slide/slide.component";
import {IonicModule} from "@ionic/angular";
import {AuthComponent} from "../auth/auth.component";
import {Store} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth/auth.service";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [SlideComponent, IonicModule, AuthComponent, CommonModule, RouterModule],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})


export class WelcomeComponent {

  images =  [
    {name: 'Welcome from Golden72 inn', url:'assets/images/hotel/hotel1.jpg'},
    {name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin risus sit amet diam commodo, eu convallis felis scelerisque. Aenean vulputate eget neque nec convallis. Suspendisse potenti. Nulla eget commodo ante, at sagittis turpis', url:'assets/images/hotel/hotel2.jpg'},
    {name: 'ut gravida metus convallis. Nulla facilisi. Aliquam lacus quam, consectetur sed facilisis eget', url:'assets/images/hotel/hotel3.jpg'},
    {name: 'Integer luctus consectetur nibh, vitae dignissim nibh cursus nec. Nam aliquam neque sit amet mauris porta auctor. Proin ultricies nec est ut lacinia.', url:'assets/images/hotel/hotel4.jpg'},
    {name: 'quis maximus augue varius. Quisque sed sodales sem', url:'assets/images/hotel/hotel5.jpg'},]

   homeText = ''

  constructor(private store: Store<{activatedRoute: {activatedRoute: string}}>,
              public authService: AuthService) {
    store.select('activatedRoute').subscribe(s =>  console.log(s))
  }

  slideDidChange($event: any) {

    console.log($event)

    this.homeText = ''

    let text1 = $event.name
    let i = 0

   const timer = setInterval(() => {

     this.homeText += text1[i]

     i++

     if (text1.length === i){
      clearInterval(timer)
    }

    },   10000 / (text1.length * 2 ))
  }

 async logout() {
     await this.authService.signOut()
  }
}
