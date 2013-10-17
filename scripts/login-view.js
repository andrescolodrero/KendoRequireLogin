define(["kendo",  "user", "utils"], function (kendo, data, utils) {
  
	var viewModel = kendo.observable({
        userName: "example",
        errorMessage: "",
        loginUsername: "owner",
        loginPassword: "p@ssword123",
        registerUsername: "",
        registerPassword: "",
        registerPasswordRetyped: ""
		});
		
		return {
			viewModel : viewModel
		}
    
});