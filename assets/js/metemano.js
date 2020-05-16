$(document).ready(function () {
	var renderPics = function () {
		//EVENTUALLY MOVE THIS TO S3 BUCKET OR SIMILAR
		var tags = ["bathroom", "customWork", "kitchen"];
		for (var t = 0; t < tags.length; t++) {
			for (var i = 0; i < 3; i++) {
			var imgDiv = $("<div>").addClass("media").addClass("all").addClass(tags[t]).css({ 'height': '200px', 'width': '200px' }); ;
			var currentHref = $("<a>").attr("href", `images/portfolio/${tags[t]}/${i}.jpg`);
			var currentImage = $("<img>").attr("src", `images/portfolio/${tags[t]}/${i}.jpg`);
			currentHref.wrapInner(currentImage)
			imgDiv.append(currentHref)
			//remember to use a diff class/id or fix code for id=content in css/js
			$(".content").append(imgDiv)
			}
		}
	}

	renderPics()
});
