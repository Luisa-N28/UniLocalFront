declare module '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions' {
  import { Map } from 'mapbox-gl';

  interface MapboxDirectionsOptions {
    accessToken: string;
    unit?: 'metric' | 'imperial';
    profile?: 'mapbox/driving' | 'mapbox/walking' | 'mapbox/cycling';
    controls?: {
      inputs?: boolean;
      instructions?: boolean;
      profileSwitcher?: boolean;
      styles?: {
        container?: string;
        input?: string;
        instructions?: string;
        profileSwitcher?: string;
      };
    };
    style?: 'mapbox://styles/mapbox/streets-v11';
    geometries?: 'polyline' | 'polyline6' | 'geojson';

  }

  class MapboxDirections {
    constructor(options: MapboxDirectionsOptions);
    setOrigin(origin: [number, number] | string): void;
    setDestination(destination: [number, number] | string): void;
    addTo(map: Map): void;
  }

  export = MapboxDirections;
}