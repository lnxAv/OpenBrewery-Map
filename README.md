# Submission Notes

## Objective

<details>
<summary>Project A</summary>
The client wants to create a web app that allows users to browse and view breweries. They have proposed using [this API](https://www.openbrewerydb.org/).
</details>
My goal was to give the user a single place to search and see the locations of various breweries in the united states

## The Challenges

I wanted to challenge myself from the start,
Thus considering I had never explored any map API or map libraries before,
I set myself on a short course to know more about them.

## The approach

My first step was to find the best tools and know more about the Open Brewery DB,
I have decided to settle with SWR as a good middleware to handle the API,
Has for the map I settled with [leaflet](https://leafletjs.com/) and [react-leaflet](https://react-leaflet.js.org/),
This decision was made because the MapBox API (v1) and Google Map Javascript were unnecessarily complicated and didn't offer the level of freedom I was looking for, 
the one downside to note however is that leaflet is not SSR-able,
Once those two were chosen I settled for [Styled-Components](https://styled-components.com/showcase) since I like the rapidity and already owned some snippets,

Finally, I drew a hierarchy of how I wanted things to work, thus with some quick pseudo-code I stayed true to it.

## Documentation
My own commenting was made like so (I did notice that # is confused by ! sometime):  
//! functions  
//# comments  
//? links & reference  
//!!! important  


## Changes & Missing things
**the changes to do**
- [ ] Change the size of the Map panel to be bigger & dynamic
- [ ] Change display of address, phone number & link
- [ ] Try to get the favicon of URL's and display it

- Add a more filter options:
  - [X] A drop down with states to model after [this](https://inkplant.com/code/state-latitudes-longitudes)
  - [ ] A "More options" to add future extra filters

- []Geolocations with a dragable pin -> Based on issue [Issue #70](https://github.com/openbrewerydb/openbrewerydb-rails-api/issues/70#issue-912366562)
- 🦔 Keep track of other OpenBreweryDb changes and try to reflect them 

## Ressources
Map:
[events - ](https://react-leaflet.js.org/docs/example-events)  
[panning animate -](https://react-leaflet.js.org/docs/example-animated-panning)  
[external state check -](https://react-leaflet.js.org/docs/example-external-state)  
[Child behavior -](https://react-leaflet.js.org/docs/api-components/#evented-behavior)  
[Custon Icons -](https://leafletjs.com/examples/custom-icons/) + react-leaflet  
Open Brewery Discord  


## Issues and solution found



### Prerequisites (need to be installed)
  - git
  - node

### Getting started
  - Clone this repository/project to your computer
  - Install dependencies using `yarn` (or `npm install`)
  - Run the project using `yarn start` (or `npm start`)
