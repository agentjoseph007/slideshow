import {AfterViewInit, Component, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit, OnDestroy {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  isFocused = false;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  @Input() isShowed: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.isShowed);

  }

  @ViewChildren('refCarousel') carousel: QueryList<NgbCarousel>;
  //@ViewChild('refCarousel', {static : true}) carousel: NgbCarousel;

  //@ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  ngAfterViewInit(): void {
    //this.carousel.pause();
    console.log('ngAfterViewInit start', this.isShowed);
    console.log('focused', this.carousel.first.focused);
    this.carousel.first.focus();
    console.log('focused', this.carousel.first.focused);
    console.log('ngAfterViewInit end');

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.isShowed);
  }


  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
