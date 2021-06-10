//import beer_ico from './beer.png';
//import beer_shadow_ico from '.public/beer_shadow.png';
import L from 'leaflet';


const BeerIcon = new L.icon({
    iconUrl: './beer.png',
    shadowUrl: './beer_shadow.png',
    iconSize:     [32, 32], // size of the icon
    shadowSize:   [40, 32], // size of the shadow
    iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 32],  // the same for the shadow
    popupAnchor:  [16, 0] // point from which the popup should open relative to the iconAnchor
});

const BigBeerIcon = new L.icon({
    iconUrl: './beer.png',
    shadowUrl: './beer_shadow.png',
    iconSize:     [48, 48], // size of the icon
    shadowSize:   [54, 48], // size of the shadow
    iconAnchor:   [24, 48], // point of the icon which will correspond to marker's location
    shadowAnchor: [24, 48],  // the same for the shadow
    popupAnchor:  [24, 0] // point from which the popup should open relative to the iconAnchor
});

export {BeerIcon, BigBeerIcon}
