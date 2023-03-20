import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  // lat:number = 0; 
  // lon:number = 0; 
  // address:string = ""; 


  // getLocation(){
  //   const YOUR_API_KEY = "AIzaSyCHKhmukDqBHvTLNP4gGT2A50xOOLjqpW0";
    
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=${YOUR_API_KEY}`)
  //     .then((response) => {
  //         return response.json();
  //     }).then(jsonData => {
  //         console.log(jsonData.results[0].geometry.location); // {lat: 45.425152, lng: -75.6998028}
  //         this.lat = jsonData.results[0].geometry.location.lat;
  //         this.lon = jsonData.results[0].geometry.location.lng;
  //     })
  //     .catch(error => {
  //         console.log(error);
  //     })
  // }

  title = 'angular-google-map-search';

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild(GoogleMap)
  public map!: GoogleMap;

  zoom = 16;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDefaultUI: true,
    fullscreenControl: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    // maxZoom:this.maxZoom,
    // minZoom:this.minZoom,
  };
  latitude!: any;
  longitude!: any;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    // Align search box to center
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat());

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();
        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
      });
    });
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }




}