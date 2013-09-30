GridStudentView = Backbone.View.extend({
	
	template: _.template(  $('#grid-template').text() ),

	events: {
		"click .delete": "remove",
		"click .edit": "edit",
		"click .save": "save"

	},

	className: 'student-grid-unit',

	initialize: function() {
		
		$('.container').append(this.el)
		this.render()
	},

	render: function(){

		
		this.$el.append(this.template({student: this.model}))
	},

	edit: function() {
		$(this.el).html('<input class="input_name" value="' + this.model.get('name') + '"/><input class="input_email" value="' + this.model.get('email') + '"/><input class="input_phone" value="' + this.model.get('phone') + '"/> <button class="save">Save</button>')
		console.log ("You clicked edit")

	},

	save: function() {
		console.log("You clicked save")
		this.model.set("name", $('.input_name').val())
		this.model.set("email", $('.input_email').val())
		this.model.set("phone", $('.input_phone').val())
		$(this.el).html('<div class="gridImageContainer"><image class= gridImage src=' + this.model.get('image') + ' </image></div>' +'<h2>'+ this.model.get('name') + '</h2><h2>' + this.model.get('email') + '</h2><h2>' + this.model.get('phone') + '</h2>' + '<button class="delete">Delete</button><button class="edit">Edit</button>')

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