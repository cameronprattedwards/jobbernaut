define(["graphjs/Collection", "Domain/Prospect/Entity"], function (Collection, Prospect) {
	function User() {}

	User.scheme = {
		email: String,
		password: String,
		dailyProspectGoal: Number,
		prospects: Collection(Prospect)
	};

	return User;
});