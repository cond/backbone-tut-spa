MyApp.App = Backbone.View.extend({

    el: '#app',

    tmpl: MyApp.Templates.layout,

    initialize: function() {

	this.$el.html(this.tmpl());

	this.history = new MyApp.View.History({
	    el: this.$el.find('#history_list')
	});

	this.searchBar = new MyApp.View.SearchBar({
	    el: this.$el.find('#header')
	});

	this.tabs = new MyApp.View.Tabs({
	    el: this.$el.find('#search_results')
	});


	this.footer = new MyApp.View.Footer({
	    el: this.$el.find('#footer')
	});

    }
});

new MyApp.App();
