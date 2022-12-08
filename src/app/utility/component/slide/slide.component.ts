import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {IonicModule, IonicSlides} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {SwiperModule} from "swiper/angular";
import Swiper, {EffectFade} from "swiper";
import SwiperCore from "swiper";

SwiperCore.use([ EffectFade,   IonicSlides]);

@Component({
  standalone: true,
  imports: [SwiperModule, IonicModule, CommonModule],
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SlideComponent implements OnInit{

  @Input() images: { name: string, url: string }[] = [];

  @Output() slideDidChange = new EventEmitter<any>()

  constructor() {}

  ngOnInit() {
    console.log(this.images)
  }

  setSwiperInstance(swiper: Swiper) {
    console.log(this.images)

     // swiper.slideNext(5000);

    let i = 0
    this.slideDidChange.emit(this.images[i])


    const  slideTimer =  setInterval(() => {

      if (this.images.length > 1){
         // swiper.slideNext(3000);
        i++
       swiper.slideTo(i)
        if (this.images.length === i){
          i = 0
          // clearInterval(slideTimer)
        }
        this.slideDidChange.emit(this.images[i])
        console.log('slideTimer working' , i)

       }else {
         clearInterval(slideTimer)
         console.log('slideTimer stop')
       }
    }, 10000);

  }

  // slideChangeTransitionEnd($event: [swiper: Swiper]) {
  //
  //
  //   console.log($event)
  //   console.log($event[0].activeIndex - 1)
  //   this.slideDidChange.emit(this.images[$event[0].activeIndex - 1])
  // }
}
