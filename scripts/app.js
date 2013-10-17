define(["jQuery", "kendo",   "user", "config", "utils",    "home-view", "login-view"  ],
       function($, kendo,     user,  config,   utils,           homeView,    loginView       ) {

    var _onError = function (error, url, line) {
        utils.showError(error);
    };

    var init = function () {
        window.onerror = _onError;
		
		// Here i can add code related to Session or not.
	if (user.isAuthenticated == false) {
			var kendoApp = new kendo.mobile.Application(document.body, {
				transition: "fade",
				initial: "login-view",
				loading: '<h1 class="loading-message">Loading...</h1>'
			});
		} else {
			var kendoApp = new kendo.mobile.Application(document.body, {
				transition: "fade",
				initial: "home-view",
				loading: '<h1 class="loading-message">Loading...</h1>'
			});
		}
        //utils.init(kendoApp);
       var _kendoApp = kendoApp;
    };

    return {
        closeErrorModal: utils.closeError,
        config: config,
        init: init,
        homeView: homeView,
        loginView: loginView
    };
});