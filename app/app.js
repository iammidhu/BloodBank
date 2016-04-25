(function() {
	'use strict';

    angular.module('app', [
        // lib modules
        'ngSanitize',
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'oc.lazyLoad',

        // app modules
        'app.main',
        'app.home'
    ]);
})();
