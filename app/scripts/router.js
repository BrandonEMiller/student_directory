StudentRouter = Backbone.Router.extend({

	initialize: function(){
		
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