define([], function () {
	function User() {}

	User.scheme = {
		email: String,
		password: String,
		dailyProspectGoal: Number
	};

	return User;
});