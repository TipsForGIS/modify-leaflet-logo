// Defining the map object named logoMap.
// We are rendering the map in the 'logoMap' div in index.html
var logoMap = L.map('logoMap',
	{
		// These are the options to setup the map object
		center : [39.322542, -77.726316],
		zoom : 13,
		attributionControl: false
	});

// Defining the tiles object
var osmTiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
// Add the tiles object to the map object
osmTiles.addTo(logoMap);

// Defining the logo object. Remember we disabled the default one under the map options defined above
// so we can modify a new one and add it to the map
var attrControl = L.control.attribution({position:"topright"});

// Modify the logo's content
attrControl.addAttribution('&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors');
attrControl.setPrefix('By <a href="https://twitter.com/TipsForGIS" target="_blank">Tips for GIS</a>');
// Add the logo to the map
attrControl.addTo(logoMap);
