(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 820,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.dfgwf = function() {
	this.spriteSheet = ss["ann_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dhgw34gb = function() {
	this.spriteSheet = ss["ann_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.txtpng = function() {
	this.spriteSheet = ss["ann_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wrgtw2r = function() {
	this.spriteSheet = ss["ann_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wwwdgsg = function() {
	this.spriteSheet = ss["ann_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.ann = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pageBG
	this.instance = new lib.dhgw34gb();
	this.instance.setTransform(34.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1087));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(354.5,442.5,575,767);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;