GridStudentView = Backbone.View.extend({
	
	template: _.template(  $('#grid-template').text() ),

	events: {
		"click .delete": "destroy",
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

	destroy: function() {
		console.log(this.model.get('_id'))
		this.remove()
		$.ajax({type:'DELETE', url:'http://0.0.0.0:3000/collections/students/'+ this.model.get('_id')})
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
		$.ajax({type:'PUT', url:'http://0.0.0.0:3000/collections/students/'+ this.model.get('_id'), data: {name: this.model.get('name')}})
		$.ajax({type:'PUT', url:'http://0.0.0.0:3000/collections/students/'+ this.model.get('_id'), data: {email: this.model.get('email')}})
		$.ajax({type:'PUT', url:'http://0.0.0.0:3000/collections/students/'+ this.model.get('_id'), data: {name: this.model.get('phone')}})
		$(this.el).html('<div class="gridImageContainer"><image class= gridImage src=' + this.model.get('image') + ' </image></div>' +'<h2>'+ this.model.get('name') + '</h2><h2>' + this.model.get('email') + '</h2><h2>' + this.model.get('phone') + '</h2>' + '<button class="delete">Delete</button><button class="edit">Edit</button>')

	}
})

AddView = Backbone.View.extend({


	events: {
		"click .add": "add"

	},

	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function() {
		this.$el.append('<input class="input_name" placeholder="Name"/><input class="input_email" placeholder="Email"/><input class="input_phone" placeholder="Phone Number"/> <button class="add">Save</button>')
	},

	add: function() {
		var name =  $('.input_name').val()
		var email = $('.input_email').val()
		var phone = $('.input_phone').val()
		var data = {
			name: name,
			email: email,
			phone: phone,
			image: 'https://identicons.github.com/9745e271f4fb0ac83b37286d6ac03942.png'
		}
		console.log(data)
		//this.students.add(data)
		$.post('http://0.0.0.0:3000/collections/students', {name: data.name, email: data.email, phone: data.phone, image: data.image})
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


FullStudentView = Backbone.View.extend({
	template: _.template( $('#full-template').text()),


	initialize: function() {
		$('.container').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template({student: this.model}))
	}

})