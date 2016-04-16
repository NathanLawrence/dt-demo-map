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
