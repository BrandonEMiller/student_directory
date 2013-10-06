/*global describe, it */
'use strict';
(function () {
    describe('Backbone View Practice', function () {
        describe('should', function () {
        	var Test = new Student({name: "Test Man"})
    	  	 var TestView = new GridStudentView({model: Test})
             var TestThumbnail = new ThumbnailView({model: Test})

            it('confirm jQuery is avaliable', function () {
        		expect(jQuery() !== undefined || null).to.equal(true);
    	    });

    	  	 it('confirm Underscore is avaliable', function () {
        		expect(_.VERSION !== undefined || null).to.equal(true);
    	    });

    	  	 it('confirm Backbone is avaliable', function () {
        		expect(Backbone.VERSION !== undefined || null).to.equal(true);
    	    });

    	  	 it('should create a contructor of a test object when read in', function () {
    	  	 	expect(Test !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a contructor of a test object with property name', function () {
    	  	 	expect(Test.get('name')).to.equal("Test Man");
    	  	 })

    	  	 it('should create a backbone view with the model of the test constructor', function () {
                expect(TestView !== undefined || null).to.equal(true);
             })
             it('should create a backbone view for thumbnails with the model of the test constructor', function () {
    	  	 	expect(TestThumbnail !== undefined || null).to.equal(true);
    	  	 })

    	  	 it('should create a backbone view than can retrieve the name property from the constructor model', function () {
    	  	 	expect(TestView.model.get('name')).to.equal("Test Man");
    	  	 })

    	  	 it('should create a backbone view with a remove function', function () {
    	  	 	expect(TestView.remove !== undefined || null).to.equal(true);
    	  	 })

			TestView.remove()
    	  	 

    	  	 // it('should destroy the view when the remove function is called', function () {
    	  	 	
    	  	 // 	expect(Test.get('name')).to.be(undefined);
    	  	 // })
        });
    });
})();

