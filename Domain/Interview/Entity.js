define(["graphjs/Collection"], function (Collection) {
	function Interview() {}

	Interview.scheme = {
		date: Date,
		interviewers: Collection(String),
		notes: String
	};
});