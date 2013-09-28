GridStudentView = Backbone.View.extend({
	
	template: _.template( $('#grid-template').text() ),

	events: {
		"click .delete": "remove"
	},

	className: 'student-grid-unit',

	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.attr('href', "#/students/" + this.model.get('id') )
		this.$el.append(this.template({student: this.model}))
	}
})

FullStudentView = Backbone.View.extend({
	
	template: _.template( $('#full-template').text() ),

	className: 'student-full',

	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template({item: this.model}))
	}
})