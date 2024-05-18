import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, PLATFORM_ID, inject } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})

export class MapComponent implements AfterViewInit {
  map: any;
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      console.log('is browser')
      setTimeout(() => {
        ymaps.ready(() => {
          this.map = new ymaps.Map("map", {
            center: [56.232353, 43.9469229],
            zoom: 15
          });
  
          this.map.geoObjects.add(new ymaps.Placemark([56.232353, 43.9469229], {
            balloonContentBody: ``,
            // hintContent: `${not.lastName} ${not.firstName}`,
          }, {
            iconLayout: 'islands#icon',
          }))
        });
      }, 500)
    }
  }
}
