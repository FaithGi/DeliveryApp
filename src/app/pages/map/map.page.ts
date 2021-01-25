import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage  {
  map: Leaflet.Map;

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Leaflet.Map('mapId2').setView([-28.48322, 24.676997], 6);
    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);
    const markPoint = Leaflet.marker([-26.217509, 27.917094]);
    markPoint.bindPopup('<p>Soweto Branch</p>');
    this.map.addLayer(markPoint);

 const  makhado    = Leaflet.marker([-22.897405, 29.432778]).bindPopup('Makhado Branch');
   this.map.addLayer(makhado);
   const blouberg    = Leaflet.marker([-23.261257,28.993325]).bindPopup('blouberg Branch');
   this.map.addLayer(blouberg);
   const siyancuma    = Leaflet.marker([-28.671046,23.807778]).bindPopup('siyancuma Branch');
   this.map.addLayer(siyancuma);
   const kareeberg    = Leaflet.marker([-30.201853,21.654457]).bindPopup('kareeberg Branch');
   this.map.addLayer(kareeberg);
   const senqu    = Leaflet.marker([-31.071497,27.411293]).bindPopup('senqu Branch');
   this.map.addLayer(senqu);
   const ubuntu   = Leaflet.marker([-31.409654,22.797036]).bindPopup('ubuntu Branch');
   this.map.addLayer(ubuntu);
   const bushbuckridge   = Leaflet.marker([-24.706641,31.84977]).bindPopup('bushbuckridge Branch');
   this.map.addLayer(bushbuckridge);
   const madibeng   = Leaflet.marker([-25.8194,27.938637]).bindPopup('madibeng Branch');
   this.map.addLayer(madibeng);
   const ngwathe   = Leaflet.marker([-27.078422,27.894692]).bindPopup('ngwathe Branch');
   this.map.addLayer(ngwathe);
   const gariep   = Leaflet.marker([-31.033849,25.983757]).bindPopup('gariep Branch');
   this.map.addLayer(gariep);
   const karoo   = Leaflet.marker([-30.920817,21.25895]).bindPopup('karoo Branch');
   this.map.addLayer(karoo);
   const hantam   = Leaflet.marker([-30.618745,19.413247]).bindPopup('hantam Branch');
   this.map.addLayer(hantam);
   const lekwa   = Leaflet.marker([-26.843408,29.03727]).bindPopup('lekwa Branch');
   this.map.addLayer(lekwa);
   const nala   = Leaflet.marker([-27.351985,26.576332]).bindPopup('nala Branch');
   this.map.addLayer(nala);
   const morolong   = Leaflet.marker([-26.607904,22.445473]).bindPopup('morolong Branch');
   this.map.addLayer(morolong);
   const beaufort   = Leaflet.marker([-32.00782,23.324379]).bindPopup('beaufort Branch');
   this.map.addLayer(beaufort);
   const breede   = Leaflet.marker([-33.37616,20.336098]).bindPopup('breede Branch');
   this.map.addLayer(breede);
   const inxuba   = Leaflet.marker([-31.671826,25.389809]).bindPopup('inxuba Branch');
   this.map.addLayer(inxuba);
   const oudtshoorn   = Leaflet.marker([-33.559455,22.577309]).bindPopup('oudtshoorn Branch');
   this.map.addLayer(oudtshoorn);
   const nquthu   = Leaflet.marker([-28.323459,30.619301]).bindPopup('nquthu Branch');
   this.map.addLayer(nquthu);
   const umzimvubu   = Leaflet.marker([-30.88311,29.081215]).bindPopup('umzimvubu Branch');
   this.map.addLayer(umzimvubu);
   const intsika   = Leaflet.marker([-31.970548,27.235512]).bindPopup('intsika Branch');
   this.map.addLayer(intsika);
   const msukaligwa   = Leaflet.marker([-26.21432,30.44352]).bindPopup('msukaligwa Branch');
   this.map.addLayer(msukaligwa);
   const mookgopong   = Leaflet.marker([-24.826351,28.773598]).bindPopup('mookgopong Branch');
   this.map.addLayer(mookgopong);
   const nkomazi   = Leaflet.marker([-25.105224,31.673989]).bindPopup('nkomazi Branch');
   this.map.addLayer(nkomazi);
   const mahikeng   = Leaflet.marker([-25.938015,25.389809]).bindPopup('mahikeng Branch');
   this.map.addLayer(mahikeng);


   var bounds =[[-24.826351,28.773598],[-31.033849,25.983757]];
   Leaflet.rectangle(bounds, {color: "#008000", weight: 1}).addTo(this.map);
  
   var latlngs = [
    [-26.21432,30.44352],
    [-27.351985,26.576332],
    [-27.990338, 30.766548],
    [-28.671046,23.807778]
];

var polyline = Leaflet.polyline(latlngs, {color: 'orange'}).addTo(this.map);

}

ionViewWillLeave() {
  this.map.remove();
}
 
}
