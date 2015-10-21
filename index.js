(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 820,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/dhgw34gb.png", id:"dhgw34gb"}
	]
};



// symbols:



(lib.dhgw34gb = function() {
	this.initialize(img.dhgw34gb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,575,767);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pageBG
	this.instance = new lib.dhgw34gb();
	this.instance.setTransform(34.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1087));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(354.5,442.5,575,767);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;