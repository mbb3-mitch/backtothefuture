const Sketcher = require('../scripts/image_filter/past/sketch');

class ImageConverter {
    constructor() {

    }

    processOld(img) {
    	let noInitialPreview;
	    var canvas = document.createElement("canvas");
	    var context = canvas.getContext("2d");
	    if (img.width != canvas.width || img.height != canvas.height) {
		    canvas.width = img.width;
		    canvas.height = img.height;
		    noInitialPreview = false;
	    }
	    if (!noInitialPreview) {
		    context.drawImage(img, 0, 0, canvas.width, canvas.height);
	    }
	    var sketcher = new Sketcher(canvas.width, canvas.height);
	    sketcher.levelSteps = 6;
	    sketcher.lineAlpha = 0.1;
	    sketcher.lineThickness = 2;
	    sketcher.lineDensity = 0.5;
	    sketcher.lightness = 4;
	    sketcher.edgeBlurAmount = 2;
	    sketcher.edgeAmount = 0.5;
	    sketcher.progressUpdate(function (proportion, message) {
		    console.log((Math.round(proportion*1000)/10) + "% done - " + message);
	    });
	    console.log("Transforming canvas...");

	    context.drawImage(img, 0, 0, canvas.width, canvas.height);
	    sketcher.transformCanvas(canvas, true).whenReady(function () {
		    console.log("Done!");
		    document.title = "Sketch completed";

		    var dataUrl = canvas.toDataURL();
		    document.getElementById("base64-link").setAttribute('href', dataUrl);
		    var base64 = dataUrl.replace(/^data:image\/\w+;base64,/, "");
		    document.getElementById("base64-data").value = base64;
		    img.style.display = 'none';
	    });
	    return sketcher;
    }
}

module.exports = ImageConverter;