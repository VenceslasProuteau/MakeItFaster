'use strict';

routing.$inject = ['$urlRouterProvider', '$httpProvider', '$compileProvider'];

export default function routing($urlRouterProvider, $httpProvider, $compileProvider) {
	// removes the classes from the DOM added by Angular i.e ng-scope, ng-binding etc ... improving perf.
	// But we can't access the scope objects/methods, etc from the dev tool  ..
	// Todd Motto about angular performances : Tuning the engine => https://youtu.be/LoIuokh6NUI?t=55m37s
	// $compileProvider.debugInfoEnabled(false);

	// https://youtu.be/LoIuokh6NUI?t=44m40s
    $httpProvider.useApplyAsync(true);
    $urlRouterProvider
        .when('', '/login')
        .otherwise('/login');
}
