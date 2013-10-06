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
		this.model.destroy()
		this.remove()
		
		
	},

	edit: function() {
		$(this.el).html('<input class="input_name" value="' + this.model.get('name') + '"/><input class="input_email" value="' + this.model.get('email') + '"/><input class="input_phone" value="' + this.model.get('phone') + '"/> <button class="save">Save</button>')
		

	},

	save: function() {
		
		this.model.set("name", $('.input_name').val())
		this.model.set("email", $('.input_email').val())
		this.model.set("phone", $('.input_phone').val())
		var saveStudent = this.model
		$(this.el).html('<div class="gridImageContainer"><image class= gridImage src=' + this.model.get('image') + ' </image></div>' +'<h2>'+ this.model.get('name') + '</h2><h2>' + this.model.get('email') + '</h2><h2>' + this.model.get('phone') + '</h2>' + '<button class="delete">Delete</button><button class="edit">Edit</button>')
		this.model.save()
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
		this.$el.append('<input class="input_new_photo" placeholder="Photo URL"/><input class="input_new_name" placeholder="Name"/><input class="input_new_email" placeholder="Email"/><input class="input_new_phone" placeholder="Phone Number"/> <button class="add">Save</button>')
	},

	add: function() {
		var name =  $('.input_new_name').val()
		var email = $('.input_new_email').val()
		var phone = $('.input_new_phone').val()
		var image = $('.input_new_photo').val()
		var data = {
			name: name,
			email: email,
			phone: phone,
			image: image,
			github: ''
		}
		addStudent = new Student()
		addStudent.set(data)
		students= new StudentCollection()
		students.add(addStudent)
		new GridStudentView({model: addStudent})
		addStudent.save()
		
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