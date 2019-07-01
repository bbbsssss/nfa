new Vue({
	el: '#stats',
	data: {
		users: [],
		mentions: [],
		words: [],
		emotes: [],
		stats: [
			{ key: '2019-06', value: 'nofungeneral1906' },
			{ key: '2019-05', value: 'nofungeneral1905' },
			{ key: '2019-04', value: 'nofungeneral1904' },
			{ key: '2019-03', value: 'nofungeneral1903' },
			{ key: '2019-02', value: 'nofungeneral1902' },
			{ key: '2019-01', value: 'nofungeneral1901' },
			{ key: '2018-12', value: 'nofungeneral1812' },
			{ key: '2018-11', value: 'nofungeneral1811' },
			{ key: '2018-10', value: 'nofungeneral1810' },
			{ key: '2018-09', value: 'nofungeneral1809' }
		],
		selected: null
	},
	methods: {
		getStats: function() {
			if (this.selected == null) {
				this.selected = this.stats[0].value;
			}
			
			var self = this;
			fetch('stats/'+this.selected+'.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				self.users = json.users;
				self.mentions = json.mentions;
				self.words = json.words;
				self.emotes = json.emotes;
			});
		}
	},
	created: function() {
		this.getStats();
	}
});
