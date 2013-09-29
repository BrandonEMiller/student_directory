GridStudentView = Backbone.View.extend({
	
	template: _.template(  $('#grid-template').text() ),

	events: {
		"click .delete": "remove"
		
	},

	className: 'student-grid-unit',

	initialize: function() {
		
		$('.container').append(this.el)
		this.render()
	},

	render: function(){

		
		this.$el.append(this.template({student: this.model}))
	}
})

ThumbnailView = Backbone.View.extend({
	
	template: _.template( $('#thumbnail-template').text() ),


	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template({student: this.model}))
	}
})