// This file in GitHub is NOT directly linked to a Cloudflare Worker, so code below may not be the same as the one loaded on the website.
// Instead, I manually update the Cloudflare Worker to ensure it cannot be changed by unauthorised people.
// You can verify this by looking for this comment and/or comparing the code your browser receives to the code below.
// However, the cheat sheets themselves do not need to be manually updated by me.

const statusCode = 200

// Link the constants to the raw HTML cheatsheets on the github repo
// these used to include the actual HTML rather than a pointer to the repository
// but I changed it for ease of updating.

const html_geog_paper_1 = "https://github.com/Draggie306/CheatSheets/raw/main/GCSE/Geography%20Cheat%20Sheet!%20%5BPaper%201%5D.html"
const html_geog_paper_2 = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Geography%20%5BPaper%202%5D.html"
const html_geog_both_papers = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Geography%20Paper%201%20%2B%202.html"
const html_computer_science = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Computer%20Science%20Paper%201%262%20Cheat%20Sheet.html"
const html_science_practicals = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/All%20Science%20Core%20Practicals.html"
const html_biology_braindump = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/GCSE/Biology%20Paper%202%20recap.html"
const alevel_geog = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/Geography.html"
const alevel_computer_science = "https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/ComputerScience.html"


// This is main site landing page
// this is kept as raw HTML as it is slightly quicker to rapidly edit directly from the Cloudflare worker and check for bugs

// has extra cookie code for audio

const main_page = `
<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html lang="en">
  <head>
    <title>iBaguette | Cheat Sheets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="A-Level and GCSE Cheat Sheets | iBaguette">
    <meta name="description" content="Get access to comprehensive and informative cheat sheets and revision material for A-Level and GCSE subjects with many exam boards like AQA and OCR for Computer Science, Geography, Maths, and more.">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    <link rel="preload" href="https://cheatsheets.ibaguette.com/stylesheet.css" as="style">
    <link rel="preload" href="https://www.ibaguette.com/static/stackedit_style.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
    <link rel="stylesheet" href="https://cheatsheets.ibaguette.com/stylesheet.css"> <!-- Load index CSS from replit, to prevent Cross-Origin Read Blocking (CORB) from GitHub -->
    <link rel="icon" type="image/icon" sizes="16x16" href="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAADB0+D/oLbH/6G5y//E2ev/rL7M/7LD1f/M3vD/0+Xx/9Hj8v/L3O3/0+Pv/9rn7//o7vT/6PD2/+Hy+P/k8/n/u9Hb/0RTXP8AAAD/gJSi/5+3yv+ctcn/mbHF/5y1yv+rvtP/rcDV/6/A0/+uvMn/y9Xe/8ja5f+itcn/0Oju/6a6x/+gtcD/ICkx/x4jLv+Wqbv/pLnN/6W5zv+mvtL/rsDR/46gtf9/jp7/trzI/8jT3//l7vX/tMfU/6m9z/+TpLD/VWRu/zdCUP8SChf/DQob/15seP+lucj/j6Cy/1Vnev9gcof/dYea/7vM2P+Jn7f/XGyB/3qTrf+UrMb/R1Ne/x8iL/8nLTn/KSw4/x0hK/8aHin/MzlC/0BRY/87SWD/Tl9z/2Byhv9riZ7/UWJ3/1VidP9dZnr/gpKn/yUpNP8TDhj/ExAY/xsXI/8nJTH/Jicy/yMdKP8mLD3/QVNo/z9JYP9IXHP/boac/1prgf9aZXb/bXZ//214hf8fHSf/FhId/xIPF/8UDxv/KSs2/x8bJv8lISr/KS5A/z5PZf8vM0n/PU5j/4+pyP9bY3n/fICK/4qJkv+TlZ7/HBgg/x0ZJf8UERv/EA4U/x0YJP8TEBj/HBgh/zM7TP88S2H/LzNI/ygvP/9keY3/f4eV/4yNl/+cmaH/ipOb/zA2Qv8tLDf/Ih8r/x8bJf8wLjn/EAwT/xkVH/82OUn/PUNa/z1MYf84Rlr/OEVa/1Jjef9daXz/ZG57/2BzgP+qvsb/SlFa/zU6RP84NkL/KCcw/xQQGf8VERn/LzRC/zk+VP9DU2j/U2V6/1Rme/9UY3j/anJ9/1Zja/90h5b/m7C4/4ygs/83O0j/MTI8/ygkLv8kICr/JyQt/ykoMv9SXnT/UVtv/1NfdP9RXXD/am56/2dxe/9vfIX/d42g/4yfq/+YsMX/orO9/x0jL/84O0b/MDA4/zQwOf8qJC3/MThC/ycsOP9YWmT/hH+E/3V6hv9reYT/eIyU/4OXpP+WrLf/q8vZ/77a6P91gpH/IBkn/ywmMf82O0b/ZHJ5/46ktP94i5b/iZWe/4mWpv9vgpH/coaS/4CVnP+Inqv/nbW//8rf5v++2OP/sM/i/3uPm/9qeoT/ucbM/8LR1/+mvcf/tsnO/+rp5P+Ppbb/gpem/3iMl/+HnKT/jqOr/5q1vf/F3ev/u9Td/6zH2P+qxNH/uMzV/9ne4P////3///////Lz6//9/fn/na+2/3+apv93i5j/h52l/46jrP+Tq7n/n77Q/5q6yv+gtcP/nbK8/560vv++yM3/8vHs//z9+//w8er//////8XJyP+OqLH/jqGt/6Ozuv+uvsP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" />

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
          "name": "OCR Computer Science - All Topics",
          "item": "https://ibaguette.com/cheatsheets/alevel/computerscience/all"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "French Resource List",
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

    // Toggle the "dark-mode" class on the body element
    element.classList.toggle("dark-mode");

    // Toggle the "dark" class on the button element
    this.classList.toggle("dark");

    // Save the user's preference to localStorage
    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.removeItem("dark-mode");
    }

    // Play the sound effect
    // Check if a cookie exists
    if (document.cookie.indexOf("audioPlayed=true") === -1) {
      // If the cookie does not exist, set it to true and play funny (15)
      document.cookie = "audioPlayed=true";
      var audio = new Audio('https://cheatsheets.ibaguette.com/sounds/funny%20(15).mp3');
      audio.play();
    } else {
      // If the cookie exists, generate a random number and play the corresponding audio
      var randomNum = Math.floor(Math.random() * 16) + 1;
      var audio = new Audio('https://cheatsheets.ibaguette.com/sounds/funny%20(' + randomNum + ').mp3');
      audio.play();
    }
  });


  </script>

    <br><br>
      <section id="main-cheat-welcome-text">
        <p>Welcome to the Cheat Sheets page! This is your one-stop-shop for cheat sheets on a variety of topics.</p>
        <p>Our cheat sheets are specifically tailored to help you with your exams, providing quick and easy access to information on specific topics. They are audited regularly to ensure they are accurate and up-to-date.</p>
        <p>Explore our selection of cheat sheets for GCSE and A Level subjects by clicking the buttons below.</p>
        <p>Save time and improve your knowledge with our cheat sheets. Don't forget to bookmark the site for future reference and stay ahead of the curve!</p>
      </section><br><br>

    <div class="container">
      <div id="buttons-container">
        <button id="dropbtn-gcse" onclick="location.href='https://ibaguette.com/cheatsheets/gcse'" type="button">
          GCSE cheat sheets
        </button>

        <button id="dropbtn-alevel" onclick="location.href='https://ibaguette.com/cheatsheets/alevel'" type="button">
          A Level cheat sheets
        </button>
      </div>
    </div>


    <br><br>
    <div class="footer-content">
      <p>Want to contribute? Feel free to message me on <a href="discord:///users/382784106984898560">Discord</a> (Draggie#3060) to add content, suggest changes or fix typos. </p>
      <p>Alternatively, you can open up a pull request and request a merge on my <a href="https://github.com/Draggie306/CheatSheets">GitHub page</a>. You can also find me on <a href="https://twitter.com/draggie306">Twitter</a> and other socials. </p>
      <p>Join our Discord server, <a href="https://discord.gg/GfetCXH">Baguette Brigaders</a>, to connect with other students, developers, professionals, educators, and more! Ask questions, get answers, or just have fun and relax!</p><br>
    </div>
    <!-- do not modify the below lines, auto updated by git hook -->
    <div class="footer-content">
      Previous commit: <a href="https://github.com/Draggie306/CheatSheets/commit/4fa9e34972da793e735f660f4aea6477a1624c45">4fa9e34</a></p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
    </div>
  </body>
</html>
`






// The main A level 'interstitial' page
// has not as much cookie code as no audio :)
// Also, please don't delete this, lol
const alevel_main_page = `
<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html lang="en">
  <head>
    <title>A level Cheat Sheets | iBaguette.com/CheatSheets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <meta name="title" content="A-Level Cheat Sheets and revision material | iBaguette">
    <meta name="description" content="Get access to comprehensive and informative cheat sheets and revision material for A-Level subjects with many exam boards like AQA and OCR for Computer Science, Geography, Maths, and more.">
    <meta name="robots" content="index, follow">
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2271085116982799" crossorigin="anonymous"></script> <!-- iBaguette ads test -->
    <link rel="preload" href="https://cheatsheets.ibaguette.com/stylesheet.css" as="style">
    <link rel="preload" href="https://www.ibaguette.com/static/stackedit_style.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
    
	
	<!-- Load CSS from replit, to prevent Cross-Origin Read Blocking (CORB) from GitHub -->
	<link rel="stylesheet" href="https://cheatsheets.ibaguette.com/stylesheet.css">
	
	<!-- uncomment below if running locally -->
	<!-- <link rel="stylesheet" href="stylesheet.css"> -->
	<link rel="canonical" href="https://ibaguette.com/cheatsheets/alevel">
	<link rel="canonical" href="https://ibaguette.com/cheatsheets/alevel/geography/all">

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
			  "name": "OCR Computer Science - All Topics",
			  "item": "https://ibaguette.com/cheatsheets/alevel/computerscience/all"
			},
			{
			  "@type": "ListItem",
			  "position": 4,
			  "name": "French Resource List",
			  "item": "https://ibaguette.com/cheatsheets/alevel/french"
			}
		  ]
		}
		</script>
		
  </head>
<body>
	<a href="/cheatsheets">< Back to All Cheat Sheets</a>

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

	<h1 class="h1">All A level Cheat Sheets & Revision Resources</h1>
	
	<p>This is a work in progress page for my (and iBaguette contributors') A-level cheat sheets. I hope you find them useful!</p>
  	<p>Hover over the subject to see a list of resources available, and the name of the creator (if not me).</p>
	<br>

	<h2>Featured Content</h2>
	<div class="dropdown">
	  <button class="dropbtn">Geography</button>
	  <div class="dropdown-content">
		<a href="https://ibaguette.com/cheatsheets/alevel/geography/all">[WORK IN PROGRESS] OCR Geography - All Content</a>
	  </div>
	</div>

	<div class="dropdown">
	  <button class="dropbtn">Computer Science</button>
	  <div class="dropdown-content">
		<a href="https://ibaguette.com/cheatsheets/alevel/computerscience">[WORK IN PROGRESS] OCR Computer Science - All Content</a>
	  </div>
	</div>

	<div class="dropdown">
	  <button class="dropbtn">French</button>
	  <div class="dropdown-content">
		<a href="https://ibaguette.com/cheatsheets/alevel/french">[WORK IN PROGRESS] Eduqas French - Useful Resources</a>
		<a href="https://app.memrise.com/course/6311981/useful-y12-vocab/">Memrise Y12 Useful</a>
		<a href="https://app.memrise.com/course/6339466/la-musique-a-level-vocab-theme-21a/">La Musique Vocab</a>
	  </div>
	</div>

	<div class="dropdown">
		<button class="dropbtn-grey">Economics</button>
		<div class="dropdown-content">
		  <a href="#">Coming soon...</a>
		</div>
	  </div>

	<br><br>
	<h2>Community Contributions</h2>
	<div class="dropdown">
	  <button class="dropbtn-red">Maths</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1eJYdWaVnxTasSQCYhghO6uTIbStsJ6ZqIfPsg0N_1CI/edit?usp=sharing">[By @TrulySpeechless] Maths FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<div class="dropdown">
	  <button class="dropbtn-red">Physics</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1uN7i3FG7dxwUkGtaX30T0dgck-CmFwLEOKIBmOqFsJA/edit?usp=sharing">[By @TrulySpeechless] Physics FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<div class="dropdown">
	  <button class="dropbtn-red">Chemistry</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1NFvdIKgcaHLaU-4NEx3n0KtjEjvUYl8ZY8pF7EwiwVw/edit?usp=sharing ">[By @TrulySpeechless] Chemistry FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<br><br><br>
	<div class="footer-content">
		Want to contribute? Feel free to message me on <a href="discord:///users/382784106984898560">Discord</a> (Draggie#3060) to add or suggest changes. Alternatively, feel free to open up a pull request and request a merge on my <a href="https://github.com/Draggie306/CheatSheets">GitHub page</a>. You can also find me on <a href="https://twitter.com/draggie306">Twitter</a> and other socials.
		<br>Join our Discord server, <a href="https://discord.gg/GfetCXH">Baguette Brigaders</a>, to connect with other students, developers, professionals, educators, and more! Ask questions, get answers, or just have fun and relax!<br>
	</div>
	<!-- do not modify the below lines, auto updated by git hook -->
	<div class="footer-content">
		Previous commit: <a href="https://github.com/Draggie306/CheatSheets/commit/4fa9e34972da793e735f660f4aea6477a1624c45">4fa9e34</a></p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
	</div>
</body>
</html>
`







// Main GCSE html
// again, has not as much cookie code as no audio :)
const gcse_main_page = `
<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html lang="en">
  <head>
    <title>GCSE Cheat Sheets | iBaguette.com/CheatSheets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="GCSE Cheat Sheets and revision material | iBaguette">
    <meta name="description" content="Get access to comprehensive and informative cheat sheets and revision material for A-Level and GCSE subjects with many exam boards like AQA and OCR for Computer Science, Geography, Maths, and more.">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2271085116982799" crossorigin="anonymous"></script> <!-- iBaguette ads test -->
    <link rel="preload" href="https://cheatsheets.ibaguette.com/stylesheet.css" as="style">
    <link rel="preload" href="https://www.ibaguette.com/static/stackedit_style.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
    <link rel="stylesheet" href="https://cheatsheets.ibaguette.com/stylesheet.css"> <!-- Load index CSS from replit, to prevent Cross-Origin Read Blocking (CORB) from GitHub -->
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse">
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse/geography/Paper1">
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse/geography/Paper2">
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse/geography/Paper1and2">
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse/ComputerScience">
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse/science/practicals">
    <link rel="canonical" href="https://ibaguette.com/cheatsheets/gcse/biology/2">

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

  </head>
<body>

<a href="/cheatsheets">< Back to All Cheat Sheets</a>

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

<h2>Notice!</h2>
<p>This is for GCSE level. I got a Grade 9 in Computer Science, Biology, Physics, French, English Language and Geography, a Grade 8 in Citizenship, English Lit, Maths and History, and a 7 in Chemistry, but we don't talk about that last one.</p>

<div class="dropdown">
  <button class="dropbtn">Geography</button>
  <div class="dropdown-content">
    <a href="https://ibaguette.com/cheatsheets/gcse/geography/Paper1">AQA Paper 1</a>
    <a href="https://ibaguette.com/cheatsheets/gcse/geography/Paper2">AQA Paper 2</a>
    <a href="https://ibaguette.com/cheatsheets/gcse/geography/Paper1and2">AQA Paper 1 and 2</a>
  </div>
</div>

<br><br>
<div class="dropdown">
  <button class="dropbtn">Computer Science</button>
  <div class="dropdown-content">
    <a href="https://ibaguette.com/cheatsheets/gcse/ComputerScience">OCR Computer Science Paper 1 and 2</a>
  </div>
</div>

<br><br>
<div class="dropdown">
  <button class="dropbtn">General Science</button>
  <div class="dropdown-content">
    <a href="https://ibaguette.com/cheatsheets/gcse/science/practicals">All Science core practicals</a>
  </div>
</div>

<br><br>
<div class="dropdown">
  <button class="dropbtn">Biology</button>
  <div class="dropdown-content">
    <a href="https://ibaguette.com/cheatsheets/gcse/biology/2">Edexcel Biology Paper 2 brain dump</a>
  </div>
</div>

<br><br>
  <div class="footer-content">
    Join our Discord server, <a href="https://discord.gg/GfetCXH">Baguette Brigaders</a>, to connect with other students, developers, professionals, educators, and more! Ask questions, get answers, or just have fun and relax!<br>
  </div>
	<!-- do not modify the below lines, auto updated by git hook -->
	<div class="footer-content">
		Previous commit: <a href="https://github.com/Draggie306/CheatSheets/commit/4fa9e34972da793e735f660f4aea6477a1624c45">4fa9e34</a></p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
	</div>
</body>
</html>
`



// Main Cloudflare async functions to respond to dynamic routes
// these show at specific URLs when the button has been clicked on


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function handleRequest(request) {
  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/gcse/geography/paper2") {
    const response = await fetch(html_geog_paper_2); // get html from github server
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=86400',  // Cache the file for a day
        },
    });

    return htmlResponse;
    
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/gcse/geography/paper1") {
    const response = await fetch(html_geog_paper_1); // get html from github server
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=86400',  // Cache the file for a day
        },
    });

    // Return the response as is
    return htmlResponse;

    return new Response(html_geog_paper_1, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "com.ibaguette-sussy-amogus-balls": "True",
        "com.ibaguette-crush": "Not on you",
        'Cache-Control': 'max-age=8646900',  // Cache the file for 100 days
        "x-hacker": "If you’re reading this, you should ping me @draggie306/Twitter or Draggie#3060 on Discord and mention this header.",
      },
    })
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/gcse/geography/paper1and2") {
    const response = await fetch(html_geog_both_papers); // get html from github server
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=86400',  // Cache the file for a day
        },
    });
    // Return the response as is
    return htmlResponse;

    // Here's the old code
    return response;
    return new Response(html_geog_both_papers, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "sussy-amogus-balls": "True",
        "x-likes-Nolwenn-Tighe": "Probably?!?!?!"
        //'Cache-Control': 'max-age=8646900',  // Cache the file for 100 days
      },
    })
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/gcse/computerscience") {
    const response = await fetch(html_computer_science); // get html from github server
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=86400',  // Cache the file for a day
        },
    });
    // Return the response as is
    return htmlResponse;

    // Here's the old code

    return new Response(html_computer_science, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "sussy-amogus-balls": "True",
        "x-likes-Nolwenn-Tighe": "True",
        'Cache-Control': 'max-age=8646900',  // Cache the file for 100 days
      },
    })
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/gcse/biology/2") {
    const response = await fetch(html_biology_braindump); // get html from github server
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=86400',  // Cache the file for a day
        },
    });
    // Return the response as is
    return htmlResponse;

    // Here's the old code
    return new Response(html_biology_braindump, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "sussy-amogus-balls": "True",
        "x-has-crush-on-Nolwenn-Tighe": "True",
        'Cache-Control': 'max-age=8646900',  // Cache the file for 100 days
      },
    })
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/gcse/science/practicals") {
    const response = await fetch(html_science_practicals); // get html from github server
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=86400',  // Cache the file for a day
        },
    });
    // Return the response as is
    return htmlResponse;

    // Here's the old code
    return new Response(html_science_practicals, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  }


  // return functions for main intersitial webpages

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/gcse") {
    return new Response(gcse_main_page, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cheatsheet-tier": "gcse",
        "Cache-Control": 'max-age=864000',
      },
    })
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/alevel") {
    return new Response(alevel_main_page, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cheatsheet-tier": "a-level",
      },
    })
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/alevel/geography/all") {
    const response = await fetch(alevel_geog); // get html from github server
    // Return the response as is
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
        },
    });
    // Return the response
    return htmlResponse;
  }

  if (request.url.toLowerCase() == "https://ibaguette.com/cheatsheets/alevel/computerscience") {
    const response = await fetch(alevel_computer_science); // get html from github server
    // Return the response as is
    const htmlResponse = new Response(await response.text(), {
        headers: {
            'Content-Type': 'text/html',
        },
    });
    // Return the response
    return htmlResponse;
  }
  
  // else point back to the main site as the URL may have changed or an incorrect one has been linked to
  else {
    return new Response(main_page, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        'Cache-Control': 'max-age=8646900',  // Cache the file for 100 days
      },
    })
  }
}


// cloudflare event listener magic

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})