'use strict';

app.factory('Instagram', ['$http',
	function($http) {
		var base = "https://api.instagram.com/v1";
		var clientId = 'bc3c45011ddd48c5bd758dc5113c710b';
		return {
			'get': function(count, hashtag) {
				var request = '/tags/' + hashtag + '/media/recent';
				var url = base + request;
				var config = {
					'params': {
						'client_id': clientId,
						'count': count,
						'callback': 'JSON_CALLBACK'
					}
				};
				return $http.jsonp(url, config);
				console.log(request);
			}
		};
	}
]);