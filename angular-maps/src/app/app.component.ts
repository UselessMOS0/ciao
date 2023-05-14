import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  position2 : any;
  label :string;
  circleOptions: { fillColor: string; };
  circleOptions2: { fillColor: string; };
  n:number = 0
  colorList: string[] = ['red', 'yellow', 'green'];
  markerOptions!: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  
  vertices2: google.maps.LatLngLiteral[];
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.position2 = {lat: 45.494792,lng: 9.203904};
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptions2 = {fillColor : 'red'}
    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
    this.markerOptions = {icon:iconData}
    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];
    this.vertices2 = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.002 },
      {  lat: this.center.lat +0.001, lng: this.center.lng },
      {  lat: this.center.lat -0.001, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.002}
    ];

  }

  onClick(){
    if (this.n < this.colorList.length) {
      this.circleOptions2 = {fillColor : this.colorList[this.n]}
      this.n ++
    }
    else{
      this.n = 0
      this.circleOptions2 = {fillColor : this.colorList[this.n]}
      this.n ++
    }
  }
}