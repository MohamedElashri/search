const shortcodes = {
	g: { url: "www.google.com/search?q=", desc: "Google" },
	gf: { url: "fonts.google.com/?query=", desc: "Google Fonts" },
	gi: { url: "fonts.google.com/icons?icon.query=", base: "fonts.google.com/icons", desc: "Google Icons" },
	gm: { url: "www.google.com/maps/search/", base: "google.com/maps", desc: "Google Maps" },
	gs: { url: "scholar.google.com/scholar?q=", desc: "Google Scholar" },
	gp: { url: "patents.google.com/?q=", desc: "Google Patents" },
	gb: { url: "books.google.com/?q=", desc: "Google Books" },
	gt: { url: "trends.google.com/explore?q=", desc: "Google Trends" },
	gdm: { url: "deepmind.google/search/?query=", desc: "Google DeepMind" },
	yt: { url: "www.youtube.com/search?q=", desc: "YouTube" },
	ytm: { url: "music.youtube.com/search?q=", desc: "YouTube Music" },
	b: { url: "www.bing.com/search?q=", desc: "Bing Search" },
	ddg: { url: "start.duckduckgo.com/?q=", desc: "DuckDuckGo" },
	ddgh: { url: "html.duckduckgo.com/html?q=", desc: "DuckDuckGo (HTML)" },
	ddgl: { url: "lite.duckduckgo.com/lite?q=", desc: "DuckDuckGo (Lite)" },
	yan: { url: "yandex.com/search/?text=", desc: "Yandex" },
	y: { url: "search.yahoo.com/search?p=", desc: "Yahoo!" },
	p: { url: "www.perplexity.ai/search?q=", desc: "Perplexity" },
	m: { url: "www.mojeek.com/search?q=", desc: "Mojeek" },
	k: { url: "kagi.com/search?q=", desc: "Kagi" },
	gpt: { url: "chatgpt.com/?hints=search&q=", desc: "ChatGPT Search" },
	oai: { url: "openai.com/search/?q=", desc: "OpenAI" },
	claude: { url: "claude.ai/new?q=", desc: "Claude" },
	ask: { url: "www.ask.com/web?q=", desc: "Ask" },
	q: { url: "www.qwant.com/?q=", desc: "Qwant" },
	sp: { url: "www.startpage.com/do/search?query=", desc: "StartPage" },
	br: { url: "search.brave.com/search?q=", desc: "Brave Search" },
	eco: { url: "www.ecosia.org/search?q=", desc: "Ecosia" },
	amz: { url: "www.amazon.com/s?k=", desc: "Amazon" },
	ebay: { url: "www.ebay.com/sch/?_nkw=", desc: "eBay" },
	bc: { url: "bandcamp.com/search?q=", desc: "Bandcamp" },
	hn: { url: "hn.algolia.com/?q=", base: "news.ycombinator.com", desc: "Hacker News" },
	sw: { url: "simple.wikipedia.org/w/index.php?search=", desc: "Simple Wikipedia" },
	w: { url: "wikipedia.org/w/index.php?search=", desc: "Wikipedia" },
	wd: { url: "www.wikidata.org/w/index.php?search=", desc: "Wikidata" },
	wv: { url: "wikivoyage.org/w/index.php?search=", desc: "Wikivoyage" },
	wmc: { url: "commons.wikimedia.org/w/index.php?search=", desc: "Wikimedia Commons" },
	wq: { url: "wikiquote.org/w/index.php?search=", desc: "Wikiquote" },
	wn: { url: "wikinews.org/w/index.php?search=", desc: "Wikinews" },
	wb: { url: "wikibooks.org/w/index.php?search=", desc: "Wikibooks" },
	ia: { url: "archive.org/search?query=", desc: "Internet Archive" },
	wm: { url: "web.archive.org/web/*/", desc: "Wayback Machine" },
	r: { url: "www.reddit.com/search/?q=", desc: "Reddit" },
	rs: { url: "www.reddit.com/search/?type=sr&q=", desc: "Reddit Subreddits" },
	ciu: { url: "caniuse.com/?search=", desc: "Can I Use" },
	cp: { url: "codepen.io/search/pens?q=", desc: "CodePen" },
	imdb: { url: "www.imdb.com/find/?q=", desc: "IMDB" },
	imslp: { url: "imslp.org/index.php?search=", desc: "IMSLP" },
	wa: { url: "www.wolframalpha.com/input?i=", desc: "WolframAlpha" },
	osm: { url: "www.openstreetmap.org/search?query=", desc: "OpenStreetMap" },
	mdn: { url: "developer.mozilla.org/en-US/search?q=", desc: "MDN Web Docs" },
	html: { url: "developer.mozilla.org/en-US/search?topic=html&q=", base: "developer.mozilla.org/en-US/docs/Web/HTML", desc: "MDN HTML" },
	css: { url: "developer.mozilla.org/en-US/search?topic=css&q=", base: "developer.mozilla.org/en-US/docs/Web/CSS", desc: "MDN CSS" },
	js: { url: "developer.mozilla.org/en-US/search?topic=js&q=", base: "developer.mozilla.org/en-US/docs/Web/JavaScript", desc: "MDN JavaScript" },
	npm: { url: "www.npmjs.com/search?q=", desc: "Node Package Manager" },
	reactn: { url: "reactnative.dev/search?q=", desc: "React Native documentation" },
	cfd: { url: "developer.chrome.com/s/results?q=", desc: "Chrome for Developers" },
	pypi: { url: "pypi.org/search/?q=", desc: "Python Package Index" },
	gh: { url: "github.com/search?q=", desc: "GitHub" },
	gl: { url: "gitlab.com/search?search=", desc: "GitLab" },
	dh: { url: "hub.docker.com/search?q=", desc: "Docker Hub" },
	wc: { url: "www.webcrawler.com/serp?q=", desc: "WebCrawler" },
	aur: { url: "aur.archlinux.org/packages?K=", desc: "Arch User Repository" },
	aw: { url: "wiki.archlinux.org/index.php?search=", desc: "Arch Wiki" },
	nixpkg: { url: "search.nixos.org/packages?query=", desc: "Nix Packages" },
	nixopt: { url: "search.nixos.org/options?query=", base: "search.nixos.org/options", desc: "Nix Options" },
	lb: { url: "letterboxd.com/search/", desc: "Letterboxd" },
	mar: { url: "marginalia-search.com/search?query=", desc: "Marginalia Search" },
	arx: { url: "arxiv.org/search/?searchtype=all&query=", desc: "Arxiv" },
	wiby: { url: "wiby.me/?q=", desc: "Wiby" },
	sms: { url: "searchmysite.net/search/?q=", desc: "Search My Site" },
	dblp: { url: "dblp.org/search?q=", desc: "dblp Computer Science Bibliography" },
	nature: { url: "www.nature.com/search?q=", desc: "Nature" },
	s: { url: "www.shodan.io/search?query=", desc: "Shodan" },
	pubmed: { url: "pubmed.ncbi.nlm.nih.gov/?term=", desc: "PubMed" },
	ps: { url: "presearch.com/search?q=", desc: "Presearch" },
	a: { url: "www.alexandria.org/?q=", desc: "Alexandria Search" },
	ssel: { url: "www.secretsearchenginelabs.com/find/", desc: "Secret Search Engine Labs" },
	sems: { url: "www.semanticscholar.org/search?q=", desc: "Semantic Scholar" },
	src: { url: "searchcode.com/?q=", desc: "searchcode" },
	mwm: { url: "mwmbl.org/?q=", desc: "Mwmbl" },
	ph: { url: "www.phind.com/search/?q=", desc: "Phind" },
	xkcd: { url: "searchxkcd.com/?q=", desc: "XKCD" },
	apple: { url: "www.apple.com/search/", desc: "Apple" },
	crates: { url: "crates.io/search?q=", desc: "crates.io" },
	docsrs: { url: "docs.rs/releases/search?query=", desc: "Docs.rs" },
	steam: { url: "store.steampowered.com/search/?term=", desc: "Steam" },
	gog: { url: "www.gog.com/games?query=", desc: "GOG" },
	aa: { url: "annas-archive.org/search?q=", desc: "Anna's Archive" },
	iio: { url: "itch.io/search?q=", desc: "itch.io" },
	sci: { url: "scira.ai/?q=", desc: "Scira" },
};

function getUrlParameter(name) {
	const regex = new RegExp(`[?&]${name}=([^&#]*)`),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getBaseUrl(url) {
	const urlObj = new URL("https://" + url);
	return urlObj.origin;
}

function processCode(code, isSnap) {
	const shortcodeKey = code.toLowerCase();
	const matchingShortcode = Object.keys(shortcodes).find((key) => key.toLowerCase() === shortcodeKey);

	if (matchingShortcode) {
		if (isSnap) {
			const baseUrl = shortcodes[matchingShortcode].base || getBaseUrl(shortcodes[matchingShortcode].url);
			if (baseUrl) {
				return {
					type: "snap",
					result: `site:${baseUrl.replace("https://", "")} `,
				};
			}
		} else {
			return {
				type: "bang",
				result: "https://" + shortcodes[matchingShortcode].url,
			};
		}
	}
	return null;
}

function performSearch(query, defaultEngine) {
	let searchUrl = defaultEngine;
	let sitePrefix = "";
	let processedQuery = query;

	const tokens = query.split(" ");
	const processedTokens = [];
	let bangFound = false;
	let snapFound = false;

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		if (token.startsWith("!")) {
			const bangCode = token.slice(1);
			const result = processCode(bangCode, false, defaultEngine);

			if (result && result.type === "bang") {
				searchUrl = result.result;
				bangFound = true;
			} else {
				processedTokens.push(token);
			}
		} else {
			processedTokens.push(token);
		}
	}

	const finalTokens = [];
	for (let i = 0; i < processedTokens.length; i++) {
		const token = processedTokens[i];
		if (token.startsWith("@")) {
			const snapCode = token.slice(1);
			const result = processCode(snapCode, true, defaultEngine);

			if (result && result.type === "snap") {
				sitePrefix = result.result;
				snapFound = true;
			} else {
				finalTokens.push(token);
			}
		} else {
			finalTokens.push(token);
		}
	}

	processedQuery = finalTokens.join(" ");

	if (!processedQuery.trim()) {
		const shortcodeKey = Object.keys(shortcodes).find((key) => "https://" + shortcodes[key].url === searchUrl);

		if (shortcodeKey) {
			if (shortcodes[shortcodeKey].base) {
				window.location.href = "https://" + shortcodes[shortcodeKey].base;
			} else {
				window.location.href = searchUrl.split("/").slice(0, 3).join("/");
			}
		} else {
			window.location.href = searchUrl;
		}
		return;
	}

	if (snapFound) {
		processedQuery = sitePrefix + processedQuery;
	}

	window.location.href = `${searchUrl}${encodeURIComponent(processedQuery)}`;
}

(function () {
	const searchQuery = getUrlParameter("q");
	const defaultEngine = localStorage.getItem("selectedEngine") || "https://kagi.com/search?q=";

	if (searchQuery) {
		performSearch(searchQuery, defaultEngine);
	}
})();

document.addEventListener("DOMContentLoaded", function () {
	const scriptEnabled = document.getElementById("script-enabled"),
		searchForm = document.getElementById("search-form"),
		searchInput = document.getElementById("search-input"),
		engineSelect = document.getElementById("engine-select"),
		shortcodeList = document.getElementById("shortcode-list"),
		themeToggleBtn = document.getElementById("theme-toggle");

	function createShortcodeList() {
		const fragment = document.createDocumentFragment();
		Object.entries(shortcodes).forEach(([code, { desc }]) => {
			const li = document.createElement("li");
			li.textContent = `${code}: ${desc}`;
			fragment.appendChild(li);
		});
		shortcodeList.appendChild(fragment);
	}

	function saveSelectedEngine() {
		localStorage.setItem("selectedEngine", engineSelect.value);
	}

	function loadSelectedEngine() {
		const savedEngine = localStorage.getItem("selectedEngine");
		if (savedEngine) {
			// Check if saved engine still exists in current options
			const optionExists = [...engineSelect.options].some(o => o.value === savedEngine);
			if (optionExists) {
				engineSelect.value = savedEngine;
			} else {
				// If not, fallback to default (which is Kagi)
				engineSelect.value = "https://kagi.com/search?q=";
				saveSelectedEngine(); // Update storage
			}
		}
	}

	function setTheme(theme) {
		document.documentElement.className = theme;
		localStorage.setItem("theme", theme);
	}

	function getPreferredTheme() {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			return storedTheme;
		}
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	function initTheme() {
		setTheme(getPreferredTheme());
	}

	function setupEventListeners() {
		engineSelect.addEventListener("change", saveSelectedEngine);

		searchForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const query = searchInput.value.trim();
			performSearch(query, engineSelect.value);
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "/" && document.activeElement !== searchInput) {
				e.preventDefault();
				searchInput.focus();
			} else if (e.key === "Escape" && document.activeElement === searchInput) {
				searchInput.value = "";
			}
		});


		// Prevent popover dismissal on interaction
		["mousedown", "touchstart", "pointerdown", "click"].forEach((eventType) => {
			themeToggleBtn.addEventListener(eventType, (e) => {
				e.stopPropagation();
			});
		});

		themeToggleBtn.addEventListener("click", () => {
			const currentTheme = document.documentElement.className;
			const newTheme = currentTheme === "dark" ? "light" : "dark";
			setTheme(newTheme);
		});
	}

	function init() {
		scriptEnabled.style.display = "flex";
		createShortcodeList();
		loadSelectedEngine();
		initTheme();
		setupEventListeners();
	}

	init();
});
