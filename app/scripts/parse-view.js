var picDisplay = Parse.View.extend({

	template: _.template($('.pic-template').text()),

	initialize: function(){
		var pic = picture.get("picture");
		$(".pic").append(this.el)[0].src = picture.url();
	}
})

render: function(){
	var renderedTemplate = this.template(this.model.attributes)
		// here the el is getting the html of renderedTemplate added to it.
		this.$el.html(renderedTemplate)
}