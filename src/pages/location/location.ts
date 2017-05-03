import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  
  map: GoogleMap;

  constructor(public navCtrl: NavController, public platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.loadMap();
    });}

  loadMap() {

    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((position) => {
      console.log(position.coords.latitude + ", " + position.coords.longitude);

      let location = new LatLng(position.coords.latitude, position.coords.longitude);

      this.map = new GoogleMap('map', {
        'backgroundColor': 'white',
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'latLng': location,
          'tilt': 30,
          'zoom': 15,
          'bearing': 50
        }
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        console.log('Map is ready!');
      });
    }
  }
  
  
  ionViewWillLoad() {
    console.log('ionViewDidLoad Login');
  }
}
