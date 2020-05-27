$(document).ready(function () {
	var renderPics = function () {
		//EVENTUALLY MOVE THIS TO S3 BUCKET OR SIMILAR
		//SUUUUPER HACKY USING MAP INSTEAD OF DYNAMIC COUNTS
		const tags_counts = new Map([['bathroom', 7], ['customWork', 8], ['floors', 2], ['kitchen', 3]])
		
		for (const [tag, count] of tags_counts.entries()) {
			for (var i=0; i < count; i++) {
				var img = `images/portfolio/${tag}/${i}.jpg`;
				var imgDiv = $("<div>").addClass("media").addClass("all").addClass(tag).css({ 'height': '200px', 'width': '200px', 'outline': '2px solid black', 'outline-offset': '-1px'});
				var currentHref = $("<a>").attr("href", `${img}`)
				var currentImage = $("<img>").attr("src", `${img}`).css({ 'height': '200px', 'width': '200px'});
				currentHref.wrapInner(currentImage);
				imgDiv.append(currentHref);
				//remember to use a diff class/id or fix code for id=content in css/js
				$(".content").append(imgDiv);
			}
		}
	}

	renderPics()
});
