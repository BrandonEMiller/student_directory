StudentRouter = Backbone.Router.extend({

	initialize: function(){
		// this.students = new StudentCollection()
		// var that = this
		// $.get('http://0.0.0.0:3000/collections/students', function(data){
		// 	that.students.add(data)
		// })
		
	},

	routes: {
		"students"		: "showStudents",
		"students/:_id"	: "showStudent",
		"thumbnails"	: "showThumbnails"
	},


	showStudents: function() {
		 $('.container').html('')
		 this.students = new StudentCollection()
		 this.students.fetch({
		 	success: function(students){
		 		students.each(function(student){
		 			new GridStudentView({model: student})
		 		})
		 		new AddView ()
		 		
		 	}
		 })
		 // var that = this
		//  $.get('http://0.0.0.0:3000/collections/students', function(data){
		// 	that.students.add(data)
		// })
		 
	},


	showThumbnails: function() {
		$('.container').html('')
		this.thumbnails = new StudentCollection()

		 this.thumbnails.fetch({
		 	success: function(thumbnails){
		 		thumbnails.each(function(student){
		 			new ThumbnailView({model: student})
		 		})
		 	}
		 })
		//  $.get('http://0.0.0.0:3000/collections/students', function(data){
		// 	that.thumbnails.add(data)
		// })
	},	 

	showStudent: function(id) {
		
		$('.container').html('')
		 this.thumbnails.fetch({
		 	success: function(thumbnails){
		 		var studentToShow = thumbnails.get(id)
				new FullStudentView({model: studentToShow})
		 	}
		 })
		
	}	 
	
})

var router = new StudentRouter() 
Backbone.history.start()