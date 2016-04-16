var arcData = [{
	origin: 'CA',
    destination: 'MO',
    amount: '10000'
},
{
	origin: 'TX',
    destination: 'MO',
    amount: '1000'
},
{
	origin: 'MA',
    destination: 'MO',
    amount: '6000'
},
{
	origin: 'IL',
    destination: 'MO',
    amount: '2000'
}];


var arcScale = d3.scale.linear()
	.domain([
		d3.min(arcData, function(d) { return +d.amount;} ),
		d3.max(arcData, function(d) { return +d.amount;} )
		])
	.range([1,10])
	.clamp(true);



var map = new Datamap({
  element: document.getElementById("container"),
  scope: 'usa',
  fills: {
    defaultFill: "#AAAAAA", //changed from #ABDDA4
    win: '#0fa0fa'
  },
  data: {
    // 'TX': { fillKey: 'win' },
    // 'FL': { fillKey: 'win' },
    // 'NC': { fillKey: 'win' },
    // 'CA': { fillKey: 'win' },
    // 'NY': { fillKey: 'win' },
    // 'CO': { fillKey: 'win' }
  }
});


//Arc Loop Test
var arcs = [];
arcData.forEach(makeArc);
map.arc(arcs);

function makeArc(item, index){
	console.log(item);

	arcs.push({
		origin: item.origin,
		destination: item.destination,
		strokeWidth: arcScale(item.amount)
	});

}


// Arcs coordinates can be specified explicitly with latitude/longtitude,
// or just the geographic center of the state/country.

/*map.arc([
  {
    origin: 'CA',
    destination: 'TX',
    strokeWidth: '15'
  },
  {
    origin: 'OR',
    destination: 'TX'
  },
  {
    origin: 'NY',
    destination: 'TX'
  },
  {
      origin: {
          latitude: 40.639722,
          longitude: -73.778889
      },
      destination: {
          latitude: 37.618889,
          longitude: -122.375
      }
  },
  {
      origin: {
          latitude: 30.194444,
          longitude: -97.67
      },
      destination: {
          latitude: 25.793333,
          longitude: -80.290556
      },
      options: {
        strokeWidth: 2,
        strokeColor: 'rgba(100, 10, 200, 0.4)',
        greatArc: true
      }
  },
  {
      origin: {
          latitude: 39.861667,
          longitude: -104.673056
      },
      destination: {
          latitude: 35.877778,
          longitude: -78.7875
      }
  }
],  {strokeWidth: 1, arcSharpness: 1.4});*/