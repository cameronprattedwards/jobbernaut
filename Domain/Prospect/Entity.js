define([], function () {
	function Prospect() {}

	Prospect.scheme = {
		title: String,
		company: String,
		contact: String,
		notes: String,
		priority: Number,
		appSubmitted: Boolean,
		appFollowedUp: Boolean,
		thankYouSent: Boolean,
		jobOffered: Boolean,
		state: String
	};

	return Prospect;
});