(function() {
	'use strict';

    angular.module('app', [
        // lib modules
        'ngSanitize',
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'oc.lazyLoad',
        'ngResource',
        
        // app modules
        'app.main',
        'app.home',
        'app.request-blood'
    ]);
})();
