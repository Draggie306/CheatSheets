// This file in GitHub is NOT directly linked to a Cloudflare Worker (i.e. commits to this file do not update the worker), so code below may not be the same as the one loaded on the website.
// Instead, I manually update the Cloudflare Worker to ensure it cannot be changed by unauthorised people.
// You can verify this by looking for this comment and/or comparing the code your browser receives to the code below.
// However, the cheat sheets themselves do not need to be manually updated by me. Commits to the cheatsheet repo will automatically update, as the worker fetches the raw HTML from the repo.
// Note that the cache might take a while to update :) - but for SPEEEEEED, it's worth it!

// New version with caching.

const statusCode = 200

// Link the constants to the raw HTML cheatsheets on the github repo
// these used to include the actual HTML rather than a pointer to the repository
// but I changed it for ease of updating.

const html_geog_paper_1 = "https://github.com/Draggie306/CheatSheets/raw/main/GCSE/Geography%20Cheat%20Sheet!%20%5BPaper%201%5D.html"
const html_geog_paper_2 = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Geography%20%5BPaper%202%5D.html"
const html_geog_both_papers = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Geography%20Paper%201%20%2B%202.html"
const html_computer_science = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Computer%20Science%20Paper%201%262%20Cheat%20Sheet.html"
const html_computer_science_paper1 = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Comp%20Sci%20Paper%201.html"
const html_computer_science_paper2 = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Comp%20Sci%20Paper%202.html"
const html_science_practicals = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/All%20Science%20Core%20Practicals.html"
const html_biology_braindump = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Biology%20Paper%202%20recap.html"
const gcse_history_elizabethanengland = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/How%20to...%20AQA%20GCSE%20History%20-%20Paper%202%20Section%20B%20-%20Elizabethan%20England.html"
const gcse_history_healthandthepeople = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/How%20to...%20AQA%20GCSE%20History%20-%20Paper%202%20Section%20A%20-%20Health%20and%20the%20People.html"

// Snippets
// https://github.com/Draggie306/CheatSheets/blob/main/GCSE/snippets/GCSE%20Computer%20Science%201.1%20Systems%20Architecture%20Revision%20Guide%20-%20OCR%20J277.html
// https://github.com/Draggie306/CheatSheets/blob/main/GCSE/snippets/GCSE%20Computer%20Science%201.2%20Memory%20and%20Storage%20Revision%20Guide%20-%20OCR%20J277.html
// https://github.com/Draggie306/CheatSheets/blob/main/GCSE/snippets/GCSE%20Computer%20Science%201.3%20Networks,%20connections%20and%20protocols%20Revision%20Guide%20-%20OCR%20J277.html
// https://github.com/Draggie306/CheatSheets/blob/main/GCSE/snippets/GCSE%20Computer%20Science%201.4%20Network%20security%20Revision%20Guide%20-%20OCR%20J277.html
// https://github.com/Draggie306/CheatSheets/blob/main/GCSE/snippets/GCSE%20Computer%20Science%201.5%20Systems%20Software%20Revision%20Guide%20-%20OCR%20J277.html
// https://github.com/Draggie306/CheatSheets/blob/main/GCSE/snippets/GCSE%20Computer%20Science%201.6%20Impacts%20of%20digital%20technology%20Revision%20Guide%20-%20OCR%20J277.html


const systems_architecture_snippet = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/snippets/GCSE%20Computer%20Science%201.1%20Systems%20Architecture%20Revision%20Guide%20-%20OCR%20J277.html"
const memory_storage_snippet = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/snippets/GCSE%20Computer%20Science%201.2%20Memory%20and%20Storage%20Revision%20Guide%20-%20OCR%20J277.html"
const networks_protocols_snippet = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/snippets/GCSE%20Computer%20Science%201.3%20Networks,%20connections%20and%20protocols%20Revision%20Guide%20-%20OCR%20J277.html"
const network_security_snippet = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/snippets/GCSE%20Computer%20Science%201.4%20Network%20security%20Revision%20Guide%20-%20OCR%20J277.html"
const systems_software_snippet = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/snippets/GCSE%20Computer%20Science%201.5%20Systems%20Software%20Revision%20Guide%20-%20OCR%20J277.html"
const impacts_tech_snippet = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/snippets/GCSE%20Computer%20Science%201.6%20Impacts%20of%20digital%20technology%20Revision%20Guide%20-%20OCR%20J277.html"


// A level links
const alevel_geog = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/Geography.html"
const alevel_computer_science = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/ComputerScience.html"
const alevel_geog_nea = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/GeogNEA.html"
const alevel_geog_physical = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/A%20level%20OCR%20Geography%20-%20Physical.html"
const alevel_geog_human = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/A%20level%20OCR%20Geography%20-%20Human.html"
const alevel_computer_science_2023_paper1 = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/Summer%202023%20Paper%20Targeted%20Revision.html"
const alevel_geog_diseasedilemmas = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/A%20Level%20Geography%20-%20Disease%20Dilemmas%20Complete%20Revision%20Guide%20(OCR).html"

const hizi_sites = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Subject_Sites.html"

// This is main site landing page
// this is kept as raw HTML as it is slightly quicker to rapidly edit directly from the Cloudflare worker and check for bugs

// has extra cookie code for audio

const main_page = `<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GCSE and A Level Revision Material + Cheat Sheets | iBaguette</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="title" content="GCSE and A Level Revision Material + Cheat Sheets | iBaguette">
  <meta name="description" content="Get access to comprehensive and informative cheat sheets and revision material for A-Level and GCSE subjects with many exam boards like AQA and OCR for Computer Science, Geography, Maths, and more.">
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
  <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2271085116982799" crossorigin="anonymous"></script> --> <!-- iBaguette ads test -->
  <link rel="preload" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/stackedit_style.min.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
  <link rel="preload" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/fonts/lato-normal.27bd77b.woff" as="font" type="font/woff2" crossorigin="anonymous" importance="high">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/cheatsheet_browser_style.min.css"> <!-- iBaguette CDN Stylesheet with Cloudflare. -->
  <link rel="icon" type="image/icon" sizes="16x16" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/favicon.ico" />

  <!-- Breadcrumb for GCSE -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 2,
          "name": "All GCSE Cheat Sheets",
          "item": "https://ibaguette.com/cheatsheets/gcse"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Geography Paper 1",
          "item": "https://ibaguette.com/cheatsheets/gcse/geography/Paper1"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Geography Paper 2",
          "item": "https://ibaguette.com/cheatsheets/gcse/geography/Paper2"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Geography Papers 1 and 2",
          "item": "https://ibaguette.com/cheatsheets/gcse/geography/Paper1and2"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Computer Science",
          "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Science Practicals",
          "item": "https://ibaguette.com/cheatsheets/gcse/science/practicals"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Biology 2",
          "item": "https://ibaguette.com/cheatsheets/gcse/biology/2"
        }
      ]
    }
  </script>
    
    
  <!-- Breadcrumb for A level -->
  <script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "All A Level Cheat Sheets",
        "item": "https://ibaguette.com/cheatsheets/alevel"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "OCR Geography - All Topics",
        "item": "https://ibaguette.com/cheatsheets/alevel/geography/all"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "OCR Geography - Human Geography Topics",
        "item": "https://ibaguette.com/cheatsheets/alevel/geography/paper2"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "OCR Geography - Physical Geography Topics",
        "item": "https://ibaguette.com/cheatsheets/alevel/geography/paper1"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "OCR Geography - NEA Links and Resources",
        "item": "https://ibaguette.com/cheatsheets/alevel/geography/nea"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "OCR Computer Science - All Topics",
        "item": "https://ibaguette.com/cheatsheets/alevel/computerscience/all"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "French Revision Portal",
        "item": "https://ibaguette.com/cheatsheets/alevel/french"
      }
      ]
    }
    </script>
    
</head>

<body>
  <div class="dark-mode-toggle">
    <button id="dark-mode-btn"></button>
  </div>

  <script>
  // Check for saved user preference and set the class
  if (localStorage.getItem("dark-mode")) {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-mode-btn").classList.add("dark");
  }

  // Add event listener to toggle button
  document.getElementById("dark-mode-btn").addEventListener("click", function() {

    // Get a reference to the body element
    var element = document.body;

    element.classList.toggle("dark-mode");
    this.classList.toggle("dark");

    // Save the user's preference to localStorage
    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.removeItem("dark-mode");
    }

    // check if a cookie exists
    if (document.cookie.indexOf("audioPlayed=true") === -1) {
      document.cookie = "audioPlayed=true";
      var audio = new Audio('https://cheatsheets.ibaguette.com/sounds/funny%20(15).mp3');
      audio.play();
    } else {
      // if cookie exists, generate random number and play the corresponding audio at url
      var randomNum = Math.floor(Math.random() * 16) + 1;
      var audio = new Audio('https://cheatsheets.ibaguette.com/sounds/funny%20(' + randomNum + ').mp3');
      audio.play();
    }
  });


  </script>
    <section id="main-cheat-welcome-text">
      <h1 style="font-size: xxx-large;">Welcome to iBaguette's Revision Material<h1></h1>
      <br>
        <div class="container">
          <div id="buttons-container">
            <button id="dropbtn-gcse" onclick="location.href='/cheatsheets/gcse'" type="button">
              Go to <strong>GCSE</strong> resources
            </button>

            <button id="dropbtn-alevel" onclick="location.href='/cheatsheets/alevel'" type="button">
              Go to <strong>A Level</strong> resources
            </button>
          </div>
        </div>
      <br><br>
        <p>You've arrived at the Cheat Sheets page! This is your <strong>one-stop-shop for revision material</strong> on a variety of topics.</p>
        <p>All resources here are specifically tailored to help with your exams, providing <strong>quick and easy access to information</strong> on specific topics. They're <strong>audited regularly to ensure accuracy</strong> and that they're up-to-date.</p>
        <p>Save time and improve your knowledge with our revision material! Bookmark the site for future reference and stay ahead of the curve! Bonus points if you send to friends and even teachers <img src="https://cheatsheet-assets.ibaguette.com/fonts/wink-dsc.svg" alt="Wink Emoji" width="20" height="20"></p>
      </section><br>




    <br><br>
    <div class="footer-content">
      <p>Want to contribute? Feel free to message me on <a href="discord:///users/382784106984898560" target="_blank" rel="noopener">Discord</a> (<strong>draggie</strong>) to add or suggest changes, or (more easily) join the entire community server below! Alternatively, feel free to open up a pull request and request a merge on the <a href="https://github.com/Draggie306/CheatSheets">GitHub repo</a>. You can also find me on <a href="https://twitter.com/draggie306">Twitter</a> and other socials.</p>
      <p>Join <a href="https://discord.gg/GfetCXH" target="_blank" rel="noopener">Baguette Brigaders</a>, our active and supporting Discord community for students, developers, professionals, and educators. Get early access to Cheat Sheets, PDF formats, and connect with friendly, like-minded individuals. Ask questions, find answers, and have fun!</p>
    </div>
    <!-- do not modify the below lines, auto updated by git hook that's now broken (fix it) -->
    <div class="footer-content">
      Previous commit: <a href="https://github.com/Draggie306/CheatSheets/commits/main">0648f9e</a> |<strong> Version 1.4 </strong></p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
    </div>
</body>
</html>`


// The main A level 'interstitial' page
// has not as much cookie code as no audio :)
// Also, please don't delete this, lol
const alevel_main_page = `<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>A-Level Revision Material | iBaguette</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="A-Level Revision Material | iBaguette">
    <meta name="description" content="Explore our comprehensive A-Level cheat sheets and revision material. Ace your exams with resources for Computer Science, Geography, Maths, and more!">
    <meta name="robots" content="index, follow">
	  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
	  <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2271085116982799" crossorigin="anonymous"></script> --> <!-- iBaguette ads test -->
    <link rel="preload" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/stackedit_style.min.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
	  <link rel="preload" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/fonts/lato-normal.27bd77b.woff" as="font" type="font/woff2" crossorigin="anonymous" importance="high">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/cheatsheet_browser_style.min.css"> <!-- iBaguette CDN Stylesheet with Cloudflare. -->
    <link rel="icon" type="image/icon" sizes="16x16" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/favicon.ico" />
	
	<!-- uncomment below if running locally -->
	<!-- <link rel="stylesheet" href="D:\CheatSheets\cheatsheet-browser-style.css"> -->
	<link rel="canonical" href="https://ibaguette.com/cheatsheets/alevel">

	<!-- Breadcrumb for A level -->
    <script type="application/ld+json">
		{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "All A Level Cheat Sheets",
				"item": "https://ibaguette.com/cheatsheets/alevel"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "OCR Geography - All Topics",
				"item": "https://ibaguette.com/cheatsheets/alevel/geography/all"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": "OCR Geography - Human Geography Topics",
				"item": "https://ibaguette.com/cheatsheets/alevel/geography/paper2"
			},
			{
				"@type": "ListItem",
				"position": 4,
				"name": "OCR Geography - Physical Geography Topics",
				"item": "https://ibaguette.com/cheatsheets/alevel/geography/paper1"
			},
			{
				"@type": "ListItem",
				"position": 5,
				"name": "OCR Geography - NEA Links and Resources",
				"item": "https://ibaguette.com/cheatsheets/alevel/geography/nea"
			},
			{
				"@type": "ListItem",
				"position": 6,
				"name": "OCR Computer Science - All Topics",
				"item": "https://ibaguette.com/cheatsheets/alevel/computerscience/all"
			},
			{
				"@type": "ListItem",
				"position": 7,
				"name": "French Revision Portal",
				"item": "https://ibaguette.com/cheatsheets/alevel/french"
			}
		  ]
		}
	</script>
		
  </head>
<body>
	<a href="/cheatsheets">Back to <strong>All Cheat Sheets</strong></a>

	<div class="dark-mode-toggle">
		<button id="dark-mode-btn"></button>
	</div>

	<script>
	// Check for saved user preference and set the class
	if (localStorage.getItem("dark-mode")) {
		document.body.classList.add("dark-mode");
		document.getElementById("dark-mode-btn").classList.add("dark");
	}

	// Add event listener to toggle button
	document.getElementById("dark-mode-btn").addEventListener("click", function() {
		var element = document.body;
		element.classList.toggle("dark-mode");
		
		// Toggle button class
		this.classList.toggle("dark");
		
		// Save user preference
		if (element.classList.contains("dark-mode")) {
		localStorage.setItem("dark-mode", "true");
		} else {
		localStorage.removeItem("dark-mode");
		}
	});

	</script>

	<h1 class="h1">All available A level Revision Resources</h1>
	
	<p>This is a work in progress page for my (and iBaguette contributors') A-level cheat sheets. I hope you find them useful!</p>
	<span style="font-size: 1.8em; color: red; text-shadow: 1px 1px 1px black;"><strong>Hover over the options below</strong></span></style> to see all their respective resources available!
	</span>

	<br><br>

	<h2>Featured Content</h2>
	<div class="dropdown">
	  <button class="dropbtn" style="background-color: forestgreen;">Geography</button>
	  <div class="dropdown-content">
		<a href="/cheatsheets/alevel/geography/all" target="_blank" rel="noopener">[WORK IN PROGRESS] OCR Geography - All Content</a>
		<a href="/cheatsheets/alevel/geography/paper1" target="_blank" rel="noopener">[WORK IN PROGRESS] OCR Geography - PHYSICAL</a>
		<a href="/cheatsheets/alevel/geography/paper2" target="_blank" rel="noopener">[WORK IN PROGRESS] OCR Geography - HUMAN</a>
		<a href="/cheatsheets/alevel/geography/nea" target="_blank" rel="noopener">Useful NEA links and resources!</a>
	  </div>
	</div>

	<div class="dropdown" id="ComputerScience">
	  <button class="dropbtn" style="background-color: darkorange;">Computer Science</button>
	  <div class="dropdown-content">
		<a href="/cheatsheets/alevel/computerscience" target="_blank" rel="noopener">[WORK IN PROGRESS] OCR Computer Science - All Content</a>
		<a href="/cheatsheets/gcse" target="_blank" rel="noopener">Recap your GCSE knowledge</a>
	  </div>
	</div>

	<div class="dropdown">
	  <button class="dropbtn">French</button>
	  <div class="dropdown-content">
		<a href="https://www.ibaguette.com/2023/04/introducing-french-revision-portal.html" target="_blank" rel="noopener">The dedicated French Revision Portal is coming soon! Click here for more info.</a>
		<a href="https://app.memrise.com/course/6311981/useful-y12-vocab/" target="_blank" rel="noopener">Y12 Useful Vocab</a>
		<a href="https://app.memrise.com/course/6339466/la-musique-a-level-vocab-theme-21a/" target="_blank" rel="noopener">La Musique Vocab</a>
		<a href="https://app.memrise.com/course/6381995/better-film-vocab/" target="_blank" rel="noopener">All Film Vocab (+ corrected)</a>
		<a href="https://app.memrise.com/course/6381996/ndhs-as-vocab-family-structures/" target="_blank" rel="noopener">(NEW) Family Vocab</a>
		<a href="https://app.memrise.com/course/6381998/ndhs-as-vocab-youth-trends/" target="_blank" rel="noopener">(NEW) Youth Trends Vocab</a>
		<a href="https://padlet.com/hilla68/alevel-french-with-eduqas-n7vewglwvuj28euw" target="_blank" rel="noopener">Mme Hill's Padlet</a>
		<a href="https://app.memrise.com/communicate" target="_blank" rel="noopener">(NEW) Memrise AI Chat</a>
		<a href="https://www.youtube.com/playlist?list=PL5xtnB--9zERtoI-yN_t0YlWtaFmx10eu" target="_blank" rel="noopener">French Listening Playlist</a>
		<a href="https://www.youtube.com/@HugoDecrypte" target="_blank" rel="noopener">HugoDécrypte - Actus du jour</a>
		<a href="https://www.youtube.com/@HugoDecrypte2/videos" target="_blank" rel="noopener">HugoDécrypte - Extended Listening Practice</a>
		<a href="https://meltingmots.com/" target="_blank" rel="noopener">Melting Mots - French Abbreviation List and finder</a>
		<a href="https://cheatsheet-assets.ibaguette.com/alevel/french/Le-silence-de-la-mer-English-only.pdf" target="_blank" rel="noopener">Le Silence de la Mer - English Translation</a>
		<a href="https://cheatsheet-assets.ibaguette.com/alevel/french/Le-silence-de-la-mer-French-only.pdf" target="_blank" rel="noopener">Le Silence de la Mer - French Only</a> 
	  </div>
	</div>

	<div class="dropdown">
		<button class="dropbtn-grey">Economics</button>
		<div class="dropdown-content">
		  <a href="#">Coming soon...</a>
		</div>
	</div>

	<div class="dropdown">
		<button class="dropbtn-grey">Business</button>
		<div class="dropdown-content">
			<a href="#">Coming soon... </a>
			<a href="#">Although I have heard that you just need common sense</a>
		  </div>
	  </div>
  
	<div class="dropdown">
		<button class="dropbtn-grey">EPQ</button>
		<div class="dropdown-content">
			<a href="#">Coming soon...</a>
		</div>
	</div>
  

	<br><br>
	<h2>Community Additions!</h2>
	<div class="dropdown">
		<!-- open up link in new tab -->
	  <button class="dropbtn-red" onclick= "window.open('https://docs.google.com/document/d/1eJYdWaVnxTasSQCYhghO6uTIbStsJ6ZqIfPsg0N_1CI/edit?usp=sharing', '_blank');" style="cursor: pointer;">Maths</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1eJYdWaVnxTasSQCYhghO6uTIbStsJ6ZqIfPsg0N_1CI/edit?usp=sharing" target="_blank" rel="noopener">[By @TrulySpeechless] Maths FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<div class="dropdown">
	  <button class="dropbtn-red" onclick= "window.open('https://docs.google.com/document/d/1uN7i3FG7dxwUkGtaX30T0dgck-CmFwLEOKIBmOqFsJA/edit?usp=sharing', '_blank');" style="cursor: pointer;">Physics</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1uN7i3FG7dxwUkGtaX30T0dgck-CmFwLEOKIBmOqFsJA/edit?usp=sharing" target="_blank" rel="noopener">[By @TrulySpeechless] Physics FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<div class="dropdown">
		<!-- show mouse hover pointer -->
	  <button class="dropbtn-red" onclick= "window.open('https://docs.google.com/document/d/1NFvdIKgcaHLaU-4NEx3n0KtjEjvUYl8ZY8pF7EwiwVw/edit?usp=sharing', '_blank');" style="cursor: pointer;">Chemistry</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1NFvdIKgcaHLaU-4NEx3n0KtjEjvUYl8ZY8pF7EwiwVw/edit?usp=sharing " target="_blank" rel="noopener">[By @TrulySpeechless] Chemistry FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<div class="dropdown">
		<button class="dropbtn-grey">Your Resource Here!!</button>
		<div class="dropdown-content">
			<a href="#">Want to add something? Feel free!</a>
			<a href="#">It's super easy and doable for anyone!</a>
			<a href="#">Just read the steps at the bottom of the page.</a>
		</div>
	</div>

	<br><br><br>
	<div class="footer-content">
		<p>Want to contribute? Feel free to message me on <a href="discord:///users/382784106984898560" target="_blank" rel="noopener">Discord</a> (<strong>draggie</strong>) to add or suggest changes, or (more easily) join the entire community server below! Alternatively, feel free to open up a pull request and request a merge on the <a href="https://github.com/Draggie306/CheatSheets">GitHub repo</a>. You can also find me on <a href="https://twitter.com/draggie306">Twitter</a> and other socials.</p>
		<p>Join <a href="https://discord.gg/GfetCXH" target="_blank" rel="noopener">Baguette Brigaders</a>, our active and supporting Discord community for students, developers, professionals, and educators. Get early access to Cheat Sheets, PDF formats, and connect with friendly, like-minded individuals. Ask questions, find answers, and have fun!</p>
	</div>
	<!-- do not modify the below lines, auto updated by git hook -->
	<div class="footer-content">
		Previous commit: <a href="https://github.com/Draggie306/CheatSheets/commits/main">0648f9e</a> |<strong> Version 1.4 </strong></p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
	</div>
</body>
</html>`

// gcse main page
const gcse_main_page = `<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>GCSE Revision Material | iBaguette</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="title" content="GCSE Revision Material | iBaguette">
    <meta name="description" content="Get access to comprehensive and informative cheat sheets and revision material for A-Level and GCSE subjects with many exam boards for Computer Science, Geography, Maths, and more.">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2271085116982799" crossorigin="anonymous"></script> --> <!-- iBaguette ads test -->
    <link rel="preload" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/stackedit_style.min.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
    <link rel="preload" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/fonts/lato-normal.27bd77b.woff" as="font" type="font/woff2" crossorigin="anonymous" importance="high">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/cheatsheet_browser_style.min.css"> <!-- iBaguette CDN Stylesheet with Cloudflare. -->
    <link rel="icon" type="image/icon" sizes="16x16" href="https://cdn.jsdelivr.net/gh/Draggie306/CheatSheets@main/favicon.ico" />
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse">

    <!-- Breadcrumb for GCSE -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "WebPage",
            "position": 2,
            "name": "All GCSE Revision Material",
            "item": "https://ibaguette.com/cheatsheets/gcse"
          },
          {
            "@type": "WebPage",
            "position": 3,
            "name": "Geography Paper 1",
            "item": "https://ibaguette.com/cheatsheets/gcse/geography/Paper1"
          },
          {
            "@type": "WebPage",
            "position": 4,
            "name": "Geography Paper 2",
            "item": "https://ibaguette.com/cheatsheets/gcse/geography/Paper2"
          },
          {
            "@type": "WebPage",
            "position": 5,
            "name": "Geography Papers 1 and 2",
            "item": "https://ibaguette.com/cheatsheets/gcse/geography/Paper1and2"
          },
          {
            "@type": "WebPage",
            "position": 6,
            "name": "Computer Science",
            "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience"
          },
          {
            "@type": "WebPage",
            "position": 7,
            "name": "Science Practicals",
            "item": "https://ibaguette.com/cheatsheets/gcse/science/practicals"
          },
          {
            "@type": "WebPage",
            "position": 8,
            "name": "Biology 2",
            "item": "https://ibaguette.com/cheatsheets/gcse/biology/2"
          },
          {
            "@type": "WebPage",
            "position": 9,
            "name": "GCSE Subject Specific Sites Revision Guide",
            "item": "https://ibaguette.com/cheatsheets/gcse/subject-sites"
          },
          {
            "@type": "WebPage",
            "position": 10,
            "name": "OCR J277 - Systems Architecture Revision Guide",
            "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience/systems-architecture"
          },
          {
            "@type": "WebPage",
            "position": 11,
            "name": "OCR J277 - Memory and Storage Revision Guide",
            "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience/memory-and-storage"
          },
          {
            "@type": "WebPage",
            "position": 12,
            "name": "OCR J277 - Networks, Connections and Protocols Revision Guide",
            "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience/networks-and-protocols"
          },
          {
            "@type": "WebPage",
            "position": 13,
            "name": "OCR J277 - Network Security Revision Guide",
            "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience/network-security"

          },
          {
            "@type": "WebPage",
            "position": 14,
            "name": "OCR J277 - Systems Software Revision Guide",
            "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience/systems-software"

          },
          {
            "@type": "WebPage",
            "position": 15,
            "name": "OCR J277 - Impacts of Digital Technology Revision Guide",
            "item": "https://ibaguette.com/cheatsheets/gcse/ComputerScience/impacts-of-digital-technology"
          }
        ]
      }
    </script>

  </head>
<body>

<a href="/cheatsheets">Back to <strong>All Cheat Sheets</strong></a>

<div class="dark-mode-toggle">
  <button id="dark-mode-btn"></button>
</div>

<script>
// Check for saved user preference and set the class
if (localStorage.getItem("dark-mode")) {
  document.body.classList.add("dark-mode");
  document.getElementById("dark-mode-btn").classList.add("dark");
}

// Add event listener to toggle button
document.getElementById("dark-mode-btn").addEventListener("click", function() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  // Toggle button class
  this.classList.toggle("dark");
  
  // Save user preference
  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.removeItem("dark-mode");
  }
});

</script>

<h1 class="h1">All Available GCSE Revision Resources</h1>
<p>This is a work in progress page for my (and iBaguette contributors') A-level cheat sheets. I hope you find them useful!</p>
<p>Hover over the subject to show the list of resources available, and the name of the creator (if not me)!</p>

<h2>Featured Content</h2>
<div class="dropdown">
  <button class="dropbtn" style="background-color: forestgreen">Geography</button>
  <div class="dropdown-content">
    <a href="/cheatsheets/gcse/geography/Paper1" target="_blank" rel="noopener">AQA Paper 1</a>
    <a href="/cheatsheets/gcse/geography/Paper2" target="_blank" rel="noopener">AQA Paper 2</a>
    <a href="/cheatsheets/gcse/geography/Paper1and2" target="_blank" rel="noopener">AQA Paper 1 and 2</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Computer Science</button>
  <div class="dropdown-content">
    <a href="/cheatsheets/gcse/ComputerScience/paper1" target="_blank" rel="noopener">OCR J277 Paper 1</a>
    <a href="/cheatsheets/gcse/ComputerScience/paper2" target="_blank" rel="noopener">OCR J277 Paper 2</a>
    <a href="/cheatsheets/gcse/ComputerScience" target="_blank" rel="noopener">OCR J277 Paper 1 and 2</a>
    <a href="/cheatsheets/gcse/ComputerScience/systems-architecture" target="_blank" rel="noopener">Snippet - Systems Architecture</a>
    <a href="/cheatsheets/gcse/ComputerScience/memory-and-storage" target="_blank" rel="noopener">Snippet - Memory and Storage</a>
    <a href="/cheatsheets/gcse/ComputerScience/networks-and-protocols" target="_blank" rel="noopener">Snippet - Networks and Protocols</a>
    <a href="/cheatsheets/gcse/ComputerScience/network-security" target="_blank" rel="noopener">Snippet - Network Security</a>
    <a href="/cheatsheets/gcse/ComputerScience/systems-software" target="_blank" rel="noopener">Snippet - Systems Software</a>
    <a href="/cheatsheets/gcse/ComputerScience/impacts-of-digital-technology" target="_blank" rel="noopener">Snippet - Impacts of Digital Technology</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">History</button>
  <div class="dropdown-content">
    <a href="/cheatsheets/gcse/history/elizabethan-england" target="_blank" rel="noopener">How to... AQA Elizabethan England</a>
    <a href="/cheatsheets/gcse/history/health-and-the-people" target="_blank" rel="noopener">How to... AQA Health and the People</a>
  </div>
</div>

<br>
<h2>Other Resources</h2>

<div class="dropdown">
  <button class="dropbtn">General Science</button>
  <div class="dropdown-content">
    <a href="/cheatsheets/gcse/science/practicals" target="_blank" rel="noopener">All Science core practicals</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Biology</button>
  <div class="dropdown-content">
    <a href="/cheatsheets/gcse/biology/2" target="_blank" rel="noopener">Edexcel Biology Paper 2 brain dump</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">French</button>
  <div class="dropdown-content">
  <a href="https://app.memrise.com/course/6311980/useful-y11-vocab/" target="_blank" rel="noopener">Vocab I wish I knew for GCSEs</a>
  </div>
</div>

<br><br>
<h2>Community Contributions!</h2>
<div class="dropdown">
  <button id="dropbtn-hizi" onclick= "window.open('https://ibaguette.com/cheatsheets/gcse/subject-sites', '_blank');" style="cursor: pointer;">Subject Revision Guide</button>
  <div class="dropdown-content">
  <a href="https://ibaguette.com/cheatsheets/gcse/subject-sites" target="_blank" rel="noopener">[By Hizi] GCSE Subject Specific Sites Revision Guide</a>
  </div>
</div>

<br><br><br>
<p style="font-size: 14px; font-weight: bold;">If you're wondering, here are my results:</p>
<p style="font-size: 12px;"><strong>Grade 9s:</strong> Computer Science (OCR), Biology (Edexcel), Physics (Edexcel), French (Edexcel), English Language (AQA) and Geography (AQA)<br>
  <strong>Grade 8s:</strong> Citizenship Studies (Edexcel), English Literature (AQA), Maths (Edexcel) and History (AQA)<br>
  <strong>Grade 7s:</strong> Chemistry (Edexcel). We don't talk about that one.</p>

  <div class="footer-content">
    <p>Want to contribute? Feel free to message me on <a href="discord:///users/382784106984898560" target="_blank" rel="noopener">Discord</a> (<strong>draggie</strong>) to add or suggest changes, or (more easily) join the entire community server below! Alternatively, feel free to open up a pull request and request a merge on the <a href="https://github.com/Draggie306/CheatSheets">GitHub repo</a>. You can also find me on <a href="https://twitter.com/draggie306">Twitter</a> and other socials.</p>
    <p>Join <a href="https://discord.gg/GfetCXH" target="_blank" rel="noopener">Baguette Brigaders</a>, our active and supporting Discord community for students, developers, professionals, and educators. Get early access to Cheat Sheets, PDF formats, and connect with friendly, like-minded individuals. Ask questions, find answers, and have fun!</p>
  </div>
  <br>
	<!-- do not modify the below lines, auto updated by git hook -->
	<div class="footer-content">
		Previous commit: <a href="https://github.com/Draggie306/CheatSheets/commits/main">0648f9e</a> |<strong> Version 1.4 </strong></p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
	</div>
</body>
</html>`



// Main Cloudflare async functions to respond to dynamic routes
// these show at specific URLs when the button has been clicked on


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function handleRequest(request) {
  let htmlResponse;
  const cache = caches.default;
  let response = await cache.match(request);
  console.log("Handling request");
  let initial_time = new Date().getTime();

  // return functions for main intersitial/browser webpages

  if (request.url.toLowerCase().endsWith("/cheatsheets")) {
    return new Response(main_page, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "Cache-Control": "max-age=864000",
        "Link": "</cheatsheets/gcse>; rel=prefetch, </cheatsheets/alevel>; rel=prefetch",
      },
    })
  }
  
  else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse")) {
    return new Response(gcse_main_page, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cheatsheet-tier": "gcse",
        "Cache-Control": "max-age=864000",
        // "Link": "</cheatsheets/gcse/geography/Paper1and2>; rel=prefetch, </cheatsheets/gcse/geography/Paper1>; rel=prefetch, </cheatsheets/gcse/geography/Paper2>; rel=prefetch, </cheatsheets/gcse/ComputerScience>; rel=prefetch, </cheatsheets/gcse/science/practicals>; rel=prefetch, </cheatsheets/gcse/biology/2>; rel=prefetch, </cheatsheets/gcse/subject-sites>; rel=prefetch",
      },
    })
  }

  else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel")) {
    return new Response(alevel_main_page, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cheatsheet-tier": "a-level",
        "Cache-Control": "max-age=864000",
        // "Link": "</cheatsheets/alevel/geography/all>; rel=prefetch, </cheatsheets/alevel/geography/paper1>; rel=prefetch, </cheatsheets/alevel/geography/paper2>; rel=prefetch, </cheatsheets/alevel/geography/nea>; rel=prefetch, </cheatsheets/alevel/computerscience>; rel=prefetch, </cheatsheets/alevel/french>; rel=prefetch",
      },
    })
  }

  if (!response) {
    console.log("The cache does not contain the response for url: " + request.url + ", fetching from origin");
    let current_time = new Date().getTime();

    // https://ibaguette.com/cheatsheets/gcse/geography/paper2
    if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/geography/paper2")) {
      const response = await fetch(html_geog_paper_2); // get html from github server
      let finish_time = new Date().getTime();
      console.log("Time taken to fetch: " + (finish_time - current_time) + "ms");
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "Cache-Control": "max-age=86400",  // Cache the file for a day
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "geography",
              "cheatsheet-paper": "2",
              // "Link": "</cheatsheets/gcse/geography/paper1>; rel=prefetch, </cheatsheets/gcse/geography/paper1and2>; rel=prefetch",
          },
      });

      console.log("Returning response: " + htmlResponse);
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/geography/paper1")) {
      const response = await fetch(html_geog_paper_1); // get html from github server
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "Cache-Control": "max-age=86400",  // Cache the file for a day
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "geography",
              "cheatsheet-paper": "1",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/geography/paper1and2")) {
      const response = await fetch(html_geog_both_papers); // get html from github server
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "Cache-Control": "max-age=86400",  // Cache the file for a day
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "geography",
          },
      });
      // Return the response as is
      // return htmlResponse;
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience")) {
      const response = await fetch(html_computer_science); // get html from github server
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "Cache-Control": "max-age=86400",  // Cache the file for a day
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "computerscience",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/paper1")) {
      const response = await fetch(html_computer_science_paper1); // get html from github server
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
        },
      })
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/paper2")) {
      const response = await fetch(html_computer_science_paper2); // get html from github server
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "2",
        },
      })
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/biology/2")) {
      const response = await fetch(html_biology_braindump); // get html from github server
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "Cache-Control": "max-age=86400",  // Cache the file for a day
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "biology",
              "cheatsheet-paper": "2",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/science/practicals")) {
      const response = await fetch(html_science_practicals); // get html from github server
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "Cache-Control": "max-age=86400",  // Cache the file for a day
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "science",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/geography/all")) {
      const response = await fetch(alevel_geog); // get html from github server
      // Return the response as is
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "a-level",
              "cheatsheet-subject": "geography",
          },
      });
      // Return the response
      // return htmlResponse;
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/computerscience")) {
      const response = await fetch(alevel_computer_science); // get html from github server
      // Return the response as is
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "a-level",
              "cheatsheet-subject": "computerscience",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/geography/paper1")) {
      const response = await fetch(alevel_geog_physical); // get html from github server
      // Return the response as is
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "a-level",
              "cheatsheet-subject": "geography",
              "cheatsheet-paper": "physical",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/geography/paper2")) {
      const response = await fetch(alevel_geog_human); // get html from github server
      // Return the response as is
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "a-level",
              "cheatsheet-subject": "geography",
              "cheatsheet-paper": "human",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/geography/nea")) {
      const response = await fetch(alevel_geog_nea); // get html from github server
      // Return the response as is
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "a-level",
              "cheatsheet-subject": "geography",
              "cheatsheet-paper": "nea",
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/subject-sites")) {
      const response = await fetch(hizi_sites); // get html from github server
      // Return the response as is
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "gcse",
              "cheatsheet-author": "hizi"
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/history/elizabethan-england")) {
      const response = await fetch(gcse_history_elizabethanengland); // get html from github server
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "history",
              "cheatsheet-author": "hoali"
          },
      });
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/history/health-and-the-people")) {
      const response = await fetch(gcse_history_healthandthepeople); // get html from github server
      htmlResponse = new Response(await response.text(), {
          headers: {
              "Content-Type": "text/html",
              "cheatsheet-tier": "gcse",
              "cheatsheet-subject": "history",
              "cheatsheet-author": "hoali"
          },
      });
    }


    // Snippets

    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/systems-architecture")) {
      const response = await fetch(systems_architecture_snippet);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
          "cheatsheet-snippet": "systems-architecture",
        },
      })
    }
    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/memory-and-storage")) {
      const response = await fetch(memory_storage_snippet);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
          "cheatsheet-snippet": "memory",
        },
      })
    }
    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/networks-and-protocols")) {
      const response = await fetch(networks_protocols_snippet);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
          "cheatsheet-snippet": "networks",
        },
      })
    }
    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/network-security")) {
      const response = await fetch(network_security_snippet);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
          "cheatsheet-snippet": "network-security",
        },
      })
    }
    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/systems-software")) {
      const response = await fetch(systems_software_snippet);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
          "cheatsheet-snippet": "systems-software",
        },
      })
    }
    else if (request.url.toLowerCase().endsWith("/cheatsheets/gcse/computerscience/impacts-of-digital-technology")) {
      const response = await fetch(impacts_tech_snippet);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "gcse",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
          "cheatsheet-snippet": "impacts-tech",
        },
      })
    }
    else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/computerscience/2023-paper1")) {
      const response = await fetch(alevel_computer_science_2023_paper1);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "a-level",
          "cheatsheet-subject": "computerscience",
          "cheatsheet-paper": "1",
          "cheatsheet-year": "2024",
        },
      })
    }

    else if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/geography/disease-dilemmas")) {
      const response = await fetch(alevel_geog_diseasedilemmas);
      htmlResponse = new Response(await response.text(), {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cheatsheet-tier": "a-level",
          "cheatsheet-subject": "geography",
          "cheatsheet-paper": "human",
          "cheatsheet-year": "2024",
        },
      })
    }
  

    // Special case for geog.uk website:
    else if (request.url.toLowerCase() == "https://cheatsheets.geog.uk") {
      return new Response(main_page, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "Cache-Control": "max-age=864000",
        },
      })
    }

    // else 301 redirect to main page
    else {
      if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/geography/human")) {
        return Response.redirect("https://ibaguette.com/cheatsheets/alevel/geography/paper2", 301);
      }
      if (request.url.toLowerCase().endsWith("/cheatsheets/alevel/geography/physical")) {
        return Response.redirect("https://ibaguette.com/cheatsheets/alevel/geography/paper1", 301);
      }
      console.log("Redirecting to main page");
      return Response.redirect("https://ibaguette.com/cheatsheets", 301);
    }

    if (htmlResponse.status == 200) {
      // Cache the response
      // log the text of the response
      console.log("Caching response status: " + htmlResponse.text);
      console.log("Caching response status: " + htmlResponse.status);
      console.log("Caching response: " + htmlResponse);
      await cache.put(request, htmlResponse.clone());
      // Return the response
      let final_return_noncached = new Date().getTime();
      console.log("[NoCache] Time taken to return: " + (final_return_noncached - initial_time) + "ms");
      return htmlResponse;
    } else {
      return new Response("Error fetching from origin", { status: htmlResponse.status });
    }

  }
  else {
    console.log("Found match in cache!");
    let final_return_cached = new Date().getTime();
    console.log("[ValidCache] Time taken to return: " + (final_return_cached - initial_time) + "ms");
    return response;
  }
}


// cloudflare event listener magic

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})