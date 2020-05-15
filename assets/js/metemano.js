$(document).ready(function () {
	var renderPics = function () {
		for (var i = 0; i < 3; i++) {
		var imgDiv = $("<div>").addClass("media").addClass("all");
		var currentHref = $("<a>").attr("href", `images/portfolio/bathroom/${i}.jpg`);
		var currentImage = $("<img>").attr("src", `images/portfolio/bathroom/${i}.jpg`);
		currentHref.wrapInner(currentImage)
		imgDiv.append(currentHref)
		$("#portfolioPics").append(imgDiv)
		}
	}

	renderPics()
});
