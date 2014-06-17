Parse.initialize("IoQ5sRLyWBN13Nv0jJsFJXgxqjOBAhQMeBqNksL9", "ncL7526aNyuGFnV4NRNuU4sFBMHF4Ayiip3fiEcD");



$('.button').click(function(){

	var fileUploadControl = $("#profilePhotoFileUpload")[0];

	if (fileUploadControl.files.length > 0) {
	  var file = fileUploadControl.files[0];
	  var name = "photo.jpg";
	 
	  var parseFile = new Parse.File(name, file);
	}

	parseFile.save().then(function() {
	  // The file has been saved to Parse.

	}, function(error) {
	  // The file either could not be read, or could not be saved to Parse.
	});

	var image = new Parse.Object("picture");
	image.set("caption", "");
	image.set("picture", parseFile);
	image.save();
})
