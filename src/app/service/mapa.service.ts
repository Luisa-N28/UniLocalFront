import { Injectable } from '@angular/core';
import { Ubicacion } from '../dto/ubicacion';
import { Observable } from 'rxjs';
import { ItemNegocioDTO } from '../dto/item-negocio-dto';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';



declare var mapboxgl: any;

@Injectable({
  providedIn: 'root'
})
export class MapaService {



  mapa: any;
  style: string = 'mapbox://styles/mapbox/streets-v11';
  directions: any;
  marcadores: any[];
  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3ZhcmdhcyIsImEiOiJjbHZzc2U2bTIwNGczMmtxbmw2eHdodWdmIn0.Z7quMPpfwlP4tVulUx-k1A';
    this.marcadores = [];

  }
  public crearMapa() {
    this.mapa = new mapboxgl.Map({
      container: 'mapa',
      style: this.style,
      center: [-75.6757989, 4.5381261],
      zoom: 13
    });
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.mapa.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
      })
    );

  }


  public agregarMarcador(): Observable<any> {
    const mapaGlobal = this.mapa;
    const marcadores = this.marcadores;
    return new Observable<any>(observer => {
      mapaGlobal.on('click', function (e: any) {
        marcadores.forEach(marcador => marcador.remove());
        const marcador = new mapboxgl.Marker()
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(mapaGlobal);
        marcadores.push(marcador);
        observer.next(marcador._lngLat);
      });
    });
  }


  public pintarMarcadores(negocios: ItemNegocioDTO[]) {
    negocios.forEach(negocio => {
      new mapboxgl.Marker()
        .setLngLat([negocio.ubicacion.longitud, negocio.ubicacion.latitud])
        .setPopup(new mapboxgl.Popup().setHTML(negocio.nombre,))
        .addTo(this.mapa);
    });
  }

  pintarMarcador(negocio: ItemNegocioDTO | undefined) {
    if (negocio) {
      new mapboxgl.Marker()
        .setLngLat([negocio.ubicacion.longitud, negocio.ubicacion.latitud])
        .setPopup(new mapboxgl.Popup().setHTML(negocio.nombre))
        .addTo(this.mapa);

      this.mapa.flyTo({ center: [negocio.ubicacion.longitud, negocio.ubicacion.latitud], zoom: 15 });
    }
  }

  public establecerRuta(origen: Ubicacion, destino: Ubicacion) {
    //  this.mapa.addControl(
    //    new mapboxgl.Directions()
    // );




    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = [position.coords.longitude, position.coords.latitude];
      const pointB = [destino.longitud, destino.latitud];
      this.directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
        controls: { inputs: true, instructions: true, profileSwitcher: true },
        style: 'mapbox://styles/mapbox/streets-v11',
        geometries: 'polyline',


      });
      this.directions.setOrigin(userCoordinates);
      this.directions.setDestination(pointB);
      this.mapa.addControl(this.directions, 'top-left');


      // Centra el mapa en la ubicación del usuario
      this.mapa.setCenter(userCoordinates);
    });






  }


}
