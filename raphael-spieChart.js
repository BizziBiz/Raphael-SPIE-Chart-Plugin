function showSpieChart(i){
	var existing = window.onload;
	window.onload = function() {
		if(typeof(existing) == "function"){ existing(); }
		
	    var r = new Raphael(i.id, i.radius*2.5, i.radius*2.5);
		
		function getArray(j){
			var build = new Object();
			var sumOffset = 0;
			
			build.radius = j.radius;
			build.segments = new Array;	
		
			for(var key in j.segments){
				build.segments[key] = {value : j.segments[key].value, fill : i.hex, stroke : i.stroke};
				if(key == 0){
					build.segments[key].offset = 0;
				}else{
					var pKey = key-1;
					var TWO_PI = Math.PI * 2;
					var cOffset = (j.segments[pKey].value * TWO_PI);
					build.segments[key].offset = cOffset + sumOffset;
					sumOffset += cOffset; 
				}	
			}
			return build;
		}
		
		var build = getArray(i);
		var mainChart = new drawPieChart({
		  radius : i.radius,
		  segments : build.segments, 
		  resolution : 0.1
		});
		mainChart.translate(i.radius*1.25, i.radius*1.25);
		
		
		for(var key in i.segments){
			var tmp = drawPieChart({
			  radius : i.radius * i.segments[key].fill,
			  offsetAngle : build.segments[key].offset,
			  segments : [
			    {value : i.segments[key].value, fill : i.hexfill, stroke : i.stroke}, 
			  ], 
			  resolution : 0.1
			});
			tmp.translate(i.radius*1.25, i.radius*1.25);
		}

		
		function drawPieChart(p){
		  if (!p.resolution) p.resolution = 0.1;
		
		  var TWO_PI = Math.PI * 2;
		
		  var pie = r.set();
		
		  var leng = p.segments.length;
		  
		  if (!p.offsetAngle) p.offsetAngle = 0;
		  var offsetAngle = p.offsetAngle;
		
		  for (var j = 0; j < leng; j++){
		    var segData = p.segments[j];
		
		    // angle is percent of TWO_PI
		    var angle =  TWO_PI * segData.value;
		
		    var seg = drawSegment(p.radius, angle, offsetAngle, p.resolution);
		
		    seg.attr({stroke:segData.stroke,fill:segData.fill});
		    console.log(i.animate);
		    if(i.animate == true){
			    seg.mouseover(function(){
			    	this.animate({scale: [1.1, 1.1]}, i.speed, i.animation);
			    }).mouseout(function(){
			    	this.animate({scale: [1, 1]}, i.speed, i.animation);
			    });
		    }
		    pie.push(seg);
		    offsetAngle += angle;
		  }
		  return pie;
		}
		
		function polarPath(radius, theta, rotation){
		  var x, y;
		  x = radius * Math.cos(theta + rotation);
		  y = radius * Math.sin(theta + rotation);
		  return "L " + x + " " + y + " "; 
		}
	
		function drawSegment(radius, value, rotation, resolution){
		  if (!resolution) resolution = 0.1;
		  var path = "M 0 0 ";
		
		  for (var i = 0; i < value; i+=resolution){
		    path += polarPath(radius, i, rotation);
		  }
		  path += polarPath(radius, value, rotation);
		
		  path += "L 0 0";
		  var seg = r.path(path);
		  return seg;
		}
	}
}