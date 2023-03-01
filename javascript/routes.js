var routes = ["home", "about", "projects", "contact"];

function goToPage(page) {
	const params = new URLSearchParams(location.search);

	params.set("page", page);
	window.history.replaceState(
		{},
		"",
		`${location.pathname}?${params.toString()}`
	);

	const elem = document.getElementById(page);
	var rect = elem.getBoundingClientRect();
	var style = elem.currentStyle || window.getComputedStyle(elem);

	window.scrollBy(0, rect.top - parseInt(style.marginTop));
}

function updateRoute() {
	const params = new URLSearchParams(location.search);

	if (!("page" in params)) {
		params.set("page", "home");
		window.history.replaceState(
			{},
			"",
			`${location.pathname}?${params.toString()}`
		);
	} else {
		const page = params.get("page");

		const elem = document.getElementById(page);
		var rect = elem.getBoundingClientRect();

		window.scrollBy(0, rect.top);
	}
}
