import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { olcs } from 'ol-cesium';
import { MapComponent } from 'ngx-openlayers';
// import { AolMapComponent } from 'ngx-openlayers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;
  @ViewChildren(MapComponent) children: QueryList<MapComponent>;
  ol3d: any;

  ngAfterViewInit() {
    console.log('olcs', olcs);
    this.ol3d = new olcs.OLCesium({map: this.children.first.instance});
    this.ol3d.setEnabled(true);
  }

  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseOpacity() {
    this.opacity = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }
}
