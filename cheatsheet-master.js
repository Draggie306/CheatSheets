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


// This is main site landing page
// this is kept as raw HTML as it is slightly quicker to rapidly edit directly from the Cloudflare worker and check for bugs

// has extra cookie code for audio

const main_page = `
<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html>
  <head>
    <title>Cheat Sheets | iBaguette.com/CheatSheets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="A-Level and GCSE Cheat Sheets | iBaguette">
    <meta name="description" content="Get access to comprehensive and informative cheat sheets for A-Level and GCSE subjects with many exam boards like AQA and OCR for Computer Science, Geography, Maths, and more.">
    <meta name="robots" content="index, follow">
    <link rel="preload" href="https://cheatsheets.ibaguette.com/stylesheet.css" as="style">
    <link rel="preload" href="https://www.ibaguette.com/static/stackedit_style.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
    <link rel="stylesheet" href="https://cheatsheets.ibaguette.com/stylesheet.css"> <!-- Load index CSS from replit, to prevent Cross-Origin Read Blocking (CORS) from GitHub -->
    <link rel="icon" type="image/icon" sizes="16x16" href="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAADB0+D/oLbH/6G5y//E2ev/rL7M/7LD1f/M3vD/0+Xx/9Hj8v/L3O3/0+Pv/9rn7//o7vT/6PD2/+Hy+P/k8/n/u9Hb/0RTXP8AAAD/gJSi/5+3yv+ctcn/mbHF/5y1yv+rvtP/rcDV/6/A0/+uvMn/y9Xe/8ja5f+itcn/0Oju/6a6x/+gtcD/ICkx/x4jLv+Wqbv/pLnN/6W5zv+mvtL/rsDR/46gtf9/jp7/trzI/8jT3//l7vX/tMfU/6m9z/+TpLD/VWRu/zdCUP8SChf/DQob/15seP+lucj/j6Cy/1Vnev9gcof/dYea/7vM2P+Jn7f/XGyB/3qTrf+UrMb/R1Ne/x8iL/8nLTn/KSw4/x0hK/8aHin/MzlC/0BRY/87SWD/Tl9z/2Byhv9riZ7/UWJ3/1VidP9dZnr/gpKn/yUpNP8TDhj/ExAY/xsXI/8nJTH/Jicy/yMdKP8mLD3/QVNo/z9JYP9IXHP/boac/1prgf9aZXb/bXZ//214hf8fHSf/FhId/xIPF/8UDxv/KSs2/x8bJv8lISr/KS5A/z5PZf8vM0n/PU5j/4+pyP9bY3n/fICK/4qJkv+TlZ7/HBgg/x0ZJf8UERv/EA4U/x0YJP8TEBj/HBgh/zM7TP88S2H/LzNI/ygvP/9keY3/f4eV/4yNl/+cmaH/ipOb/zA2Qv8tLDf/Ih8r/x8bJf8wLjn/EAwT/xkVH/82OUn/PUNa/z1MYf84Rlr/OEVa/1Jjef9daXz/ZG57/2BzgP+qvsb/SlFa/zU6RP84NkL/KCcw/xQQGf8VERn/LzRC/zk+VP9DU2j/U2V6/1Rme/9UY3j/anJ9/1Zja/90h5b/m7C4/4ygs/83O0j/MTI8/ygkLv8kICr/JyQt/ykoMv9SXnT/UVtv/1NfdP9RXXD/am56/2dxe/9vfIX/d42g/4yfq/+YsMX/orO9/x0jL/84O0b/MDA4/zQwOf8qJC3/MThC/ycsOP9YWmT/hH+E/3V6hv9reYT/eIyU/4OXpP+WrLf/q8vZ/77a6P91gpH/IBkn/ywmMf82O0b/ZHJ5/46ktP94i5b/iZWe/4mWpv9vgpH/coaS/4CVnP+Inqv/nbW//8rf5v++2OP/sM/i/3uPm/9qeoT/ucbM/8LR1/+mvcf/tsnO/+rp5P+Ppbb/gpem/3iMl/+HnKT/jqOr/5q1vf/F3ev/u9Td/6zH2P+qxNH/uMzV/9ne4P////3///////Lz6//9/fn/na+2/3+apv93i5j/h52l/46jrP+Tq7n/n77Q/5q6yv+gtcP/nbK8/560vv++yM3/8vHs//z9+//w8er//////8XJyP+OqLH/jqGt/6Ozuv+uvsP/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" />
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


    <br><br><br><br><br>
    <div class="footer-content">
      <p>Want to contribute? Feel free to message me on <a href="discord:///users/382784106984898560">Discord</a> (Draggie#3060) to add content, suggest changes or fix typos. </p>
      <p>Alternatively, you can open up a pull request and request a merge on my <a href="https://github.com/Draggie306/CheatSheets">GitHub page</a>. You can also find me on <a href="https://twitter.com/draggie306">Twitter</a> and other socials. </p>
      <p>Join my <a href="https://discord.gg/GfetCXH">Baguette Brigaders Discord</a> to connect with other students, developers and enthusiasts, ask questions and get answers.</p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
    </div>

  </body>
</html>
`


// The main A level 'interstitial' page


// has not as much cookie code as no audio :)
const alevel_main_page = `
<!DOCTYPE html>
<html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
  <head>
    <title>A level Cheat Sheets | iBaguette.com/CheatSheets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="A-Level Cheat Sheets | iBaguette">
    <meta name="description" content="Get access to comprehensive and informative cheat sheets for A-Level subjects with many exam boards like AQA and OCR for Computer Science, Geography, Maths, and more.">
    <meta name="robots" content="index, follow">
    <link rel="preload" href="https://cheatsheets.ibaguette.com/stylesheet.css" as="style">
    <link rel="preload" href="https://www.ibaguette.com/static/stackedit_style.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
    <link rel="stylesheet" href="https://cheatsheets.ibaguette.com/stylesheet.css"> <!-- Load index CSS from replit, to prevent Cross-Origin Read Blocking (CORS) from GitHub -->
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
	
	<p>This is a work in progress page for my (and iBaguette contributors') A-level cheat sheets. I hope you find them useful!</p>
  <p>Hover over the subject to see a dropdown of resources available, as well as the author if it's not me.</p>
	<div class="dropdown">
	  <button class="dropbtn">Geography</button>
	  <div class="dropdown-content">
		<a href="https://ibaguette.com/cheatsheets/alevel/geography/all">[WORK IN PROGRESS] OCR Geography - All Content</a>
	  </div>
	</div>


	<br><br>
	<div class="dropdown">
	  <button class="dropbtn">Computer Science</button>
	  <div class="dropdown-content">
		<a href="https://ibaguette.com/cheatsheets/alevel/computerscience">[WORK IN PROGRESS] OCR Computer Science - All Content</a>
	  </div>
	</div>

	<br><br>
	<div class="dropdown">
	  <button class="dropbtn">French</button>
	  <div class="dropdown-content">
		<a href="https://ibaguette.com/cheatsheets/alevel/french">[WORK IN PROGRESS] Eduqas French - Useful Resources</a>
		<a href="https://app.memrise.com/course/6311981/useful-y12-vocab/">Memrise Y12 Useful</a>
		<a href="https://app.memrise.com/course/6339466/la-musique-a-level-vocab-theme-21a/">La Musique Vocab</a>
	  </div>
	</div>

	<br><br>
	<div class="dropdown">
	  <button class="dropbtn">Maths</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1eJYdWaVnxTasSQCYhghO6uTIbStsJ6ZqIfPsg0N_1CI/edit?usp=sharing">[By @TrulySpeechless] Maths FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<br><br>
	<div class="dropdown">
	  <button class="dropbtn">Physics</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1uN7i3FG7dxwUkGtaX30T0dgck-CmFwLEOKIBmOqFsJA/edit?usp=sharing">[By @TrulySpeechless] Physics FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

	<br><br>
	<div class="dropdown">
	  <button class="dropbtn">Chemistry</button>
	  <div class="dropdown-content">
		<a href="https://docs.google.com/document/d/1NFvdIKgcaHLaU-4NEx3n0KtjEjvUYl8ZY8pF7EwiwVw/edit?usp=sharing ">[By @TrulySpeechless] Chemistry FoLD - An OCR A-Level Cheatsheet</a>
	  </div>
	</div>

  <div class="footer-content">
    Want to contribute? Feel free to message me on <a href="discord:///users/382784106984898560">Discord</a> (Draggie#3060) to add or suggest changes. Alternatively, feel free to open up a pull request and request a merge on my <a href="https://github.com/Draggie306/CheatSheets">GitHub page</a>. You can also find me on <a href="https://twitter.com/draggie306">Twitter</a> and other socials. Join my <a href="https://discord.gg/GfetCXH">Discord server</a> to connect with other developers and students and get help.</p><br><br><br><br><br><br><br> <!-- extra space for mobile -->
  </div>

</body>
</html>
`


// Main GCSE html

// has not as much cookie code as no audio :)
const gcse_main_page = `
<!DOCTYPE html>
<!-- This is the standard iBaguette menu area without any content. This head section defines how the dropdowns work and stuff. -->
<!-- If you see this, hi! :) -->
<!-- Thanks for using my cheat sheets! -->
<html>
  <head>
    <title>GCSE Cheat Sheets | iBaguette.com/CheatSheets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="GCSE Cheat Sheets | iBaguette">
    <meta name="description" content="Get access to comprehensive and informative cheat sheets for A-Level and GCSE subjects with many exam boards like AQA and OCR for Computer Science, Geography, Maths, and more.">
    <meta name="robots" content="index, follow">
    <link rel="preload" href="https://cheatsheets.ibaguette.com/stylesheet.css" as="style">
    <link rel="preload" href="https://www.ibaguette.com/static/stackedit_style.css" as="style"> <!-- Preload main stackedit style for main cheat sheets! -->
    <link rel="stylesheet" href="https://cheatsheets.ibaguette.com/stylesheet.css"> <!-- Load index CSS from replit, to prevent Cross-Origin Read Blocking (CORS) from GitHub -->
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

<br><br><br>
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

    return new Response(OLD_html_geog_paper_1, {
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

    // Here's the old code, comment the return above here in case of an issue.
    return response;
    return new Response(OLD_html_geog_both_papers, {
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

    // Here's the old code, comment the return above here in case of an issue.

    return new Response(OLD_html_computer_science, {
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

    // Here's the old code, comment the return above here in case of an issue.
    return new Response(OLD_html_biology_braindump, {
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

    // Here's the old code, comment the return above here in case of an issue.
    return new Response(OLD_html_science_practicals, {
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
    const response = await fetch('https://raw.githubusercontent.com/Draggie306/CheatSheets/main/A%20level/Geography.html');
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


const OLD_html_geog_paper_1 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geography Cheat Sheet! [Paper 1]</title>
  <link rel="stylesheet" href="https://www.ibaguette.com/static/Stackedit_Style.css" />
</head>
<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#aqa-geography">AQA Geography</a></li>
<li><a href="#note-paper-1-and-2-are-complete.-3-will-be-added-later.">NOTE: Paper 1 and 2 are complete. 3 will be added later.</a>
<ul>
<li><a href="#read-me-please-thanks">READ ME PLEASE THANKS</a>
<ul>
<li><a href="#this-cheat-sheet-covers-all-of-the-specification-for-all-3-papers">This cheat sheet covers all of the specification for all 3 papers</a></li>
</ul>
</li>
<li><a href="#changes-for-2022">CHANGES FOR 2022</a></li>
</ul>
</li>
<li><a href="#paper-1-living-with-the-physical-environment">Paper 1: Living with the physical environment</a></li>
<li><a href="#section-a-the-challenge-of-natural-hazards">Section A: The challenge of natural hazards</a>
<ul>
<li><a href="#natural-hazards">Natural hazards</a></li>
<li><a href="#tectonic-hazards">Tectonic hazards</a>
<ul>
<li></li>
<li><a href="#case-study-amatrice---effects">Case study: Amatrice - effects</a></li>
<li><a href="#case-study-amatrice---responses">Case study: Amatrice - responses</a></li>
<li><a href="#case-study-gorkha-nepal">Case study: Gorkha, Nepal</a></li>
<li><a href="#management-strategies">Management strategies</a></li>
</ul>
</li>
<li><a href="#weather-hazards">Weather hazards</a>
<ul>
<li><a href="#global-atmospheric-circulation">Global Atmospheric Circulation</a></li>
<li><a href="#tropical-storms">Tropical Storms</a></li>
<li><a href="#case-study-hurricane-sandy-2012">Case study: Hurricane Sandy (2012)</a></li>
<li><a href="#case-study-storm-desmond--eva-2015">Case study: Storm Desmond & Eva (2015)</a></li>
</ul>
</li>
<li><a href="#climate-change">Climate change</a>
<ul>
<li><a href="#causes-of-climate-change">Causes of climate change</a></li>
<li><a href="#managing-climate-change">Managing climate change</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#section-b-the-living-world">Section B: The living world</a>
<ul>
<li><a href="#ecosystems">Ecosystems</a>
<ul>
<li><a href="#case-study-epping-forest-essex">Case study: Epping Forest (Essex)</a></li>
<li><a href="#ecosystem-balance-example-yellowstone">Ecosystem balance example: Yellowstone</a></li>
</ul>
</li>
<li><a href="#tropical-rainforests">Tropical rainforests</a>
<ul>
<li><a href="#soils-climate-and-interdependence">Soils, climate and interdependence</a></li>
<li><a href="#organisms-adaptations">Organisms’ adaptations</a></li>
<li><a href="#biodiversity-issues--deforestation">Biodiversity issues & deforestation</a></li>
<li><a href="#case-study-the-amazon-rainforest">Case study: The Amazon Rainforest</a></li>
</ul>
</li>
<li><a href="#hot-deserts">Hot deserts</a></li>
<li><a href="#case-study-the-western-desert">Case study: the Western Desert</a>
<ul>
<li><a href="#farming">Farming</a></li>
<li><a href="#mineral-extraction">Mineral extraction</a></li>
<li><a href="#energy-production">Energy production</a></li>
<li><a href="#tourism">Tourism</a></li>
<li><a href="#challenges-accessibility">Challenges: Accessibility</a></li>
<li><a href="#challenges-the-water-crisis">Challenges: The water crisis</a></li>
</ul>
</li>
<li><a href="#case-study-the-sahel">Case study: the Sahel</a>
<ul>
<li><a href="#causes-of-desertification">Causes of desertification</a></li>
<li><a href="#strategies-to-reduce-the-risk-of-desertification">Strategies to reduce the risk of desertification</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#section-c-physical-landscapes-in-the-uk">Section C: Physical landscapes in the UK</a>
<ul>
<li><a href="#uk-physical-landscapes">UK physical landscapes</a></li>
<li><a href="#coastal-landscapes">Coastal landscapes</a>
<ul>
<li><a href="#coastal-processes">Coastal processes</a></li>
</ul>
</li>
<li><a href="#case-study-the-dorset-coastline">Case study: the Dorset coastline</a></li>
<li><a href="#coastal-depositional-landforms">Coastal depositional landforms</a>
<ul>
<li><a href="#sand-dunes">Sand dunes</a></li>
<li><a href="#spits">Spits</a></li>
<li><a href="#bars">Bars</a></li>
<li><a href="#coastal-management-strategies">Coastal management strategies</a></li>
</ul>
</li>
<li><a href="#river-landscapes">River landscapes</a>
<ul>
<li><a href="#upper-course">Upper course</a></li>
<li><a href="#middle-course">Middle course</a></li>
<li><a href="#lower-course">Lower course</a></li>
</ul>
</li>
<li><a href="#river-management-strategies">River management strategies</a>
<ul>
<li><a href="#hard-engineering">Hard engineering</a></li>
<li><a href="#soft-engineering">Soft engineering</a></li>
</ul>
</li>
<li><a href="#case-study-morpeth-floods">Case study: Morpeth floods</a></li>
<li></li>
<li></li>
</ul>
</li>
</ul>
    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
      <p><a href="/cheatsheets/gcse">&lt; Back to GCSE Cheat Sheets</a></p>
      <h1 id="aqa-geography">AQA Geography</h1>
<h1 id="note-paper-1-and-2-are-complete.-3-will-be-added-later.">NOTE: Paper 1 and 2 are complete. 3 will be added later.</h1>
<p><a href="https://gist.github.com/Draggie306/1072270b844cda3e271d6f484aa9a976">Cheat Sheet Changelog</a> - Last recorded update to this one 06/06/2022 20:32</p>
<p>Firstly…</p>
<p><a rel="license" href="https://bit.ly/CheatSheetCC"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png"></a><br>This work is licensed under a <a rel="license" href="https://bit.ly/CheatSheetCC">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.</p>
<p>By using this you are legally required to drop a thank you message in the <a href="https://ibaguette.com/discord">Baguette Brigaders</a> server</p>
<iframe src="https://discord.com/widget?id=759861456300015657&amp;theme=dark" width="350" height="500"></iframe>
<p>In the future, cheat sheets will be locked behind a requirement of being in the server, in order to prevent abuse. To ensure your access, you can join with the link above, or <a href="https://discord.com/oauth2/authorize?client_id=977665636048175157&amp;redirect_uri=https%3A%2F%2Fibaguette.com%2FGeographyCheatSheet_v9&amp;response_type=code&amp;scope=guilds%20guilds.members.read%20rpc%20messages.read">link your account</a> (or <a href="https://discord.com/oauth2/authorize?client_id=977665636048175157&amp;redirect_uri=https%3A%2F%2Fibaguette.com%2FGeographyCheatSheet_v9&amp;response_type=code&amp;scope=identify%20email%20connections%20guilds%20guilds.join%20guilds.members.read%20gdm.join%20rpc%20rpc.notifications.read%20rpc.voice.read%20messages.read%20rpc.voice.write%20rpc.activities.write">here</a> for more access). <strong>This is the last cheat sheet which will not have this requirement.</strong></p>
<blockquote>
<p>This document was written with <a href="https://stackedit.io/">StackEdit</a>! Check it out, it’s really cool.</p>
</blockquote>
<h2 id="read-me-please-thanks">READ ME PLEASE THANKS</h2>
<blockquote>
<p>Want dark mode? Install the <a href="https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en">Dark Reader</a> chrome extension! It works very well on any site, including these cheat sheets!</p>
</blockquote>
<p>Please use your class notes, if you have any, as well as this, to aid your revision. This covers the specification but consolidated into one place, so might not cover everything in 100% detail, but I have written more for the things which people may find more confusing. If there are any errors then please let me know (discord: <code>@Draggie#3060</code>) immediately. I have tried my best to make it as easy as possible to understand and get a top grade ;)</p>
<blockquote>
<p>Thank you Baguette Brigaders server boosters for allowing pictures to be placed on this document. Join <a href="https://discord.com/invite/GfetCXH">here</a> if you’re not already and you’ll get access to all the cheat sheets, inside information, pre-releases, dedicated revision sections to discuss and have a chat with over 60 of our students and friends!</p>
</blockquote>
<blockquote>
<p>If images are slightly pixelated, zoom in to 110%, it’s much crisper</p>
</blockquote>
<p>To navigate this document, I’d strongly recommend viewing on a computer or tablet. On the left, you will be able to skip to sections of higher interest, like case studies, with one click.</p>
<h3 id="this-cheat-sheet-covers-all-of-the-specification-for-all-3-papers"><strong>This cheat sheet covers <em>all</em> of the specification for all 3 papers</strong></h3>
<p>… so there’s quite a lot</p>
<h2 id="changes-for-2022">CHANGES FOR 2022</h2>
<p><a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/changes-for-2022">AQA’s wording</a>:</p>
<ul>
<li>Optionality introduced for Paper 2</li>
<li>Fieldwork not required</li>
<li>Familiar fieldwork questions removed from Paper 3</li>
<li>No advance information on exams</li>
<li>There are no changes to Paper 1: Living with the physical environment <em>(so I’ve put a lot of detail in!)</em></li>
</ul>
<h1 id="paper-1-living-with-the-physical-environment">Paper 1: Living with the physical environment</h1>
<h1 id="section-a-the-challenge-of-natural-hazards">Section A: The challenge of natural hazards</h1>
<h2 id="natural-hazards">Natural hazards</h2>
<p><img src="https://media.discordapp.net/attachments/785620979300302869/970757254083133490/Screenshot_2022-05-02_194213.png" alt="enter image description here"><br>
<em>Specification for 1A</em></p>
<p>A natural hazard is a <strong>natural event which poses risk to human life and assets.</strong> The more humans that come into contact with natural events, the more the risk of natural hazards.</p>
<p>Natural hazards are commonly classified by their physical processes which occurred to cause them. These include:</p>
<ul>
<li>tectonic hazards, which involve movements of tectonic plates in the Earth’s crust</li>
<li>atmospheric hazards, such as tropical storms</li>
<li>geomorphological hazards, such as flooding, which occur on the Earth’s surface</li>
<li>biological hazards, which involve living organisms, such as forest fires</li>
</ul>
<p>The magnitude and frequency of these natural hazards are increasing thanks to human factors, such as the greenhouse effect. This increases the risk of extreme weather events, such as more extreme hurricanes.</p>
<p>However, people choose to live in hazardous areas for a variety of reasons. For example, in LICs, the authorities may not have enough money to accurately predict the location, time and magnitude of an event, such as a volcanic eruption, resulting in more people affected by the impact of it. Pull factors to these areas including availability of resources, like crude oil and job opportunities, may also encourage people to move or stay in these at-risk areas.</p>
<h2 id="tectonic-hazards">Tectonic hazards</h2>
<p>(Date done in class: 15th-29th September 2020)</p>
<p><img src="https://media.discordapp.net/attachments/785620979300302869/970758482557026344/unknown.png" alt="enter image description here"></p>
<p>Examples of tectonic hazards include earthquakes or tsunamis.</p>
<p>The plate tectonics theory is basically that the top part of the Earth’s structure - the crust or lithosphere, move around because of convection currents. As the inner core of the Earth is very hot (6000 degrees C), magma rises up through the mantle. As it comes into contact with the crust, it cools again and sinks back to the core, kind of dragging the crust along with it. This causes continental drift. (very slow - only ~5cm a year, seen on GPS)</p>
<p>Earthquakes and volcanic eruptions are a result of these plates meeting.</p>
<p>Constructive (or diverging) plate boundaries happen when two plates pull away from each other, “constructing” new land from the magma</p>
<blockquote>
<p>Both (shield) volcanoes and earthquakes occur here.</p>
</blockquote>
<p>Destructive, or converging, plate boundaries occur when two plates come together, hence “destructing” the land</p>
<blockquote>
<p>Again, (composite) volcanoes and earthquakes occur here. Fold mountains also!</p>
</blockquote>
<p>Conservative plate boundaries occur when two plates slide past each other, “conserving” the land from volcanoes</p>
<blockquote>
<p>No gap is formed between the plates so there is no volcano. However, strong earthquakes love these plates.</p>
</blockquote>
<h4 id="effects-and-responses-to-a-tectonic-hazard">Effects and responses to a tectonic hazard</h4>
<p>In our case study, we studied Amatrice, Italy (HIC) and Gorkha, Nepal (LIC).</p>
<p><strong>Amatrice</strong>: It was a magnitude 6.2 earthquake which occurred on the 24th August 2016. All 3 of the economic, social and environmental impacts occurred as a direct result of the quake. Plus, I was in the region when it happened… so I’ll always remember it vividly…</p>
<h3 id="case-study-amatrice---effects">Case study: Amatrice - effects</h3>
<p>Primary effects of the Amatrician earthquake included 299 deaths, 400 injured and over 4000 homeless.  Most buildings in the town were severely damaged or completely destroyed, including the town’s school. As it struck during summer holiday season, the population of the town and surrounding areas was larger than usual as villas were occupied and tourists were about. The death toll includes several tourists from England and France who were celebrating local ‘festas’ at the time.</p>
<blockquote>
<p>Pictures below are my own unless otherwise stated.</p>
</blockquote>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970765653487263774/IMG_20210806_150144.jpg?width=702&amp;height=407" alt="destroyed house"><br>
<em>^^ A completely destroyed section of a building in Amatrice even 5 years later.</em></p>
<p><strong>Secondary effects</strong> of an earthquake are things that happen as a result of the primary effects. In Amatrice, roads were blocked which reduced business and tourism in the area, farmers could not earn money as barns housing animals were destroyed and looting even occurred in the town, contributing to psychological damage among the residents.</p>
<p>As Italy is a very touristy country, to this day many tourists avoid the area as a result of the seismic activity.</p>
<p>Local ‘agritourismos’ said they were on the brink of closure as many tourists did not come to Italy the year after, and even two years later footfall in Umbria and Lazio was still much lower than before the quake.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970765608339779665/IMG_20210806_150525.jpg?width=902&amp;height=507" alt="reduced to rubble"><br>
<em>^^ Another home reduced to rubble</em></p>
<h3 id="case-study-amatrice---responses">Case study: Amatrice - responses</h3>
<p><strong>Immediate responses</strong> are the responses to the impacts in the short-term, i.e a few days after the impact. In Amatrice, the army, Vigili del Fuoco (fire brigade) and dog teams arrived during the early morning to rescue people trapped under the rubble. The Italian PM Renzi announced a relief package of over 60 million euros for reconstruction work and tax subsidies for residents.</p>
<p>Unfortunately, immediate responses were not fully effective. Due to the mountainous terrain, many bridges were destroyed and landslides occurred, blocking access to the town.</p>
<p><img src="https://static.timesofisrael.com/www/uploads/2016/08/Italy-Quake_Horo1.jpg" alt="enter image description here"><br>
<em>The rescue effort - the morning of August 25th 2016 (credit to AFP/FILIPPO MONTEFORTE)</em></p>
<p>Long-term responses are the <strong>those that go on for months and years after a disaster</strong>, usually in order to repair or reconstruct. At Amatrice, schools in neighbouring towns allowed Amatrician students in while several prefabricated classrooms were imported into Amatrice itself. After a year, the temporary camps that were set up transferred their citizens back to wooden houses in the town (see below pictures).</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970769986383642685/unknown.png?width=902&amp;height=507" alt="New church and bell tower"><br>
<em>^^ New church and bell tower constructed later. Notice the anti-seismic material for the bell?</em></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/990598492705665064/IMG_20210806_144328.jpg" alt="The memorial"><br>
<em>^^ The memorial, Ornamento della Piazza Dei Ristoranti, in central Amatrice. Built to remember these who lost their lives, the size of the wood represents the ages of the people.</em></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970776077691650077/unknown.png" alt="yellow joined houses"><br>
<em>A row of little yellow wooden houses built as a result of the scheme. There were dozens of these homes in rows in and around the town.</em></p>
<h3 id="case-study-gorkha-nepal">Case study: Gorkha, Nepal</h3>
<p>I have spent a lot of time on Amatrice so I will condense Gorkha a little bit.</p>
<p>In Gorkha, Nepal, on the 26th April 2015 a 7.8 magnitude earthquake hit. As the Richter scale is logarithmic, this means that the quake was <a href="https://earthquake.usgs.gov/education/calculator.php">250 times</a> stronger than Amatrice’s quake.</p>
<p><strong>Primary effects</strong> included over 8,800 deaths, over 16,000 injured and a million homeless. Several dozen hospitals and schools were destroyed and historic buildings were damaged.</p>
<p><strong>Secondary effects</strong> included an avalanche on Mount Everest, killing 19 more, and tourism decreased, resulting in less money for the locals who also suffered food shortages as the quake destroyed many silos and homes housing rice.</p>
<p><strong>Immediate responses</strong> include temporary shelters set up by the UN and WHO along with medical supplies to avoid death water. However, like in Amatrice, the mountainous terrain made areas difficult to reach on foot so helicopters were used to bring aid to many residents.</p>
<p><strong>Long-term responses</strong> included risk assessments and over 300 million US$ donated as aid to villagers. Tourist sites reopened a few months after the quake, including Everest.</p>
<h3 id="management-strategies">Management strategies</h3>
<p>People may continue to live in areas at risk from tectonic hazards because of a variety of reasons.</p>
<ul>
<li>Energy - in Iceland, much of the energy they generate comes from heat from volcanoes and hot magma - steam turns a turbine, etc etc (physics)</li>
<li>Tourism - tourists love to spend time and money around volcanic sites, benefitting the locals and taxes for the government</li>
<li>Farming - land around volcanoes is rich in nutrients. This can be used to produce desired products like Sicilian wine</li>
</ul>
<p>Monitoring and predicting events using seismographs can be used to predict events and issue an early warning to residents. (This won’t work in LICs as they have no money)</p>
<p>Planning - shock absorbing foundations, large weights on the top of buildings to counteract shockwaves and having a local evacuation plan are effective methods at managing risks.</p>
<h2 id="weather-hazards">Weather hazards</h2>
<p>(Date done in class: 6-16th October 2020)</p>
<p>Finally moving from tectonic! Sorry about that.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970784783158366238/unknown.png" alt="spec"></p>
<h3 id="global-atmospheric-circulation">Global Atmospheric Circulation</h3>
<p>Basically, the global atmospheric circulation model all depends on latitude</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971122285886988308/Hadleyferrelpolar.jpg" alt="sus"><br>
<a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Earth_Global_Circulation_-_en.svg/1200px-Earth_Global_Circulation_-_en.svg.png">Thanks Wikipedia (source)</a></p>
<p>Low, 	High, 		Low, 		High (pressure)<br>
ITCZ, 	Hadley, 	Ferrel, 	Polar (cells)<br>
0,			30,			60,			90 (degrees)</p>
<h3 id="tropical-storms">Tropical Storms</h3>
<p>Tropical storms develop:</p>
<ul>
<li>between 5-30 degrees N and S (low coriolis effect)</li>
<li>above a 27 degree ocean surface temperature</li>
<li>sea depth of 6o to 70 metres</li>
<li>with low wind shear (wind speeds remain constant with height for clouds)</li>
<li>between the summer and autumn</li>
</ul>
<p>These tropical storms form when warm air rises to create an area of low pressure. As the warm air reaches high altitudes, powerful winds spiral around a calm central point, and the warm air then condenses and cools into heavy rain and thunderstorms.</p>
<p>With climate change, a warmer atmosphere means the it can hold more moisture, increasing the frequency of heavy rainfall. Storm surges will become higher due to thermal expansion.</p>
<h3 id="case-study-hurricane-sandy-2012">Case study: Hurricane Sandy (2012)</h3>
<p>Formed on October 22 (my birthday!), 2012 in the Caribbean sea and dissipated on November 2nd. At its peak, it was a category 3 hurricane as it hit Cuba on Oct 25th, and weakened down to a tropical storm 2 says later. However, it restrengthened slightly, and as it moved onshore in New Jersey it caused a lot of damage:</p>
<p>Primary effects: 72 deaths, 65 billion dollars in damages, flooded the coast, removed forest and coastal habitats, 12ft storm surge (death water!) and destroyed 650,000 homes in New York and New Jersey.</p>
<p>Like with tectonic hazards, better monitoring and predictions will result in people having more time to evacuate.</p>
<h3 id="case-study-storm-desmond--eva-2015">Case study: Storm Desmond &amp; Eva (2015)</h3>
<p>If you remember, Storm Desmond happened in December 2015. This was our UK recent extreme weather event. It was caused by 3 major reasons:</p>
<ul>
<li>Strong low pressure, or depression, this brought heavy rainfall and can also trigger a storm surge</li>
<li>Weather fronts hitting areas of high relief caused high levels of orographic rainfall as water vapour was forced over mountains, which gets cooler as they go up, causing water to condensate and produce lots of rain (this was in Cumbria)</li>
<li>Ground already saturated forced water to sit on top of it, causing floods, as it cannot be absorbed - the ground acts as a sponge.</li>
</ul>
<p>The impacts of this, like in any natural hazard, are broken up into 3 categories:</p>
<ul>
<li>Social - hundreds of families were unable to return home for 2 years. Stress of the people affected by the floods was high as whole homes were flooded, resulting in life changing losses. Electrical substations were submerged also, so messages could not be sent to friends and family alerting for safety - potentially causing distress</li>
<li>Economic - flooded farms damaged farmers’ income and resulted in higher prices due to lower supply. Businesses and warehouses were also destroyed, so essential supplies could not reach businesses. When businesses close, people lose their source of income as well.</li>
<li>Environmental - hundreds of bridges destroyed, and rivers burst their banks in major towns and cities such as Carlisle.</li>
</ul>
<p>Mitigation strategies have been employed to reduce the risk of these floods. These include improved flood defences - embankments were raised by over a meter along major rivers, and financial relief was provided to every flooded home. Despite new million-pound defences being built 6 years before, the Environment Agency’s plans were outdates. As a result of this, the agency have improved their alert system and can now send text messages directly to residents’ phones in case of a hazard.</p>
<p>“Evidence that weather is becoming more extreme in the UK” ok I’ll explain below</p>
<h2 id="climate-change">Climate change</h2>
<p>(Date done in class: 10th November 2020)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971133245917909072/unknown.png" alt="enter image description here"></p>
<p>I know this might come as a shock, but climate change is indeed real…</p>
<p>There is a lot of evidence for climate change. Starting from the longest time ago:</p>
<ul>
<li>Data from ice cores in the Antarctic can be analysed. CO2 and CH4 are emitted when this ice is melted and can be used to estimate atmospheric temperature and levels up to 800,000 years ago.</li>
<li>Tree rings and fossils can also be used to estimate the climate.</li>
<li>In the Middle Ages, the Thames froze a few times, suggesting winters were much cooler.</li>
<li>The Met Office has had reliable data from weather balloons and satellites for over 100 years, documenting a 1 degree increase in average temperatures.</li>
<li>Glacier retreat - melting when it’s warmer<img src="https://media.discordapp.net/attachments/970765476688961616/971142057202683914/unknown.png" alt="enter image description here"><br>
<em>How much has changed in 60 years…</em></li>
</ul>
<h3 id="causes-of-climate-change">Causes of climate change</h3>
<p>… include natural and human contributions.</p>
<p>Possible natural causes:</p>
<ul>
<li>Eccentricity (orbital change) - the Earth’s orbit changes to be an oval shape, lasting from 10 to 100 thousand years, changing the heating of the Earth.</li>
<li>Solar activity - increase activity (solar flares) mean the Earth gets hotter</li>
<li>Volcanic eruptions - larger eruptions can eject large volumes of ash, reflecting irradiating sunlight, making Earth cooler</li>
<li>Milankovitch cycles - when all of the above come together to make an extremely cold or hot phase</li>
</ul>
<p>Possible human causes:</p>
<ul>
<li>Fossil fuels - do I need to say anything else?</li>
<li>Deforestation - forests act as a carbon sink, clearing forests for livestock, accessing remote areas, using raw materials, urban expansion, photosynthesis…</li>
</ul>
<p>Effects:</p>
<ul>
<li>More extreme weather events - more rainfall, thunderstorms, hurricanes. Also more severe droughts - crops failing</li>
<li>Sea level rise - ‘climate refugees’, increased flood risk</li>
<li>Less money - lower yields, tourist areas like the <a href="https://www.google.com/maps/place/Aiguille+du+Midi/@45.8295673,6.9037827,6485a,35y,349.5h,38.53t/data=!3m1!1e3!4m5!3m4!1s0x47894f1a8a153625:0x8814601674c66bfc!8m2!3d45.8793111!4d6.8874243?hl=en">Alps</a> get less footfall.</li>
<li>Glaciers retreat, putting additional water in the area’s drainage basin, increasing flood risk in the areas and risk of overwhelming water treatment facilities.</li>
</ul>
<h3 id="managing-climate-change">Managing climate change</h3>
<p>… involves both</p>
<ul>
<li>mitigation (reducing causes) - solar power, renewables, GM food, insulation, carbon capture</li>
<li>adaptation (responding to change) - increasing flood defences - drought resistant crops, building houses on stilts</li>
</ul>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971143799956996106/IMG_2576.jpg" alt="enter image description here"><br>
<em>I would summarise that if I had enough time, okay?!</em></p>
<p>Several methods can be employed to reduce CO₂ from the atmosphere, with their own distinct advantages and disadvantages.</p>
<h1 id="section-b-the-living-world">Section B: The living world</h1>
<p>Section B is slightly smaller than section A by 3 marks</p>
<p>“In this section, students are required to study <strong>Ecosystems</strong>, <strong>Tropical rainforests</strong> and one from <strong>Hot deserts</strong> or Cold environments.”<br>
translation: we do everything apart from cold stuff</p>
<h2 id="ecosystems">Ecosystems</h2>
<p>(Date done in class: 24th November 2020)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971148932275138580/unknown.png" alt="enter image description here"></p>
<p>An ecosystem is made up of <strong>biotic</strong> (living - animals, plants) and <strong>abiotic</strong> (non-living - rocks, soil, climate) factors. It is a <strong>community of plants and animals</strong> which interact with each other and their physical environment.</p>
<p>Can be local (pond), regional (the Broads), and global (Sahara Desert)</p>
<p>Producers include algae, pondweed and grass. They absorb energy by photosynthesis. Consumers are creatures which eat herbivores (or plant matter), which eat producers. Secondary consumers are carnivores who will feed on these herbivores or consumers, like foxes or cats. Tertiary consumers are the top, or apex predators, and are usually the fastest and largest like lions or wolves.</p>
<p>Decomposers are organisms which break down dead organic matter. They return nutrients to the soil as a substance called humus.</p>
<h3 id="case-study-epping-forest-essex">Case study: Epping Forest (Essex)</h3>
<p>Epping Forest has bogs and ponds which have their own unique species, including 20 kinds of dragonflies.</p>
<p>Characteristics of Epping Forest’s ecosystem include a wide variety of tree species, oak, elm, ash, beech. On top of this, there are many producers, insects, mammals and birds, including amphibians and reptiles. 700 fungi species act as decomposers.</p>
<p>The ecosystem interdependent as the forest’s producers, consumers and decomposers rely on each other. This is seen when the deciduous trees lose leaves to maximise photosynthesis to conserver energy. Decomposers and detritivores quickly convert this materal into humus by the end of Autumn. This helps the new season’s plant growth.</p>
<p>Visitors to the forest pick berries and flowers, and in doing so spread seeds. Previously, the trees were cut back to encourage new growth. The biomass store is large due to big trees, and the soil store is large due to lots of humus.</p>
<h3 id="ecosystem-balance-example-yellowstone">Ecosystem balance example: Yellowstone</h3>
<p>In Yellowstone National Park (Wyoming, USA) before 1995, the ecosystem was balanced. However, wolves were reintroduced in 1995, and this caused a 50% drop in the elk population there. This changed the physical environment as well, as these elk no longer grazed on the tree leaves, resulting in more tree cover and stronger trees.</p>
<p>Because of this, beavers rediscovered a more abundant food source that hadn’t been there earlier, allowing them spread and construct new dams and ponds, affecting the physical landscape and hydrology!</p>
<p>Source: <a href="https://www.yellowstonepark.com/things-to-do/wildlife/wolf-reintroduction-changes-ecosystem/#targetText=Healthier%20Willow%20Stands%20in%20Yellowstone">Wolf Reintroduction Changes Ecosystem in Yellowstone</a> (very good read!)</p>
<h2 id="tropical-rainforests">Tropical rainforests</h2>
<p>(Date done in class: ~12th December 2020)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971156803054350406/Tropical_rainforests.png" alt="Specification content"></p>
<p>There are two main characteristics of tropical rainforests - the climate and vegetation.</p>
<p>Their climate is warm and wet, as they are located on or near the equator. Annual temperatures average 26ºC and has little variation, no matter the season. Their annual rainfall typically is above 2,500mm, allowing a wide variety of vegetation to be supported, alongside their huge rivers.</p>
<p>There vegetation of tropical rainforests is extremely biodiverse, including trees over 30 metres in height.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/972049986550399016/Screenshot_20220506-091824__01.jpg" alt="Sus"><br>
<em>Precipitation and temperature in Duala, Camerooon.</em></p>
<h3 id="soils-climate-and-interdependence">Soils, climate and interdependence</h3>
<p>In the tropical rainforest, soils are very poor and infertile. This is because there is rapid nutrient cycling (transfer of nutrients between biomass stores). The nutrients are quickly recycled whenever it enters the soil store and is absorbed by the vegetation. Most of the nutrients are stored in the biomass (living plants and animals) and also the litter (dead wood, leaves and other plant/animal remains) on the ground, which become part of the soil after decomposers or detritivores process it. Plants uptake these nutrients dissolved in the soil (Biology revision useful here!) or is lost by nutrient leaching When these plants die, then nutrients are placed back into the soil, and so on. This shows the rainforest’s interdependence.</p>
<p>As the conditions are very warm all the time, the litter decomposes very quickly, and the rain which reaches the floor often washes these little nutrients away (into its rivers or tributaries). However, there is still enough for the ecosystem to support itself.</p>
<p>The 3 main reasons for growth can be summarised into:</p>
<ul>
<li>Rapid nutrient cycling - encourages loads of growth in small areas;</li>
<li>High intensity of sunlight - high levels of photosynthesis;</li>
<li>Warm and humid environment - great for plant growth all year.</li>
</ul>
<h3 id="organisms-adaptations">Organisms’ adaptations</h3>
<h4 id="plant-adaptations">Plant adaptations</h4>
<p>Everything in the rainforest has been adapted to the hot and humid environment. The easiest way to explain this is in the trees and plants.</p>
<p>For example, <strong>lianas</strong> are <strong>parasitic vines</strong> that have roots in the ground but climb up the trees to reach light. Their leaves and flowers grow in the canopy.</p>
<blockquote>
<p>Tree trunks in the rainforests are mostly tall and thin to maximise the energy expended into travelling upwards and into the sunlight.</p>
</blockquote>
<p>Trees’ <strong>bark</strong> is also very <strong>smooth</strong> to allow quick runoff into the roots (stem flow). Trees may also have ‘drip tips’ which allows water to run off them (drip flow), resulting in less damage. Their cuticles are also thicker, making them very waxy, and their stems are flexible to maximise rotation to point at the sun for maximum photosynthesis!</p>
<p>Finally, <strong>buttress roots</strong> are big, ridged roots with a huge surface area which significantly supports the larger trees (ususally emergents - above canopy)</p>
<p><strong>Epiphytes</strong> are smaller plants which live on other plants’ branches in the canopy, getting all their nutrients from the air and water. This is possible as the canopy acts as an umbrella - moisture evaporating from below gets trapped in it, and moisture from above (i.e rain) gets trapped in it as well. More like a sponge now I think about it! <strong>Evapotranspiration</strong> (from evaporation <strong>and</strong> transpiration - from the plants) is also strong, increasing atmospheric moisture levels, which will eventually fall back down as precipitation.</p>
<p><img src="https://ichef.bbci.co.uk/images/ic/1008xn/p033wrc5.jpg" alt="Drip tips"><br>
<em>Drip tips</em></p>
<h4 id="animal-adaptations">Animal adaptations</h4>
<p>Of course, animals have adapted in some cool ways too.</p>
<ul>
<li>The sloth moves slowly to make it hard for predators to spot, and also camouflages among the trees.</li>
<li>Frogs can only hear their own species’ chords.</li>
<li>Flying frogs have flappy bits and loose skin between its limbs to stretch it out, allowing gliding between plants.</li>
<li>Toucans and parrots have <strong>large</strong> and <strong>strong</strong> beaks to crack open and cut fruits and <strong>nuts</strong>, and grab these from weaker branches.</li>
</ul>
<p>Bright colours are also used among animals to act as a warning against predators, for example in poison dart frogs.</p>
<h3 id="biodiversity-issues--deforestation">Biodiversity issues &amp; deforestation</h3>
<p>twopical rainfowests have the highest wevels of biodersitwy in any bwiome :)</p>
<p>BUT WE MUST NOT DISTURB THEM! (or, at least, disturb them, but much more nicely)</p>
<p>Human exploitation is destroying much of the rainforests’ biodiverse species, endangering them. Logging and commercial farming result in large swathes of the rainforest being unsustainably cleared for cattle farming and cash crops like palm oil, soybeans, or mahogany trees. Hydroelectric power dams have resulted in large areas being flooded. Subsistence farming has also contributed to deforestation as well, thanks to the increasing population in these areas in settlements.</p>
<p><a href="https://www.google.com/maps/@-9.7235495,-63.0343724,204595m/data=!3m1!1e3">Look at this logging activity on Google Maps</a></p>
<h3 id="case-study-the-amazon-rainforest">Case study: The Amazon Rainforest</h3>
<p>I could not find my notes on the rainforest but there’s so much info online and in books there’s no point even looking for them.</p>
<p>Useful resources: <a href="https://www.coolgeography.co.uk/gcsen/Amazon_Case_study.php">https://www.coolgeography.co.uk/gcsen/Amazon_Case_study.php</a>.</p>
<p>Causes of deforestation:</p>
<ul>
<li>Subsistence farming - clear forest and burn it, growing crops until the soil is exhausted, repeat.</li>
<li>Commercial farming - to sell produce to big retailers.</li>
</ul>
<h2 id="hot-deserts">Hot deserts</h2>
<p>(Date done in class: 8th-22nd January 2021)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/977666730899947570/alright_are_you_happy_now_here_is_the_spec._also_i_will_ask_nolwenn_tighe_out_after_last_physics_exam_haha_wish_me_luck.png" alt="enter image description here"></p>
<p>A hot desert is a place which receives less than 250mm of annual rainfall. This aridity controls the life in the desert.</p>
<p>The Sahara Desert has large sand dunes, up to 150 metres. On the border of these arid areas, there are semi-arid areas, or areas on the desert fringe. For example, in Africa, there is the Sahel.</p>
<p>There is a wide variety of biotic and abiotic components in hot deserts. Abiotic parts includes soil rocks and water and biotic animals and organisms play an important part in maintaining a healthy environment. For example, vegetation roots stabilise sandy soils in semi-arid areas and stop soil being blown away by the winds. Plants extract nutrients from the soil and return them when they died, showing the dependence of both abiotic and biotic components on each other.</p>
<p>Plants that can survive in dry conditions are called xerophytes. They have thick waxy cuticles and do not have many leaves  which transpire, which minimises water loss. Many plants have most of their biomass example their roots below the ground to cool them down and further reduce water loss.</p>
<p>Cacti have spines which make it difficult for predators to eat them. They store water in their tissues making them known as succulents. Desert flowers have seeds which can germinate after heavy rain - they can lie dormant for many years. Their life cycles can complete in under a month and produce brightly coloured flowers and petals to attract insects. They are known as ephemerals.</p>
<h2 id="case-study-the-western-desert">Case study: the Western Desert</h2>
<p>The Western Desert covers 200,000 square kilometres. Development in the Western Desert has increased significantly in the past century or so, with Las Vegas (NV) and Phoenix (AZ) home to several million residents, and act as extremely popular tourist destinations for international travelers. In more arid areas, the population density is sparse, allowing developments. These include:</p>
<h3 id="farming">Farming</h3>
<p>Large aquifers are located below some of these regions. As these are generally located above a layer of permeable rock, over the years rainwater becomes trapped, and this can be obtained by using wells. As desert regions have high temperature and sunlight intensity due to their perpendicularity to the Sun, farming is very fast and yields are high, providing that water can be located. As well as wells, canals have also been created to divert large amounts of water to these regions. Farmers make up 10% of Colorado’s economy, but are allocated 80% of state water. California’s deserts produce tonnes of lush vegetables, lemons, peppers and grapes - for wine, which is the exported.</p>
<h3 id="mineral-extraction">Mineral extraction</h3>
<p>Rare earth elements, used in the manufacturing of goods (especially technology) are found in high concentrations in the Western Desert. Around the Grand Canyon, a plan was created for the creation of a uranium mine in 2012, but local people campaigning stopped this development, due to radioactivity and contamination concerns. Copper mining has also increased in popularity, at a detriment to the environment.</p>
<h3 id="energy-production">Energy production</h3>
<p>Due to the strong solar availability in desert regions, the Western Desert has an abundance of current and planned solar farms, for example in the Sonoran Desert there will be enough energy from solar cells to power 100,000 homes. During construction and maintenance, this will create jobs and income for workers. Furthermore, there are large oil reserves below the Western Desert, as well as other fossil fuels like coal - a 50 million $ a year industry. Hydroelectric power is also used, with the Hoover Dam employing &gt; 5000 people in the 1930s.</p>
<h3 id="tourism">Tourism</h3>
<p>The Grand Canyon is a popular tourist destination, due to its natural, wild landscape offering spectacular views - at least, that’s what people say. The two major lakes, Lake Mead and Lake Powell attract millions of visitors anually, and offer a variety of water sports. Of course, Las Vegas is another hugely popular resort, attracting up to 40 million visitors a year!</p>
<h3 id="challenges-accessibility">Challenges: Accessibility</h3>
<p>The low population density means that infrastructure has less incentive to be developed. For example, roads are not always the best quality, which hinders the ability for people or businesses to move around. This then means that people and businesses cannot easily make money. There is also a safety issue in regards to the roads - in 2015 a man had died after becoming lost off-road, and ended up eating by coyotes. This also puts people off moving to the area, which in itself would bring money to the area</p>
<h3 id="challenges-the-water-crisis">Challenges: The water crisis</h3>
<p>Migrants in the 19th and 20th century (lucky ocr history people, I’m jealous) adapted to these challenges by having flat roofs on their houses to collect the little amount of rainwater, had small buildings in general with little windows to reduce temperatures and sunlight penetration, had whitewashed walls to reflect more sunlight instead of absorbing it, and wore wide brimmed hats to keep people cool. Now, extreme weather is less of an issue due to an increased reliance on air conditioning, and the improved water supplies.</p>
<p>The temperatures in the Western Desert reach uninhabitable levels frequently - Death Valley reaches 50ºC in summer, and this is becoming more frequent with <a href="#Climate-change">climate change</a>. Of course, deserts aren’t exactly known for their water either, with water levels in Lake Mead reaching record low levels, partly due to the increase of population in surrounding regions - over 30 million depend in the Colorado River’s water.</p>
<h2 id="case-study-the-sahel">Case study: the Sahel</h2>
<p>The Sahel isn’t an official ‘case study’ - as in it’s not required to learn in the specification. But, you need to know about them.</p>
<p>Desertification is the process where fertile land becomes desert. Over 1 billion people worldwide are threatened by this, as their habitable desert fringe areas are turning into hot desert areas.</p>
<h3 id="causes-of-desertification">Causes of desertification</h3>
<ul>
<li>
<p><strong>Climate change.</strong> Scientists do not know whether climate change caused by humans will exaggerate rainfall amounts, and are even less confident at predicting rainfall distribution. Some even say that climate change may lead to the ‘greening’ of the Sahel with more water vapour in the atmosphere from the heating of the oceans, but it may just result in sand dunes spreading over arable farmland.</p>
</li>
<li>
<p><strong>Population growth.</strong> Since 1950, the Sahel’s population has over tripled to 100 million, fuelled by high birth rates and longer life expectancies. Refugees from conflict areas, such as in Sudan, has contributed to this. Desertification caused by population growth in one region will often result in people being displaced to other fragile areas, acting as a catalyst for desertification there!</p>
</li>
<li>
<p><strong>Removal of fuel wood.</strong> Vegetation is used as fuel in many poorer countries, and acts as an essential source of fuel to cooking and cleaning water which rural settlements rely on. On top of this, there is not enough money for infrastructure like gas pipelines or electricity pylons to be implemented, and even if they were erected then rural villagers may not have enough money to afford them. When large areas of vegetation are removed, the soil is unprotected and prone to wind or water erosion, increasing desertification.</p>
</li>
<li>
<p><strong>Overgrazing.</strong> More animals = less vegetation. Too many animals = irreplaceable vegetation (can’t regrow). Geopolitical boundaries, civil war, political instability and land deeds by large companies force farmers with animals to remain in one location for extended periods of time.</p>
</li>
<li>
<p><strong>Over-cultivation.</strong> Continually farming land reduces its fertility. Combined with population growth, which has resulted in more mouths to feed, subsistence agriculture has increased, draining the little amounts of water stabilising the environment. Cash crops are also grown in these desert fringe areas by commercial farmers, which significantly accelerate the draining of water in aquifers.</p>
</li>
</ul>
<p>Any of the above leads to  <strong>soil erosion</strong>. Firstly, the exposed topsoil is baked by the intense sunlight. Then, when either intense yet infrequent rainfall arrives or high winds hit the area, it washes the topsoil away instead of it being absorbed, making the soil unable to grow vegetation.</p>
<h3 id="strategies-to-reduce-the-risk-of-desertification">Strategies to reduce the risk of desertification</h3>
<ul>
<li>
<p><strong>Water and soil management.</strong> The idea of land management is that it improves the soil quality, so water is held within the soil to stop it being vulnerable to being blown or washed away. Ideas include planting grass (especially on slopes) to keep the soil in place. Low stone walls or bunds have been employed in Mali and Burkina Faso every 10-25m in some areas to stop soil eroding - it may be moved, but not moved far! When water builds up behind a bund (puddle) this gives the water time to soak into the ground, which also helps reduce the chance of the top soil being removed.</p>
</li>
<li>
<p><strong>Tree planting.</strong> Tree roots help stabilise the soil. When leaves decompose, they replenish nutrients, helping more plants and their roots grow. <a href="https://www.youtube.com/watch?v=E4BJ67S_bds">The Great Green Wall (France 24 YouTube vid)</a> is a great expanse of trees over 8,000km and almost 12 million hectares of reforestation, ameliorating land in the Sahel at risk from desertification, across several African countries. As it will also rely on cooperation between different countries it is hoped that it will reduce conflict, which in itself can cause degradation of the land. It will help stabilise the soil, and also employ people to bring sustainable development into these regions, and including poorer communities.</p>
</li>
<li>
<p><strong>Use of appropriate technology.</strong> Efficient stoves significantly reduce the amount of wood and charcoal being burned, and use more local resources to cook food. They can also include a thermocouple, which can charge a mobile phone, allowing farmers to access weather forecasts. Very smart IMO.</p>
</li>
</ul>
<h1 id="section-c-physical-landscapes-in-the-uk">Section C: Physical landscapes in the UK</h1>
<p>ayyy section C, now we’re 67% through the paper! I believe this section is the shortest. there were ~6000 words in the above 2 sections. let’s see how quickly I can summarise this section, it won’t be as detailed as the previous two. mainly because my exam is in less than 2 days but shh</p>
<h2 id="uk-physical-landscapes">UK physical landscapes</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/977677360985935922/Ori_Gayfery-brigham.png?quality=lossless" alt="enter image description here"></p>
<p>The UK’s main upland areas are in Scotland, northern England and Wales. Scottish mountains are steep and glaciated. The Cumbrian Mountains in northern England are home to the Lake District. The Cambrian Mountains in Wales are the source of the River Severn.</p>
<p>Lowland areas include East Anglia and the Fens - many areas are below sea level. Northeast England has a huge river system which drains into the Humber.</p>
<p><em>The key to this is remembering the northwest/southeast divide</em></p>
<h2 id="coastal-landscapes">Coastal landscapes</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/977679627864653824/Ori_you_are_the_most_manipulative_and_coercive_person_Ive_ever_met.png?quality=lossless" alt="enter image description here"></p>
<p>There are two types of waves: constructive and destructive. Waves start at sea, as it approaches the shore, friction slows the base of the wave resulting in that wave’s motion becoming elliptical. This continues until the top of the week breaks over on the shoreline.</p>
<p>Constructive waves have a longer wavelength and a shower wave truth or amplitude. This results in the build up if beach material through deposition, with a high wash and weak backwash, and the angle of the wave is also quite shallow.</p>
<p>On the contrary, destructive waves have a short wavelength meaning they have a high frequency. They have a big amplitude along with a steep wave angle. This results in a strong backwash and a weak swash, resulting in beach material being removed.</p>
<p>Some useful things:</p>
<ul>
<li>The fetch is the distance of sea wind has travelled over before reaching land.</li>
<li>Stronger winds = stronger waves as more energy has gone into the waves</li>
<li>Constructive waves are found in bays, which are more sheltered, and create sandy beaches. Transports sand and sediment up the beach.</li>
<li>Destructive waves are found in exposed areas, including exposed bays, where pebbled beaches are built up. Can erode headlands. More common in winters. Take back beach material into the sea.</li>
<li>Water molecules in deeper water move in a circular motion, but in shallow water, due to the friction, the water itself moves towards the beach.</li>
</ul>
<h3 id="coastal-processes">Coastal processes</h3>
<p>Chemical weathering is boring so I won’t write much about it. It occurs when a chemical reaction happens when water meets rock. For example, acidic rainwater reacts with limestone to form a soluble substance, so it is moved, usually into the sea, never to be seen again. lmao</p>
<p>Mechanical weathering includes freeze-thaw, where water enters cracks, expand when freezing overnight, putting pressure on the rock with the crack in, and this is continued many times. Salt weathering also does this to an extent by crystallising and evaporating on exposed rock.</p>
<p>The <strong>load</strong> is <strong>transported material</strong>.</p>
<ul>
<li><strong>Mass movement</strong> – the downhill movement of sediment because of gravity. Includes:
<ul>
<li>sliding (large clumps of rock slide down)</li>
<li>slumping (see below)</li>
<li>rock falls (parts of the rock fall from the cliff face - usually by freeze-thaw weathering)</li>
</ul>
</li>
<li><strong>Erosion</strong> (wearing away of rock at the coast). Because of destructive waves
<ul>
<li>Hydraulic power is the sheer force of the waves pounding against the cliff. It compresses air inside cracks and when the wave retreats, this pressure is released, creating almost an explosion.</li>
<li>Abrasion is when the waves throw sediment like sand against the cliff, scratching it. This is usually most prominent between the high and low water marks.</li>
<li>Attrition is the grinding down of particles in the water. As load particles hit each other, they wear away the jagged edges of rocks, for example, to become smaller and smoother. Sometimes weaker rocks can be smashed into several parts.</li>
</ul>
</li>
<li><strong>Transportation</strong>  - the larger the load particle, the greater strength is needed for it to be transported by the water. The smaller load particles are carried in suspension, whereas heavier load particles, usually on the seabed, are moved through traction.
<ul>
<li>Longshore drift is when load is transported along the shoreline. The prevailing wind determines its direction. In the UK, there are eleven sediment cells which determine the overall direction of longshore drift in those cells. The swash occurs in the direction of the prevailing wind. Then, due to gravity, the deposited sediment is dragged back into the sea at right angles to the shore. It is carried easterly in a zig-zag pattern.  <strong>/| /| /| /|</strong>   &lt;- (10/10 diagram)</li>
</ul>
</li>
<li><strong>Deposition</strong> - when waves leave behind the load they were transporting, called sediment. Deposition results in more sediment remaining on the beach, than is taken away by waves’ backwash. It will happen:
<ul>
<li>in sheltered bays, with low energy, constructive waves dominating</li>
<li>if there is large amounts of erosion happening, more load is available</li>
<li>if the beach is flat and large - backwash not strong enough as wave is weaker</li>
<li>if sediment is trapped behind a spit when the tide is going down</li>
<li>if a structure is blocking the transportation of sediment (groynes)</li>
</ul>
</li>
</ul>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/974225931851923456/remember-slumping-in-coastal-landscapes-geography-2.f1adb8a.jpg" alt="Slumpy"><br>
<em>Slumpy…</em></p>
<h2 id="case-study-the-dorset-coastline">Case study: <a href="https://www.google.com/maps/@50.6547146,-1.8754129,27074m/data=!3m1!1e3">the Dorset coastline</a></h2>
<p>^^ Middle click above to open google maps in a new tab with this area of coastline! ^^</p>
<p>Bays and headlands are formed when there is a discordant coastline. This is when layers of alternating rock parallel to the coast exists. The softer rock (clay) is eroded before the harder rock (limestone, chalk).</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977907376801849344/o2tp0fbc1eSXtGlyIWCWTkvDtESpi5OhsG4ypAkWmlYoCEVXTKL4wjieZ13YIXlFtEx9kRcDDhrGl0zvguqZ6vgtJQNpayqWPe4h2EZZd7kYMiVVWB-D_GobrtICk2jp3838voAe.jpg" alt="Image is not loading. Sorry!"><br>
<em>Wave refraction at a headland.</em></p>
<p>Coves are formed wenn the hard rock, limestone in Dorset, is broken, allowing the water to more easily erode the rocks behind it. Example: <a href="https://www.google.com/maps/@50.6116076,-2.2502119,259a,35y,17.81h,69.91t/data=!3m1!1e3">Lulworth Cove</a>. Drag and pan while holding the control key to go 3D, you can see some cool formations.</p>
<p>Cliffs in Dorset are mostly made of limestone, chalk, sandstone and chale. Soft cliff rocks are more prone to slumping, and hard rocks result in large, tall cliffs and wave cut platforms.</p>
<p>A wave cut platform is an area of bedrock visible at low tode. It slopes gently into the sea, and is covered by the water at high tide. The stages of a cliffs and wave cut platforms are below:</p>
<ol>
<li>The land slopes into the sea, and being weakened by weathering processes.</li>
<li>Waves erode the base of this with hydraulic power and abrasion between the high and low tides</li>
<li>Continued erosion causes the rock to break away. It now has a ‘notch’ at its base. The rock above the notch is unsupported and prone to falling down.</li>
<li>Continued erosion results in the overhanging cliff falling into the sea as the notch is so big. This step drop is called a cliff.</li>
<li>The cliff retreats into the land when this process is continued.</li>
<li>The old base of this cliff is left as a wave cut platform, and can become smoothed by traction or saltation occurring on it.</li>
</ol>
<p>Caves, arches, stacks and stumps occur generally at headlands.</p>
<ul>
<li>Caves may be several metres high at their entrance. Usually found in hard rocks (limestone).</li>
<li>Arches are unsupported at the top, and act as an extension of the headland. The arch is wide at the base as there is usually a wave cut notch supporting it.</li>
<li>Stacks are physically detached pieces of rock from a headland. Several metres high, continually being weakened by sub-aerial processes and erosion from the sea,</li>
<li>Stumps are the bases of collapsed stacks, for example Old Harry’s Wife. They are usually submerged and only visible at low tide.</li>
</ul>
<p><a href="https://www.google.com/maps/place/Old+Harry+Rocks/@50.6511205,-1.9136773,30888m/data=!3m1!1e3!4m5!3m4!1s0x48730a41d44ae229:0x2672b11c38738030!8m2!3d50.6428835!4d-1.9224579">Old Harry</a> is an example of crack -&gt; cave -&gt; arch -&gt; stack -&gt; stump.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977918268549496903/205-2059162_headlands-and-bays-diagram.png" alt="diagram of cave arch stack stump"><br>
<em>Diagram of a crack, cave, arch, stack, stump, and processes</em></p>
<h2 id="coastal-depositional-landforms">Coastal depositional landforms</h2>
<p>I have already explained how beaches are formed, so I’ll skip that here.</p>
<h3 id="sand-dunes">Sand dunes</h3>
<p>Sand dunes are formed mostly (95%) through saltation, where grains of sand are picked up by the wind and bounce along the beach. When an obstacle is reached, like driftwood, the grains of sand will settle, forming a small ridge. This ridge will gradually increase in size, and on the leeward side (opposite the windward size where the wind is blowing) the dune will collapse, creating a steep gradient.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977924881616347166/Characteristics-of-sand-dunes.png" alt="enter image description here"><br>
<em>Easier to visualise.</em></p>
<p>The further inland the dune, the taller and more vegetated it will be. Dunes close to the beach are ‘embryo dunes’ - they look yellow and are small. Marram grass and vegetation bind sand together inland, and ‘mature dunes’ even have trees growing on them, and look less like sand and more like dirt.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977924891129049158/Sand_Dunes.png" alt="enter image description here"><br>
<em>Cheeky dune pic</em></p>
<h3 id="spits">Spits</h3>
<p>When a coastline changes shape (i.e moves inwards), a lot of deposition happens, resulting in the beach growing out into the sea. The prevailing wind and longshore drift make this happen. The depositional material gets smaller as the spit increases in length due to attrition. A dominant wind will cause the spit to form a ‘hook’ (recurve) inland. Over time, there will be multiple hooks and, in Dorset, there is a spit which is 4km long.</p>
<p>A salt marsh and lagoon will form behind the spit which is sheltered from the waves, over time this will become vegetated.</p>
<h3 id="bars">Bars</h3>
<p>A bar is a ridge of sand separating a bay from the sea. Longshore drift transports sediment from one side of it to another. They can be submerged as well.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977928371549900910/Offshore-Sand-Bar.png" alt="enter image description here"></p>
<h3 id="coastal-management-strategies">Coastal management strategies</h3>
<p>Various strategies can be employed to protect coastlines from the effects of physical processes.</p>
<p>Hard engineering:</p>
<ul>
<li>Sea walls - last many years, gives residents a sense of security, do not have an impact on other areas of coastline as they do not interfere with sediment. However, they can cost £5000 per metre making them the most expensive, and restrict access to the sea. They also look ugly!</li>
<li>Rock armour - only £2000 per metre, cheaper than sea walls. Quick and easy to build and maintain. Can be placed in a variety of areas, in front of sea wall, or sand dune. However, hazardous for people navigating around/over them (slippery), they look ugly and need regular maintenance as storms can move the rocks. They also are imported from Scandinavian countries usually.</li>
<li>Groynes - cheap - £5000 each. Quick and easy to build and maintain. Lasts decades if looked after. Larger beach, so boosts tourism and local economy. However, they are ugly, restrict the supply of sediment elsewhere on the coastline and are very dangerous with shallow water on one side and deep water on another.</li>
<li>Gabions are basically rock cages using local pebbles, which are very cheap and easy to construct (£100/metre). However their metal casing could be a hazard after they break, lasting 20 years.</li>
</ul>
<p>Soft engineering:</p>
<ul>
<li>Beach nourishment is when lost sediment is placed back on the beach. It blends in with the environment and reduces future erosion as more wave energy is dissipated across the beach. It also allows beaches to be larger, attracting more visitors and increasing tourism. However, dredgers are expensive, like several hundred thousand, and the sediment costs millions.</li>
<li>Beach reprofiling is the reshaping of a beach using existing material. For example in Seaford, Sussex, shingle is moved back up the beach after winter storms.</li>
<li>Sand dune regeneration is the creation of new or the amelioration of existing sand dunes. They protect the land from the sea as they are like a barrier. However, it takes years for grass planted to spread and for the dune to mature. During maturation, they are often fenced off and cannot be walked on. There is also no guarantee that they will stay in the same place. Won’t really stop strong waves eroding, either.</li>
<li>Managed retreat is when areas of land is allowed to be flooded. People are moved out and buildings demolished, and farmland flooded when a breach is made. There are obvious benefits and disadvantages, I won’t explain them.</li>
</ul>
<h2 id="river-landscapes">River landscapes</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157224124727296/unknown.png" alt="enter image description here"></p>
<p>As the river moves from the upper course, through the middle course and into the lower course, its cross profile changes. In the upper course, hydraulic action results in high amounts of vertical erosion happening, making the valley deeper and steeper in areas of high relief. The little energy the river has is used to overcome the friction to deepen its channel.</p>
<p>The long profile shows the gradient of the river changing from the source, in mountainous areas, to the mouth, in the sea.</p>
<ul>
<li>
<p><strong>Abrasion</strong> is when small rocks wear down the riverbanks and bed, wearing it down. It increases vertical and lateral erosion.</p>
</li>
<li>
<p><strong>Attrition</strong> is the same as it is in the sea - when jagged rocks smash into each other, making them smoother and smaller if the rock splits. The further the river progresses downstream, the smaller and smoother the rocks.</p>
</li>
<li>
<p><strong>Solution</strong> is the dissolving of rocks like chalk and limestone. It is invisible in the water.</p>
</li>
<li>
<p><strong>Suspension</strong> is held and carried within a river’s flow, including fine, light material like alluvium.</p>
</li>
<li>
<p><strong>Saltation</strong> is when small stones are bounced along the riverbed, depending on the speed of the water flow.</p>
</li>
<li>
<p><strong>Traction</strong> is when large rocks or even boulders are rolled along the riverbed, also known as bedload.</p>
</li>
</ul>
<p>Rivers deposit sediment (called fluvial deposition) when the velocity of the river decreases. Larger  rocks and boulders are the first to be deposited when the velocity decreases, as they require the most amount of energy to move.</p>
<h3 id="upper-course">Upper course</h3>
<p>Erosion: Vertical erosion by hydraulic action.<br>
Transport: Mostly traction moving load.<br>
Deposition: Large boulders and big rocks being deposited<br>
Long profile: Trickles merge into a larger channel, down a steep gradient. Waterfalls and rapids occur.</p>
<h3 id="middle-course">Middle course</h3>
<p>Erosion: Less vertical erosion, more lateral. Attrition and abrasion common.<br>
Transport: Suspension, less traction.<br>
Deposition: Increased levels, especially on meander bends where there is high friction.<br>
Long profile: Deeper channel, increased volume, gradient flattening.</p>
<h3 id="lower-course">Lower course</h3>
<p>Erosion: Hydraulic action increases lateral erosion (sideways), as seen in meanders. Not much vertical erosion at all<br>
Transport: Suspension and solution. High amounts.<br>
Deposition: Fine material and alluvium deposited as the main fluvial process. More important than erosion<br>
Long profile: Channel is at its widest, deepest, flattest. May be tidal. Brackish water.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157255183564840/unknown.png" alt="enter image description here"></p>
<p><strong>How are V-shaped valleys formed? [4 marks]</strong></p>
<p>V-shaped valleys are formed in upland areas. Streams are very small and have low discharge, while also having a large, angular bedload. Through gravity and traction, the dominant type of erosion is vertical, resulting in steep sides of the river channel, which are now unsupported. Through chemical weathering from rain, there may be a sudden mass movement of this loose material, sliding this rock and material into the river channel. This is repeated, and over time, a V-shaped cross-section is formed.<br>
4/4 marks given.</p>
<blockquote>
<p>Specification: The <strong>upper course</strong> has characteristics and formation of landforms resulting from erosion.</p>
</blockquote>
<p><strong>Interlocking spurs</strong> are formed in the upper course of the river. The geology in these areas is mostly hard rock like granite. Freeze-thaw weathering broadens out the valley channel. Repeated many times, rocks fall into the channel. These eroded obstacles are in the way of the river, which takes the quickest route which is on either side of these obstacles, or if there are areas of harder rock. Over time, this will result in the river channel bending around.</p>
<p>Waterfalls and gorges form in he upper course too.</p>
<ol>
<li>The soft rock below is eroded quicker than the hard rock above.</li>
<li>As erosion continues, the hard rock is undercut forming an overhang.</li>
<li>Abrasion and hydraulic action erode to create a plunge pool.</li>
<li>Over time this gets bigger, increasing the size of the overhang until the hard rock is no longer supported and it collapses.</li>
<li>This process continues and the waterfall retreats upstream.</li>
<li>A steep-sided valley is left where the waterfall once was. This is called a gorge.</li>
</ol>
<blockquote>
<p>Specification: The <strong>middle course</strong> has characteristics and formation of landforms resulting from erosion, <strong>and deposition</strong>.</p>
</blockquote>
<p>A meander is a bend in a river.  Fast flowing water on the outside causes lateral erosion through abrasion and hydraulic action, forming a river cliff.  Near it is the point at where the water is moving the fastest, the thalweg.<br>
On the other side, sand and pebbles are deposited due to high friction, forming a slip-off slope. Water here is slow.<br>
The corkscrew motion of the fastest flow of the water is helicoidal.</p>
<h4 id="im-not-explaining-how-an-oxbow-lake-is-formed-because-its-the-staple-of-geography-and-should-be-second-nature-to-all-of-you-lol"><a href="https://www.bbc.co.uk/bitesize/guides/ztpkqty/revision/2">I’m not explaining how an oxbow lake is formed because it’s the staple of Geography and should be second nature to all of you lol</a></h4>
<p>When an oxbow lake evaporated, a ‘meander scar’ is left behind.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977983132164816996/meander1.png" alt="meander"><br>
<img src="https://cdn.discordapp.com/attachments/970765476688961616/977983131741224990/meander.png" alt="enter image description here"><br>
<em>What’s actually happening, visualised.</em></p>
<blockquote>
<p>Specification: The <strong>lower course</strong> has characteristics and formation of landforms resulting from <strong>deposition</strong>.</p>
</blockquote>
<p>Levées are super cool in my opinion. They are naturally raised riverbanks found in the middle and lower courses. When the river floods, velocity is reduced and therefore sediment is deposited. The heavy stuff is deposited close to the river channel, being harder to transport; smaller stuff is deposited further away. Sometimes the levées get so high the river flows higher than the flood plain.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977983131430821888/levee.jpg" alt="enter image description here"><br>
<em>My beautiful levée…</em></p>
<p><strong>Flood plains</strong> are large expanses of flat, eroded land either side of a river prone to flooding. They are formed due to both erosion and deposition. Floodplains are often agricultural land, as the area is very fertile because it’s made up of alluvium (deposited silt from a river flood).</p>
<p><strong>An estuary</strong> is where the river meets the sea. The river here is tidal and the water is brackish (a mixture of saltwater and freshwater); when the sea retreats the volume of the water in the estuary is reduced. When there is less water, the river deposits silt to form mudflats which are an important habitat for wildlife. A river delta is a triangular formation in the mouth of a river where sediment has been deposited. The River Severn’s estuary is 3.2km wide.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157276029222972/unknown.png" alt="enter image description here"><br>
<em>Finally, the last section on paper 1.</em></p>
<p>There are a wide variety of reasons which affect flood risk.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/978014616615518208/3-s2.0-B9780124095489053562-f05356-02-9780124095489.jpg" alt="enter image description here"><br>
<em>With a little extra information, but most of it is useful to know.</em></p>
<p>Flood hydrographs are used to show the relationship between precipitation and discharge. On the x axis is the time, usually in hours. The average peak rainfall to peak discharge time is usually 12 hours. On the y axis is the discharge, measured in cumecs (cubic metre per second) of the river channel. A high peak flow in a short lag time is the worst: there will be lots of flooding potential; people have little time to prepare for it. (check my punctuation use there please)</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/978028985734795294/d7058eb1da075973f99bfff1273051f8fad79c99.gif" alt="enter image description here"></p>
<p>Factors affecting flood risk:</p>
<ul>
<li><strong>Prolonged rainfall</strong> - if it rains for a long time, the land can become saturated. If there is more rainfall it cannot be soaked up, it runs along the surface, increasing surface run-off. This results in water quickly being moved into the river channel, reducing lag times, as it cannot infiltrate into the land. The faster the water reaches the river, the more likely it is to flood.</li>
<li><strong>Heavy rainfall</strong> - if there is heavy rainfall there is less chance of it infiltrating the land, so it runs off into the river immediately.</li>
<li><strong>Relief</strong> - a steep valley is more likely to flood than a flatter valley because the rainfall will run off into the river more quickly, and it cannot be absorbed by the soil.</li>
<li><strong>Geology</strong> - permeable rocks allow water to pass through pores and cracks, whereas impermeable rocks do not. If a valley is made up of impermeable rocks, there is a higher chance of flooding as there is an increase in surface run-off.</li>
<li><strong>Vegetation</strong> - trees and plants absorb water, called interception. Lots of vegetation reduces flood risk. Deforestation will increase the flood risk, as the water cannot be intercepted and flow into the river.</li>
<li><strong>Urban land use</strong> - when an area surrounding a river is built on, the anount of impermeable surfaces increase, like concrete and tarmac. Drains and sewers take water directly into the river channel, increasing flood risk.</li>
</ul>
<h2 id="river-management-strategies">River management strategies</h2>
<h3 id="hard-engineering">Hard engineering</h3>
<p>Involves building artificial structures which try to control rivers.</p>
<ul>
<li>
<p>Dams and reservoirs -  the dam traps water, which builds up behind it, forming a reservoir. Water can be released in a controlled way. Can be used to produce electricity by passing the water through a turbine within the dam. Reservoirs can attract tourists. However, very expensive.  Habitats are flooded often leading to rotting vegetation. This releases methane which is a greenhouse gas. People in the flooded area can be displaced.</p>
</li>
<li>
<p>Embankments - raising the banks of a river means that it can hold more water. Cheap with a one-off cost, allows for flood water to be contained within the river. However, they look unnatural, and can increase flood risk downstream because of the increased water velocity.</p>
</li>
<li>
<p>Flood relief channels - the floodwater flows into the relief channel and is taken either to an area where it can be absorbed, or re-enters the river further down its course. They remove excess water from the river channel to reduce flooding. However, they are expensive to build; if water levels continue to rise, the relief channel may also flood.</p>
</li>
</ul>
<h3 id="soft-engineering">Soft engineering</h3>
<ul>
<li>
<p>Flood warnings and preparation - people have time to protect their properties (like with sandbags) and many possessions can be saved, resulting in fewer insurance claims. However, some people may not be able to access the warnings, flash floods may happen too quickly for a warning to be effective. Also they do not actually stop the land from flooding - they just warn people that a flood is likely.</p>
</li>
<li>
<p>Floodplain zoning - when less economically important industries are placed on the flood plain or closer to the river. More expensive buildings and land uses are further away from the river, so have a reduced flood risk. Less damage is caused, leading to fewer insurance claims. However, it is not always possible to change existing land uses.</p>
</li>
<li>
<p>Planting trees reduces the risk of flooding as trees intercept water by taking it up through their roots.</p>
</li>
<li>
<p>River restoration is when a river that has been hard engineered is restored to a natural channel</p>
</li>
</ul>
<h2 id="case-study-morpeth-floods">Case study: <a href="https://www.google.com/maps/place/Morpeth/@55.1685877,-1.7038447,14.25z/data=!4m5!3m4!1s0x487d8b3f0af2874b:0xc3bf2c67f1e7bd99!8m2!3d55.16875!4d-1.687493">Morpeth</a> floods</h2>
<p>Morpeth lies in a meander bend. It is in northeast England. Basically a big flood happened in September 2008 which was 4 metres above normal river levels at its peak. The ground was already saturated from summer rains, leading to increased surface runoff, and had a short lag time of 8 hours. It is on the lower course of the river, on a flood plain.</p>
<p>Shops, homes and many regions of the town were flooded and destroyed. Now, higher flood walls have been implemented, and a huge upstream reservoir has been created upstream capable of holding 1 million metres cubed of water. Amazing!</p>
<p><a href="https://www.coolgeography.co.uk/gcsen/PL_Morpeth_Flood_Management.php">More notes</a></p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/978038948196671588/unknown.png" alt="enter image description here"></p>
<p>Out and about with Rob in Morpeth: <a href="https://www.youtube.com/watch?v=XoW6gIDwBSk">https://www.youtube.com/watch?v=XoW6gIDwBSk</a></p>
<h2 id="section"></h2>
<blockquote>
<p>That’s the end! Paper 2 is also available if you want to see it, look around my site and you’ll find it! Enjoy!</p>
</blockquote>
<h2 id="section-1"></h2>
<p>thank you for reading! as a present, <a href="https://cdn.ibaguette.com/cdn/iBaguette/SharedResouces/goofy.mp3">click here</a></p>
    </div>
  </div>
</body>
</html>
`

const OLD_html_geog_paper_2 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geography [Paper 2]</title>
  <link rel="stylesheet" href="https://www.ibaguette.com/static/Stackedit_Style.css" />
</head>
<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#paper-2-challenges-in-the-human-environment">Paper 2: Challenges in the human environment</a>
<ul>
<li>
<ul>
<li><a href="#i-have-finally-completed-it">i have finally completed it</a></li>
<li><a href="#notice-from-aqa">NOTICE FROM AQA</a></li>
</ul>
</li>
<li></li>
</ul>
</li>
<li><a href="#section-a-urban-issues-and-challenges">Section A: Urban issues and challenges</a>
<ul>
<li>
<ul>
<li><a href="#factors-affecting-urbanisation">Factors affecting urbanisation</a></li>
</ul>
</li>
<li><a href="#case-study-lagos-nigeria">Case study: Lagos, Nigeria</a>
<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#growth">Growth</a></li>
<li><a href="#opportunities-and-challenges">Opportunities and challenges</a></li>
<li><a href="#economic-opportunities">Economic opportunities</a></li>
<li><a href="#urban-planning-for-the-urban-poor-makoko">Urban planning for the urban poor (Makoko)</a></li>
</ul>
</li>
<li></li>
<li><a href="#case-study-london">Case study: London</a>
<ul>
<li><a href="#shoreditch-london">Shoreditch, London</a></li>
<li><a href="#dockyard-development--changing-employment">Dockyard development & changing employment</a></li>
<li><a href="#urban-challenges--urban-sprawl">Urban challenges & urban sprawl</a></li>
<li><a href="#the-lower-lea-valley">The Lower Lea Valley</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#section-c-the-challenge-of-resource-management">Section C: The challenge of resource management</a>
<ul>
<li><a href="#food">Food</a>
<ul>
<li><a href="#food-demand-factors">Food demand factors</a></li>
<li><a href="#food-supply-factors">Food supply factors</a></li>
<li><a href="#case-study-almeria-spain">Case study: Almeria, Spain</a></li>
</ul>
</li>
<li><a href="#footnotes">Footnotes</a></li>
<li></li>
</ul>
</li>
</ul>
    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
      <p><a href="/cheatsheets/gcse">&lt; Back to GCSE Cheat Sheets</a></p>
      <h1 id="paper-2-challenges-in-the-human-environment">Paper 2: Challenges in the human environment</h1>
<h3 id="i-have-finally-completed-it">i have finally completed it</h3>
<h4 id="thank-you">thank you</h4>
<h5 id="now-say-thanks-">now say thanks :)</h5>
<h6 id="you-must-get-good-grades-now">you must get good grades now</h6>
<p>btw not everything is 100% covered in detail but 95% of the specification is 1:1 matched</p>
<h3 id="notice-from-aqa"><strong><a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/changes-for-2022">NOTICE FROM AQA</a></strong></h3>
<p>Optionality will be introduced into 8035/2 Paper 2: Challenges in the human environment.</p>
<ul>
<li>Students must answer  <strong>all</strong> questions in Section A: Urban issues,</li>
<li>They will then choose to answer  <strong>either</strong> Section B: The changing economic world or Section C: The challenge of resource management.</li>
<li>The total time allocation for Paper 2 will be reduced from 1 hour 30 minutes to 1 hour 15 minutes.</li>
<li>A total of  <strong>5 marks</strong> will be introduced to <strong>Section C</strong>. These marks could appear anywhere in Section C.</li>
<li>In Section B, the  <strong>9-mark</strong> question will be replaced with a  <strong>6-mark question</strong>. To keep the  <strong>total of 30 marks</strong>,  <strong>3 marks</strong> will be introduced  <strong>elsewhere in Section B</strong>.</li>
<li>The total marks for Paper 2 will be reduced from 88 marks to 63 marks (a removal of 25 marks).</li>
<li>Sections B and C will now have equal weighting worth 30 marks each.</li>
<li>The highest tariff question in both Section B and C will be 6 marks.</li>
<li>There are 3 spelling, punctuation and grammar (SPaG) marks that will appear in the 9-mark question at the end of Section A.</li>
</ul>
<p>If students choose to answer Section C the normal rubric will apply, where students must answer question 3 and  <strong>one</strong>  of questions 4, 5 or 6 (food, water or energy).</p>
<h2 id="section"></h2>
<p><strong>tl; dr:</strong> there’s a 9+3 marker in Urban issues, and there’s only going to be 6 markers in food/resource management. don’t answer changing economic world. don’t answer water and energy.</p>
<h1 id="section-a-urban-issues-and-challenges">Section A: Urban issues and challenges</h1>
<p><em>In this section, students are required to study all the themes.</em></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157547186815016/unknown.png" alt="enter image description here"></p>
<p>By 2030, it is expected that over 60% of the world’s population will live in cities. Currently, there are 33 megacities (cities with a population &gt; 10 million) and the closest one to us is 🥖 Paris. London is not a megacity, as its population is only predicted to reach 10 million by 2035. After and during the Second World War, many people and children were evacuated from London, so the population shrunk by 2 million from 1940 (at 8.5 million) to 1990. Since then, the population has gradually been increasing, and it’s currently at around 9.2 million. (We’ll have to wait for the census results to be sure!)</p>
<blockquote>
<p>In 1975, there were just 4 megacities - Mexico City, New York City, Sao Paulo and Tokyo!</p>
</blockquote>
<p>The largest city in the world is Tokyo, Japan, with over 36 million inhabitants (and decreasing). 4 billion people live in urban areas worldwide, and ~12% of these are in megacities. Most of the urban population live in cities with &lt; 5 million residents.</p>
<h3 id="factors-affecting-urbanisation">Factors affecting urbanisation</h3>
<p>The highest rates of urbanisation are in LICs and NEEs are in Asia and Africa. The majority of their populations remain in rural areas, so more are able to move into urban environments <strong>(high rural-urban migration levels)</strong>, and populations are younger, contributing to a high rate of natural increase (more babies).</p>
<p>People and their families may choose to migrate from the countryside into the cities because of pull factors. This includes better, more consistent and well-paid jobs, and opportunities for better education, as well as more facilities available such as hospitals. Because cities have better healthcare than rural areas (usually) death rates are lower and life expectancy is higher.<br>
Cities are also historically situated on rivers (like London<sup>1</sup> and Paris) and coasts (Lagos, New York City, Mumbai) which allow high levels of trade. This allows economic development as more trade is better for business. This economic growth attracts higher-skilled, higher-paid jobs which, in turn, attract more people (could be from rural areas). This cycle is repeated with the new ideas people have attract more economic development.</p>
<p>In richer countries and continents like Europe, Oceania and North America, the rates of urbanisation have significantly slowed down, as most people have already moved into urban areas thanks to industrial revolutions which have already occurred.  Due to countries’ wealth, people in these HICs live for longer and tend to have fewer babies, which could lead to natural decrease in the future.</p>
<p><a href="https://www.google.com/maps/@22.7316438,113.7223091,182424m/data=!3m1!1e3">China has plans to merge these cities on the Pearl River Delta into one huge megacity with a population of over 140 million, covering 25x more land than London.</a></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157575389311006/unknown.png" alt="enter image description here"></p>
<h2 id="case-study-lagos-nigeria">Case study: Lagos, Nigeria</h2>
<h3 id="overview">Overview</h3>
<p>Lagos is the most populous city in Nigeria, and Africa as a whole. However, it is common knowledge by the vox populi that it is by no means the safest place to live. <sup>2</sup></p>
<p>In 1991, the government of Nigeria moved out of Lagos to Abuja; to this day Abuja is the capital city. However, Lagos has remained critical to the Nigerian economy, with over 80% of the country’s industry based in it, thanks to its international airport, seaport and interconnecting main roads from neighbouring countries like Benin.</p>
<p>Its population is estimated at 19 million, generating a quarter of Nigeria’s wealth. Large companies are headquartered here, and is the main financial centre in West Africa.  Nollywood <sup>3</sup> is the Nigerian film industry, again based and thrives here. Alone, this emerging industry is responsible for 2.3% of Nigeria’s GDP.</p>
<h3 id="growth">Growth</h3>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/981175164681211914/Lagos-Growth-Map.jpg" alt="lagos growth"><br>
<em>How the area surrounding Lagos has grown over time. Credit <a href="https://www.internetgeography.net/topics/the-growth-of-lagos/">Internet Geography</a></em></p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/981175164911890503/Lagos-Population-Graph.png" alt="enter image description here"><br>
<em>The current, past and future predicted population of Lagos. Credit <a href="https://www.internetgeography.net/topics/the-growth-of-lagos/">Internet Geography</a></em></p>
<p>The real force for Lagos’ increasing population is rural-urban migration. This is because many people are being forced to leave their countryside jobs and homes due to bad harvests and illness (push factors) and brought to the city by the prospect of better-paid work, education opportunities and better healthcare (pull factors).</p>
<p>Push factors include:</p>
<ul>
<li>Poor education and healthcare services (if any)</li>
<li>Climate change making harvests more unpredictable and more droughts</li>
<li>Low farming wages</li>
<li>Shortage of land due to population increase</li>
<li>Land continually being degraded due to continual farming and oil pollution</li>
</ul>
<h3 id="opportunities-and-challenges">Opportunities and challenges</h3>
<p><strong>Education</strong> is more available - many schools and universities are being built. Children are given 9 years of basic education (increasing literacy rates from 65 to 95%). Furthermore, healthcare is better inside Lagos than in rural areas - hospitals are more frequent inside the city, so people can get help if they are ill. Even though most treatments aren’t free, it’s better than not having these facilities.</p>
<p><strong>Energy</strong> is an issue in Lagos due to the rapidly increasing population. As a result, when the grid fails, many homes and businesses are forced to rely on diesel <strong>generators</strong>. Obviously these cannot be used by poorer residents, who instead rely on tapping into the network which is unsafe.</p>
<p><strong>Water</strong> is an issue too as only wealthy residents can afford a piped water supply. This is a total of just 10% of the population. There is huge strain on the infrastructure to provide for all homes and, despite improvements, many people are often forced to buy from street vendors which may be <strong>contaminated</strong> - this is part of the informal economy. On buying from the informal economy, taxes are not paid, which cannot be reinvested in the infrastructure. People have been digging boreholes into the groundwater, but the water from the lagoon is salty and heavily polluted. Faecal bacteria have entered the water supply and diseases like cholera and dysentery have been increasing.</p>
<blockquote>
<p>Unemployment is a serious issue as there is no unemployment benefit in Nigeria, so people are forced to find any available work, like in the informal economy.</p>
</blockquote>
<blockquote>
<p>The <strong>informal economy</strong> has many negatives, being unregulated, dangerous and poorly paid. 40% of workers in Lagos are paid under £1 per day! This has severe consequences: over 60% of the population live in slums like Makoko, building their homes on any bit of available land with any material which they might have. Despite this, levels of crime are falling but ‘Area Boys’ may patrol streets in gangs and violence may ensue.</p>
</blockquote>
<p>Lagos has extremely <strong>dirty air</strong> with dangerous levels of N<sub>2</sub>O and small dust particles (particulate matter). These are both hazardous to human health and can cause diseases, like asthma. This is being fuelled by increasing car usage in the city (20% of homes have one). On top of this, <strong>congestion</strong> and traffic in the city is terrible, with the average commuter spending 3 hours a day in traffic. To combat this, the government are building an integrated transport system, linking railways and roads. A waterway network with ferries and boating across the lagoon instead of taking cars is also being created. There is also a separate lane for buses from the northern suburbs travelling into Lagos Island. This will improve travel times for over 25% of people who commute daily, a total of 200,000 people.</p>
<p><strong>Waste</strong> is an issue too. With waste collecting infrastructure from the 1970s, where the population was 10x smaller, Lagos now produces over <strong>10,000 tons</strong> of solid waste per day! The Olusosun landfill site receives the bulk of this, with many hundreds of people working there and even building homes from the trash to sort rubbish and find valuables. However, fires are likely, with natural gases building up below the dump. E-waste is also imported from HICs which contribute to <strong>toxic gases</strong> being released. In total, air pollution is 5x higher than the internationally agreed limit.</p>
<p><a href="https://www.google.com/maps/@6.4979476,3.3912366,2236m/data=!3m1!1e3">Makoko on Google Maps</a></p>
<h3 id="economic-opportunities"><strong>Economic</strong> opportunities</h3>
<p>More jobs are available in Lagos than in anywhere else in Nigeria, responsible for 25% of the country’s GDP. Lagos itself is a large manufacturing hub - being a seaport also helps this, and is culturally significant with Nollywood. Furthermore, technology is improving in this area significantly, with large companies investing in the area resulting in the improvements of infrastructure like fibre optic broadband. Despite the inequalities, Lagos has a thriving, highly-educated and skilled workforce, thanks to its top universities.</p>
<p>A new city on the south side of Lagos, in the Gulf of Guinea, is being made. Called Eko Atlantic, it is a land reclamation project, which will be home to the new financial hub of Western Africa. Dubbed ‘the Dubai of Africa’ from this <a href="https://www.google.com/maps/reviews/@6.41311,3.4108255,3499m/data=!3m1!1e3!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURLb3NXTS1nRRAB!2m1!1s0x0:0x49d67b9bfa3ba269?hl=en-US">google maps reviewer</a>, many international investors are looking forward to the project’s completion. It will be home to over 250,000 people and employing a further 150,000 in skyscrapers and high-rise office buildings. This will be possible thanks to its independent electricity grid and water desalination plants.</p>
<p>6.5km of sea wall has been built to protect the project from the sea and erosional processes. <a href="https://www.ekoatlantic.com/education/sea-wall/">Website</a></p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/981240067601338398/EkoAtlantic.jpg" alt="enter image description here"><br>
<em>Eko Atlantic’s 6,500,000m<sup>2</sup> of land, reclaimed.</em></p>
<h3 id="urban-planning-for-the-urban-poor-makoko">Urban planning for the urban poor (Makoko)</h3>
<p>The Nigerian government’s goals are to attract private investors which will help them create a new city, creating highly-paid jobs and new, luxury homes.</p>
<p>Many of Makoko’s tin and wooden houses are built on stilts. However, during the rain season, many buildings on land and low-lying areas are submerged, including the main school.</p>
<p>Built in 2014, the Makoko Floating School is environmentally friendly, having photovoltaic solar panels, natural ventilation, green areas and a rainwater collection system. As it floats on 256 recycled plastic barrels, the platforms rise and fall with the sea level, futureproofing these structures against sea level rise, augmented by climate change.  Finally, there are several compost toilets, which is better for the environment as all sewage is usually thrown into the lagoon. (Makoko people eat the fish, so that’s not good…)<sup>4</sup></p>
<p>The school can hold up to 100 students with 4 classrooms and 2 workshops on the upper storey, and a communal, open space on the lower level. In total, there is 100m<sup>2</sup> of space. Its triangular shape and low centre of gravity helps keep the structure stable.</p>
<p>Unfortunately, the school collapsed during a storm in 2017. The idea has continued to remain in developers’ minds and ‘the Lagos Water Communities Project’ is an idea for these poorer communities. Compared to the Eko Atlantic’s several million dollar sea defence wall, this low-cost scheme may significantly ameliorate the lives of the vox populi in Makoko and Lagosian slums.</p>
<blockquote>
<p>The floating school acted as a proof-of-concept, not a final, fixed structure. It would have been able to be reconfigured as a house, community space, shop and more if the final version was able to be structurally secure.<sup>6</sup></p>
</blockquote>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/981274210334830662/Lagos_WATER_COMMUNITIES_22-960x550.jpg" alt="enter image description here"><br>
<em>An artist’s impression on what a floating community would look like. Credit: <a href="https://www.nleworks.com/case/lagos-water-communities-project/">NLÉ</a></em><br>
<img src="https://cdn.discordapp.com/attachments/970765476688961616/981274536689422346/NLE_LAGOS_WATER_COMMUNITIES6-960x550.jpg" alt="enter image description here"></p>
<h2 id="section-1"></h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157598076293120/unknown.png" alt="enter image description here"></p>
<p>In the UK, the population is vastly distributed. The key to this is the northwest/southeast divide. In the south east, cities are increasing in populations, especially as the south east has the fastest growing economy in the UK. However, in the northeast, Sunderland has actually lost over 2% of its population from 2004 due to the decline of industry which was historically popular, leading to less job opportunities, forcing people to move away to find work.</p>
<blockquote>
<p>In London, the population density can be up to 5000/km<sup>2</sup>. In contrast, northern Scotland has a population density of less than 10/km<sup>2</sup>!</p>
</blockquote>
<h2 id="case-study-london">Case study: London</h2>
<p>London is very important nationally and internationally. It is regarded as the ‘finance hub’ of the UK, with Barclays, HSBC and Lloyd’s Bank being headquartered here. It was built by the Romans as it is on the River Thames - allowing trade from other nations. In the past, due to the river being tidal, ships are able to travel up the Thames to London’s docks. In turn, the business opportunities provided by its proximity to the seas attracted more people to the area.</p>
<blockquote>
<p><strong>Gentrification</strong> is the term used to describe the prices of rising house prices in an area as a result of higher wages and more modern amenities.</p>
</blockquote>
<p>As a result from high levels of migration from the 19th Century, many from major British colonies like India and Nigeria, London is only made up of 45% White British nationals, and 37% not being born in the UK. Furthermore, its population is also larger and younger than any other UK city. This is because young(er) people from 20-40 like university students move to London for better job opportunities, spurred on by higher pay due to the higher cost of living. These younger people are also more likely to have children, contributing to higher natural increase, while migration itself is fairly low now. After Brexit, the restriction of free movement within the EU will most likely lower this migration trend even further in the UK. In 3 boroughs, white people are in the minority!</p>
<blockquote>
<p>Because of high migration and a diverse community, London is seen as a  ‘melting pot’ for cultures. Entrepreneurs are more likely to create diverse shops to account for this, such as halal butchers, and services are also more likely to accommodate these different cultures, for example mosques.</p>
</blockquote>
<p>London also has a wide range of <strong>recreation and entertainment</strong> available. There are cultural attractions like the British Museum and the Natural History Museum, tourist attractions like the Houses of Parliament and Buckingham Palace, venues like the O<sub>2</sub> and Wembley Stadium and loads of bars and restaurants.</p>
<p>London also has a highly developed <strong>integrated transport system.</strong> This is when all modes of transport link to each other - responsible for the high use rate of public transport, at 25%.  There is the London Underground, typical red double-decker buses, and the Docklands Railway. Recently, the Crossrail project has contributed to the reduction of journey times throughout London in half, for example Liverpool Street to Heathrow now takes 35 minutes from over an hour.</p>
<p>The Oyster Card provides low-cost efficient travel basically anywhere in the city. Boris bikes are also used to provide an integrated cycle network, providing 2.5% of London’s journeys daily, or 750,000. Furthermore, private transport is also used in London significantly, with it being a travel hub where many motorways converge on its orbital motorway, the M25. There are also 5 international airports, most notably Gatwick, Heathrow and Stansted. They handled 177 million passengers in 2018, or 60% of the UK’s air traffic.<sup>5</sup> In 2014, 75 million passengers used the Tube, with a total of 1,300 million journeys in that year.</p>
<p>Urban greening is how green spaces are increased and maintained in cities. For example, London is one of the most green cities in the world. Around half (47%) of the city is green space, including parks, gardens and woods. Hyde Park is a large public place in central London. Councils also run smaller parks in other boroughs, as the Government in the 1800s believed that fresh air was essential for the population.</p>
<p>These green spaces are beneficial to the city:</p>
<ul>
<li>oxygen is produced, cleaning the ear from CO<sub>2</sub>;</li>
<li>trees intercept water flow, reducing flood risk;</li>
<li>parks and woodlands act as a habitat for wildlife;</li>
<li>allotments can be used to grow food.</li>
</ul>
<p>To further improve these green spaces, a ‘green grid’ has been created to link open spaces throughout London, reducing animal deaths. London was also given the title of a ‘National Park City’ - the first in the world - in 2019, with the goal of improving all aspects of outdoor life and enjoyment.</p>
<h3 id="shoreditch-london">Shoreditch, London</h3>
<p>Shoreditch is a great example of an area which has undergone gentrification. Older, industrial buildings like factories have been demolished and replaced by higher value flats, offices and restaurants. In the centre of the area, the roundabout has been nicknamed Silicon Roundabout due to the amount of technological companies who have interested in the area, like Google and Microsoft. As a result of this amelioration, jobs have been created in these new industries like art and full-stack developers (these are the ones who make front end and back end design, so like web design and database maintenance).</p>
<p>As older residents are moving out due to increased prices, younger and more professional workers take their place. Entrepreneurs have responded to this by creating new, modern themed cafés for day traffic, and clubs and nightclubs for the night audience.</p>
<h3 id="dockyard-development--changing-employment">Dockyard development &amp; changing employment</h3>
<p>The docks were built through the 20th century to import and export the huge amounts of raw materials, being England’s busiest city. Industries were built in close proximity to these docks to process the raw materials. However, by the 1970s, catalysed by the Second World War, many industries were in decline and also the docks. 10 years later most docks were empty, and do were the factories.</p>
<p>The London Docklands Development Corporation, ran by the Government, was set up in 1981. As a result of the regeneration which was planned, many private companies invested in the area. By 1991, the first stage of improvements were completed; now it is known as Canary Wharf. Over 100,000 people now work there, with the UK’s major old banks headquartered here.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/983113404715774082/flyover_resize_3_ezgif.com.gif" alt="Canary Wharf Flyover"><br>
<em>Canary Wharf from <a href="https://www.google.com/maps/place/Museum+of+London+Docklands/@51.4972498,-0.0283871,433a,35y,49.5h,63.79t/data=!3m2!1e3!5s0x487602b9e3219699:0x8bd79f7ec55dbb5f!4m5!3m4!1s0x487602c7b0543655:0xfff66a923afecf31!8m2!3d51.5075598!4d-0.0238525">Google Maps</a></em></p>
<h3 id="urban-challenges--urban-sprawl">Urban challenges &amp; urban sprawl</h3>
<p>London’s population is growing at 5x the rate of houses being built, with a population increase of 100,000 per year. As a result, there is a housing shortage throughout London and south-east England, augmenting house prices. In 2020, there were 170,000 homeless in London, not helped by COVID making people redundant.</p>
<p>To combat this, either greenfield or brownfield sites need to be built on.</p>
<p>Greenfield sites:</p>
<ul>
<li>contribute to <strong>urban sprawl</strong></li>
<li>are usually from farmland, which produces food, or recreational land</li>
<li>can destroy natural habitats</li>
<li>are unlikely to turn back to countryside</li>
<li>are fairly cheap due to the rurality</li>
</ul>
<p>Brownfield sites:</p>
<ul>
<li>reduce the need for <strong>urban sprawl</strong></li>
<li>are more readily available due to the decline of industry</li>
<li>may require buildings to be demolished prior to construction, but reduce dereliction</li>
<li>can improve the pre-existing urban environment</li>
<li>are more expensive due to usually being in rural areas</li>
<li>may require the land to be decontaminated from chemicals and waste</li>
</ul>
<p>Urban sprawl is the unplanned, rapid growth of urban areas. To combat this, many cities including London established a ‘green belt’ - an area around the city which has very strict planning permission. This has preserved areas of farmland and woodlands around London.</p>
<blockquote>
<p>Being able to plan and control housing developments is why almost 50% of London’s land is ‘green’ and why there is almost a 1:1 resident: tree ratio!</p>
</blockquote>
<p>However, this has had unintended consequences. The average house price in London is over double what it is in the rest of the UK, and rising rapidly. Many campaigners are pressuring the Government for less economically valuable areas to be used as greenfield sites to relieve the pressure on London’s housing crisis.</p>
<p>Another result of the green belt is the growth of commuter settlements around London. Reading is an example of this, being just a 30 minute train journey into the City of London (right in the middle) and outside the green belt, this has attracted many thousands of people and families to the town. This results in the spread of housing estates and business areas spreading into the countryside surrounding. Some may argue that this completely goes against the purpose of the green belt in the first place! (potential 9 marker)</p>
<h3 id="the-lower-lea-valley">The Lower Lea Valley</h3>
<blockquote>
<p>Alternately known as the place where the Olympic Park was built for 2012. (Stratford)</p>
</blockquote>
<p>This area, prior to its restoration, was heavily contaminated with chemicals from industry. The industrial buildings were derelict and overgrown. On the other hand there were a couple of functioning industrial areas employing around 5,000 workers among 250 business.</p>
<p>The London 2012 Olympic Legacy was a plan to ensure the Olympic Games had significant long term benefits for the area.</p>
<p><strong>ECONOMIC benefits</strong><br>
Stratford received a Tube station to connect it to the rest of London. It is now the second most connected area of the city! The Olympics directly resulted in £9 billion for east London, and Lloyds Bank estimated that another £10 billion will be generated from the Olympics. The media centre was sold to a data company, Infinity, who store data for large corporations. The total cost for the Olympics was £8.77 billion - from taxpayers.</p>
<p>However, the stadium cost £700 million, which was 3x the estimate.</p>
<p><strong>SOCIAL benefits</strong><br>
The Athletes’ Village created for the Olympians has been repurposed (<em>not demolished</em>) as a housing estate called the East Village. Around 1,300 homes were made, most of which categorised as ‘affordable housing’. In total 8,000 people will be able to be housed. A school was also opened in the grounds of the park, relieving the shortage of space before it was built. The new pools built for the Olympics are now being used for this school, as well as the community, and also athletes training.</p>
<p>However, properties for poorer residents were demolished, including 450 flats. Few jobs were created for local residents during construction, and many thought it was a missed opportunity to train unskilled workers. As a result, many people round still live in poverty and in Tower Hamlets unemployment actually increased.</p>
<p><strong>ENVIRONMENTAL</strong></p>
<p>Many grounds in the Olympic Park have been kept as parkland for the public. Ponds, woodlands and artificial otter holes have been created in the area. The stadiums were made from 25% recycled material, and green spaces were placed along the River Lea to improve its water quality. It was built on over 500 acres of brownfield site, from derelict and contaminated land to newer, modern, loved areas. Over 300,000 plants were specially selected for biodiversity and sustainability in the urban environment.</p>
<p>However, many materials for the park were sourced from overseas, whilst the games produced over 3 million tons of CO<sub>2</sub>.</p>
<blockquote>
<p>You don’t need to remember all the precise stats and figures - just a few - I have rounded some figures and simplified them a bit to make them easier to remember.</p>
</blockquote>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157620822007908/unknown.png" alt="enter image description here"></p>
<p>Sussy urban living in East Village (again around the Olympic area).</p>
<p>Local bus and transport services connect to the London Underground, as well as Europe. Residents in the East Village pay extra for car parking places, encouraging cycling and walking.</p>
<p>Water is 50% less used than other urban areas, achieved by water recycling. Rainwater is recycled and filtered through ponds before being used for toilet flushing and irrigation. Green roofs on buildings also slow down rates of drainage, mitigating flood risk, and allowing more water to be used for irrigation or other conservation systems.  (Drinking water is different!)</p>
<p>Energy is also conserved as it makes use of the <strong>combined heat and power</strong> system.  It basically generates electricity, producing heat from burning biomass. This heat can be used to heat water. As it is piped through the village, it gently cools, and this cool water is piped back into the CHP station.</p>
<p>Green spaces have also been created. There are green roofs on apartments blocks, a wetland pond area, 10 hectares of open green space, a large central park and an orchard with fruit trees.<sup>7</sup></p>
<h1 id="section-c-the-challenge-of-resource-management">Section C: The challenge of resource management</h1>
<p>In this section, students are required to study  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Resource_management_1_2_3_1">Resource management</a>  and  <strong>one</strong>  from  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Food_1_2_3_2">Food</a>  or  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Water_1_2_3_3">Water</a>  or  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Energy_1_2_3_4">Energy</a>.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971159119492943902/unknown.png" alt="enter image description here"><br>
<em>You need to learn about all of them as an overview, and food in more detail</em></p>
<p>Simply put, the more availability to food, water and energy a country has, the better the citizens’ well-beings are.</p>
<p>Quick summary of everything overall:</p>
<p>Food:</p>
<ul>
<li>
<p>There is a growing demand for high-value food exports from low income countries and an all-year demand for seasonal food and organic produce. As a result of this, many countries, especially in Africa, have less land available for locals to cultivate on and support their families in. It reduces the water supply in areas where this is already unreliable - e.g. Kenya is on the equator, and many beans come from there. This increases the likelihood of droughts and desertification (paper 1 knowledge).</p>
</li>
<li>
<p>Carbon footprints are higher when outsourcing food supply to other countries, due to the increasing number of ‘food miles’ travelled. To combat this, there are moves towards local sourcing of food, with ‘locally sourced’ and ‘Red Tractor’ labels. Farm shops throughout the countryside also are well known to grow food on-site, albeit at a higher price.  Organic produce is also gaining popularity which uses natural fertilisers and mechanical weeding, which does not pollute the water supply, and chemicals are not being ingested by humans who eat the food.</p>
</li>
<li>
<p>There is a trend towards agribusiness. This is when a farm is run large-scale with money-intensive commercial activities. This has resulted in fields increasing in size, with smaller farms being combined and the increased mechanisation of farm equipment. It also relies on pesticides and fertilisers more which has a negative impact on l’environnement and reduces employment. The positives include cheaper prices as food is more available and overhead costs have decreased, and skilled jobs with technology are provided to skilled workers.</p>
</li>
</ul>
<p>Water:</p>
<ul>
<li>There is a changing demand for water in the UK. In northern areas, there is a high supply of water but low demand for it - the population density is low, with there only being a few cities. The reason why there is a lot of water here is because there is a lot orographic rainfall (mountains). In the south and southeast, there are low levels of waterfall and high levels of water stress, so transfer schemes are in place like dams and reservoirs on rivers to allow water to be moved from areas of water surplus to areas of water deficit - usually pumped.</li>
</ul>
<blockquote>
<p>The average person uses 150 litres of water in the UK</p>
</blockquote>
<ul>
<li>This can only be done if the water quality is high and pollution is managed - toxic waste can poison wildlife, and eutrophication can kill plants due to plant life building up so much in the river or lake, reducing oxygen levels, suffocating the animals. Raw sewage and other waste must be treated at a treatment plant. It can also be managed by legislation, education campaigns, pollution traps and green roofs and walls.</li>
</ul>
<p>Energy:</p>
<ul>
<li>the changing energy mix – reliance on fossil fuels, growing significance of renewables</li>
<li>reduced domestic supplies of coal, gas and oil</li>
<li>economic and environmental issues associated with exploitation of energy sources.</li>
</ul>
<h2 id="food">Food</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971159146554613820/unknown.png" alt="enter image description here"><br>
<em>Food, yummy. I really couldn’t live without it.</em></p>
<p>Food security is defined as ‘when all people at all times have access to sufficient, safe, nutritious food to maintain an active and healthy life’.</p>
<p>Worldwide, enough food is produced for everyone, but it is distributed differently. In mostly Africa and Southern Asia, there are high risks of food insecurity. In HICs, over 25% of the diet is made from meat, fish, eggs, milk and cheese and another quarter from cereals. In LICs, half the diet is made from cereals. Although high in calories, they are low in nutrients, resulting in malnourishment.</p>
<p>Several factors affect food supply and consumption:</p>
<h3 id="food-demand-factors">Food demand factors</h3>
<ul>
<li>Population growth: more mouths to feed requires more food to be produced. In LICs, where there is a deficit, everyone will get less nutrients.</li>
<li>Economic development - as people in NEEs become more wealthy, they eat more meat and feed animals, resulting in resources being allocated for their own country rather than others.</li>
<li>Climate - droughts can cause huge losses of crops and livestock, and also increasing the risks of desertification, reducing fertile farmland areas.
<ul>
<li>Floods can also cause losses of crops and livestock, especially on coastal areas after tropical storms.</li>
<li>Climate change is exaggerating these with weather patterns becoming more unpredictable while also increasing drought length and frequency of these and tropical storms.
<ul>
<li>Not good.</li>
</ul>
</li>
</ul>
</li>
<li>Technology - LICs cannot afford to invest in infrastructure which could increase yield of crops, like stable roads, machinery for cultivation and things like GM laboratories.</li>
<li>Pests and disease - pests like rats can eat the produce in warehouses like silos after a harvest, diseases like malaria and cholera can reduce the workforce.</li>
<li>Water stress - is when annual freshwater per person is below 1,700m<sup>3</sup>/year. HICs can manage water stress through transfer schemes and irrigation to produce food, while LICs can’t. Floods can also contaminate water supplies.</li>
<li>Conflict &amp; social unrest - wars can disrupt farming and food production. It also may displace many people who do not have the money or facilities to grow or buy food. The need for water can lead to international disputes over ownership of water sources, like in the River Nile.</li>
</ul>
<h3 id="food-supply-factors">Food supply factors</h3>
<ul>
<li>Irrigation - used to supply extra water to farming areas, especially if water supply naturally is low. It increases crop yields and income, reducing poverty. If used economically, such as drip irrigation (delivered directly to roots reducing evaporation) it can improve the quality of live for everyone involved. However it can cause salinization (build up of salt) if the source is the sea, for example. It also costs a lot to maintain.</li>
<li>Aeroponics - when air is used to grow plants. Nutritional water is sprayed to the plants regularly, in a greenhouse to avoid evaporation. It is easily maintainable, requires less nutrients as they do not go into the soil, and needs little space. It can be expensive and knowing the exact nutrients can require specialist knowledge.</li>
<li>Hydroponics - when plants’ roots are constantly in water. They grow faster, like in aeroponics, as more nutrients are available. Diseases and funguses in the soil do not exist here. Similar disadvantages to aeroponics.</li>
<li>The New Green Revolution - when new strains of seeds were developed with  a higher yield. Yields increases by 40% in Asia and larger quantities of cheaper foods were produced. The New Green Revolution will conserve biodiversity while improving all aspects of farming and having the least impact on the environment.</li>
<li>Biotechnology - GM crops and animals can be made to have more vitamins and proteins, more resistant to salts, droughts, insects and diseases, better flavours and better lifespan of foods after harvesting.</li>
</ul>
<blockquote>
<p>Aquaponics is when plants and animals are grown together - the fish produce nitrifying bacteria which give nitrates to the plant, increasing growth and yield.</p>
</blockquote>
<h3 id="case-study-almeria-spain">Case study: Almeria, Spain</h3>
<p>Almeria is a large scale agricultural development. Greenhouses cover 31,000 hectares of land. It is responsible for most of the UK’s out of season crops like tomatoes and cucumbers, generating 1.5 billion dollars for the Spanish economy. It supplies half of Europe’s fruit and vegetables. It has got so big because of:</p>
<ul>
<li>Changing demand for more fruit and veg</li>
<li>High demand for out of season produce - HICs want this all year round</li>
<li>Fast and easy shipping internationally</li>
<li>Hot average temperature allowing for little extra energy to be required to grow the crops</li>
<li>Cheap labour from (typically African) immigrants who want to earn money</li>
</ul>
<p>Advantages include</p>
<ul>
<li>Low water use due to drip irrigation and hydroponics</li>
<li>Fresh water via a desalination plant is available as it’s next to the Mediterranean Sea</li>
<li>Jobs created in packing and manufacturing plants</li>
<li>Very cheap produce produced</li>
<li>Regulations increase food safety by reducing chemical uses.</li>
</ul>
<p>Disadvantages include</p>
<ul>
<li>Immigrants are paid low wages and live and work in poor conditions</li>
<li>The use of pesticides increase health risks for workers and contaminating water supplies</li>
<li>Natural ecosystems have been COMPLETELY destroyed - there’s so much plastic covering everything!</li>
<li>Natural water sources like aquifers are drying up</li>
<li>Plastic pollution is being dumped in the sea affecting marine life</li>
</ul>
<blockquote>
<p>Temperatures in the area have dropped by 0.3<sup>o</sup>C in the area as the greenhouses are white and reflect sunlight!</p>
</blockquote>
<h2 id="footnotes">Footnotes</h2>
<p><sup>1</sup> I’m saying London here as, although it’s not (currently) a megacity, it’s always been a significant trading hub and economic powerhouse for the UK and globally.</p>
<p><sup>2</sup> The most waffle I’ve written today, almost as bad as my Chemistry 6 markers</p>
<p><sup>3</sup> <a href="https://cdn.discordapp.com/attachments/972581792576053298/981167812896780338/Nollywood.gif">Don’t say it…</a></p>
<p><sup>4</sup> Amended from Sam’s document.  <a href="https://discord.com/channels/759861456300015657/903604617722601472/981251143097262171"><code>Lagos_Overview_-_Sam_Fisher_-_10th_Feb_-_10Q.docx</code></a></p>
<p><sup>5</sup> I spent ages looking and found <a href="https://en.wikipedia.org/wiki/Airports_of_London">this article on Wikipedia.</a></p>
<p><sup>6</sup> Credits to Jacob for this idea. <a href="https://discord.com/channels/759861456300015657/903604617722601472/983395293703860314">discord link</a></p>
<p><sup>7</sup> How to get a free phone - just go here and eat as many apples as you can!</p>
<h2 id="section-2"></h2>
<p>thank you for reading! as a present, <a href="https://cdn.ibaguette.com/cdn/iBaguette/SharedResouces/goofy.mp3">click here</a></p>
    </div>
  </div>
</body>
</html>
`








const OLD_html_geog_both_papers = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geography Paper 1 + 2</title>
  <link rel="stylesheet" href="https://www.ibaguette.com/static/Stackedit_Style.css" />
</head>
<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#aqa-geography">AQA Geography</a></li>
<li><a href="#note-paper-1-and-2-are-complete.-3-will-be-added-later.">NOTE: Paper 1 and 2 are complete. 3 will be added later.</a>
<ul>
<li><a href="#read-me-please-thanks">READ ME PLEASE THANKS</a>
<ul>
<li><a href="#this-cheat-sheet-covers-all-of-the-specification-for-all-3-papers">This cheat sheet covers all of the specification for all 3 papers</a></li>
</ul>
</li>
<li><a href="#changes-for-2022">CHANGES FOR 2022</a></li>
</ul>
</li>
<li><a href="#paper-1-living-with-the-physical-environment">Paper 1: Living with the physical environment</a></li>
<li><a href="#section-a-the-challenge-of-natural-hazards">Section A: The challenge of natural hazards</a>
<ul>
<li><a href="#natural-hazards">Natural hazards</a></li>
<li><a href="#tectonic-hazards">Tectonic hazards</a>
<ul>
<li></li>
<li><a href="#case-study-amatrice---effects">Case study: Amatrice - effects</a></li>
<li><a href="#case-study-amatrice---responses">Case study: Amatrice - responses</a></li>
<li><a href="#case-study-gorkha-nepal">Case study: Gorkha, Nepal</a></li>
<li><a href="#management-strategies">Management strategies</a></li>
</ul>
</li>
<li><a href="#weather-hazards">Weather hazards</a>
<ul>
<li><a href="#global-atmospheric-circulation">Global Atmospheric Circulation</a></li>
<li><a href="#tropical-storms">Tropical Storms</a></li>
<li><a href="#case-study-hurricane-sandy-2012">Case study: Hurricane Sandy (2012)</a></li>
<li><a href="#case-study-storm-desmond--eva-2015">Case study: Storm Desmond & Eva (2015)</a></li>
</ul>
</li>
<li><a href="#climate-change">Climate change</a>
<ul>
<li><a href="#causes-of-climate-change">Causes of climate change</a></li>
<li><a href="#managing-climate-change">Managing climate change</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#section-b-the-living-world">Section B: The living world</a>
<ul>
<li><a href="#ecosystems">Ecosystems</a>
<ul>
<li><a href="#case-study-epping-forest-essex">Case study: Epping Forest (Essex)</a></li>
<li><a href="#ecosystem-balance-example-yellowstone">Ecosystem balance example: Yellowstone</a></li>
</ul>
</li>
<li><a href="#tropical-rainforests">Tropical rainforests</a>
<ul>
<li><a href="#soils-climate-and-interdependence">Soils, climate and interdependence</a></li>
<li><a href="#organisms-adaptations">Organisms’ adaptations</a></li>
<li><a href="#biodiversity-issues--deforestation">Biodiversity issues & deforestation</a></li>
<li><a href="#case-study-the-amazon-rainforest">Case study: The Amazon Rainforest</a></li>
</ul>
</li>
<li><a href="#hot-deserts">Hot deserts</a></li>
<li><a href="#case-study-the-western-desert">Case study: the Western Desert</a>
<ul>
<li><a href="#farming">Farming</a></li>
<li><a href="#mineral-extraction">Mineral extraction</a></li>
<li><a href="#energy-production">Energy production</a></li>
<li><a href="#tourism">Tourism</a></li>
<li><a href="#challenges-accessibility">Challenges: Accessibility</a></li>
<li><a href="#challenges-the-water-crisis">Challenges: The water crisis</a></li>
</ul>
</li>
<li><a href="#case-study-the-sahel">Case study: the Sahel</a>
<ul>
<li><a href="#causes-of-desertification">Causes of desertification</a></li>
<li><a href="#strategies-to-reduce-the-risk-of-desertification">Strategies to reduce the risk of desertification</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#section-c-physical-landscapes-in-the-uk">Section C: Physical landscapes in the UK</a>
<ul>
<li><a href="#uk-physical-landscapes">UK physical landscapes</a></li>
<li><a href="#coastal-landscapes">Coastal landscapes</a>
<ul>
<li><a href="#coastal-processes">Coastal processes</a></li>
</ul>
</li>
<li><a href="#case-study-the-dorset-coastline">Case study: the Dorset coastline</a></li>
<li><a href="#coastal-depositional-landforms">Coastal depositional landforms</a>
<ul>
<li><a href="#sand-dunes">Sand dunes</a></li>
<li><a href="#spits">Spits</a></li>
<li><a href="#bars">Bars</a></li>
<li><a href="#coastal-management-strategies">Coastal management strategies</a></li>
</ul>
</li>
<li><a href="#river-landscapes">River landscapes</a>
<ul>
<li><a href="#upper-course">Upper course</a></li>
<li><a href="#middle-course">Middle course</a></li>
<li><a href="#lower-course">Lower course</a></li>
</ul>
</li>
<li><a href="#river-management-strategies">River management strategies</a>
<ul>
<li><a href="#hard-engineering">Hard engineering</a></li>
<li><a href="#soft-engineering">Soft engineering</a></li>
</ul>
</li>
<li><a href="#case-study-morpeth-floods">Case study: Morpeth floods</a></li>
</ul>
</li>
<li><a href="#paper-2-challenges-in-the-human-environment">Paper 2: Challenges in the human environment</a>
<ul>
<li>
<ul>
<li><a href="#i-have-finally-completed-it">i have finally completed it</a></li>
<li><a href="#notice-from-aqa">NOTICE FROM AQA</a></li>
</ul>
</li>
<li></li>
</ul>
</li>
<li><a href="#section-a-urban-issues-and-challenges">Section A: Urban issues and challenges</a>
<ul>
<li>
<ul>
<li><a href="#factors-affecting-urbanisation">Factors affecting urbanisation</a></li>
</ul>
</li>
<li><a href="#case-study-lagos-nigeria">Case study: Lagos, Nigeria</a>
<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#growth">Growth</a></li>
<li><a href="#opportunities-and-challenges">Opportunities and challenges</a></li>
<li><a href="#economic-opportunities">Economic opportunities</a></li>
<li><a href="#urban-planning-for-the-urban-poor-makoko">Urban planning for the urban poor (Makoko)</a></li>
</ul>
</li>
<li></li>
<li><a href="#case-study-london">Case study: London</a>
<ul>
<li><a href="#shoreditch-london">Shoreditch, London</a></li>
<li><a href="#dockyard-development--changing-employment">Dockyard development & changing employment</a></li>
<li><a href="#urban-challenges--urban-sprawl">Urban challenges & urban sprawl</a></li>
<li><a href="#the-lower-lea-valley">The Lower Lea Valley</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#section-c-the-challenge-of-resource-management">Section C: The challenge of resource management</a>
<ul>
<li><a href="#food">Food</a>
<ul>
<li><a href="#food-demand-factors">Food demand factors</a></li>
<li><a href="#food-supply-factors">Food supply factors</a></li>
<li><a href="#case-study-almeria-spain">Case study: Almeria, Spain</a></li>
</ul>
</li>
<li><a href="#footnotes">Footnotes</a></li>
<li></li>
</ul>
</li>
</ul>
    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
    <p><a href="/cheatsheets/gcse">&lt; Back to GCSE Cheat Sheets</a></p>
      <h1 id="aqa-geography">AQA Geography</h1>
<h1 id="note-paper-1-and-2-are-complete.-3-will-be-added-later.">NOTE: Paper 1 and 2 are complete. 3 will be added later.</h1>
<p><a href="https://gist.github.com/Draggie306/1072270b844cda3e271d6f484aa9a976">Cheat Sheet Changelog</a> - Last recorded update to this one 06/06/2022 20:32</p>
<p>Firstly…</p>
<p><a rel="license" href="https://bit.ly/CheatSheetCC"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png"></a><br>This work is licensed under a <a rel="license" href="https://bit.ly/CheatSheetCC">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.</p>
<p>By using this you are legally required to drop a thank you message in the <a href="https://ibaguette.com/discord">Baguette Brigaders</a> server</p>
<iframe src="https://discord.com/widget?id=759861456300015657&amp;theme=dark" width="350" height="500"></iframe>
<p>In the future, cheat sheets will be locked behind a requirement of being in the server, in order to prevent abuse. To ensure your access, you can join with the link above, or <a href="https://discord.com/oauth2/authorize?client_id=977665636048175157&amp;redirect_uri=https%3A%2F%2Fibaguette.com%2FGeographyCheatSheet_v9&amp;response_type=code&amp;scope=guilds%20guilds.members.read%20rpc%20messages.read">link your account</a> (or <a href="https://discord.com/oauth2/authorize?client_id=977665636048175157&amp;redirect_uri=https%3A%2F%2Fibaguette.com%2FGeographyCheatSheet_v9&amp;response_type=code&amp;scope=identify%20email%20connections%20guilds%20guilds.join%20guilds.members.read%20gdm.join%20rpc%20rpc.notifications.read%20rpc.voice.read%20messages.read%20rpc.voice.write%20rpc.activities.write">here</a> for more access). <strong>This is the last cheat sheet which will not have this requirement.</strong></p>
<blockquote>
<p>This document was written with <a href="https://stackedit.io/">StackEdit</a>! Check it out, it’s really cool.</p>
</blockquote>
<h2 id="read-me-please-thanks">READ ME PLEASE THANKS</h2>
<blockquote>
<p>Want dark mode? Install the <a href="https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en">Dark Reader</a> chrome extension! It works very well on any site, including these cheat sheets!</p>
</blockquote>
<p>Please use your class notes, if you have any, as well as this, to aid your revision. This covers the specification but consolidated into one place, so might not cover everything in 100% detail, but I have written more for the things which people may find more confusing. If there are any errors then please let me know (discord: <code>@Draggie#3060</code>) immediately. I have tried my best to make it as easy as possible to understand and get a top grade ;)</p>
<blockquote>
<p>Thank you Baguette Brigaders server boosters for allowing pictures to be placed on this document. Join <a href="https://discord.com/invite/GfetCXH">here</a> if you’re not already and you’ll get access to all the cheat sheets, inside information, pre-releases, dedicated revision sections to discuss and have a chat with over 60 of our students and friends!</p>
</blockquote>
<blockquote>
<p>If images are slightly pixelated, zoom in to 110%, it’s much crisper</p>
</blockquote>
<p>To navigate this document, I’d strongly recommend viewing on a computer or tablet. On the left, you will be able to skip to sections of higher interest, like case studies, with one click.</p>
<h3 id="this-cheat-sheet-covers-all-of-the-specification-for-all-3-papers"><strong>This cheat sheet covers <em>all</em> of the specification for all 3 papers</strong></h3>
<p>… so there’s quite a lot</p>
<h2 id="changes-for-2022">CHANGES FOR 2022</h2>
<p><a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/changes-for-2022">AQA’s wording</a>:</p>
<ul>
<li>Optionality introduced for Paper 2</li>
<li>Fieldwork not required</li>
<li>Familiar fieldwork questions removed from Paper 3</li>
<li>No advance information on exams</li>
<li>There are no changes to Paper 1: Living with the physical environment <em>(so I’ve put a lot of detail in!)</em></li>
</ul>
<h1 id="paper-1-living-with-the-physical-environment">Paper 1: Living with the physical environment</h1>
<h1 id="section-a-the-challenge-of-natural-hazards">Section A: The challenge of natural hazards</h1>
<h2 id="natural-hazards">Natural hazards</h2>
<p><img src="https://media.discordapp.net/attachments/785620979300302869/970757254083133490/Screenshot_2022-05-02_194213.png" alt="enter image description here"><br>
<em>Specification for 1A</em></p>
<p>A natural hazard is a <strong>natural event which poses risk to human life and assets.</strong> The more humans that come into contact with natural events, the more the risk of natural hazards.</p>
<p>Natural hazards are commonly classified by their physical processes which occurred to cause them. These include:</p>
<ul>
<li>tectonic hazards, which involve movements of tectonic plates in the Earth’s crust</li>
<li>atmospheric hazards, such as tropical storms</li>
<li>geomorphological hazards, such as flooding, which occur on the Earth’s surface</li>
<li>biological hazards, which involve living organisms, such as forest fires</li>
</ul>
<p>The magnitude and frequency of these natural hazards are increasing thanks to human factors, such as the greenhouse effect. This increases the risk of extreme weather events, such as more extreme hurricanes.</p>
<p>However, people choose to live in hazardous areas for a variety of reasons. For example, in LICs, the authorities may not have enough money to accurately predict the location, time and magnitude of an event, such as a volcanic eruption, resulting in more people affected by the impact of it. Pull factors to these areas including availability of resources, like crude oil and job opportunities, may also encourage people to move or stay in these at-risk areas.</p>
<h2 id="tectonic-hazards">Tectonic hazards</h2>
<p>(Date done in class: 15th-29th September 2020)</p>
<p><img src="https://media.discordapp.net/attachments/785620979300302869/970758482557026344/unknown.png" alt="enter image description here"></p>
<p>Examples of tectonic hazards include earthquakes or tsunamis.</p>
<p>The plate tectonics theory is basically that the top part of the Earth’s structure - the crust or lithosphere, move around because of convection currents. As the inner core of the Earth is very hot (6000 degrees C), magma rises up through the mantle. As it comes into contact with the crust, it cools again and sinks back to the core, kind of dragging the crust along with it. This causes continental drift. (very slow - only ~5cm a year, seen on GPS)</p>
<p>Earthquakes and volcanic eruptions are a result of these plates meeting.</p>
<p>Constructive (or diverging) plate boundaries happen when two plates pull away from each other, “constructing” new land from the magma</p>
<blockquote>
<p>Both (shield) volcanoes and earthquakes occur here.</p>
</blockquote>
<p>Destructive, or converging, plate boundaries occur when two plates come together, hence “destructing” the land</p>
<blockquote>
<p>Again, (composite) volcanoes and earthquakes occur here. Fold mountains also!</p>
</blockquote>
<p>Conservative plate boundaries occur when two plates slide past each other, “conserving” the land from volcanoes</p>
<blockquote>
<p>No gap is formed between the plates so there is no volcano. However, strong earthquakes love these plates.</p>
</blockquote>
<h4 id="effects-and-responses-to-a-tectonic-hazard">Effects and responses to a tectonic hazard</h4>
<p>In our case study, we studied Amatrice, Italy (HIC) and Gorkha, Nepal (LIC).</p>
<p><strong>Amatrice</strong>: It was a magnitude 6.2 earthquake which occurred on the 24th August 2016. All 3 of the economic, social and environmental impacts occurred as a direct result of the quake. Plus, I was in the region when it happened… so I’ll always remember it vividly…</p>
<h3 id="case-study-amatrice---effects">Case study: Amatrice - effects</h3>
<p>Primary effects of the Amatrician earthquake included 299 deaths, 400 injured and over 4000 homeless.  Most buildings in the town were severely damaged or completely destroyed, including the town’s school. As it struck during summer holiday season, the population of the town and surrounding areas was larger than usual as villas were occupied and tourists were about. The death toll includes several tourists from England and France who were celebrating local ‘festas’ at the time.</p>
<blockquote>
<p>Pictures below are my own unless otherwise stated.</p>
</blockquote>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970765653487263774/IMG_20210806_150144.jpg?width=702&amp;height=407" alt="destroyed house"><br>
<em>^^ A completely destroyed section of a building in Amatrice even 5 years later.</em></p>
<p><strong>Secondary effects</strong> of an earthquake are things that happen as a result of the primary effects. In Amatrice, roads were blocked which reduced business and tourism in the area, farmers could not earn money as barns housing animals were destroyed and looting even occurred in the town, contributing to psychological damage among the residents.</p>
<p>As Italy is a very touristy country, to this day many tourists avoid the area as a result of the seismic activity.</p>
<p>Local ‘agritourismos’ said they were on the brink of closure as many tourists did not come to Italy the year after, and even two years later footfall in Umbria and Lazio was still much lower than before the quake.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970765608339779665/IMG_20210806_150525.jpg?width=902&amp;height=507" alt="reduced to rubble"><br>
<em>^^ Another home reduced to rubble</em></p>
<h3 id="case-study-amatrice---responses">Case study: Amatrice - responses</h3>
<p><strong>Immediate responses</strong> are the responses to the impacts in the short-term, i.e a few days after the impact. In Amatrice, the army, Vigili del Fuoco (fire brigade) and dog teams arrived during the early morning to rescue people trapped under the rubble. The Italian PM Renzi announced a relief package of over 60 million euros for reconstruction work and tax subsidies for residents.</p>
<p>Unfortunately, immediate responses were not fully effective. Due to the mountainous terrain, many bridges were destroyed and landslides occurred, blocking access to the town.</p>
<p><img src="https://static.timesofisrael.com/www/uploads/2016/08/Italy-Quake_Horo1.jpg" alt="enter image description here"><br>
<em>The rescue effort - the morning of August 25th 2016 (credit to AFP/FILIPPO MONTEFORTE)</em></p>
<p>Long-term responses are the <strong>those that go on for months and years after a disaster</strong>, usually in order to repair or reconstruct. At Amatrice, schools in neighbouring towns allowed Amatrician students in while several prefabricated classrooms were imported into Amatrice itself. After a year, the temporary camps that were set up transferred their citizens back to wooden houses in the town (see below pictures).</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970769986383642685/unknown.png?width=902&amp;height=507" alt="New church and bell tower"><br>
<em>^^ New church and bell tower constructed later. Notice the anti-seismic material for the bell?</em></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/990598492705665064/IMG_20210806_144328.jpg" alt="The memorial"><br>
<em>^^ The memorial, Ornamento della Piazza Dei Ristoranti, in central Amatrice. Built to remember these who lost their lives, the size of the wood represents the ages of the people.</em></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970776077691650077/unknown.png" alt="yellow joined houses"><br>
<em>A row of little yellow wooden houses built as a result of the scheme. There were dozens of these homes in rows in and around the town.</em></p>
<h3 id="case-study-gorkha-nepal">Case study: Gorkha, Nepal</h3>
<p>I have spent a lot of time on Amatrice so I will condense Gorkha a little bit.</p>
<p>In Gorkha, Nepal, on the 26th April 2015 a 7.8 magnitude earthquake hit. As the Richter scale is logarithmic, this means that the quake was <a href="https://earthquake.usgs.gov/education/calculator.php">250 times</a> stronger than Amatrice’s quake.</p>
<p><strong>Primary effects</strong> included over 8,800 deaths, over 16,000 injured and a million homeless. Several dozen hospitals and schools were destroyed and historic buildings were damaged.</p>
<p><strong>Secondary effects</strong> included an avalanche on Mount Everest, killing 19 more, and tourism decreased, resulting in less money for the locals who also suffered food shortages as the quake destroyed many silos and homes housing rice.</p>
<p><strong>Immediate responses</strong> include temporary shelters set up by the UN and WHO along with medical supplies to avoid death water. However, like in Amatrice, the mountainous terrain made areas difficult to reach on foot so helicopters were used to bring aid to many residents.</p>
<p><strong>Long-term responses</strong> included risk assessments and over 300 million US$ donated as aid to villagers. Tourist sites reopened a few months after the quake, including Everest.</p>
<h3 id="management-strategies">Management strategies</h3>
<p>People may continue to live in areas at risk from tectonic hazards because of a variety of reasons.</p>
<ul>
<li>Energy - in Iceland, much of the energy they generate comes from heat from volcanoes and hot magma - steam turns a turbine, etc etc (physics)</li>
<li>Tourism - tourists love to spend time and money around volcanic sites, benefitting the locals and taxes for the government</li>
<li>Farming - land around volcanoes is rich in nutrients. This can be used to produce desired products like Sicilian wine</li>
</ul>
<p>Monitoring and predicting events using seismographs can be used to predict events and issue an early warning to residents. (This won’t work in LICs as they have no money)</p>
<p>Planning - shock absorbing foundations, large weights on the top of buildings to counteract shockwaves and having a local evacuation plan are effective methods at managing risks.</p>
<h2 id="weather-hazards">Weather hazards</h2>
<p>(Date done in class: 6-16th October 2020)</p>
<p>Finally moving from tectonic! Sorry about that.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/970784783158366238/unknown.png" alt="spec"></p>
<h3 id="global-atmospheric-circulation">Global Atmospheric Circulation</h3>
<p>Basically, the global atmospheric circulation model all depends on latitude</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971122285886988308/Hadleyferrelpolar.jpg" alt="sus"><br>
<a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Earth_Global_Circulation_-_en.svg/1200px-Earth_Global_Circulation_-_en.svg.png">Thanks Wikipedia (source)</a></p>
<p>Low, 	High, 		Low, 		High (pressure)<br>
ITCZ, 	Hadley, 	Ferrel, 	Polar (cells)<br>
0,			30,			60,			90 (degrees)</p>
<h3 id="tropical-storms">Tropical Storms</h3>
<p>Tropical storms develop:</p>
<ul>
<li>between 5-30 degrees N and S (low coriolis effect)</li>
<li>above a 27 degree ocean surface temperature</li>
<li>sea depth of 6o to 70 metres</li>
<li>with low wind shear (wind speeds remain constant with height for clouds)</li>
<li>between the summer and autumn</li>
</ul>
<p>These tropical storms form when warm air rises to create an area of low pressure. As the warm air reaches high altitudes, powerful winds spiral around a calm central point, and the warm air then condenses and cools into heavy rain and thunderstorms.</p>
<p>With climate change, a warmer atmosphere means the it can hold more moisture, increasing the frequency of heavy rainfall. Storm surges will become higher due to thermal expansion.</p>
<h3 id="case-study-hurricane-sandy-2012">Case study: Hurricane Sandy (2012)</h3>
<p>Formed on October 22 (my birthday!), 2012 in the Caribbean sea and dissipated on November 2nd. At its peak, it was a category 3 hurricane as it hit Cuba on Oct 25th, and weakened down to a tropical storm 2 says later. However, it restrengthened slightly, and as it moved onshore in New Jersey it caused a lot of damage:</p>
<p>Primary effects: 72 deaths, 65 billion dollars in damages, flooded the coast, removed forest and coastal habitats, 12ft storm surge (death water!) and destroyed 650,000 homes in New York and New Jersey.</p>
<p>Like with tectonic hazards, better monitoring and predictions will result in people having more time to evacuate.</p>
<h3 id="case-study-storm-desmond--eva-2015">Case study: Storm Desmond &amp; Eva (2015)</h3>
<p>If you remember, Storm Desmond happened in December 2015. This was our UK recent extreme weather event. It was caused by 3 major reasons:</p>
<ul>
<li>Strong low pressure, or depression, this brought heavy rainfall and can also trigger a storm surge</li>
<li>Weather fronts hitting areas of high relief caused high levels of orographic rainfall as water vapour was forced over mountains, which gets cooler as they go up, causing water to condensate and produce lots of rain (this was in Cumbria)</li>
<li>Ground already saturated forced water to sit on top of it, causing floods, as it cannot be absorbed - the ground acts as a sponge.</li>
</ul>
<p>The impacts of this, like in any natural hazard, are broken up into 3 categories:</p>
<ul>
<li>Social - hundreds of families were unable to return home for 2 years. Stress of the people affected by the floods was high as whole homes were flooded, resulting in life changing losses. Electrical substations were submerged also, so messages could not be sent to friends and family alerting for safety - potentially causing distress</li>
<li>Economic - flooded farms damaged farmers’ income and resulted in higher prices due to lower supply. Businesses and warehouses were also destroyed, so essential supplies could not reach businesses. When businesses close, people lose their source of income as well.</li>
<li>Environmental - hundreds of bridges destroyed, and rivers burst their banks in major towns and cities such as Carlisle.</li>
</ul>
<p>Mitigation strategies have been employed to reduce the risk of these floods. These include improved flood defences - embankments were raised by over a meter along major rivers, and financial relief was provided to every flooded home. Despite new million-pound defences being built 6 years before, the Environment Agency’s plans were outdates. As a result of this, the agency have improved their alert system and can now send text messages directly to residents’ phones in case of a hazard.</p>
<p>“Evidence that weather is becoming more extreme in the UK” ok I’ll explain below</p>
<h2 id="climate-change">Climate change</h2>
<p>(Date done in class: 10th November 2020)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971133245917909072/unknown.png" alt="enter image description here"></p>
<p>I know this might come as a shock, but climate change is indeed real…</p>
<p>There is a lot of evidence for climate change. Starting from the longest time ago:</p>
<ul>
<li>Data from ice cores in the Antarctic can be analysed. CO2 and CH4 are emitted when this ice is melted and can be used to estimate atmospheric temperature and levels up to 800,000 years ago.</li>
<li>Tree rings and fossils can also be used to estimate the climate.</li>
<li>In the Middle Ages, the Thames froze a few times, suggesting winters were much cooler.</li>
<li>The Met Office has had reliable data from weather balloons and satellites for over 100 years, documenting a 1 degree increase in average temperatures.</li>
<li>Glacier retreat - melting when it’s warmer<img src="https://media.discordapp.net/attachments/970765476688961616/971142057202683914/unknown.png" alt="enter image description here"><br>
<em>How much has changed in 60 years…</em></li>
</ul>
<h3 id="causes-of-climate-change">Causes of climate change</h3>
<p>… include natural and human contributions.</p>
<p>Possible natural causes:</p>
<ul>
<li>Eccentricity (orbital change) - the Earth’s orbit changes to be an oval shape, lasting from 10 to 100 thousand years, changing the heating of the Earth.</li>
<li>Solar activity - increase activity (solar flares) mean the Earth gets hotter</li>
<li>Volcanic eruptions - larger eruptions can eject large volumes of ash, reflecting irradiating sunlight, making Earth cooler</li>
<li>Milankovitch cycles - when all of the above come together to make an extremely cold or hot phase</li>
</ul>
<p>Possible human causes:</p>
<ul>
<li>Fossil fuels - do I need to say anything else?</li>
<li>Deforestation - forests act as a carbon sink, clearing forests for livestock, accessing remote areas, using raw materials, urban expansion, photosynthesis…</li>
</ul>
<p>Effects:</p>
<ul>
<li>More extreme weather events - more rainfall, thunderstorms, hurricanes. Also more severe droughts - crops failing</li>
<li>Sea level rise - ‘climate refugees’, increased flood risk</li>
<li>Less money - lower yields, tourist areas like the <a href="https://www.google.com/maps/place/Aiguille+du+Midi/@45.8295673,6.9037827,6485a,35y,349.5h,38.53t/data=!3m1!1e3!4m5!3m4!1s0x47894f1a8a153625:0x8814601674c66bfc!8m2!3d45.8793111!4d6.8874243?hl=en">Alps</a> get less footfall.</li>
<li>Glaciers retreat, putting additional water in the area’s drainage basin, increasing flood risk in the areas and risk of overwhelming water treatment facilities.</li>
</ul>
<h3 id="managing-climate-change">Managing climate change</h3>
<p>… involves both</p>
<ul>
<li>mitigation (reducing causes) - solar power, renewables, GM food, insulation, carbon capture</li>
<li>adaptation (responding to change) - increasing flood defences - drought resistant crops, building houses on stilts</li>
</ul>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971143799956996106/IMG_2576.jpg" alt="enter image description here"><br>
<em>I would summarise that if I had enough time, okay?!</em></p>
<p>Several methods can be employed to reduce CO₂ from the atmosphere, with their own distinct advantages and disadvantages.</p>
<h1 id="section-b-the-living-world">Section B: The living world</h1>
<p>Section B is slightly smaller than section A by 3 marks</p>
<p>“In this section, students are required to study <strong>Ecosystems</strong>, <strong>Tropical rainforests</strong> and one from <strong>Hot deserts</strong> or Cold environments.”<br>
translation: we do everything apart from cold stuff</p>
<h2 id="ecosystems">Ecosystems</h2>
<p>(Date done in class: 24th November 2020)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971148932275138580/unknown.png" alt="enter image description here"></p>
<p>An ecosystem is made up of <strong>biotic</strong> (living - animals, plants) and <strong>abiotic</strong> (non-living - rocks, soil, climate) factors. It is a <strong>community of plants and animals</strong> which interact with each other and their physical environment.</p>
<p>Can be local (pond), regional (the Broads), and global (Sahara Desert)</p>
<p>Producers include algae, pondweed and grass. They absorb energy by photosynthesis. Consumers are creatures which eat herbivores (or plant matter), which eat producers. Secondary consumers are carnivores who will feed on these herbivores or consumers, like foxes or cats. Tertiary consumers are the top, or apex predators, and are usually the fastest and largest like lions or wolves.</p>
<p>Decomposers are organisms which break down dead organic matter. They return nutrients to the soil as a substance called humus.</p>
<h3 id="case-study-epping-forest-essex">Case study: Epping Forest (Essex)</h3>
<p>Epping Forest has bogs and ponds which have their own unique species, including 20 kinds of dragonflies.</p>
<p>Characteristics of Epping Forest’s ecosystem include a wide variety of tree species, oak, elm, ash, beech. On top of this, there are many producers, insects, mammals and birds, including amphibians and reptiles. 700 fungi species act as decomposers.</p>
<p>The ecosystem interdependent as the forest’s producers, consumers and decomposers rely on each other. This is seen when the deciduous trees lose leaves to maximise photosynthesis to conserver energy. Decomposers and detritivores quickly convert this materal into humus by the end of Autumn. This helps the new season’s plant growth.</p>
<p>Visitors to the forest pick berries and flowers, and in doing so spread seeds. Previously, the trees were cut back to encourage new growth. The biomass store is large due to big trees, and the soil store is large due to lots of humus.</p>
<h3 id="ecosystem-balance-example-yellowstone">Ecosystem balance example: Yellowstone</h3>
<p>In Yellowstone National Park (Wyoming, USA) before 1995, the ecosystem was balanced. However, wolves were reintroduced in 1995, and this caused a 50% drop in the elk population there. This changed the physical environment as well, as these elk no longer grazed on the tree leaves, resulting in more tree cover and stronger trees.</p>
<p>Because of this, beavers rediscovered a more abundant food source that hadn’t been there earlier, allowing them spread and construct new dams and ponds, affecting the physical landscape and hydrology!</p>
<p>Source: <a href="https://www.yellowstonepark.com/things-to-do/wildlife/wolf-reintroduction-changes-ecosystem/#targetText=Healthier%20Willow%20Stands%20in%20Yellowstone">Wolf Reintroduction Changes Ecosystem in Yellowstone</a> (very good read!)</p>
<h2 id="tropical-rainforests">Tropical rainforests</h2>
<p>(Date done in class: ~12th December 2020)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971156803054350406/Tropical_rainforests.png" alt="Specification content"></p>
<p>There are two main characteristics of tropical rainforests - the climate and vegetation.</p>
<p>Their climate is warm and wet, as they are located on or near the equator. Annual temperatures average 26ºC and has little variation, no matter the season. Their annual rainfall typically is above 2,500mm, allowing a wide variety of vegetation to be supported, alongside their huge rivers.</p>
<p>There vegetation of tropical rainforests is extremely biodiverse, including trees over 30 metres in height.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/972049986550399016/Screenshot_20220506-091824__01.jpg" alt="Sus"><br>
<em>Precipitation and temperature in Duala, Camerooon.</em></p>
<h3 id="soils-climate-and-interdependence">Soils, climate and interdependence</h3>
<p>In the tropical rainforest, soils are very poor and infertile. This is because there is rapid nutrient cycling (transfer of nutrients between biomass stores). The nutrients are quickly recycled whenever it enters the soil store and is absorbed by the vegetation. Most of the nutrients are stored in the biomass (living plants and animals) and also the litter (dead wood, leaves and other plant/animal remains) on the ground, which become part of the soil after decomposers or detritivores process it. Plants uptake these nutrients dissolved in the soil (Biology revision useful here!) or is lost by nutrient leaching When these plants die, then nutrients are placed back into the soil, and so on. This shows the rainforest’s interdependence.</p>
<p>As the conditions are very warm all the time, the litter decomposes very quickly, and the rain which reaches the floor often washes these little nutrients away (into its rivers or tributaries). However, there is still enough for the ecosystem to support itself.</p>
<p>The 3 main reasons for growth can be summarised into:</p>
<ul>
<li>Rapid nutrient cycling - encourages loads of growth in small areas;</li>
<li>High intensity of sunlight - high levels of photosynthesis;</li>
<li>Warm and humid environment - great for plant growth all year.</li>
</ul>
<h3 id="organisms-adaptations">Organisms’ adaptations</h3>
<h4 id="plant-adaptations">Plant adaptations</h4>
<p>Everything in the rainforest has been adapted to the hot and humid environment. The easiest way to explain this is in the trees and plants.</p>
<p>For example, <strong>lianas</strong> are <strong>parasitic vines</strong> that have roots in the ground but climb up the trees to reach light. Their leaves and flowers grow in the canopy.</p>
<blockquote>
<p>Tree trunks in the rainforests are mostly tall and thin to maximise the energy expended into travelling upwards and into the sunlight.</p>
</blockquote>
<p>Trees’ <strong>bark</strong> is also very <strong>smooth</strong> to allow quick runoff into the roots (stem flow). Trees may also have ‘drip tips’ which allows water to run off them (drip flow), resulting in less damage. Their cuticles are also thicker, making them very waxy, and their stems are flexible to maximise rotation to point at the sun for maximum photosynthesis!</p>
<p>Finally, <strong>buttress roots</strong> are big, ridged roots with a huge surface area which significantly supports the larger trees (ususally emergents - above canopy)</p>
<p><strong>Epiphytes</strong> are smaller plants which live on other plants’ branches in the canopy, getting all their nutrients from the air and water. This is possible as the canopy acts as an umbrella - moisture evaporating from below gets trapped in it, and moisture from above (i.e rain) gets trapped in it as well. More like a sponge now I think about it! <strong>Evapotranspiration</strong> (from evaporation <strong>and</strong> transpiration - from the plants) is also strong, increasing atmospheric moisture levels, which will eventually fall back down as precipitation.</p>
<p><img src="https://ichef.bbci.co.uk/images/ic/1008xn/p033wrc5.jpg" alt="Drip tips"><br>
<em>Drip tips</em></p>
<h4 id="animal-adaptations">Animal adaptations</h4>
<p>Of course, animals have adapted in some cool ways too.</p>
<ul>
<li>The sloth moves slowly to make it hard for predators to spot, and also camouflages among the trees.</li>
<li>Frogs can only hear their own species’ chords.</li>
<li>Flying frogs have flappy bits and loose skin between its limbs to stretch it out, allowing gliding between plants.</li>
<li>Toucans and parrots have <strong>large</strong> and <strong>strong</strong> beaks to crack open and cut fruits and <strong>nuts</strong>, and grab these from weaker branches.</li>
</ul>
<p>Bright colours are also used among animals to act as a warning against predators, for example in poison dart frogs.</p>
<h3 id="biodiversity-issues--deforestation">Biodiversity issues &amp; deforestation</h3>
<p>twopical rainfowests have the highest wevels of biodersitwy in any bwiome :)</p>
<p>BUT WE MUST NOT DISTURB THEM! (or, at least, disturb them, but much more nicely)</p>
<p>Human exploitation is destroying much of the rainforests’ biodiverse species, endangering them. Logging and commercial farming result in large swathes of the rainforest being unsustainably cleared for cattle farming and cash crops like palm oil, soybeans, or mahogany trees. Hydroelectric power dams have resulted in large areas being flooded. Subsistence farming has also contributed to deforestation as well, thanks to the increasing population in these areas in settlements.</p>
<p><a href="https://www.google.com/maps/@-9.7235495,-63.0343724,204595m/data=!3m1!1e3">Look at this logging activity on Google Maps</a></p>
<h3 id="case-study-the-amazon-rainforest">Case study: The Amazon Rainforest</h3>
<p>I could not find my notes on the rainforest but there’s so much info online and in books there’s no point even looking for them.</p>
<p>Useful resources: <a href="https://www.coolgeography.co.uk/gcsen/Amazon_Case_study.php">https://www.coolgeography.co.uk/gcsen/Amazon_Case_study.php</a>.</p>
<p>Causes of deforestation:</p>
<ul>
<li>Subsistence farming - clear forest and burn it, growing crops until the soil is exhausted, repeat.</li>
<li>Commercial farming - to sell produce to big retailers.</li>
</ul>
<h2 id="hot-deserts">Hot deserts</h2>
<p>(Date done in class: 8th-22nd January 2021)</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/977666730899947570/alright_are_you_happy_now_here_is_the_spec._also_i_will_ask_nolwenn_tighe_out_after_last_physics_exam_haha_wish_me_luck.png" alt="enter image description here"></p>
<p>A hot desert is a place which receives less than 250mm of annual rainfall. This aridity controls the life in the desert.</p>
<p>The Sahara Desert has large sand dunes, up to 150 metres. On the border of these arid areas, there are semi-arid areas, or areas on the desert fringe. For example, in Africa, there is the Sahel.</p>
<p>There is a wide variety of biotic and abiotic components in hot deserts. Abiotic parts includes soil rocks and water and biotic animals and organisms play an important part in maintaining a healthy environment. For example, vegetation roots stabilise sandy soils in semi-arid areas and stop soil being blown away by the winds. Plants extract nutrients from the soil and return them when they died, showing the dependence of both abiotic and biotic components on each other.</p>
<p>Plants that can survive in dry conditions are called xerophytes. They have thick waxy cuticles and do not have many leaves  which transpire, which minimises water loss. Many plants have most of their biomass example their roots below the ground to cool them down and further reduce water loss.</p>
<p>Cacti have spines which make it difficult for predators to eat them. They store water in their tissues making them known as succulents. Desert flowers have seeds which can germinate after heavy rain - they can lie dormant for many years. Their life cycles can complete in under a month and produce brightly coloured flowers and petals to attract insects. They are known as ephemerals.</p>
<h2 id="case-study-the-western-desert">Case study: the Western Desert</h2>
<p>The Western Desert covers 200,000 square kilometres. Development in the Western Desert has increased significantly in the past century or so, with Las Vegas (NV) and Phoenix (AZ) home to several million residents, and act as extremely popular tourist destinations for international travelers. In more arid areas, the population density is sparse, allowing developments. These include:</p>
<h3 id="farming">Farming</h3>
<p>Large aquifers are located below some of these regions. As these are generally located above a layer of permeable rock, over the years rainwater becomes trapped, and this can be obtained by using wells. As desert regions have high temperature and sunlight intensity due to their perpendicularity to the Sun, farming is very fast and yields are high, providing that water can be located. As well as wells, canals have also been created to divert large amounts of water to these regions. Farmers make up 10% of Colorado’s economy, but are allocated 80% of state water. California’s deserts produce tonnes of lush vegetables, lemons, peppers and grapes - for wine, which is the exported.</p>
<h3 id="mineral-extraction">Mineral extraction</h3>
<p>Rare earth elements, used in the manufacturing of goods (especially technology) are found in high concentrations in the Western Desert. Around the Grand Canyon, a plan was created for the creation of a uranium mine in 2012, but local people campaigning stopped this development, due to radioactivity and contamination concerns. Copper mining has also increased in popularity, at a detriment to the environment.</p>
<h3 id="energy-production">Energy production</h3>
<p>Due to the strong solar availability in desert regions, the Western Desert has an abundance of current and planned solar farms, for example in the Sonoran Desert there will be enough energy from solar cells to power 100,000 homes. During construction and maintenance, this will create jobs and income for workers. Furthermore, there are large oil reserves below the Western Desert, as well as other fossil fuels like coal - a 50 million $ a year industry. Hydroelectric power is also used, with the Hoover Dam employing &gt; 5000 people in the 1930s.</p>
<h3 id="tourism">Tourism</h3>
<p>The Grand Canyon is a popular tourist destination, due to its natural, wild landscape offering spectacular views - at least, that’s what people say. The two major lakes, Lake Mead and Lake Powell attract millions of visitors anually, and offer a variety of water sports. Of course, Las Vegas is another hugely popular resort, attracting up to 40 million visitors a year!</p>
<h3 id="challenges-accessibility">Challenges: Accessibility</h3>
<p>The low population density means that infrastructure has less incentive to be developed. For example, roads are not always the best quality, which hinders the ability for people or businesses to move around. This then means that people and businesses cannot easily make money. There is also a safety issue in regards to the roads - in 2015 a man had died after becoming lost off-road, and ended up eating by coyotes. This also puts people off moving to the area, which in itself would bring money to the area</p>
<h3 id="challenges-the-water-crisis">Challenges: The water crisis</h3>
<p>Migrants in the 19th and 20th century (lucky ocr history people, I’m jealous) adapted to these challenges by having flat roofs on their houses to collect the little amount of rainwater, had small buildings in general with little windows to reduce temperatures and sunlight penetration, had whitewashed walls to reflect more sunlight instead of absorbing it, and wore wide brimmed hats to keep people cool. Now, extreme weather is less of an issue due to an increased reliance on air conditioning, and the improved water supplies.</p>
<p>The temperatures in the Western Desert reach uninhabitable levels frequently - Death Valley reaches 50ºC in summer, and this is becoming more frequent with <a href="#Climate-change">climate change</a>. Of course, deserts aren’t exactly known for their water either, with water levels in Lake Mead reaching record low levels, partly due to the increase of population in surrounding regions - over 30 million depend in the Colorado River’s water.</p>
<h2 id="case-study-the-sahel">Case study: the Sahel</h2>
<p>The Sahel isn’t an official ‘case study’ - as in it’s not required to learn in the specification. But, you need to know about them.</p>
<p>Desertification is the process where fertile land becomes desert. Over 1 billion people worldwide are threatened by this, as their habitable desert fringe areas are turning into hot desert areas.</p>
<h3 id="causes-of-desertification">Causes of desertification</h3>
<ul>
<li>
<p><strong>Climate change.</strong> Scientists do not know whether climate change caused by humans will exaggerate rainfall amounts, and are even less confident at predicting rainfall distribution. Some even say that climate change may lead to the ‘greening’ of the Sahel with more water vapour in the atmosphere from the heating of the oceans, but it may just result in sand dunes spreading over arable farmland.</p>
</li>
<li>
<p><strong>Population growth.</strong> Since 1950, the Sahel’s population has over tripled to 100 million, fuelled by high birth rates and longer life expectancies. Refugees from conflict areas, such as in Sudan, has contributed to this. Desertification caused by population growth in one region will often result in people being displaced to other fragile areas, acting as a catalyst for desertification there!</p>
</li>
<li>
<p><strong>Removal of fuel wood.</strong> Vegetation is used as fuel in many poorer countries, and acts as an essential source of fuel to cooking and cleaning water which rural settlements rely on. On top of this, there is not enough money for infrastructure like gas pipelines or electricity pylons to be implemented, and even if they were erected then rural villagers may not have enough money to afford them. When large areas of vegetation are removed, the soil is unprotected and prone to wind or water erosion, increasing desertification.</p>
</li>
<li>
<p><strong>Overgrazing.</strong> More animals = less vegetation. Too many animals = irreplaceable vegetation (can’t regrow). Geopolitical boundaries, civil war, political instability and land deeds by large companies force farmers with animals to remain in one location for extended periods of time.</p>
</li>
<li>
<p><strong>Over-cultivation.</strong> Continually farming land reduces its fertility. Combined with population growth, which has resulted in more mouths to feed, subsistence agriculture has increased, draining the little amounts of water stabilising the environment. Cash crops are also grown in these desert fringe areas by commercial farmers, which significantly accelerate the draining of water in aquifers.</p>
</li>
</ul>
<p>Any of the above leads to  <strong>soil erosion</strong>. Firstly, the exposed topsoil is baked by the intense sunlight. Then, when either intense yet infrequent rainfall arrives or high winds hit the area, it washes the topsoil away instead of it being absorbed, making the soil unable to grow vegetation.</p>
<h3 id="strategies-to-reduce-the-risk-of-desertification">Strategies to reduce the risk of desertification</h3>
<ul>
<li>
<p><strong>Water and soil management.</strong> The idea of land management is that it improves the soil quality, so water is held within the soil to stop it being vulnerable to being blown or washed away. Ideas include planting grass (especially on slopes) to keep the soil in place. Low stone walls or bunds have been employed in Mali and Burkina Faso every 10-25m in some areas to stop soil eroding - it may be moved, but not moved far! When water builds up behind a bund (puddle) this gives the water time to soak into the ground, which also helps reduce the chance of the top soil being removed.</p>
</li>
<li>
<p><strong>Tree planting.</strong> Tree roots help stabilise the soil. When leaves decompose, they replenish nutrients, helping more plants and their roots grow. <a href="https://www.youtube.com/watch?v=E4BJ67S_bds">The Great Green Wall (France 24 YouTube vid)</a> is a great expanse of trees over 8,000km and almost 12 million hectares of reforestation, ameliorating land in the Sahel at risk from desertification, across several African countries. As it will also rely on cooperation between different countries it is hoped that it will reduce conflict, which in itself can cause degradation of the land. It will help stabilise the soil, and also employ people to bring sustainable development into these regions, and including poorer communities.</p>
</li>
<li>
<p><strong>Use of appropriate technology.</strong> Efficient stoves significantly reduce the amount of wood and charcoal being burned, and use more local resources to cook food. They can also include a thermocouple, which can charge a mobile phone, allowing farmers to access weather forecasts. Very smart IMO.</p>
</li>
</ul>
<h1 id="section-c-physical-landscapes-in-the-uk">Section C: Physical landscapes in the UK</h1>
<p>ayyy section C, now we’re 67% through the paper! I believe this section is the shortest. there were ~6000 words in the above 2 sections. let’s see how quickly I can summarise this section, it won’t be as detailed as the previous two. mainly because my exam is in less than 2 days but shh</p>
<h2 id="uk-physical-landscapes">UK physical landscapes</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/977677360985935922/Ori_Gayfery-brigham.png?quality=lossless" alt="enter image description here"></p>
<p>The UK’s main upland areas are in Scotland, northern England and Wales. Scottish mountains are steep and glaciated. The Cumbrian Mountains in northern England are home to the Lake District. The Cambrian Mountains in Wales are the source of the River Severn.</p>
<p>Lowland areas include East Anglia and the Fens - many areas are below sea level. Northeast England has a huge river system which drains into the Humber.</p>
<p><em>The key to this is remembering the northwest/southeast divide</em></p>
<h2 id="coastal-landscapes">Coastal landscapes</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/977679627864653824/Ori_you_are_the_most_manipulative_and_coercive_person_Ive_ever_met.png?quality=lossless" alt="enter image description here"></p>
<p>There are two types of waves: constructive and destructive. Waves start at sea, as it approaches the shore, friction slows the base of the wave resulting in that wave’s motion becoming elliptical. This continues until the top of the week breaks over on the shoreline.</p>
<p>Constructive waves have a longer wavelength and a shower wave truth or amplitude. This results in the build up if beach material through deposition, with a high wash and weak backwash, and the angle of the wave is also quite shallow.</p>
<p>On the contrary, destructive waves have a short wavelength meaning they have a high frequency. They have a big amplitude along with a steep wave angle. This results in a strong backwash and a weak swash, resulting in beach material being removed.</p>
<p>Some useful things:</p>
<ul>
<li>The fetch is the distance of sea wind has travelled over before reaching land.</li>
<li>Stronger winds = stronger waves as more energy has gone into the waves</li>
<li>Constructive waves are found in bays, which are more sheltered, and create sandy beaches. Transports sand and sediment up the beach.</li>
<li>Destructive waves are found in exposed areas, including exposed bays, where pebbled beaches are built up. Can erode headlands. More common in winters. Take back beach material into the sea.</li>
<li>Water molecules in deeper water move in a circular motion, but in shallow water, due to the friction, the water itself moves towards the beach.</li>
</ul>
<h3 id="coastal-processes">Coastal processes</h3>
<p>Chemical weathering is boring so I won’t write much about it. It occurs when a chemical reaction happens when water meets rock. For example, acidic rainwater reacts with limestone to form a soluble substance, so it is moved, usually into the sea, never to be seen again. lmao</p>
<p>Mechanical weathering includes freeze-thaw, where water enters cracks, expand when freezing overnight, putting pressure on the rock with the crack in, and this is continued many times. Salt weathering also does this to an extent by crystallising and evaporating on exposed rock.</p>
<p>The <strong>load</strong> is <strong>transported material</strong>.</p>
<ul>
<li><strong>Mass movement</strong> – the downhill movement of sediment because of gravity. Includes:
<ul>
<li>sliding (large clumps of rock slide down)</li>
<li>slumping (see below)</li>
<li>rock falls (parts of the rock fall from the cliff face - usually by freeze-thaw weathering)</li>
</ul>
</li>
<li><strong>Erosion</strong> (wearing away of rock at the coast). Because of destructive waves
<ul>
<li>Hydraulic power is the sheer force of the waves pounding against the cliff. It compresses air inside cracks and when the wave retreats, this pressure is released, creating almost an explosion.</li>
<li>Abrasion is when the waves throw sediment like sand against the cliff, scratching it. This is usually most prominent between the high and low water marks.</li>
<li>Attrition is the grinding down of particles in the water. As load particles hit each other, they wear away the jagged edges of rocks, for example, to become smaller and smoother. Sometimes weaker rocks can be smashed into several parts.</li>
</ul>
</li>
<li><strong>Transportation</strong>  - the larger the load particle, the greater strength is needed for it to be transported by the water. The smaller load particles are carried in suspension, whereas heavier load particles, usually on the seabed, are moved through traction.
<ul>
<li>Longshore drift is when load is transported along the shoreline. The prevailing wind determines its direction. In the UK, there are eleven sediment cells which determine the overall direction of longshore drift in those cells. The swash occurs in the direction of the prevailing wind. Then, due to gravity, the deposited sediment is dragged back into the sea at right angles to the shore. It is carried easterly in a zig-zag pattern.  <strong>/| /| /| /|</strong>   &lt;- (10/10 diagram)</li>
</ul>
</li>
<li><strong>Deposition</strong> - when waves leave behind the load they were transporting, called sediment. Deposition results in more sediment remaining on the beach, than is taken away by waves’ backwash. It will happen:
<ul>
<li>in sheltered bays, with low energy, constructive waves dominating</li>
<li>if there is large amounts of erosion happening, more load is available</li>
<li>if the beach is flat and large - backwash not strong enough as wave is weaker</li>
<li>if sediment is trapped behind a spit when the tide is going down</li>
<li>if a structure is blocking the transportation of sediment (groynes)</li>
</ul>
</li>
</ul>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/974225931851923456/remember-slumping-in-coastal-landscapes-geography-2.f1adb8a.jpg" alt="Slumpy"><br>
<em>Slumpy…</em></p>
<h2 id="case-study-the-dorset-coastline">Case study: <a href="https://www.google.com/maps/@50.6547146,-1.8754129,27074m/data=!3m1!1e3">the Dorset coastline</a></h2>
<p>^^ Middle click above to open google maps in a new tab with this area of coastline! ^^</p>
<p>Bays and headlands are formed when there is a discordant coastline. This is when layers of alternating rock parallel to the coast exists. The softer rock (clay) is eroded before the harder rock (limestone, chalk).</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977907376801849344/o2tp0fbc1eSXtGlyIWCWTkvDtESpi5OhsG4ypAkWmlYoCEVXTKL4wjieZ13YIXlFtEx9kRcDDhrGl0zvguqZ6vgtJQNpayqWPe4h2EZZd7kYMiVVWB-D_GobrtICk2jp3838voAe.jpg" alt="Image is not loading. Sorry!"><br>
<em>Wave refraction at a headland.</em></p>
<p>Coves are formed wenn the hard rock, limestone in Dorset, is broken, allowing the water to more easily erode the rocks behind it. Example: <a href="https://www.google.com/maps/@50.6116076,-2.2502119,259a,35y,17.81h,69.91t/data=!3m1!1e3">Lulworth Cove</a>. Drag and pan while holding the control key to go 3D, you can see some cool formations.</p>
<p>Cliffs in Dorset are mostly made of limestone, chalk, sandstone and chale. Soft cliff rocks are more prone to slumping, and hard rocks result in large, tall cliffs and wave cut platforms.</p>
<p>A wave cut platform is an area of bedrock visible at low tode. It slopes gently into the sea, and is covered by the water at high tide. The stages of a cliffs and wave cut platforms are below:</p>
<ol>
<li>The land slopes into the sea, and being weakened by weathering processes.</li>
<li>Waves erode the base of this with hydraulic power and abrasion between the high and low tides</li>
<li>Continued erosion causes the rock to break away. It now has a ‘notch’ at its base. The rock above the notch is unsupported and prone to falling down.</li>
<li>Continued erosion results in the overhanging cliff falling into the sea as the notch is so big. This step drop is called a cliff.</li>
<li>The cliff retreats into the land when this process is continued.</li>
<li>The old base of this cliff is left as a wave cut platform, and can become smoothed by traction or saltation occurring on it.</li>
</ol>
<p>Caves, arches, stacks and stumps occur generally at headlands.</p>
<ul>
<li>Caves may be several metres high at their entrance. Usually found in hard rocks (limestone).</li>
<li>Arches are unsupported at the top, and act as an extension of the headland. The arch is wide at the base as there is usually a wave cut notch supporting it.</li>
<li>Stacks are physically detached pieces of rock from a headland. Several metres high, continually being weakened by sub-aerial processes and erosion from the sea,</li>
<li>Stumps are the bases of collapsed stacks, for example Old Harry’s Wife. They are usually submerged and only visible at low tide.</li>
</ul>
<p><a href="https://www.google.com/maps/place/Old+Harry+Rocks/@50.6511205,-1.9136773,30888m/data=!3m1!1e3!4m5!3m4!1s0x48730a41d44ae229:0x2672b11c38738030!8m2!3d50.6428835!4d-1.9224579">Old Harry</a> is an example of crack -&gt; cave -&gt; arch -&gt; stack -&gt; stump.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977918268549496903/205-2059162_headlands-and-bays-diagram.png" alt="diagram of cave arch stack stump"><br>
<em>Diagram of a crack, cave, arch, stack, stump, and processes</em></p>
<h2 id="coastal-depositional-landforms">Coastal depositional landforms</h2>
<p>I have already explained how beaches are formed, so I’ll skip that here.</p>
<h3 id="sand-dunes">Sand dunes</h3>
<p>Sand dunes are formed mostly (95%) through saltation, where grains of sand are picked up by the wind and bounce along the beach. When an obstacle is reached, like driftwood, the grains of sand will settle, forming a small ridge. This ridge will gradually increase in size, and on the leeward side (opposite the windward size where the wind is blowing) the dune will collapse, creating a steep gradient.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977924881616347166/Characteristics-of-sand-dunes.png" alt="enter image description here"><br>
<em>Easier to visualise.</em></p>
<p>The further inland the dune, the taller and more vegetated it will be. Dunes close to the beach are ‘embryo dunes’ - they look yellow and are small. Marram grass and vegetation bind sand together inland, and ‘mature dunes’ even have trees growing on them, and look less like sand and more like dirt.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977924891129049158/Sand_Dunes.png" alt="enter image description here"><br>
<em>Cheeky dune pic</em></p>
<h3 id="spits">Spits</h3>
<p>When a coastline changes shape (i.e moves inwards), a lot of deposition happens, resulting in the beach growing out into the sea. The prevailing wind and longshore drift make this happen. The depositional material gets smaller as the spit increases in length due to attrition. A dominant wind will cause the spit to form a ‘hook’ (recurve) inland. Over time, there will be multiple hooks and, in Dorset, there is a spit which is 4km long.</p>
<p>A salt marsh and lagoon will form behind the spit which is sheltered from the waves, over time this will become vegetated.</p>
<h3 id="bars">Bars</h3>
<p>A bar is a ridge of sand separating a bay from the sea. Longshore drift transports sediment from one side of it to another. They can be submerged as well.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977928371549900910/Offshore-Sand-Bar.png" alt="enter image description here"></p>
<h3 id="coastal-management-strategies">Coastal management strategies</h3>
<p>Various strategies can be employed to protect coastlines from the effects of physical processes.</p>
<p>Hard engineering:</p>
<ul>
<li>Sea walls - last many years, gives residents a sense of security, do not have an impact on other areas of coastline as they do not interfere with sediment. However, they can cost £5000 per metre making them the most expensive, and restrict access to the sea. They also look ugly!</li>
<li>Rock armour - only £2000 per metre, cheaper than sea walls. Quick and easy to build and maintain. Can be placed in a variety of areas, in front of sea wall, or sand dune. However, hazardous for people navigating around/over them (slippery), they look ugly and need regular maintenance as storms can move the rocks. They also are imported from Scandinavian countries usually.</li>
<li>Groynes - cheap - £5000 each. Quick and easy to build and maintain. Lasts decades if looked after. Larger beach, so boosts tourism and local economy. However, they are ugly, restrict the supply of sediment elsewhere on the coastline and are very dangerous with shallow water on one side and deep water on another.</li>
<li>Gabions are basically rock cages using local pebbles, which are very cheap and easy to construct (£100/metre). However their metal casing could be a hazard after they break, lasting 20 years.</li>
</ul>
<p>Soft engineering:</p>
<ul>
<li>Beach nourishment is when lost sediment is placed back on the beach. It blends in with the environment and reduces future erosion as more wave energy is dissipated across the beach. It also allows beaches to be larger, attracting more visitors and increasing tourism. However, dredgers are expensive, like several hundred thousand, and the sediment costs millions.</li>
<li>Beach reprofiling is the reshaping of a beach using existing material. For example in Seaford, Sussex, shingle is moved back up the beach after winter storms.</li>
<li>Sand dune regeneration is the creation of new or the amelioration of existing sand dunes. They protect the land from the sea as they are like a barrier. However, it takes years for grass planted to spread and for the dune to mature. During maturation, they are often fenced off and cannot be walked on. There is also no guarantee that they will stay in the same place. Won’t really stop strong waves eroding, either.</li>
<li>Managed retreat is when areas of land is allowed to be flooded. People are moved out and buildings demolished, and farmland flooded when a breach is made. There are obvious benefits and disadvantages, I won’t explain them.</li>
</ul>
<h2 id="river-landscapes">River landscapes</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157224124727296/unknown.png" alt="enter image description here"></p>
<p>As the river moves from the upper course, through the middle course and into the lower course, its cross profile changes. In the upper course, hydraulic action results in high amounts of vertical erosion happening, making the valley deeper and steeper in areas of high relief. The little energy the river has is used to overcome the friction to deepen its channel.</p>
<p>The long profile shows the gradient of the river changing from the source, in mountainous areas, to the mouth, in the sea.</p>
<ul>
<li>
<p><strong>Abrasion</strong> is when small rocks wear down the riverbanks and bed, wearing it down. It increases vertical and lateral erosion.</p>
</li>
<li>
<p><strong>Attrition</strong> is the same as it is in the sea - when jagged rocks smash into each other, making them smoother and smaller if the rock splits. The further the river progresses downstream, the smaller and smoother the rocks.</p>
</li>
<li>
<p><strong>Solution</strong> is the dissolving of rocks like chalk and limestone. It is invisible in the water.</p>
</li>
<li>
<p><strong>Suspension</strong> is held and carried within a river’s flow, including fine, light material like alluvium.</p>
</li>
<li>
<p><strong>Saltation</strong> is when small stones are bounced along the riverbed, depending on the speed of the water flow.</p>
</li>
<li>
<p><strong>Traction</strong> is when large rocks or even boulders are rolled along the riverbed, also known as bedload.</p>
</li>
</ul>
<p>Rivers deposit sediment (called fluvial deposition) when the velocity of the river decreases. Larger  rocks and boulders are the first to be deposited when the velocity decreases, as they require the most amount of energy to move.</p>
<h3 id="upper-course">Upper course</h3>
<p>Erosion: Vertical erosion by hydraulic action.<br>
Transport: Mostly traction moving load.<br>
Deposition: Large boulders and big rocks being deposited<br>
Long profile: Trickles merge into a larger channel, down a steep gradient. Waterfalls and rapids occur.</p>
<h3 id="middle-course">Middle course</h3>
<p>Erosion: Less vertical erosion, more lateral. Attrition and abrasion common.<br>
Transport: Suspension, less traction.<br>
Deposition: Increased levels, especially on meander bends where there is high friction.<br>
Long profile: Deeper channel, increased volume, gradient flattening.</p>
<h3 id="lower-course">Lower course</h3>
<p>Erosion: Hydraulic action increases lateral erosion (sideways), as seen in meanders. Not much vertical erosion at all<br>
Transport: Suspension and solution. High amounts.<br>
Deposition: Fine material and alluvium deposited as the main fluvial process. More important than erosion<br>
Long profile: Channel is at its widest, deepest, flattest. May be tidal. Brackish water.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157255183564840/unknown.png" alt="enter image description here"></p>
<p><strong>How are V-shaped valleys formed? [4 marks]</strong></p>
<p>V-shaped valleys are formed in upland areas. Streams are very small and have low discharge, while also having a large, angular bedload. Through gravity and traction, the dominant type of erosion is vertical, resulting in steep sides of the river channel, which are now unsupported. Through chemical weathering from rain, there may be a sudden mass movement of this loose material, sliding this rock and material into the river channel. This is repeated, and over time, a V-shaped cross-section is formed.<br>
4/4 marks given.</p>
<blockquote>
<p>Specification: The <strong>upper course</strong> has characteristics and formation of landforms resulting from erosion.</p>
</blockquote>
<p><strong>Interlocking spurs</strong> are formed in the upper course of the river. The geology in these areas is mostly hard rock like granite. Freeze-thaw weathering broadens out the valley channel. Repeated many times, rocks fall into the channel. These eroded obstacles are in the way of the river, which takes the quickest route which is on either side of these obstacles, or if there are areas of harder rock. Over time, this will result in the river channel bending around.</p>
<p>Waterfalls and gorges form in he upper course too.</p>
<ol>
<li>The soft rock below is eroded quicker than the hard rock above.</li>
<li>As erosion continues, the hard rock is undercut forming an overhang.</li>
<li>Abrasion and hydraulic action erode to create a plunge pool.</li>
<li>Over time this gets bigger, increasing the size of the overhang until the hard rock is no longer supported and it collapses.</li>
<li>This process continues and the waterfall retreats upstream.</li>
<li>A steep-sided valley is left where the waterfall once was. This is called a gorge.</li>
</ol>
<blockquote>
<p>Specification: The <strong>middle course</strong> has characteristics and formation of landforms resulting from erosion, <strong>and deposition</strong>.</p>
</blockquote>
<p>A meander is a bend in a river.  Fast flowing water on the outside causes lateral erosion through abrasion and hydraulic action, forming a river cliff.  Near it is the point at where the water is moving the fastest, the thalweg.<br>
On the other side, sand and pebbles are deposited due to high friction, forming a slip-off slope. Water here is slow.<br>
The corkscrew motion of the fastest flow of the water is helicoidal.</p>
<h4 id="im-not-explaining-how-an-oxbow-lake-is-formed-because-its-the-staple-of-geography-and-should-be-second-nature-to-all-of-you-lol"><a href="https://www.bbc.co.uk/bitesize/guides/ztpkqty/revision/2">I’m not explaining how an oxbow lake is formed because it’s the staple of Geography and should be second nature to all of you lol</a></h4>
<p>When an oxbow lake evaporated, a ‘meander scar’ is left behind.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977983132164816996/meander1.png" alt="meander"><br>
<img src="https://cdn.discordapp.com/attachments/970765476688961616/977983131741224990/meander.png" alt="enter image description here"><br>
<em>What’s actually happening, visualised.</em></p>
<blockquote>
<p>Specification: The <strong>lower course</strong> has characteristics and formation of landforms resulting from <strong>deposition</strong>.</p>
</blockquote>
<p>Levées are super cool in my opinion. They are naturally raised riverbanks found in the middle and lower courses. When the river floods, velocity is reduced and therefore sediment is deposited. The heavy stuff is deposited close to the river channel, being harder to transport; smaller stuff is deposited further away. Sometimes the levées get so high the river flows higher than the flood plain.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/977983131430821888/levee.jpg" alt="enter image description here"><br>
<em>My beautiful levée…</em></p>
<p><strong>Flood plains</strong> are large expanses of flat, eroded land either side of a river prone to flooding. They are formed due to both erosion and deposition. Floodplains are often agricultural land, as the area is very fertile because it’s made up of alluvium (deposited silt from a river flood).</p>
<p><strong>An estuary</strong> is where the river meets the sea. The river here is tidal and the water is brackish (a mixture of saltwater and freshwater); when the sea retreats the volume of the water in the estuary is reduced. When there is less water, the river deposits silt to form mudflats which are an important habitat for wildlife. A river delta is a triangular formation in the mouth of a river where sediment has been deposited. The River Severn’s estuary is 3.2km wide.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157276029222972/unknown.png" alt="enter image description here"><br>
<em>Finally, the last section on paper 1.</em></p>
<p>There are a wide variety of reasons which affect flood risk.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/978014616615518208/3-s2.0-B9780124095489053562-f05356-02-9780124095489.jpg" alt="enter image description here"><br>
<em>With a little extra information, but most of it is useful to know.</em></p>
<p>Flood hydrographs are used to show the relationship between precipitation and discharge. On the x axis is the time, usually in hours. The average peak rainfall to peak discharge time is usually 12 hours. On the y axis is the discharge, measured in cumecs (cubic metre per second) of the river channel. A high peak flow in a short lag time is the worst: there will be lots of flooding potential; people have little time to prepare for it. (check my punctuation use there please)</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/978028985734795294/d7058eb1da075973f99bfff1273051f8fad79c99.gif" alt="enter image description here"></p>
<p>Factors affecting flood risk:</p>
<ul>
<li><strong>Prolonged rainfall</strong> - if it rains for a long time, the land can become saturated. If there is more rainfall it cannot be soaked up, it runs along the surface, increasing surface run-off. This results in water quickly being moved into the river channel, reducing lag times, as it cannot infiltrate into the land. The faster the water reaches the river, the more likely it is to flood.</li>
<li><strong>Heavy rainfall</strong> - if there is heavy rainfall there is less chance of it infiltrating the land, so it runs off into the river immediately.</li>
<li><strong>Relief</strong> - a steep valley is more likely to flood than a flatter valley because the rainfall will run off into the river more quickly, and it cannot be absorbed by the soil.</li>
<li><strong>Geology</strong> - permeable rocks allow water to pass through pores and cracks, whereas impermeable rocks do not. If a valley is made up of impermeable rocks, there is a higher chance of flooding as there is an increase in surface run-off.</li>
<li><strong>Vegetation</strong> - trees and plants absorb water, called interception. Lots of vegetation reduces flood risk. Deforestation will increase the flood risk, as the water cannot be intercepted and flow into the river.</li>
<li><strong>Urban land use</strong> - when an area surrounding a river is built on, the anount of impermeable surfaces increase, like concrete and tarmac. Drains and sewers take water directly into the river channel, increasing flood risk.</li>
</ul>
<h2 id="river-management-strategies">River management strategies</h2>
<h3 id="hard-engineering">Hard engineering</h3>
<p>Involves building artificial structures which try to control rivers.</p>
<ul>
<li>
<p>Dams and reservoirs -  the dam traps water, which builds up behind it, forming a reservoir. Water can be released in a controlled way. Can be used to produce electricity by passing the water through a turbine within the dam. Reservoirs can attract tourists. However, very expensive.  Habitats are flooded often leading to rotting vegetation. This releases methane which is a greenhouse gas. People in the flooded area can be displaced.</p>
</li>
<li>
<p>Embankments - raising the banks of a river means that it can hold more water. Cheap with a one-off cost, allows for flood water to be contained within the river. However, they look unnatural, and can increase flood risk downstream because of the increased water velocity.</p>
</li>
<li>
<p>Flood relief channels - the floodwater flows into the relief channel and is taken either to an area where it can be absorbed, or re-enters the river further down its course. They remove excess water from the river channel to reduce flooding. However, they are expensive to build; if water levels continue to rise, the relief channel may also flood.</p>
</li>
</ul>
<h3 id="soft-engineering">Soft engineering</h3>
<ul>
<li>
<p>Flood warnings and preparation - people have time to protect their properties (like with sandbags) and many possessions can be saved, resulting in fewer insurance claims. However, some people may not be able to access the warnings, flash floods may happen too quickly for a warning to be effective. Also they do not actually stop the land from flooding - they just warn people that a flood is likely.</p>
</li>
<li>
<p>Floodplain zoning - when less economically important industries are placed on the flood plain or closer to the river. More expensive buildings and land uses are further away from the river, so have a reduced flood risk. Less damage is caused, leading to fewer insurance claims. However, it is not always possible to change existing land uses.</p>
</li>
<li>
<p>Planting trees reduces the risk of flooding as trees intercept water by taking it up through their roots.</p>
</li>
<li>
<p>River restoration is when a river that has been hard engineered is restored to a natural channel</p>
</li>
</ul>
<h2 id="case-study-morpeth-floods">Case study: <a href="https://www.google.com/maps/place/Morpeth/@55.1685877,-1.7038447,14.25z/data=!4m5!3m4!1s0x487d8b3f0af2874b:0xc3bf2c67f1e7bd99!8m2!3d55.16875!4d-1.687493">Morpeth</a> floods</h2>
<p>Morpeth lies in a meander bend. It is in northeast England. Basically a big flood happened in September 2008 which was 4 metres above normal river levels at its peak. The ground was already saturated from summer rains, leading to increased surface runoff, and had a short lag time of 8 hours. It is on the lower course of the river, on a flood plain.</p>
<p>Shops, homes and many regions of the town were flooded and destroyed. Now, higher flood walls have been implemented, and a huge upstream reservoir has been created upstream capable of holding 1 million metres cubed of water. Amazing!</p>
<p><a href="https://www.coolgeography.co.uk/gcsen/PL_Morpeth_Flood_Management.php">More notes</a></p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/978038948196671588/unknown.png" alt="enter image description here"></p>
<p>Out and about with Rob in Morpeth: <a href="https://www.youtube.com/watch?v=XoW6gIDwBSk">https://www.youtube.com/watch?v=XoW6gIDwBSk</a></p>
<h1 id="paper-2-challenges-in-the-human-environment">Paper 2: Challenges in the human environment</h1>
<h3 id="i-have-finally-completed-it">i have finally completed it</h3>
<h4 id="thank-you">thank you</h4>
<h5 id="now-say-thanks-">now say thanks :)</h5>
<h6 id="you-must-get-good-grades-now">you must get good grades now</h6>
<p>btw not everything is 100% covered in detail but 95% of the specification is 1:1 matched</p>
<h3 id="notice-from-aqa"><strong><a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/changes-for-2022">NOTICE FROM AQA</a></strong></h3>
<p>Optionality will be introduced into 8035/2 Paper 2: Challenges in the human environment.</p>
<ul>
<li>Students must answer  <strong>all</strong> questions in Section A: Urban issues,</li>
<li>They will then choose to answer  <strong>either</strong> Section B: The changing economic world or Section C: The challenge of resource management.</li>
<li>The total time allocation for Paper 2 will be reduced from 1 hour 30 minutes to 1 hour 15 minutes.</li>
<li>A total of  <strong>5 marks</strong> will be introduced to <strong>Section C</strong>. These marks could appear anywhere in Section C.</li>
<li>In Section B, the  <strong>9-mark</strong> question will be replaced with a  <strong>6-mark question</strong>. To keep the  <strong>total of 30 marks</strong>,  <strong>3 marks</strong> will be introduced  <strong>elsewhere in Section B</strong>.</li>
<li>The total marks for Paper 2 will be reduced from 88 marks to 63 marks (a removal of 25 marks).</li>
<li>Sections B and C will now have equal weighting worth 30 marks each.</li>
<li>The highest tariff question in both Section B and C will be 6 marks.</li>
<li>There are 3 spelling, punctuation and grammar (SPaG) marks that will appear in the 9-mark question at the end of Section A.</li>
</ul>
<p>If students choose to answer Section C the normal rubric will apply, where students must answer question 3 and  <strong>one</strong>  of questions 4, 5 or 6 (food, water or energy).</p>
<h2 id="section"></h2>
<p><strong>tl; dr:</strong> there’s a 9+3 marker in Urban issues, and there’s only going to be 6 markers in food/resource management. don’t answer changing economic world. don’t answer water and energy.</p>
<h1 id="section-a-urban-issues-and-challenges">Section A: Urban issues and challenges</h1>
<p><em>In this section, students are required to study all the themes.</em></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157547186815016/unknown.png" alt="enter image description here"></p>
<p>By 2030, it is expected that over 60% of the world’s population will live in cities. Currently, there are 33 megacities (cities with a population &gt; 10 million) and the closest one to us is 🥖 Paris. London is not a megacity, as its population is only predicted to reach 10 million by 2035. After and during the Second World War, many people and children were evacuated from London, so the population shrunk by 2 million from 1940 (at 8.5 million) to 1990. Since then, the population has gradually been increasing, and it’s currently at around 9.2 million. (We’ll have to wait for the census results to be sure!)</p>
<blockquote>
<p>In 1975, there were just 4 megacities - Mexico City, New York City, Sao Paulo and Tokyo!</p>
</blockquote>
<p>The largest city in the world is Tokyo, Japan, with over 36 million inhabitants (and decreasing). 4 billion people live in urban areas worldwide, and ~12% of these are in megacities. Most of the urban population live in cities with &lt; 5 million residents.</p>
<h3 id="factors-affecting-urbanisation">Factors affecting urbanisation</h3>
<p>The highest rates of urbanisation are in LICs and NEEs are in Asia and Africa. The majority of their populations remain in rural areas, so more are able to move into urban environments <strong>(high rural-urban migration levels)</strong>, and populations are younger, contributing to a high rate of natural increase (more babies).</p>
<p>People and their families may choose to migrate from the countryside into the cities because of pull factors. This includes better, more consistent and well-paid jobs, and opportunities for better education, as well as more facilities available such as hospitals. Because cities have better healthcare than rural areas (usually) death rates are lower and life expectancy is higher.<br>
Cities are also historically situated on rivers (like London<sup>1</sup> and Paris) and coasts (Lagos, New York City, Mumbai) which allow high levels of trade. This allows economic development as more trade is better for business. This economic growth attracts higher-skilled, higher-paid jobs which, in turn, attract more people (could be from rural areas). This cycle is repeated with the new ideas people have attract more economic development.</p>
<p>In richer countries and continents like Europe, Oceania and North America, the rates of urbanisation have significantly slowed down, as most people have already moved into urban areas thanks to industrial revolutions which have already occurred.  Due to countries’ wealth, people in these HICs live for longer and tend to have fewer babies, which could lead to natural decrease in the future.</p>
<p><a href="https://www.google.com/maps/@22.7316438,113.7223091,182424m/data=!3m1!1e3">China has plans to merge these cities on the Pearl River Delta into one huge megacity with a population of over 140 million, covering 25x more land than London.</a></p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157575389311006/unknown.png" alt="enter image description here"></p>
<h2 id="case-study-lagos-nigeria">Case study: Lagos, Nigeria</h2>
<h3 id="overview">Overview</h3>
<p>Lagos is the most populous city in Nigeria, and Africa as a whole. However, it is common knowledge by the vox populi that it is by no means the safest place to live. <sup>2</sup></p>
<p>In 1991, the government of Nigeria moved out of Lagos to Abuja; to this day Abuja is the capital city. However, Lagos has remained critical to the Nigerian economy, with over 80% of the country’s industry based in it, thanks to its international airport, seaport and interconnecting main roads from neighbouring countries like Benin.</p>
<p>Its population is estimated at 19 million, generating a quarter of Nigeria’s wealth. Large companies are headquartered here, and is the main financial centre in West Africa.  Nollywood <sup>3</sup> is the Nigerian film industry, again based and thrives here. Alone, this emerging industry is responsible for 2.3% of Nigeria’s GDP.</p>
<h3 id="growth">Growth</h3>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/981175164681211914/Lagos-Growth-Map.jpg" alt="lagos growth"><br>
<em>How the area surrounding Lagos has grown over time. Credit <a href="https://www.internetgeography.net/topics/the-growth-of-lagos/">Internet Geography</a></em></p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/981175164911890503/Lagos-Population-Graph.png" alt="enter image description here"><br>
<em>The current, past and future predicted population of Lagos. Credit <a href="https://www.internetgeography.net/topics/the-growth-of-lagos/">Internet Geography</a></em></p>
<p>The real force for Lagos’ increasing population is rural-urban migration. This is because many people are being forced to leave their countryside jobs and homes due to bad harvests and illness (push factors) and brought to the city by the prospect of better-paid work, education opportunities and better healthcare (pull factors).</p>
<p>Push factors include:</p>
<ul>
<li>Poor education and healthcare services (if any)</li>
<li>Climate change making harvests more unpredictable and more droughts</li>
<li>Low farming wages</li>
<li>Shortage of land due to population increase</li>
<li>Land continually being degraded due to continual farming and oil pollution</li>
</ul>
<h3 id="opportunities-and-challenges">Opportunities and challenges</h3>
<p><strong>Education</strong> is more available - many schools and universities are being built. Children are given 9 years of basic education (increasing literacy rates from 65 to 95%). Furthermore, healthcare is better inside Lagos than in rural areas - hospitals are more frequent inside the city, so people can get help if they are ill. Even though most treatments aren’t free, it’s better than not having these facilities.</p>
<p><strong>Energy</strong> is an issue in Lagos due to the rapidly increasing population. As a result, when the grid fails, many homes and businesses are forced to rely on diesel <strong>generators</strong>. Obviously these cannot be used by poorer residents, who instead rely on tapping into the network which is unsafe.</p>
<p><strong>Water</strong> is an issue too as only wealthy residents can afford a piped water supply. This is a total of just 10% of the population. There is huge strain on the infrastructure to provide for all homes and, despite improvements, many people are often forced to buy from street vendors which may be <strong>contaminated</strong> - this is part of the informal economy. On buying from the informal economy, taxes are not paid, which cannot be reinvested in the infrastructure. People have been digging boreholes into the groundwater, but the water from the lagoon is salty and heavily polluted. Faecal bacteria have entered the water supply and diseases like cholera and dysentery have been increasing.</p>
<blockquote>
<p>Unemployment is a serious issue as there is no unemployment benefit in Nigeria, so people are forced to find any available work, like in the informal economy.</p>
</blockquote>
<blockquote>
<p>The <strong>informal economy</strong> has many negatives, being unregulated, dangerous and poorly paid. 40% of workers in Lagos are paid under £1 per day! This has severe consequences: over 60% of the population live in slums like Makoko, building their homes on any bit of available land with any material which they might have. Despite this, levels of crime are falling but ‘Area Boys’ may patrol streets in gangs and violence may ensue.</p>
</blockquote>
<p>Lagos has extremely <strong>dirty air</strong> with dangerous levels of N<sub>2</sub>O and small dust particles (particulate matter). These are both hazardous to human health and can cause diseases, like asthma. This is being fuelled by increasing car usage in the city (20% of homes have one). On top of this, <strong>congestion</strong> and traffic in the city is terrible, with the average commuter spending 3 hours a day in traffic. To combat this, the government are building an integrated transport system, linking railways and roads. A waterway network with ferries and boating across the lagoon instead of taking cars is also being created. There is also a separate lane for buses from the northern suburbs travelling into Lagos Island. This will improve travel times for over 25% of people who commute daily, a total of 200,000 people.</p>
<p><strong>Waste</strong> is an issue too. With waste collecting infrastructure from the 1970s, where the population was 10x smaller, Lagos now produces over <strong>10,000 tons</strong> of solid waste per day! The Olusosun landfill site receives the bulk of this, with many hundreds of people working there and even building homes from the trash to sort rubbish and find valuables. However, fires are likely, with natural gases building up below the dump. E-waste is also imported from HICs which contribute to <strong>toxic gases</strong> being released. In total, air pollution is 5x higher than the internationally agreed limit.</p>
<p><a href="https://www.google.com/maps/@6.4979476,3.3912366,2236m/data=!3m1!1e3">Makoko on Google Maps</a></p>
<h3 id="economic-opportunities"><strong>Economic</strong> opportunities</h3>
<p>More jobs are available in Lagos than in anywhere else in Nigeria, responsible for 25% of the country’s GDP. Lagos itself is a large manufacturing hub - being a seaport also helps this, and is culturally significant with Nollywood. Furthermore, technology is improving in this area significantly, with large companies investing in the area resulting in the improvements of infrastructure like fibre optic broadband. Despite the inequalities, Lagos has a thriving, highly-educated and skilled workforce, thanks to its top universities.</p>
<p>A new city on the south side of Lagos, in the Gulf of Guinea, is being made. Called Eko Atlantic, it is a land reclamation project, which will be home to the new financial hub of Western Africa. Dubbed ‘the Dubai of Africa’ from this <a href="https://www.google.com/maps/reviews/@6.41311,3.4108255,3499m/data=!3m1!1e3!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURLb3NXTS1nRRAB!2m1!1s0x0:0x49d67b9bfa3ba269?hl=en-US">google maps reviewer</a>, many international investors are looking forward to the project’s completion. It will be home to over 250,000 people and employing a further 150,000 in skyscrapers and high-rise office buildings. This will be possible thanks to its independent electricity grid and water desalination plants.</p>
<p>6.5km of sea wall has been built to protect the project from the sea and erosional processes. <a href="https://www.ekoatlantic.com/education/sea-wall/">Website</a></p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/981240067601338398/EkoAtlantic.jpg" alt="enter image description here"><br>
<em>Eko Atlantic’s 6,500,000m<sup>2</sup> of land, reclaimed.</em></p>
<h3 id="urban-planning-for-the-urban-poor-makoko">Urban planning for the urban poor (Makoko)</h3>
<p>The Nigerian government’s goals are to attract private investors which will help them create a new city, creating highly-paid jobs and new, luxury homes.</p>
<p>Many of Makoko’s tin and wooden houses are built on stilts. However, during the rain season, many buildings on land and low-lying areas are submerged, including the main school.</p>
<p>Built in 2014, the Makoko Floating School is environmentally friendly, having photovoltaic solar panels, natural ventilation, green areas and a rainwater collection system. As it floats on 256 recycled plastic barrels, the platforms rise and fall with the sea level, futureproofing these structures against sea level rise, augmented by climate change.  Finally, there are several compost toilets, which is better for the environment as all sewage is usually thrown into the lagoon. (Makoko people eat the fish, so that’s not good…)<sup>4</sup></p>
<p>The school can hold up to 100 students with 4 classrooms and 2 workshops on the upper storey, and a communal, open space on the lower level. In total, there is 100m<sup>2</sup> of space. Its triangular shape and low centre of gravity helps keep the structure stable.</p>
<p>Unfortunately, the school collapsed during a storm in 2017. The idea has continued to remain in developers’ minds and ‘the Lagos Water Communities Project’ is an idea for these poorer communities. Compared to the Eko Atlantic’s several million dollar sea defence wall, this low-cost scheme may significantly ameliorate the lives of the vox populi in Makoko and Lagosian slums.</p>
<blockquote>
<p>The floating school acted as a proof-of-concept, not a final, fixed structure. It would have been able to be reconfigured as a house, community space, shop and more if the final version was able to be structurally secure.<sup>6</sup></p>
</blockquote>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/981274210334830662/Lagos_WATER_COMMUNITIES_22-960x550.jpg" alt="enter image description here"><br>
<em>An artist’s impression on what a floating community would look like. Credit: <a href="https://www.nleworks.com/case/lagos-water-communities-project/">NLÉ</a></em><br>
<img src="https://cdn.discordapp.com/attachments/970765476688961616/981274536689422346/NLE_LAGOS_WATER_COMMUNITIES6-960x550.jpg" alt="enter image description here"></p>
<h2 id="section-1"></h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157598076293120/unknown.png" alt="enter image description here"></p>
<p>In the UK, the population is vastly distributed. The key to this is the northwest/southeast divide. In the south east, cities are increasing in populations, especially as the south east has the fastest growing economy in the UK. However, in the northeast, Sunderland has actually lost over 2% of its population from 2004 due to the decline of industry which was historically popular, leading to less job opportunities, forcing people to move away to find work.</p>
<blockquote>
<p>In London, the population density can be up to 5000/km<sup>2</sup>. In contrast, northern Scotland has a population density of less than 10/km<sup>2</sup>!</p>
</blockquote>
<h2 id="case-study-london">Case study: London</h2>
<p>London is very important nationally and internationally. It is regarded as the ‘finance hub’ of the UK, with Barclays, HSBC and Lloyd’s Bank being headquartered here. It was built by the Romans as it is on the River Thames - allowing trade from other nations. In the past, due to the river being tidal, ships are able to travel up the Thames to London’s docks. In turn, the business opportunities provided by its proximity to the seas attracted more people to the area.</p>
<blockquote>
<p><strong>Gentrification</strong> is the term used to describe the prices of rising house prices in an area as a result of higher wages and more modern amenities.</p>
</blockquote>
<p>As a result from high levels of migration from the 19th Century, many from major British colonies like India and Nigeria, London is only made up of 45% White British nationals, and 37% not being born in the UK. Furthermore, its population is also larger and younger than any other UK city. This is because young(er) people from 20-40 like university students move to London for better job opportunities, spurred on by higher pay due to the higher cost of living. These younger people are also more likely to have children, contributing to higher natural increase, while migration itself is fairly low now. After Brexit, the restriction of free movement within the EU will most likely lower this migration trend even further in the UK. In 3 boroughs, white people are in the minority!</p>
<blockquote>
<p>Because of high migration and a diverse community, London is seen as a  ‘melting pot’ for cultures. Entrepreneurs are more likely to create diverse shops to account for this, such as halal butchers, and services are also more likely to accommodate these different cultures, for example mosques.</p>
</blockquote>
<p>London also has a wide range of <strong>recreation and entertainment</strong> available. There are cultural attractions like the British Museum and the Natural History Museum, tourist attractions like the Houses of Parliament and Buckingham Palace, venues like the O<sub>2</sub> and Wembley Stadium and loads of bars and restaurants.</p>
<p>London also has a highly developed <strong>integrated transport system.</strong> This is when all modes of transport link to each other - responsible for the high use rate of public transport, at 25%.  There is the London Underground, typical red double-decker buses, and the Docklands Railway. Recently, the Crossrail project has contributed to the reduction of journey times throughout London in half, for example Liverpool Street to Heathrow now takes 35 minutes from over an hour.</p>
<p>The Oyster Card provides low-cost efficient travel basically anywhere in the city. Boris bikes are also used to provide an integrated cycle network, providing 2.5% of London’s journeys daily, or 750,000. Furthermore, private transport is also used in London significantly, with it being a travel hub where many motorways converge on its orbital motorway, the M25. There are also 5 international airports, most notably Gatwick, Heathrow and Stansted. They handled 177 million passengers in 2018, or 60% of the UK’s air traffic.<sup>5</sup> In 2014, 75 million passengers used the Tube, with a total of 1,300 million journeys in that year.</p>
<p>Urban greening is how green spaces are increased and maintained in cities. For example, London is one of the most green cities in the world. Around half (47%) of the city is green space, including parks, gardens and woods. Hyde Park is a large public place in central London. Councils also run smaller parks in other boroughs, as the Government in the 1800s believed that fresh air was essential for the population.</p>
<p>These green spaces are beneficial to the city:</p>
<ul>
<li>oxygen is produced, cleaning the ear from CO<sub>2</sub>;</li>
<li>trees intercept water flow, reducing flood risk;</li>
<li>parks and woodlands act as a habitat for wildlife;</li>
<li>allotments can be used to grow food.</li>
</ul>
<p>To further improve these green spaces, a ‘green grid’ has been created to link open spaces throughout London, reducing animal deaths. London was also given the title of a ‘National Park City’ - the first in the world - in 2019, with the goal of improving all aspects of outdoor life and enjoyment.</p>
<h3 id="shoreditch-london">Shoreditch, London</h3>
<p>Shoreditch is a great example of an area which has undergone gentrification. Older, industrial buildings like factories have been demolished and replaced by higher value flats, offices and restaurants. In the centre of the area, the roundabout has been nicknamed Silicon Roundabout due to the amount of technological companies who have interested in the area, like Google and Microsoft. As a result of this amelioration, jobs have been created in these new industries like art and full-stack developers (these are the ones who make front end and back end design, so like web design and database maintenance).</p>
<p>As older residents are moving out due to increased prices, younger and more professional workers take their place. Entrepreneurs have responded to this by creating new, modern themed cafés for day traffic, and clubs and nightclubs for the night audience.</p>
<h3 id="dockyard-development--changing-employment">Dockyard development &amp; changing employment</h3>
<p>The docks were built through the 20th century to import and export the huge amounts of raw materials, being England’s busiest city. Industries were built in close proximity to these docks to process the raw materials. However, by the 1970s, catalysed by the Second World War, many industries were in decline and also the docks. 10 years later most docks were empty, and do were the factories.</p>
<p>The London Docklands Development Corporation, ran by the Government, was set up in 1981. As a result of the regeneration which was planned, many private companies invested in the area. By 1991, the first stage of improvements were completed; now it is known as Canary Wharf. Over 100,000 people now work there, with the UK’s major old banks headquartered here.</p>
<p><img src="https://cdn.discordapp.com/attachments/970765476688961616/983113404715774082/flyover_resize_3_ezgif.com.gif" alt="Canary Wharf Flyover"><br>
<em>Canary Wharf from <a href="https://www.google.com/maps/place/Museum+of+London+Docklands/@51.4972498,-0.0283871,433a,35y,49.5h,63.79t/data=!3m2!1e3!5s0x487602b9e3219699:0x8bd79f7ec55dbb5f!4m5!3m4!1s0x487602c7b0543655:0xfff66a923afecf31!8m2!3d51.5075598!4d-0.0238525">Google Maps</a></em></p>
<h3 id="urban-challenges--urban-sprawl">Urban challenges &amp; urban sprawl</h3>
<p>London’s population is growing at 5x the rate of houses being built, with a population increase of 100,000 per year. As a result, there is a housing shortage throughout London and south-east England, augmenting house prices. In 2020, there were 170,000 homeless in London, not helped by COVID making people redundant.</p>
<p>To combat this, either greenfield or brownfield sites need to be built on.</p>
<p>Greenfield sites:</p>
<ul>
<li>contribute to <strong>urban sprawl</strong></li>
<li>are usually from farmland, which produces food, or recreational land</li>
<li>can destroy natural habitats</li>
<li>are unlikely to turn back to countryside</li>
<li>are fairly cheap due to the rurality</li>
</ul>
<p>Brownfield sites:</p>
<ul>
<li>reduce the need for <strong>urban sprawl</strong></li>
<li>are more readily available due to the decline of industry</li>
<li>may require buildings to be demolished prior to construction, but reduce dereliction</li>
<li>can improve the pre-existing urban environment</li>
<li>are more expensive due to usually being in rural areas</li>
<li>may require the land to be decontaminated from chemicals and waste</li>
</ul>
<p>Urban sprawl is the unplanned, rapid growth of urban areas. To combat this, many cities including London established a ‘green belt’ - an area around the city which has very strict planning permission. This has preserved areas of farmland and woodlands around London.</p>
<blockquote>
<p>Being able to plan and control housing developments is why almost 50% of London’s land is ‘green’ and why there is almost a 1:1 resident: tree ratio!</p>
</blockquote>
<p>However, this has had unintended consequences. The average house price in London is over double what it is in the rest of the UK, and rising rapidly. Many campaigners are pressuring the Government for less economically valuable areas to be used as greenfield sites to relieve the pressure on London’s housing crisis.</p>
<p>Another result of the green belt is the growth of commuter settlements around London. Reading is an example of this, being just a 30 minute train journey into the City of London (right in the middle) and outside the green belt, this has attracted many thousands of people and families to the town. This results in the spread of housing estates and business areas spreading into the countryside surrounding. Some may argue that this completely goes against the purpose of the green belt in the first place! (potential 9 marker)</p>
<h3 id="the-lower-lea-valley">The Lower Lea Valley</h3>
<blockquote>
<p>Alternately known as the place where the Olympic Park was built for 2012. (Stratford)</p>
</blockquote>
<p>This area, prior to its restoration, was heavily contaminated with chemicals from industry. The industrial buildings were derelict and overgrown. On the other hand there were a couple of functioning industrial areas employing around 5,000 workers among 250 business.</p>
<p>The London 2012 Olympic Legacy was a plan to ensure the Olympic Games had significant long term benefits for the area.</p>
<p><strong>ECONOMIC benefits</strong><br>
Stratford received a Tube station to connect it to the rest of London. It is now the second most connected area of the city! The Olympics directly resulted in £9 billion for east London, and Lloyds Bank estimated that another £10 billion will be generated from the Olympics. The media centre was sold to a data company, Infinity, who store data for large corporations. The total cost for the Olympics was £8.77 billion - from taxpayers.</p>
<p>However, the stadium cost £700 million, which was 3x the estimate.</p>
<p><strong>SOCIAL benefits</strong><br>
The Athletes’ Village created for the Olympians has been repurposed (<em>not demolished</em>) as a housing estate called the East Village. Around 1,300 homes were made, most of which categorised as ‘affordable housing’. In total 8,000 people will be able to be housed. A school was also opened in the grounds of the park, relieving the shortage of space before it was built. The new pools built for the Olympics are now being used for this school, as well as the community, and also athletes training.</p>
<p>However, properties for poorer residents were demolished, including 450 flats. Few jobs were created for local residents during construction, and many thought it was a missed opportunity to train unskilled workers. As a result, many people round still live in poverty and in Tower Hamlets unemployment actually increased.</p>
<p><strong>ENVIRONMENTAL</strong></p>
<p>Many grounds in the Olympic Park have been kept as parkland for the public. Ponds, woodlands and artificial otter holes have been created in the area. The stadiums were made from 25% recycled material, and green spaces were placed along the River Lea to improve its water quality. It was built on over 500 acres of brownfield site, from derelict and contaminated land to newer, modern, loved areas. Over 300,000 plants were specially selected for biodiversity and sustainability in the urban environment.</p>
<p>However, many materials for the park were sourced from overseas, whilst the games produced over 3 million tons of CO<sub>2</sub>.</p>
<blockquote>
<p>You don’t need to remember all the precise stats and figures - just a few - I have rounded some figures and simplified them a bit to make them easier to remember.</p>
</blockquote>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971157620822007908/unknown.png" alt="enter image description here"></p>
<p>Sussy urban living in East Village (again around the Olympic area).</p>
<p>Local bus and transport services connect to the London Underground, as well as Europe. Residents in the East Village pay extra for car parking places, encouraging cycling and walking.</p>
<p>Water is 50% less used than other urban areas, achieved by water recycling. Rainwater is recycled and filtered through ponds before being used for toilet flushing and irrigation. Green roofs on buildings also slow down rates of drainage, mitigating flood risk, and allowing more water to be used for irrigation or other conservation systems.  (Drinking water is different!)</p>
<p>Energy is also conserved as it makes use of the <strong>combined heat and power</strong> system.  It basically generates electricity, producing heat from burning biomass. This heat can be used to heat water. As it is piped through the village, it gently cools, and this cool water is piped back into the CHP station.</p>
<p>Green spaces have also been created. There are green roofs on apartments blocks, a wetland pond area, 10 hectares of open green space, a large central park and an orchard with fruit trees.<sup>7</sup></p>
<h1 id="section-c-the-challenge-of-resource-management">Section C: The challenge of resource management</h1>
<p>In this section, students are required to study  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Resource_management_1_2_3_1">Resource management</a>  and  <strong>one</strong>  from  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Food_1_2_3_2">Food</a>  or  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Water_1_2_3_3">Water</a>  or  <a href="https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/subject-content/challenges-in-the-human-environment#id-Energy_1_2_3_4">Energy</a>.</p>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971159119492943902/unknown.png" alt="enter image description here"><br>
<em>You need to learn about all of them as an overview, and food in more detail</em></p>
<p>Simply put, the more availability to food, water and energy a country has, the better the citizens’ well-beings are.</p>
<p>Quick summary of everything overall:</p>
<p>Food:</p>
<ul>
<li>
<p>There is a growing demand for high-value food exports from low income countries and an all-year demand for seasonal food and organic produce. As a result of this, many countries, especially in Africa, have less land available for locals to cultivate on and support their families in. It reduces the water supply in areas where this is already unreliable - e.g. Kenya is on the equator, and many beans come from there. This increases the likelihood of droughts and desertification (paper 1 knowledge).</p>
</li>
<li>
<p>Carbon footprints are higher when outsourcing food supply to other countries, due to the increasing number of ‘food miles’ travelled. To combat this, there are moves towards local sourcing of food, with ‘locally sourced’ and ‘Red Tractor’ labels. Farm shops throughout the countryside also are well known to grow food on-site, albeit at a higher price.  Organic produce is also gaining popularity which uses natural fertilisers and mechanical weeding, which does not pollute the water supply, and chemicals are not being ingested by humans who eat the food.</p>
</li>
<li>
<p>There is a trend towards agribusiness. This is when a farm is run large-scale with money-intensive commercial activities. This has resulted in fields increasing in size, with smaller farms being combined and the increased mechanisation of farm equipment. It also relies on pesticides and fertilisers more which has a negative impact on l’environnement and reduces employment. The positives include cheaper prices as food is more available and overhead costs have decreased, and skilled jobs with technology are provided to skilled workers.</p>
</li>
</ul>
<p>Water:</p>
<ul>
<li>There is a changing demand for water in the UK. In northern areas, there is a high supply of water but low demand for it - the population density is low, with there only being a few cities. The reason why there is a lot of water here is because there is a lot orographic rainfall (mountains). In the south and southeast, there are low levels of waterfall and high levels of water stress, so transfer schemes are in place like dams and reservoirs on rivers to allow water to be moved from areas of water surplus to areas of water deficit - usually pumped.</li>
</ul>
<blockquote>
<p>The average person uses 150 litres of water in the UK</p>
</blockquote>
<ul>
<li>This can only be done if the water quality is high and pollution is managed - toxic waste can poison wildlife, and eutrophication can kill plants due to plant life building up so much in the river or lake, reducing oxygen levels, suffocating the animals. Raw sewage and other waste must be treated at a treatment plant. It can also be managed by legislation, education campaigns, pollution traps and green roofs and walls.</li>
</ul>
<p>Energy:</p>
<ul>
<li>the changing energy mix – reliance on fossil fuels, growing significance of renewables</li>
<li>reduced domestic supplies of coal, gas and oil</li>
<li>economic and environmental issues associated with exploitation of energy sources.</li>
</ul>
<h2 id="food">Food</h2>
<p><img src="https://media.discordapp.net/attachments/970765476688961616/971159146554613820/unknown.png" alt="enter image description here"><br>
<em>Food, yummy. I really couldn’t live without it.</em></p>
<p>Food security is defined as ‘when all people at all times have access to sufficient, safe, nutritious food to maintain an active and healthy life’.</p>
<p>Worldwide, enough food is produced for everyone, but it is distributed differently. In mostly Africa and Southern Asia, there are high risks of food insecurity. In HICs, over 25% of the diet is made from meat, fish, eggs, milk and cheese and another quarter from cereals. In LICs, half the diet is made from cereals. Although high in calories, they are low in nutrients, resulting in malnourishment.</p>
<p>Several factors affect food supply and consumption:</p>
<h3 id="food-demand-factors">Food demand factors</h3>
<ul>
<li>Population growth: more mouths to feed requires more food to be produced. In LICs, where there is a deficit, everyone will get less nutrients.</li>
<li>Economic development - as people in NEEs become more wealthy, they eat more meat and feed animals, resulting in resources being allocated for their own country rather than others.</li>
<li>Climate - droughts can cause huge losses of crops and livestock, and also increasing the risks of desertification, reducing fertile farmland areas.
<ul>
<li>Floods can also cause losses of crops and livestock, especially on coastal areas after tropical storms.</li>
<li>Climate change is exaggerating these with weather patterns becoming more unpredictable while also increasing drought length and frequency of these and tropical storms.
<ul>
<li>Not good.</li>
</ul>
</li>
</ul>
</li>
<li>Technology - LICs cannot afford to invest in infrastructure which could increase yield of crops, like stable roads, machinery for cultivation and things like GM laboratories.</li>
<li>Pests and disease - pests like rats can eat the produce in warehouses like silos after a harvest, diseases like malaria and cholera can reduce the workforce.</li>
<li>Water stress - is when annual freshwater per person is below 1,700m<sup>3</sup>/year. HICs can manage water stress through transfer schemes and irrigation to produce food, while LICs can’t. Floods can also contaminate water supplies.</li>
<li>Conflict &amp; social unrest - wars can disrupt farming and food production. It also may displace many people who do not have the money or facilities to grow or buy food. The need for water can lead to international disputes over ownership of water sources, like in the River Nile.</li>
</ul>
<h3 id="food-supply-factors">Food supply factors</h3>
<ul>
<li>Irrigation - used to supply extra water to farming areas, especially if water supply naturally is low. It increases crop yields and income, reducing poverty. If used economically, such as drip irrigation (delivered directly to roots reducing evaporation) it can improve the quality of live for everyone involved. However it can cause salinization (build up of salt) if the source is the sea, for example. It also costs a lot to maintain.</li>
<li>Aeroponics - when air is used to grow plants. Nutritional water is sprayed to the plants regularly, in a greenhouse to avoid evaporation. It is easily maintainable, requires less nutrients as they do not go into the soil, and needs little space. It can be expensive and knowing the exact nutrients can require specialist knowledge.</li>
<li>Hydroponics - when plants’ roots are constantly in water. They grow faster, like in aeroponics, as more nutrients are available. Diseases and funguses in the soil do not exist here. Similar disadvantages to aeroponics.</li>
<li>The New Green Revolution - when new strains of seeds were developed with  a higher yield. Yields increases by 40% in Asia and larger quantities of cheaper foods were produced. The New Green Revolution will conserve biodiversity while improving all aspects of farming and having the least impact on the environment.</li>
<li>Biotechnology - GM crops and animals can be made to have more vitamins and proteins, more resistant to salts, droughts, insects and diseases, better flavours and better lifespan of foods after harvesting.</li>
</ul>
<blockquote>
<p>Aquaponics is when plants and animals are grown together - the fish produce nitrifying bacteria which give nitrates to the plant, increasing growth and yield.</p>
</blockquote>
<h3 id="case-study-almeria-spain">Case study: Almeria, Spain</h3>
<p>Almeria is a large scale agricultural development. Greenhouses cover 31,000 hectares of land. It is responsible for most of the UK’s out of season crops like tomatoes and cucumbers, generating 1.5 billion dollars for the Spanish economy. It supplies half of Europe’s fruit and vegetables. It has got so big because of:</p>
<ul>
<li>Changing demand for more fruit and veg</li>
<li>High demand for out of season produce - HICs want this all year round</li>
<li>Fast and easy shipping internationally</li>
<li>Hot average temperature allowing for little extra energy to be required to grow the crops</li>
<li>Cheap labour from (typically African) immigrants who want to earn money</li>
</ul>
<p>Advantages include</p>
<ul>
<li>Low water use due to drip irrigation and hydroponics</li>
<li>Fresh water via a desalination plant is available as it’s next to the Mediterranean Sea</li>
<li>Jobs created in packing and manufacturing plants</li>
<li>Very cheap produce produced</li>
<li>Regulations increase food safety by reducing chemical uses.</li>
</ul>
<p>Disadvantages include</p>
<ul>
<li>Immigrants are paid low wages and live and work in poor conditions</li>
<li>The use of pesticides increase health risks for workers and contaminating water supplies</li>
<li>Natural ecosystems have been COMPLETELY destroyed - there’s so much plastic covering everything!</li>
<li>Natural water sources like aquifers are drying up</li>
<li>Plastic pollution is being dumped in the sea affecting marine life</li>
</ul>
<blockquote>
<p>Temperatures in the area have dropped by 0.3<sup>o</sup>C in the area as the greenhouses are white and reflect sunlight!</p>
</blockquote>
<h2 id="footnotes">Footnotes</h2>
<p><sup>1</sup> I’m saying London here as, although it’s not (currently) a megacity, it’s always been a significant trading hub and economic powerhouse for the UK and globally.</p>
<p><sup>2</sup> The most waffle I’ve written today, almost as bad as my Chemistry 6 markers</p>
<p><sup>3</sup> <a href="https://cdn.discordapp.com/attachments/972581792576053298/981167812896780338/Nollywood.gif">Don’t say it…</a></p>
<p><sup>4</sup> Amended from Sam’s document.  <a href="https://discord.com/channels/759861456300015657/903604617722601472/981251143097262171"><code>Lagos_Overview_-_Sam_Fisher_-_10th_Feb_-_10Q.docx</code></a></p>
<p><sup>5</sup> I spent ages looking and found <a href="https://en.wikipedia.org/wiki/Airports_of_London">this article on Wikipedia.</a></p>
<p><sup>6</sup> Credits to Jacob for this idea. <a href="https://discord.com/channels/759861456300015657/903604617722601472/983395293703860314">discord link</a></p>
<p><sup>7</sup> How to get a free phone - just go here and eat as many apples as you can!</p>
<h2 id="section-2"></h2>
<p>thank you for reading! as a present, <a href="https://cdn.ibaguette.com/cdn/iBaguette/SharedResouces/goofy.mp3">click here</a></p>
    </div>
  </div>
</body>
</html>
`

const OLD_html_computer_science = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Computer Science Paper 1&amp;2 Cheat Sheet</title>
  <link rel="stylesheet" href="https://www.ibaguette.com/static/Stackedit_Style.css" />
</head>
<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#ah-yes-computer-science">Ah yes computer science!</a>
<ul>
<li><a href="#read-me-please-thanks">READ ME PLEASE THANKS</a>
<ul>
<li><a href="#this-cheat-sheet-covers-all-of-specification-for-j27701-computer-systems-and-j27702-computational-thinking-algorithms-and-programming">This cheat sheet covers all of specification for: J277/01: Computer systems, and J277/02: Computational thinking, algorithms and programming</a></li>
</ul>
</li>
<li><a href="#advance-info-for-2022">ADVANCE INFO FOR 2022</a></li>
<li><a href="#about-me">ABOUT ME</a></li>
</ul>
</li>
<li><a href="#paper-1">Paper 1</a></li>
<li><a href="#systems-architecture">1.1 - Systems architecture</a>
<ul>
<li><a href="#architecture-of-the-cpu">1.1.1 Architecture of the CPU</a>
<ul>
<li><a href="#the-purpose-of-the-cpu---the-f-d-e-cycle">The purpose of the CPU - the F-D-E cycle</a></li>
<li><a href="#cpu-components-and-their-functions">CPU components and their function(s)</a></li>
<li><a href="#von-neumann-architecture">Von Neumann architecture</a></li>
</ul>
</li>
<li><a href="#cpu-performance">1.1.2 - CPU performance</a>
<ul>
<li><a href="#clock-speed">Clock speed</a></li>
<li><a href="#cache-size">Cache size</a></li>
<li><a href="#core-count">Core count</a></li>
</ul>
</li>
<li><a href="#embedded-systems">1.1.3 - Embedded systems</a></li>
</ul>
</li>
<li><a href="#memory-and-storage">1.2 Memory and Storage</a>
<ul>
<li><a href="#primary-storage">1.2.1 Primary storage</a></li>
<li><a href="#secondary-storage">1.2.2 Secondary storage</a></li>
<li><a href="#units">1.2.3 Units</a></li>
<li><a href="#data-storage">1.2.4 Data storage</a>
<ul>
<li><a href="#denary-to-binary">Denary to binary</a></li>
<li><a href="#adding-binary-digits">Adding binary digits</a></li>
<li><a href="#denarybinary-to-hex">Denary/binary to hex</a></li>
<li><a href="#hex-to-denarybinary">Hex to denary/binary</a></li>
<li><a href="#binary-shifts">Binary shifts</a></li>
<li><a href="#characters">Characters</a></li>
<li><a href="#images">Images</a></li>
<li><a href="#sound">Sound</a></li>
</ul>
</li>
<li><a href="#compression">1.2.5 Compression</a>
<ul>
<li><a href="#lossy-compression">Lossy compression</a></li>
<li><a href="#lossless-compression">Lossless compression</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#networks-connections-and-protocols">1.3 Networks, connections and protocols</a>
<ul>
<li><a href="#networks-and-topologies">1.3.1 Networks and topologies</a>
<ul>
<li><a href="#star-topologies">Star topologies</a></li>
<li><a href="#mesh-topologies">Mesh topologies</a></li>
</ul>
</li>
<li><a href="#wiredwireless-protocols-networks">1.3.2 Wired/wireless, protocols, networks</a>
<ul>
<li><a href="#ip-and-mac-addressing-standards">IP and MAC addressing, standards</a></li>
<li><a href="#encryption">Encryption</a></li>
<li><a href="#common-protocols">Common protocols</a></li>
<li><a href="#layers">Layers</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#network-security">1.4 Network security</a>
<ul>
<li><a href="#threats-to-computer-systems">1.4.1 Threats to computer systems</a>
<ul>
<li><a href="#malware">Malware</a></li>
<li><a href="#social-engineering">Social engineering</a></li>
<li><a href="#brute-force-attacks">Brute-force attacks</a></li>
<li><a href="#denial-of-service-attacks">Denial of service attacks</a></li>
<li><a href="#data-interception-and-theft">Data interception and theft</a></li>
<li><a href="#sql-injection">SQL injection</a></li>
</ul>
</li>
<li><a href="#preventing-vulnerabilities">1.4.2 Preventing vulnerabilities</a>
<ul>
<li><a href="#penetration-testing">Penetration testing</a></li>
<li><a href="#anti-malware-software">Anti-malware software</a></li>
<li><a href="#firewalls">Firewalls</a></li>
<li><a href="#user-access-levels">User access levels</a></li>
<li><a href="#passwords">Passwords</a></li>
<li><a href="#encryption-1">Encryption</a></li>
<li><a href="#physical-security">Physical security</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#systems-software">1.5 Systems Software</a>
<ul>
<li><a href="#operating-systems">1.5.1 Operating systems</a>
<ul>
<li><a href="#user-interfaces">User interfaces</a></li>
<li><a href="#multitasking--memory-management">Multitasking & memory management</a></li>
<li><a href="#peripherals-and-drivers">Peripherals and drivers</a></li>
<li><a href="#user-and-file-management">User and file management</a></li>
</ul>
</li>
<li><a href="#utility-software">1.5.2 Utility software</a>
<ul>
<li><a href="#encryption-software">Encryption software</a></li>
<li><a href="#defragmentation-software">Defragmentation software</a>
<ul>
<li></li>
</ul>
</li>
<li><a href="#compression-software">Compression software</a></li>
<li><a href="#backup-software">Backup software</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#impacts-of-digital-technology">1.6 Impacts of digital technology</a>
<ul>
<li><a href="#ethical-legal-cultural-and-environmental-impact">1.6.1 Ethical, legal, cultural and environmental impact</a>
<ul>
<li><a href="#impacts-of-digital-technology-on-wider-society-including">Impacts of digital technology on wider society including:</a></li>
<li><a href="#legislation-relevant-to-computer-science">Legislation relevant to Computer Science:</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#paper-2">Paper 2</a>
<ul>
<li>
<ul>
<li><a href="#important-there-is-no-advance-information-on-this-paper.-you-need-to-know-everything.">IMPORTANT: THERE IS NO ADVANCE INFORMATION ON THIS PAPER. YOU NEED TO KNOW EVERYTHING.</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#algorithms">2.1 Algorithms</a>
<ul>
<li><a href="#computational-thinking">2.1.1 Computational thinking</a></li>
<li><a href="#designing-algorithms">2.1.2 Designing algorithms</a>
<ul>
<li><a href="#flowchart-symbols">Flowchart symbols</a></li>
<li><a href="#creating-programs">Creating programs</a></li>
<li><a href="#trace-tables">Trace tables</a></li>
</ul>
</li>
<li><a href="#searching-and-sorting-algorithms">2.1.3 Searching and sorting algorithms</a>
<ul>
<li><a href="#linear-search">Linear search</a></li>
<li><a href="#binary-search">Binary search</a></li>
<li><a href="#bubble-sort">Bubble sort</a></li>
<li><a href="#merge-sort">Merge sort</a></li>
<li><a href="#insertion-sort">Insertion sort</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#programming-fundamentals">2.2 Programming fundamentals</a>
<ul>
<li><a href="#programming-fundamentals-1">2.2.1 Programming fundamentals</a>
<ul>
<li><a href="#basic-programming-definitions">Basic programming definitions</a></li>
<li><a href="#operators">Operators</a></li>
<li><a href="#arithmetic-operators">Arithmetic operators:</a></li>
<li><a href="#boolean-operators">Boolean operators</a></li>
</ul>
</li>
<li><a href="#data-types">2.2.2 Data types</a></li>
<li><a href="#additional-programming-techniques">2.2.3 Additional programming techniques</a>
<ul>
<li><a href="#string-manipulation">String manipulation</a></li>
<li><a href="#d-arrays">(2D) Arrays</a></li>
<li><a href="#functions-and-procedures">Functions and procedures</a></li>
<li><a href="#file-handling">File handling</a></li>
<li><a href="#locals-and-globals">Locals and globals</a></li>
<li><a href="#sql">SQL</a></li>
<li><a href="#randoms">Randoms</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#producing-robust-programs">2.3 Producing robust programs</a>
<ul>
<li><a href="#defensive-design">3.1 Defensive design</a></li>
<li><a href="#testing">2.3.2 Testing</a></li>
</ul>
</li>
<li><a href="#boolean-logic">2.4 Boolean logic</a>
<ul>
<li><a href="#boolean-logic-1">2.4.1 Boolean logic</a></li>
</ul>
</li>
<li><a href="#languages-and-ides">2.5 Languages and IDEs</a>
<ul>
<li><a href="#languages">2.5.1 Languages</a></li>
<li><a href="#the-ide">2.5.2 The IDE</a></li>
</ul>
</li>
<li>
<ul>
<li></li>
</ul>
</li>
<li><a href="#programming-examples.">Programming examples.</a>
<ul>
<li><a href="#level-easy">Level: Easy</a></li>
<li><a href="#level-warm">Level: Warm</a></li>
<li><a href="#level-spicy">Level: Spicy</a></li>
<li></li>
</ul>
</li>
</ul>
    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
    <p><a href="/cheatsheets/gcse">&lt; Back to GCSE Cheat Sheets</a></p>
      <h1 id="ah-yes-computer-science">Ah yes computer science!</h1>
<p><a href="https://gist.github.com/Draggie306/1072270b844cda3e271d6f484aa9a976">Cheat Sheet Changelog</a> - Last recorded update to this one 24/05/2022 21:53:27</p>
<p>Firstly…</p>
<p><a href="https://bit.ly/CheatSheetCC"><img src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" alt="Creative Commons License"></a><br>
This work is licensed under a <a href="https://bit.ly/CheatSheetCC">Creative Commons Attribution-NoDerivatives 4.0 International License</a>. I guess you could say it’s <em>open source</em>… see below…</p>
<p>By using this you are legally required to drop a thank you message in <a href="https://discord.gg/GfetCXH">Baguette Brigaders</a>. Click to join the Discord server!</p>
<blockquote>
<p>This document was written with <a href="https://stackedit.io/">StackEdit</a>! Check it out, it’s really cool.</p>
</blockquote>
<h2 id="read-me-please-thanks">READ ME PLEASE THANKS</h2>
<p>Please use your class notes, if you have any, as well as this, to aid your revision. I’ve tried to make it as packed full of only the useful stuff which I think will come up in the exam. This covers 15 pages of specification content and 210 hours of lesson time, consolidated into one place, so might not cover everything in 100% detail, but I have written more for the things which people may find more confusing. If there are any errors then please let me know immediately. I have tried my best to make it as easy as possible to understand and get a grade 9😉</p>
<h3 id="this-cheat-sheet-covers-all-of-specification-for-j27701-computer-systems-and-j27702-computational-thinking-algorithms-and-programming"><strong>This cheat sheet covers <em>all</em> of specification for: J277/01: Computer systems, and J277/02: Computational thinking, algorithms and programming</strong></h3>
<p>From OCR:<br>
J277/01: This component will assess:<br>
• 1.1 Systems architecture<br>
• 1.2 Memory and storage<br>
• 1.3 Computer networks, connections and protocols<br>
• 1.4 Network security<br>
• 1.5 Systems software<br>
• 1.6 Ethical, legal, cultural and environmental impacts of digital technology</p>
<h2 id="advance-info-for-2022">ADVANCE INFO FOR 2022</h2>
<p><img src="https://cdn.discordapp.com/attachments/903604617722601472/970093669409493052/unknown.png" alt="advance info in a table"><br>
<em>In short: learning everything is a good idea - it’s fairly simple to understand and just use your common sense for most things</em></p>
<h2 id="about-me">ABOUT ME</h2>
<p>For ease of access, I’ve written this in a way designed to be read smoothly across any device, called Markdown. It’s easy to navigate and should look nice to read. To skip to areas you are weak on, I’d recommend using the side bar on the left - you may need to open in desktop site or read on a computer to quickly skip between parts.</p>
<p>Anyway, without waiting much longer, let’s start with…</p>
<h1 id="paper-1">Paper 1</h1>
<h1 id="systems-architecture">1.1 - Systems architecture</h1>
<h2 id="architecture-of-the-cpu">1.1.1 Architecture of the CPU</h2>
<p><em>Advance information: The purpose of the CPU, common CPU components and their features, and Von Neumann architecture will be directly assessed.</em></p>
<h3 id="the-purpose-of-the-cpu---the-f-d-e-cycle"><strong>The purpose of the CPU - the F-D-E cycle</strong></h3>
<p>The Fetch-Decode-Execute cycle is the main job of the CPU. To execute a program, the program code is copied from secondary storage into the main memory. The CPU’s <strong>program counter</strong> is set to the memory location where the first instruction in the program has been stored, and execution begins.<br>
In a program, each <strong>machine code</strong> instruction takes up a slot in the main memory. These memory locations each have a <strong>unique memory address</strong>. The <strong>program counter stores the address</strong> of each instruction and tells the CPU in what order they should be executed.</p>
<p>Step by step:</p>
<ul>
<li>The CPU checks the program counter to see the next instruction to execute.</li>
<li>The program counter gives a memory address to where the next instruction is</li>
<li>The CPU fetches the instruction from this memory address</li>
<li>The instruction is decoded and executed. For example the value decoded could be a number, which is entered to the ALU (arithmetic logic unit) and added to another fetched from cache and multiplied.</li>
<li>The program counter increments by 1</li>
<li>The cycle is repeated indefinitely</li>
</ul>
<h3 id="cpu-components-and-their-functions"><strong>CPU components and their function(s)</strong></h3>
<p>The ALU (arithmetic logic unit)</p>
<ul>
<li>Performs calculations and logical operations</li>
<li>Where decisions are made (e.g <code>if x &gt; 10</code>)</li>
</ul>
<p>The CU (control unit)</p>
<ul>
<li>Fetches, decodes and executes instructions</li>
<li>Controlls hardware</li>
</ul>
<p>Cache</p>
<ul>
<li>A small amount of high speed memory physically inside the CPU.</li>
<li>Temporarily holds small amounts of data which the CPU will reuse often.</li>
<li>Speeds up the system - does not have to wait for some data in memory to be fetched</li>
<li>Level 1, 2, 3 cache - 1 is the fastest, most expensive, has the lowest amount of storage, likewise 3 is the slowest, least expensive but contains the most amount of potential storage</li>
</ul>
<p>Registers</p>
<ul>
<li>What Ethan Skipper is on</li>
<li>Small amounts of high speed memory in the CPU used to store small amounts of data needed for processing</li>
<li>Includes the address of the current instruction, the next instruction to be executed, and the results of calculations</li>
</ul>
<p>In case you find the difference between Cache and Registers difficult, here’s something useful from <a href="https://stackoverflow.com/questions/3500491/are-cpu-registers-and-cpu-cache-different">Stack Overflow</a>:</p>
<ul>
<li>CPU register is just a small amount of data storage, that facilitates<br>
some CPU operations.</li>
<li>CPU cache, is a high speed volatile memory which<br>
is bigger in size, that helps the processor to reduce the memory<br>
operations.</li>
<li>It is not very inaccurate to think of the processor’s<br>
register as the level 0 cache, smaller and faster than the other<br>
layers of cache in-between the processor and memory. The difference<br>
is only that from the point of view of the instruction set, cache<br>
access is transparent (the cache is accessed through a memory address<br>
that happens to be a cached address at the moment) whereas registers<br>
are explicitly referenced in each instruction.</li>
</ul>
<p>There will probably be a table to tick what things do, or a 2-4 marker asking what something does and to explain it. I’d recommend learning 2 registers in detail, and what 4 just do.</p>
<h3 id="von-neumann-architecture">Von Neumann architecture</h3>
<p>This is basically a summary of the above.</p>
<p>Von Neumann architecture is the design of which most every computer now is comprised of. It states:</p>
<ul>
<li><strong>Data <em>and</em> instructions</strong> are stored as <strong>binary</strong></li>
<li><strong>Data <em>and</em> instructions</strong> are both stored in <strong>primary storage</strong></li>
<li>Instructions are fetched from <strong>memory</strong> <strong>one at a time</strong> and in order</li>
<li>The processor <strong>decodes and executes</strong> an instruction, and then does the same for the next instruction</li>
<li>This will continue until there are no more instructions</li>
</ul>
<p>A processor based on von Neumann architecture has five registers which it uses for processing:</p>
<ul>
<li>the <strong>program counter</strong> (PC) holds the <strong>memory address</strong> of the next instruction to be fetched from primary storage</li>
<li>the <strong>memory address register</strong> (MAR) holds the address of the <strong>current instruction</strong> that is to be fetched from memory, or the address in memory to which data is to be transferred</li>
<li>the <strong>memory data register</strong> (MDR) holds the <strong>contents found at the address</strong> held in the MAR, or data which is to be transferred to primary storage</li>
<li>the <strong>current instruction register (CIR)</strong> holds the instruction that is currently being decoded and executed</li>
<li>the <strong>accumulator (ACC)</strong> is a special purpose register and is <strong>used by the arithmetic logic</strong> unit (ALU) to <strong>hold the data being processed and the results of its calculations</strong></li>
</ul>
<p>Note the above was heavily taken from <a href="https://www.bbc.co.uk/bitesize/guides/zhppfcw/revision/3">Bitesize</a> as it’s just easier to explain</p>
<p>Personally I find this the easiest way to remember them:</p>
<ul>
<li>program counter counts the programs by 1 every cycle</li>
<li>memory address register has the current memory address</li>
<li>memory data register has the memory data at the address</li>
<li>don’t worry about the CIR because it’s self-explanatory</li>
<li>accumulator (ACC) holds data being processed and the results of it</li>
</ul>
<h2 id="cpu-performance">1.1.2 - CPU performance</h2>
<h3 id="clock-speed">Clock speed</h3>
<p>The clock speed is measured in gigahertz (GHz) and represents how many fetch-decode-execute cycles happen per second. 1 GHz = 1 billion cycles.</p>
<p><img src="https://cdn.discordapp.com/attachments/785620979300302869/970064727403282472/unknown.png" alt="Task manager showing the clock speed of a computer with 6 cores."><br>
<em>^^ My computer running at 4.27 GHz, overclocked from 3.7 GHz. This means that 4,270,000,000 fetch-decode-execute cycles are happening per second. Speedy, right?</em></p>
<p>A clock speed of 4.27 GHz means that 1 clock happens 274,000,000 times faster than a reflex action. In that time, light itself can only travel about 8cm. In other words, they’re really fast.</p>
<p>However, a CPU which cannot keep up with its clock will corrupt its data. A very fast clock speed will cause the CPU to overheat and thermal throttle, reducing its performance to stop it melting…</p>
<h3 id="cache-size">Cache size</h3>
<p>Transferring data in and out of memory takes much, much longer than from cache. Therefore, by placing frequently accessed data on cache, it results in everything using that function (such as square roots) being executed much faster. The more cache there is, the more data can be stored closer to the CPU.<br>
Cache is ‘graded’ at different levels depending on its speed. <strong>L1</strong> is usually part of the CPU chip and is both the smallest and the fastest to access. Its size is often restricted to between 8 KB and 64 KB. <strong>L2</strong> and <strong>L3</strong> caches are bigger than <strong>L1</strong>. They are extra caches built between the CPU and the RAM. Sometimes L2 is built into the CPU with L1.<br>
L2 and L3 caches take slightly longer to access than L1. Each CPU core has its own set of L1 cache, but they can share higher levels.</p>
<p>However, cache is very expensive (L1 costs ~£1 per kilobyte) and is limited by the space of the CPU die, and is very small, so cannot be a full replacement of memory.</p>
<h3 id="core-count">Core count</h3>
<p>A CPU has multiple cores on it. CPUs with multiple cores have more power to run multiple programs at the same time.</p>
<p>However, doubling cores does not double clock speed. Some headroom is needed to communicate between each core.</p>
<p><img src="https://bam.files.bbci.co.uk/bam/live/content/zh8pb9q/large" alt="Something you don't need to remember"><br>
<em>Something you don’t need to remember, I don’t really know why I put it here. Just remember more cores = faster as it can do multiple tasks concurrently!</em></p>
<h2 id="embedded-systems">1.1.3 - Embedded systems</h2>
<p>An embedded system is a a small computer inside of a larger system. PCs would be categorized as general purpose systems, as they can do pretty much anything. Embedded systems on the other hand have one specific function which they run.</p>
<p>General process computers are designed to access the Internet, play games, play videos, write programs. These all require applications to run. Tablets, phones and consoles are now more classed as general process as they now can run several applications.</p>
<p>Examples of embedded systems include GPS systems, digital watches and fitness trackers.</p>
<p>They are not reprogrammable either - all the programming is done in manufacturing.</p>
<p>Advantages of these systems include they require less power to run and are cheaper to make as their processors are not as powerful.</p>
<h1 id="memory-and-storage">1.2 Memory and Storage</h1>
<p><em>Advance information: All below will be assessed.</em></p>
<h2 id="primary-storage">1.2.1 Primary storage</h2>
<p>Primary storage consists of RAM (random access memory) and ROM (read only memory). ROM is non-volatile (retains its data after being powered off) and is usually often now only used to boot the computer, providing for the BIOS or UEFI.</p>
<p>Memory/RAM is small in size compared to secondary storage, but is much faster as it does not have moving parts or have to retain that information. It is usually from 4-16GB in size. The more RAM a computer has, the more programs and instructions it can store simultaneously.</p>
<p>Virtual memory is needed in systems. Virtual memory is a area of secondary storage which is used as an overflow for when memory is filled up. When RAM is full, data which would have gone to memory goes to an area of the disk drive. However, virtual memory is much slower than even the fastest SSDs, let alone HDDs with their moving parts.</p>
<h2 id="secondary-storage">1.2.2 Secondary storage</h2>
<p>Secondary storage is non-volatile, meaning it retains the data written to it even when offline.</p>
<p>A HDD (magnetic) has high capacity and involves flipping magnetic polarity to store bits. It is fairly fast to access. A SSD (solid state) has high capacity and involves trapping electrons to store bits. They are extremely fast to access. A USB drive (solid state) is tiny in comparison but very portable so is useful for transferring files between people and their computers. Optical storage devices like CDs and DVDs use a laser to scan the tracks, and when light reflects back it will either reflect from ‘lands’ - representing 1, or does not reflect in ‘pits’ - representing 0.</p>
<p>Embedded systems may not need these as the instructions to run them are usually in ROM. For example, a watch does not need to edit the time as it runs all the time.</p>
<h2 id="units">1.2.3 Units</h2>
<p>The basic unit is the bit. It represents 1 or 0. Above this is the nibble - or 4 bits. Above this again is the byte, or 8 bits.<br>
A kilobyte is 1000 bits.<br>
A megabyte is 1000 kilobytes. (1,000,000 bits)<br>
A gigabyte is 1000 megabytes. (1,000,000,000 bits)<br>
A terabyte is 1000 gigabytes. (1,000,000,000,000 bits)</p>
<p>An image is usually be 500kb. Therefore, on a 2GB USB stick, 2000 images.</p>
<p>Videos can be 100 megabytes, so 20 image can be stored.</p>
<p>Sound file size = sample rate x duration (s) x bit depth<br>
Image file size = colour depth x image height (px) x image width (px)<br>
Text file size = bits per character x number of characters</p>
<h2 id="data-storage">1.2.4 Data storage</h2>
<p><em>Advance information: All below will be assessed.</em></p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/972581794857775154/unknown.png" alt="data storage 1"><br>
<img src="https://cdn.discordapp.com/attachments/972581792576053298/975154263745495041/1.2.4_Data_storage__part_of_1.2_Memory_and_Storage.png" alt="data storage 2"><br>
<em>There’s a lot in this topic (including the things I find the hardest but shh)</em></p>
<h3 id="denary-to-binary">Denary to binary</h3>
<p>To convert a denary number into binary, write out all the base 2 numbers in a row (128, 64, 32, 16, 8, 4, 2, 1). Then, get your number, let’s say 253, and subtract it from the largest. You’d then get 125. Write ‘1’ below the ‘128’ and repeat on the next numbers. If when you subtract it it’s negative, write a zero below and then do the next smallest number.</p>
<h3 id="adding-binary-digits">Adding binary digits</h3>
<p>0 + 0 = 0<br>
0 + 1 = 1<br>
1 + 1 = 0, carry 1<br>
1 + 1 + carried 1 = 1, carry 1</p>
<h3 id="denarybinary-to-hex">Denary/binary to hex</h3>
<p>Hex(adecimal) is a base 16 system to simplify binary representation. A hex digit can be any of these: <strong>0 1 2 3 4 5 6 7 8 9 A B C D E F</strong>.</p>
<p>Each hex digit represents a 4 digit binary sequence.</p>
<p>0 in hex is 0 in denary, and 0000 in binary.</p>
<p>Remember how to convert denary to binary? Well, firstly convert the denary into binary, then split the 8-bit digit binary number into nibbles of 4 bits each. Then, add 1 to 0000 (binary) whilst incrementing hexadecimal by 1. Let’s go through an example.</p>
<ol>
<li>Convert 103 into hexadecimal. [2 marks]</li>
</ol>
<ol>
<li>Convert 103 into binary.<br>
= 01100111</li>
<li>Split into nibbles<br>
= 0110 0111</li>
<li>Work out hex of nibble 1<br>
= 6</li>
<li>Work out hex of nibble 2<br>
= 7</li>
<li>Put together<br>
= 67</li>
</ol>
<p>The other way is to divide the denary number by 16 until you can’t (here, 6 times). Then get the remainder (here, 7). Then put together. Magic ✨</p>
<ol start="2">
<li>Convert 212 into hexadecimal. [2 marks]</li>
</ol>
<p>Try and work it out. The answer is below ‘Binary shifts’ below…</p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/975154252060176424/Denary_to_binary_to_hex_quick_drawn_table_lmao.jpg" alt="enter image description here"><br>
<em>I guarantee you this will be on my test lol</em></p>
<h3 id="hex-to-denarybinary">Hex to denary/binary</h3>
<p>You can reverse the above. Personally, I’d write down the hex digits, and convert them into nibbles where I can then easily convert into denary.</p>
<h3 id="binary-shifts">Binary shifts</h3>
<p>A shift of 1 to the left means multiply by 2.<br>
A shift of 3 to the left means multiply by 2^3 = 8<br>
A shift of 1 to the right means divide by 2<br>
A shift of 3 to the right means divide by 2^3 = 8</p>
<p>left = multiply, right = divide.</p>
<p>Answer to 2) Convert 212 into hexadecimal. [2 marks]</p>
<ol>
<li>to binary = 11010100</li>
<li>nibbles = 1101 0100</li>
<li>nibble 1 = D (remember it goes into ABCDEF)</li>
<li>nibble 2 = 4</li>
<li><strong>answer = D4</strong></li>
</ol>
<h3 id="characters">Characters</h3>
<p>Characters are also represented as binary. In ASCII, there are 8 bits, so that’s 255 characters possible. In Unicode, there are 16 bits, or more, allowing it so represent every character and emoji in the world - over 2 million.</p>
<p>A in binary is 0100 0001.<br>
Character sets are ordered logically, so B is one more than A:<br>
B in binary is 0100 0010.</p>
<h3 id="images">Images</h3>
<p>An image is represented as a series of pixels, again, represented as binary. Each pixel has a specific colour, represented by a specific code (can be a hex value).</p>
<p>The image’s size and quality can be affected by the colour depth and resolution.</p>
<p>A black and white image has a bit depth of 1. This means it can only represent two colours - 2<sup>1</sup> = 2 colours. An image which uses 10 bit depth can represent 2<sup>10</sup> = 1024 colours. Colour depth = range of colours available.</p>
<blockquote>
<p>Colour depth is interchangable with bit depth.</p>
</blockquote>
<p>Size, or dimensions, is how many pixels the image contains, in terms of height by width. 1920x1080 is a classic example - a screen with these dimensions would have 2,073,600 pixels.</p>
<p>The size of an image file can be estimated using:</p>
<ul>
<li>the image height in pixels</li>
<li>the image width in pixels</li>
<li>the colour depth per pixel</li>
</ul>
<p>If a 1920x1080 image, with a colour depth of 24 bits was to be saved:</p>
<p>1920x1080 = 2,073,600<br>
2,073,600 x 24 = 49,766,400 bits<br>
divided by 8 = 6,220,800 bytes<br>
divided by 1000 = 6220.8KB / 6.2208 MB</p>
<p>Resolution is used to describe how densely packed the pixels are. A high resolution would have more pixels, but will be larger in size. A low resolution image will look like Minecraft when enlarged, but has a low file size.</p>
<p>Files contain extra data called metadata. Metadata includes data about the file itself, such as file type, date created, author, geolocation and camera.</p>
<p>An image file also includes metadata about the image data itself, such as the height and width of the image, the resolution and the colour depth</p>
<h3 id="sound">Sound</h3>
<p>Sample rate is the number of samples recorded in a second.  It is measured in hertz. The higher the sample rate, the closer the recorded digital signal is to the original, analogue sound. AN audio file is usually recorded at 44.1KHz which is a compromise between low file size and high quality. (All my videos are rendered at 96KHz for the best quality 😉)</p>
<p>Bit depth is the number of bits used to record each sample. The higher the bit depth, the more accurately the sound can be recorded but the higher the file size.</p>
<p>Bit rate is the amount of data processed per second. It is calculated by sample rate x bit depth, and is in bits per second. Higher bit rate = higher quality sound, and also the file size.</p>
<h2 id="compression">1.2.5 Compression</h2>
<p>There are 2 types of compression.</p>
<h3 id="lossy-compression">Lossy compression</h3>
<p>Lossy - some data is removed, reducing the overall data and quality and therefore size of the file. In an image, this can be seen through reducing colour depth, reducing the amount of colours in the image, reducing the file. Bit depth can be reduced in audio files to reduce the file. &gt; Remember, in bit depth, it squares every time. A bit depth of 4 would mean 2^4 bits, or 16 potential colours or audio bits.</p>
<p>Examples of lossy compression include JPEG, MPEG (or MP4) and MP3 files.</p>
<h3 id="lossless-compression">Lossless compression</h3>
<p>For other files, data cannot be lost, like texts. Files need to be reduced in size without the loss of data. WAV audio files or PNG image files are examples of lossless formats. However, lossless files are bigger than lossy, even when compressed.</p>
<p>For example, a binary representation of <code>000000111100110000000111111</code> can be represented as 604121217161. (because there’s 6 zeroes, 4 ones, 2 zeroes etc)</p>
<p>This would reduce the file from 27 bytes to 12 bytes. A reduction of over 60%!</p>
<h1 id="networks-connections-and-protocols">1.3 Networks, connections and protocols</h1>
<p><em>Advance information: The following will be directly assessed:</em></p>
<ul>
<li>Factors that affect the performance of networks</li>
<li>The hardware needed to connect stand-alone computers into a Local Area Network</li>
<li>The Internet as a worldwide collection of computer networks.</li>
</ul>
<h2 id="networks-and-topologies">1.3.1 Networks and topologies</h2>
<p>A network’s topology is how different nodes (a device connected to a network) are arranged in it. All nodes are either wired or wirelessly connected.</p>
<p>Some useful key terms which you should probably know:</p>
<p><strong>Router</strong>: directs and receives packets incoming/outgoing to/from the Internet to devices in a private network via IP addresses. It connects networks together - your home LAN to the Internet, or a WAN. Nodes connected to it are given private IP addresses (192.168.1.x) and has a public IP address. (This is what you see <a href="https://whatismyipaddress.com/">here</a>)</p>
<p><strong>Switch</strong>: A device which connects devices on a computer network by using packet switching to receive and forward data to the destination device. It uses MAC addresses to forward data at the data link layer. (MAC (Media Access Control) addresses are used to identify a device on the local network assigned by its Network Interface Card)</p>
<p><strong>WAP</strong>: wireless access point. Usually built into the switch, or physically connected by wire to it. Unless there’s a repeater which would mean WAPs are connected to other WAPs</p>
<p><strong>Packet switching</strong>: a method of breaking up data, and sending it using the most efficient route. For example, if you send an image, it will be broken up into ‘packets’ of around 1000 bytes each (if the image is 1mb then there’ll be 1000 packets) and then sent. To ensure data is not corrupted on route to the destination, each packet contains the following in a header: the IP address it is going to , the IP address it has come from, the sequence number of the packet, the number of packets in the whole communication, and error checking data</p>
<p><strong>DNS</strong>: Domain Name System. How domain names are translated to IP addresses. When you go to <a href="ibaguette.com">ibaguette.com</a>, your device will make a request to a DNS server asking for the actual IP address to connect to, such as 172.67.139.203. If a DNS server does not contain the IP address, your request will be forwarded to a bigger DNS server, and finally a root DNS server containing every single domain’s IP address.</p>
<p>The two topologies which you need to know are:</p>
<h3 id="star-topologies">Star topologies</h3>
<ul>
<li>Used in many networks</li>
<li>Used by client-server networks - all data sent from clients pass through (a) central server(s).</li>
<li>All computers can communicate to each other through the central switch.</li>
</ul>
<p>Advantages include:</p>
<ul>
<li>If a node or its connection fails, other nodes can still communicate</li>
<li>New nodes can be added by connecting it to the switch</li>
<li>Any incoming data from the Internet cam be forwarded directly to the intended node.</li>
<li>Fast data transfer to the hub as each wire isn’t shared with other computers</li>
</ul>
<p>Disadvantages:</p>
<ul>
<li>The entire network will go down if the switch fails</li>
<li>Can be expensive to set up - requires additional hardware such as the central switch and lots of network cables</li>
</ul>
<p>They are used anywhere, from company buildings to your home right now. Your ‘router’ is currently acting as the switch, router and WAP for all the nodes connected in your house.</p>
<h3 id="mesh-topologies">Mesh topologies</h3>
<p>Full meshes are when every device is connected to every other device. Partial meshes are when every device is connected to at least another device, which shares a connection with other devices (the original device is indirectly connected with every other device)</p>
<p>Advantages:</p>
<ul>
<li>No single point of failure – resilient to attacks</li>
<li>Messages can be received more quickly if the route to the intended recipient is short</li>
<li>Expansion and modification can be done without disrupting the network</li>
<li>Data can be transmitted from different devices simultaneously</li>
</ul>
<p>Disadvantages:</p>
<ul>
<li>Can involve redundant connections</li>
<li>Expensive to install cabling if using wired connections</li>
<li>Network maintenance and administration is difficult</li>
<li>Full mesh networks are impractical to set up because of the high number of connections needed</li>
</ul>
<h2 id="wiredwireless-protocols-networks">1.3.2 Wired/wireless, protocols, networks</h2>
<p><em>Advance information: The following will be directly assessed:</em></p>
<ul>
<li>Modes of connection</li>
<li>Encryption</li>
<li>IP addressing and MAC addressing</li>
<li>Standards</li>
<li>Common protocols</li>
</ul>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/975154246938935316/1.3.2_Wired_and_wireless_networks_protocols_and_layers.png" alt="enter image description here"></p>
<p>A network is a group of two or more computers connected together to communicate. There are 2 ways for them to communicate: wired (ethernet) and wireless (Wi-Fi, Bluetooth).</p>
<p>It may seem obvious but benefits for being in a network include accessing and sharing resources, sharing hardware like printers, communications via email, text or video, and roaming profile (can access your files from any computer in network).</p>
<p>In larger networks, antiviruses and firewalls can be implemented network-wide instead of on individual computers, improving security and cost effectiveness.</p>
<p>Admins can monitor what people do on these networks, and give them rights (User Access Levels) to restrict access. However, networks can cost a lot as equipment like dedicated cables or switches are needed to communicate, and malware can spread more quickly if a network has poor security.</p>
<h3 id="ip-and-mac-addressing-standards">IP and MAC addressing, standards</h3>
<p>The 32-bit IP address system is also known as IPv4. It allows for over 4 billion addresses (2^32 = 4,294,967,296 addresses). We’re running out very quickly.</p>
<blockquote>
<p>IPv4 addresses are just numbers, like <code>248.228.179.104</code>. Each number separated by decimals cannot be over 255, as that’s the 8 bit limit.</p>
</blockquote>
<p>IPv6’s adoption is increasing now. IPv6 uses 16 bits for each section of the address, creating a 128-bit address. This allows almost 80 octillion unique IP addresses.</p>
<blockquote>
<p>IPv6 addresses can be letters as well. They are separated by colons, such as <code>8cfb:3abd:dde5:ca41:e080:0328:6e86:5007</code>. Each part separated by colons can be from 0000 to ffff. This means that there are 1,028x more addresses than IPv4. That’s 340,282,366,920,938,463,463,374,607,431,768,211,456 addresses.<br>
(no, you don’t need to remember that)</p>
</blockquote>
<p>A MAC address is different to an IP address - it is assigned to devices within a network. It can’t be changed by the user, as it’s on the network card on the device.</p>
<p>Remember, a <strong>protocol is a set of rules that governs the transmission of data</strong>. For example, HTTPS.</p>
<p>Standards allows hardware/software to interact across different manufacturers/producers. For example, HDMI or USB-C (love you Apple)</p>
<h3 id="encryption">Encryption</h3>
<p>Encryption is the process of changing a message so that it can only be understood by the intended recipient, through the use of a public and a private key (also known as asymmetric encryption). A public key can be given to anyone - it can be used to encrypt a message. but it cannot decrypt a message - only the second key (the private key) can do that. The message will remain encrypted unless the private key is compromised, either by giving it out or by brute forcing it.</p>
<p>Unencrypted messages are referred to as plaintext messages. Encrypted messages are known as ciphertext.</p>
<p><a href="https://www.bbc.co.uk/bitesize/guides/zr3yb82/revision/4">https://www.bbc.co.uk/bitesize/guides/zr3yb82/revision/4</a></p>
<h3 id="common-protocols">Common protocols</h3>
<p>You need to know a few common protocols.</p>
<ul>
<li><strong>TCP/IP (Transmission Control Protocol/Internet Protocol)</strong>
<ul>
<li>Used for accessing the Internet. Set of rules describing how packets are sent. All packets have source IP, destination IP, packet reassembly sequence, the actual data (or payload), and error checking details.</li>
</ul>
</li>
<li><strong>HTTP (Hyper Text Transfer Protocol)</strong>
<ul>
<li>Sends web pages from the webserver to your browser.</li>
</ul>
</li>
<li><strong>HTTPS (Hyper Text Transfer Protocol Secure)</strong>
<ul>
<li>Sends web pages <strong>securely encrypted</strong> from the webserver to your browser. Needed on sites with private information like banks.</li>
</ul>
</li>
<li><strong>FTP (File Transfer Protocol)</strong>
<ul>
<li>Transfer files. You can upload a file to a FTP server and someone else can download it.</li>
</ul>
</li>
<li><strong>POP (Post Office Protocol)</strong>
<ul>
<li>Used to download email to device, then deletes from server.</li>
</ul>
</li>
<li><strong>IMAP (Internet Message Access Protocol)</strong>
<ul>
<li>Used to download email from the server, but caching it on-device. Doesn’t delete from web server.</li>
</ul>
</li>
<li><strong>SMTP (Simple Mail Transfer Protocol)</strong>
<ul>
<li>Used to send the email</li>
</ul>
</li>
</ul>
<h3 id="layers">Layers</h3>
<p>Finally, you need to know how layers are used in protocols, and the benefits of using layers; for a teaching example, please refer to the 4-layer TCP/IP model.</p>
<blockquote>
<p>Not requires: Knowledge of the names and function of each TCP/IP layer</p>
</blockquote>
<p>Layering means the breakdown of the sending of messages into separate components and activities, with each component handling a different part of communication. Therefore, it allows standards to be put in place and simply adapted as new hardware and software is developed.</p>
<p><a href="https://www.bbc.co.uk/bitesize/guides/z666pbk/revision/5">See this Bitesize page if you want to learn more, but it’s not required</a></p>
<ul>
<li>Application layer - applications and protocols.</li>
<li>Transport layer - breakdown into packets</li>
<li>Network layer - adds sender and receiver’s IP addresses to packets and sends over network</li>
<li>Data link layer - the NIC and drivers are here and send it to another computer</li>
</ul>
<h1 id="network-security">1.4 Network security</h1>
<h2 id="threats-to-computer-systems">1.4.1 Threats to computer systems</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/975154737563455498/1.4_and_1.4.1_Network_Security_-_threats_to_systems_and_networks.png" alt="enter image description here"></p>
<h3 id="malware">Malware</h3>
<p>Umbrella term for malicious software designed to compromise a system.</p>
<p>Viruses - often in another file. When ran, they replicate and can spread throughout a network. They usually delete or modify other data, including personal documents or critical system files. Can upload your files to a server.</p>
<p>Worms - the same as viruses but are not hidden - often distributed through emails</p>
<p>Trojans - a malicious application pretending to be a useful application. A user must run it to spread.</p>
<p>Spyware - monitor a user’s activities and sends them back to a server. This could include websites visited, passwords, usernames and applications opened</p>
<blockquote>
<p>Adware is the same as this but used to serve more relevant ads to a user. Very common on mobile devices. My dad even had some adware on his iPhone lol. Safari (even private) bad for privacy.</p>
</blockquote>
<p>Ransomware - arguably the worst type of malware. Encrypt documents, and require a ransom payment, usually Bitcoins, to decrypt the data. Often will delete data after a certain time if not paid. Often won’t decrypt the data even if paid. Usually deletes copies of data and locks the system by taking over how the system boots. Very easily spreads through the network if ran as administrator. (user access levels useful here!)</p>
<h3 id="social-engineering">Social engineering</h3>
<p>e.g. phishing, people as the ‘weak point’</p>
<p>Emails which try to deceive users to give their personal details. Designed to look like a genuine email from a useful service, like a bank, and will have a link to a website (still looking like a real bank) where there will be a username/password field, and maybe even credit card numbers. Of course, when you enter the data, it’s just sent to someone else.</p>
<h3 id="brute-force-attacks">Brute-force attacks</h3>
<p>A program is used to systematically try all possible combinations of a username and password until the correct one is ‘cracked’.</p>
<h3 id="denial-of-service-attacks">Denial of service attacks</h3>
<p>Where a computer sends loads of requests to a server to overwhelm it. The server will become overwhelmed and legitimate requests will no longer work.</p>
<p>Multiple computers doing this concurrently is called a distributed denial of service attack, or DDoS. They usually only last a few seconds but send tens of millions of requests.</p>
<h3 id="data-interception-and-theft">Data interception and theft</h3>
<p>Data interception is when data is intercepted while being transferred, using a special software called a ‘packet sniffer’. It can identify what packets are doing and their destination across the Internet or in a network. They are usually difficult to detect, as the data still reaches its intended destination. The information gathered is sent back to a server where it can be seen by malicious entities.</p>
<h3 id="sql-injection">SQL injection</h3>
<p>You don’t need to know what SQL actually is, but rather the process of it. SQL is widely used in databases to ensure their structures are maintained and to quickly read a value in it. SQL code can be entered as a data input in, for example a username/password field, which can cause errors. Even worse, someone can input something like <code>FROM * PRINT Passwords</code> to get a list of everyone’s passwords if unencrypted!</p>
<h2 id="preventing-vulnerabilities">1.4.2 Preventing vulnerabilities</h2>
<p><em>Advance information: ‘Common prevention methods’ will be assessed.</em></p>
<h3 id="penetration-testing">Penetration testing</h3>
<p>Pen testing is when authorised users (including white hat hackers) probe a network for weaknesses, and attempt to exploit them. It is used to check how resistant a network is against malicious attacks by trying to identify security issues before they are exploited. White hat hackers or organisations who attempt to find vulnerabilities can get paid hundreds of thousands for finding issues!</p>
<h3 id="anti-malware-software">Anti-malware software</h3>
<p>Anti malware detects installed malware, prevents malware from being installed and removes malware from a device. It scans through all files that are run or modified and sees if it matches a list of known malicious files. However, if the antimalware software is not updated, it may not be able to correctly identify new, zero-day threats which the system is exposed to.</p>
<h3 id="firewalls">Firewalls</h3>
<p>Firewalls monitor traffic and allow it to pass through or deny it. It can be placed in front of the network, or can be placed in front of an individual device. Legitimate programs such as a game server requires the firewall to allow a program or port (e.g for a Minecraft Java server the port is 25565) to communicate with other devices. Firewalls can be hardware or software based, and as most things hardware-based firewalls are more effective but cost more than software-based implementations.</p>
<h3 id="user-access-levels">User access levels</h3>
<p>User access levels only allow a user to do certain things, including running software, accessing the Internet, installing new software and editing the accounts of other users. In a school, students will be denied the access to managing other students and software, but will be allowed to access the Internet. Teachers will be allowed to manage students, and maybe the software installed. Finally, admins will be able to access everything.</p>
<p>This reduces the risks as if a student downloads a virus, it will not be able to access any other device, as it is effectively isolated from managing network devices. However, if an admin gets infected, it would mean disaster for the network…</p>
<h3 id="passwords">Passwords</h3>
<p>Passwords are used to verify a user’s identity. Secure passwords could include a password policy to ensure it is secure and difficult to guess, and one changes regularly. They should ideally be unique across different websites, so if one website account is compromised, the same passwords cannot be used to login to your account on another site which you might want to be kept secure, like a bank.</p>
<h3 id="encryption-1">Encryption</h3>
<p>The process of changing data from plaintext to cyphertext so it cannot be understood. For example if a database containing passwords gets accessed by a hacker, the passwords themselves are not visible and the user’s private key is still needed to decrypt them. Smart, right?</p>
<h3 id="physical-security">Physical security</h3>
<p>Server rooms should be locked and only authorised people such as the admins can unlock them. Obviously, if someone gets into a server room, they can nick all the drives containing users’ information. Also, don’t write down your passwords on a sticky note, someone can just take a picture of them…</p>
<h1 id="systems-software">1.5 Systems Software</h1>
<h2 id="operating-systems">1.5.1 Operating systems</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/975154731376853052/1.5.1_Operating_systems_as_part_of_systems_software_unit.png" alt="enter image description here"></p>
<p>An operating system is a suite of programs that controls the general operation of a computer, and provides an easy way for us to interact with computers and run applications.</p>
<p>OSes can control hardware components, provide a UI, manage files in a file system, manage memory, manage users, and even provide multitasking. Examples are Windows and Linux in desktops, and iOS and Android for mobile devices.</p>
<h3 id="user-interfaces">User interfaces</h3>
<p>UIs are (is a) program(s) that allow a user to interact with the computer. The GUI is the most popular as they include desktops and icons for ease of use, with menus and a mouse to interact with it. They are easy to use but use more processing power. CLIs are text based programs (command prompt in Windows) which are very powerful, and require little processing power to display due to their simplicity. However they are difficult for most people to use. Mobile UIs are basically the same as GUIs but replace the mouse with touch and gestures to navigate.</p>
<h3 id="multitasking--memory-management">Multitasking &amp; memory management</h3>
<p>Multitasking is a classic example of OS’ evolution over the years. With CLIs a user could only do one process. Now, videos can be streamed while uploading documents to the cloud. This requires an OS to support it (duh) and enough memory to run multiple processes. The OS manages memory use to prioritise running processes, and when another process closes, this extra available memory gets allocated to the running program.</p>
<h3 id="peripherals-and-drivers">Peripherals and drivers</h3>
<p>Peripherals are hardware devices physically connected to a computer like mice, monitors, printers, etc etc (you knew that right… RIGHT?!?)</p>
<p>OSes use drivers to control peripherals. Data is transferred between devices and the CPU, and this needs drivers to manage the interactions between the user and the computer. As drivers contain instructions on how to manage a device, every device connected will have its own associated driver. Any device can be used with a computer, as long as standards (wrote about above) are met and a driver is available. Drivers are frequently updated to improve the hardware device’s performance or to fix a bug.</p>
<blockquote>
<p>However, if a driver update goes wrong then it will take some extra effort to fix it, as you can’t interact with the hardware with the bad driver…</p>
</blockquote>
<h3 id="user-and-file-management">User and file management</h3>
<p>The OS controls…</p>
<p>… user management functions, e.g.:</p>
<ul>
<li>Creating, modifying, and deleting of an account</li>
<li>Access rights (admin, or normal user)</li>
<li>Logging actions</li>
</ul>
<p>… handling files</p>
<ul>
<li>Create, modify and delete files</li>
<li>Allocating to folders</li>
<li>Moving and renaming between folders</li>
<li>Copying and pasting</li>
<li>Searching</li>
<li>Access rights (read only)</li>
<li>Sorting (date modified, name)</li>
<li>Overall file system for organising (NTFS)</li>
</ul>
<h2 id="utility-software">1.5.2 Utility software</h2>
<p>Utility software helps maintain the system. It includes programs involving encryption software, defragmentation and data compression tools. Computers often come with these software built in (even part of the OS now) to keep the device running smoothly.</p>
<h3 id="encryption-software">Encryption software</h3>
<p>Encryption software is used to scramble the contents of files to everyone but authorised users who have the decryption/private key. It can encrypt individual files or even the entire disk! This is useful for government organisations or banks which have private and sensitive data stored. If someone steals a disk, what can they do with the data if they can’t read it?</p>
<h3 id="defragmentation-software">Defragmentation software</h3>
<p>If you know what defragging a hard disk is, then you can skip this.</p>
<p>If you don’t, read below:</p>
<p>Hard disk drives are separated into thousands of tracks, with thousands of segments in these tracks. When a file is written to a disk, it is written to the next available segment. Let’s say you’re downloading a 30GB game - and you pause it halfway through for an hour, and you download some music. Then, on the hard drive, you will have some of the game, then some music. Let’s say you finish the download. Then, there will be some game, some music, and the rest of the game. Oh, also, how about some programs were updating in the background and it didn’t say! Then, there will be loads of ‘fragmented’ parts of games, programs and music, all jumbled around near each other on the disk!</p>
<p>This is terrible for the computer’s performance, as the head has to go to loads of physically distanced parts of the disk to read and write to. Defragging moves the files from all these parts to one consecutive track, where possible. This will load your games up a load faster!<br>
<img src="http://storageprocess.weebly.com/uploads/1/7/3/1/17314496/3956138.png?371" alt="enter image description here"><br>
<em>What a hard drive is actually made from. Remember there can be several platters on a large drive!</em></p>
<h5 id="note-solid-state-drives-speeds-are-not-affected-by-fragmentation.-do-not-ever-try-and-defrag-a-ssd">NOTE: Solid state drives’ speeds are not affected by fragmentation. Do NOT EVER try and defrag a SSD!</h5>
<h3 id="compression-software">Compression software</h3>
<p>Compression software reduces the size of a file on secondary storage to make it easier to send (as lower file size = lower packets needed) and allows more files to be stored (as lower file size = more free space). Note that most compression will need to be lossless, as you can’t just get rid of a bit of a program and hope it’ll work. Examples of compressed data are ZIP files.</p>
<h3 id="backup-software">Backup software</h3>
<p>Now this isn’t in the specification, but I think it’s worth knowing about.</p>
<p>Backup software takes a copy of the files on a computer to either a high capacity secondary storage device (usually removable so a USB drive or big HDD) or uploaded to the cloud.</p>
<p>It can be a full backup or an incremental backup which takes place. A full backup is making a copy of every single file on a device, so will take a lot of time and storage space. Incremental backups only take a copy of new and modified files since the last backup, so they’re cheaper and faster. Usually admins will take one backup at the start then daily incremental backups.</p>
<p>Remember, it will take a long time to download from the cloud, so if there’s a question on this then remember that. Then again, cloud documents can be accessed from anywhere…</p>
<h1 id="impacts-of-digital-technology">1.6 Impacts of digital technology</h1>
<p><em>Advance information: The following will be directly assessed:</em></p>
<ul>
<li>Impacts of digital technology on wider society</li>
<li>Legislation relevant to Computer Science</li>
</ul>
<h2 id="ethical-legal-cultural-and-environmental-impact">1.6.1 Ethical, legal, cultural and environmental impact</h2>
<p>Here’s what the specification says on this subtopic:</p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/975121812826488874/If_you_see_this_somehow_I_totally_do_not_like_Nolwenn_Tighe._Please_dont_look_at_other_file_names_thank_you_lol.png" alt="What you need to know"></p>
<h3 id="impacts-of-digital-technology-on-wider-society-including">Impacts of digital technology on wider society including:</h3>
<ul>
<li>Ethical issues</li>
<li>Legal issues</li>
<li>Cultural issues</li>
<li>Environmental issues</li>
<li>Privacy issues</li>
</ul>
<p>Ethical issues occur <strong>when a given decision, scenario or activity creates a conflict with a society’s moral principles</strong>.</p>
<p>A legal issue is <strong>something that happens that has legal implications and may need the help of a lawyer to sort out - a question or problem that is answered or resolved by the law</strong>.</p>
<p>Cultural issues are <strong>problems that occur when culture conflicts with systems, goals or other cultures</strong>. (e.g religion, ethnicity, generation)</p>
<p>Environmental issues are defined as <strong>harmful effects to Earth and its natural systems due to the actions of humans</strong>. (e.g pollution, animals dying, poisoning of environment, deforestation)</p>
<p>Privacy issues include companies using your personal data for their gain, e.g TikTok seeing what trends you’re into and giving you ads across other websites, which then track you and build up a profile of what you do online. To some people this would be creepy, especially as there’s no way to opt out</p>
<blockquote>
<p>If in doubt, just say that’s what tiktok do because you’ll probably be right either way</p>
</blockquote>
<h3 id="legislation-relevant-to-computer-science">Legislation relevant to Computer Science:</h3>
<ul>
<li>The Data Protection Act 2018
<ul>
<li>Controls how your personal information is used by companies, organisations or the Government.</li>
</ul>
</li>
<li>Computer Misuse Act 1990
<ul>
<li>For securing computer material against unauthorised access or modification</li>
</ul>
</li>
<li>Copyright Designs and Patents Act 1988
<ul>
<li>Gives the author or creator the right to copy, adapt, communicate, lend or sell copies of their work (can be sold or transferred)</li>
</ul>
</li>
<li>Software licences (i.e. open source and proprietary)</li>
</ul>
<p>A software license agreement describes how the software should be used, and any restrictions it may have from the author, the provider and to end users.</p>
<p>Open source means providing access to the source code and the ability to change the software if you want. Groups of programmers often work together to provide support for users and develop the software further. These products are often tested by contributors in public. FREE TO USE, FOR ANYONE.</p>
<blockquote>
<p>For example, BaguetteBot (<a href="https://github.com/Draggie306/BaguetteBot">Source Code</a> + <a href="https://discord.com/oauth2/authorize?client_id=792850689533542420&amp;permissions=8&amp;scope=bot%20applications.commands">Invite Link</a>) is free to use and inspect my code.</p>
</blockquote>
<p>Proprietary means no access to the source code (already compiled), purchased commonly as ‘off-the-shelf’ for example games. Also known as closed-source. It remains the legal property of whoever made it. Source code is usually not released, and may require a license key to use it in return for money.</p>
<blockquote>
<p>Developers of proprietary products are expected to create tutorials and support many operating systems themselves, especially if the product costs money.</p>
</blockquote>
<p>In short, if you want to make money, use a proprietary license. If you want people to improve your code and find bugs, use an open source license. <strong>You will need to recommend a type of licence for a given scenario, including benefits and drawbacks.</strong></p>
<h1 id="paper-2">Paper 2</h1>
<h3 id="important-there-is-no-advance-information-on-this-paper.-you-need-to-know-everything.">IMPORTANT: THERE IS NO ADVANCE INFORMATION ON THIS PAPER. YOU NEED TO KNOW EVERYTHING.</h3>
<h1 id="algorithms">2.1 Algorithms</h1>
<h2 id="computational-thinking">2.1.1 Computational thinking</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059440709955695/2.1.1.png" alt="Algorithms spec content"></p>
<p>There are 3 words to describe ‘computational thinking’:</p>
<ul>
<li>Abstraction: filtering out and ignoring the parts of problems which are not needed to solve a problem. It is effectively a general overview of the program with specific details removed, for example the London Underground map.</li>
<li>Decomposition: Breaking down a problem into smaller parts which are easier to understand. These smaller parts can be individually solved as they are easier to comprehend, for example creating an app would need graphics, audio, software used to create it, testers, user interface…</li>
<li>Algorithmic thinking: thinking logically, just as a computer does. Usually works back from how an intended solution can be reached by working out the steps needed to get there.</li>
</ul>
<blockquote>
<p>Sometimes I might get annoyed if you don’t think algorithmically…</p>
</blockquote>
<p>It is only when a problem is decomposed and abstracted, that creating of the algorithm can begin,</p>
<h2 id="designing-algorithms">2.1.2 Designing algorithms</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059479121367080/2.1.2.png" alt="ibaguette.com"></p>
<p>An algorithm is a step-by-step set of instructions used to solve a problem. Before designing an algorithm, it must be decomposed into its inputs, outputs and the order of instructions, as well as if any decisions need to be made.</p>
<p>Algorithms are made in three different ways: pseudocode, flowcharts and in Python (or another high-level language/OCR reference language).</p>
<blockquote>
<p><mark>You need to know how to create, interpret the results of, complete and refine algorithms in these languages. If you can’t code Python, please just get up replit or an IDE and start coding. You will find my examples at the bottom.</mark></p>
</blockquote>
<h3 id="flowchart-symbols">Flowchart symbols</h3>
<ul>
<li>Lines represent the flow of the program.</li>
<li>Parallelograms show inputs and outputs.</li>
<li>A rectangle shows a process, for example <code>x = x + 10</code></li>
<li>A diamond represents a decision, for example if <code>x &gt; y</code>. Then there would be 2 lines coming from this, one for yes and one for no.</li>
<li>A rectangle with curved sides represents a terminal, like the start or end of the program.</li>
</ul>
<p><img src="https://bam.files.bbci.co.uk/bam/live/content/zvf3d6f/small" alt="if you see this then your network can't load the image."><br>
<em>Make sure you know this. Credit BBC</em></p>
<p><img src="https://bam.files.bbci.co.uk/bam/live/content/zdkwhbk/medium" alt="if you see this then your network can't load the image."><br>
<em>Example use. Credit BBC</em></p>
<h3 id="creating-programs">Creating programs</h3>
<p>Advantages of using flowcharts include the fact that it shows a step-by-step method of how to solve a program, which can be easily written. Disadvantages of flowcharts include that they may be time consuming to make and not easily drawn.</p>
<p>Advantages of using pseudocode (looks like real code but won’t run) include it acts as the foundations for transcribing it into an actual programming language like Python, and is easy to understand with an English-like syntax, like Python, making it easy for non-programmers as well, like Python. Errors in the design will not affect the program as it is obvious what the intended result is, and if there is an obvious error this can be easily changed.<br>
Disadvantages include that it can be harder to see how a program flows with indentation, and is just more time consuming to make than a flowchart, so you might as well use Python for that.</p>
<p>Pseudocode example</p>
<p><code>while answer_inputted != 'valorant'</code><br>
<code>answer_inputted = input ("what is the worst game")</code><br>
<code>if answer_inputted == "valorant" then</code><br>
<code>print("correct! you got it right.")</code><br>
<code>else</code><br>
<code>print("wrong")</code><br>
<code>endif</code><br>
<code>endwhile</code></p>
<p>It’s easy to tell what this ‘code’ does.</p>
<ul>
<li>Line 1 says the loop will repeat <code>while</code> the <code>answer_inputted</code> is not <code>'valorant'</code>.</li>
<li>Line 2 sets variable <code>answer_inputted</code> to the outcome of the <code>input</code></li>
<li>Line 3 checks <code>if</code> <code>answer_inputted</code> is <code>'valorant'</code></li>
<li>Line 4 <code>prints</code> a response</li>
<li>Line 5 is <code>else</code> so this will be used when the previous statement is not <code>true</code> (if the <code>answer_inputted</code> is not ‘valorant’)</li>
<li>Line 6 will <code>print</code> wrong</li>
<li>Line 7 will end the if statement after the if statement is triggered</li>
<li>Line 8 will end this section of the code when the endif statement is triggered</li>
</ul>
<h3 id="trace-tables">Trace tables</h3>
<p>A table used to show how values in variables change throughout instructions occurring.</p>
<p>In the columns goes the variable name. In the rows, the instruction number is written. Below the variable names, in the table, are the expected values of what each instruction does.</p>
<p>A logic error has occurred if the expected value on paper does not equal the received value when executed by the programrs</p>
<blockquote>
<p>They enable a programmer to compare what the value of each variable should be against what a program actually produces. Where the two differ is the point in the program where a logic error has occurred.</p>
</blockquote>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979105132396568606/le_table.png" alt=""><br>
<em>from bitesize</em></p>
<p><a href="https://www.bbc.co.uk/bitesize/guides/z4cg4qt/revision/9">https://www.bbc.co.uk/bitesize/guides/z4cg4qt/revision/9</a></p>
<h2 id="searching-and-sorting-algorithms">2.1.3 Searching and sorting algorithms</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059536180703282/2.1.3_searchsort.png" alt=""></p>
<h3 id="linear-search">Linear search</h3>
<p>The simplest method of searching through a dataset. It gets the length of a dataset, sets it counter to 0. It looks at the position of its counter and sees if it matches the search. If not, the counter is incremented by 1 and the process is repeated</p>
<p>Linear searches work on unordered lists. On ordered lists, they will take a long time if the value to search for is a large number.</p>
<h3 id="binary-search">Binary search</h3>
<p><strong>Binary search</strong> is used on a dataset of pre-ordered numbers. It works by:</p>
<ol>
<li>getting the midpoint in the list, getting the value, and if it is the target value the search ends.</li>
<li>If not, it will compare the received value. If the value is less than the value to be found, it will disregard the lower half of the list, as it knows it cannot be lower than the midpoint value.</li>
<li>The remaining part of the list is divided in half again, and the process repeated.</li>
<li>When the value is found, the search has succeeded.</li>
</ol>
<blockquote>
<p>Note: rounding applies. If there are 7 items in the list, the midpoint would be 3.5. In this case the search would start from 4.</p>
</blockquote>
<p>Binary searches are much more efficient than linear searches, especially on large datasets.</p>
<blockquote>
<p>In an ordered list of every number from 0 to 100, a linear search would take 99 steps to find the value 99. A binary search would only require seven steps.</p>
</blockquote>
<h3 id="bubble-sort">Bubble sort</h3>
<ol>
<li>Starts at the beginning of the list, compare the value at position 1 to the next one up (at position 2).</li>
<li>Swap the positions of these if the second is bigger than the first.</li>
<li>Then, move both positions up one, to position 2 and 3.</li>
<li>Swap if they are in the wrong order.</li>
<li>Repeat until the end of the list.</li>
<li>Start back from the beginning and repeat this until it is in order.</li>
</ol>
<p><a href="https://www.bbc.co.uk/bitesize/guides/zjdkw6f/revision/4">https://www.bbc.co.uk/bitesize/guides/zjdkw6f/revision/4</a></p>
<h3 id="merge-sort">Merge sort</h3>
<p>Very simplified version:</p>
<ol>
<li>Split the list in half repeatedly until all values are separate</li>
<li>Compares two values next to each other and organise.</li>
<li>Go to the next pair of values and repeat. If something is smaller than the existing smallest value, then place it there instead. (Same with biggest values)</li>
<li>Repeat until all values are in order</li>
</ol>
<p><img src="https://bam.files.bbci.co.uk/bam/live/content/znq67yc/large" alt=""><br>
<em>bitesize version</em></p>
<p>Large data sets are better with merge sorts as they are more efficient.</p>
<p><a href="https://www.bbc.co.uk/bitesize/guides/zjdkw6f/revision/5">https://www.bbc.co.uk/bitesize/guides/zjdkw6f/revision/5</a></p>
<h3 id="insertion-sort">Insertion sort</h3>
<p>More efficient than bubble sort, but less complex and efficient than a merge sort</p>
<ol>
<li>Compare values of 1 and 2.</li>
<li>If 1 is bigger than 2, then 2 is moved to the start.</li>
<li>Compare the values of 2 and 3. Move 3 to the left until it cannot be moved any more as the number is smaller than it.</li>
<li>Repeat for all values.</li>
</ol>
<p><img src="https://bam.files.bbci.co.uk/bam/live/content/z626382/large" alt=""><br>
<em>bitesize version</em></p>
<p>Insertion sorts work best when used with smaller data sets.</p>
<p><a href="https://www.bbc.co.uk/bitesize/guides/zjdkw6f/revision/6">https://www.bbc.co.uk/bitesize/guides/zjdkw6f/revision/6</a></p>
<h1 id="programming-fundamentals">2.2 Programming fundamentals</h1>
<h2 id="programming-fundamentals-1">2.2.1 Programming fundamentals</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059627499077642/2.2_programming_fundamentals.png" alt="."></p>
<h3 id="basic-programming-definitions">Basic programming definitions</h3>
<ul>
<li>Variables: A value stored in memory that can change.</li>
<li>Constants: A value stored in memory that cannot change once defined.</li>
<li>Operators: Logic applied to numbers, e.g equal, subtract, less than.</li>
<li>Inputs: data inputted to programs. In python, <code>x = input("enter string: ")</code></li>
<li>Outputs: data the program shows to users. <code>print("output")</code></li>
<li>Assignment: giving a value data. e.g x = 2. you are assigning the value <code>x</code> the data, which is <code>2</code>, an integer.</li>
</ul>
<p>Sequence is the way in which the code is executed.</p>
<p>Selection is a part of the code that is ran, or <code>if</code> statements. When these statements are encountered, it ‘selects’ which part to run!</p>
<p>Iteration is a loop. There are count and condition controlled loops.</p>
<ul>
<li>Count controlled loops are controlled by a number. For example, <code>if x &gt; 10:</code> will run until the value of <code>x</code> is greater than <code>10</code>.</li>
<li>Condition controlled loops are controlled by a specific value. This is most often <code>True</code> or <code>False</code>; these will run until this value is changed. For example, <code>if x == True:</code> will run the code until the value of<code>x</code> is no longer equal to <code>True</code>.</li>
</ul>
<h3 id="operators">Operators</h3>
<p>There are comparison and arithmetic operators. (They will give the boolean value of <code>True</code> if their criteria is met)</p>
<h4 id="comparison-operators">Comparison operators:</h4>
<ul>
<li>==
<ul>
<li>Equal to. Used only to check if a value is something else. Do not get confused with a single equals which is used to specify a value.</li>
</ul>
</li>
<li>!=
<ul>
<li>Not equal to. Only <code>True</code> when the value it is comparing against is NOT the first value.</li>
</ul>
</li>
<li>&lt;
<ul>
<li>Less than. Only <code>True</code> when the value in front of it is less than the value after it. <code>if x &lt; 3</code> means if x is less than 3.</li>
</ul>
</li>
<li><code>&lt;=</code>
<ul>
<li>Less than or equal to. Only <code>True</code> when the value in front of it is less OR equal to than the value after it.</li>
</ul>
</li>
<li><code>&gt;</code>
<ul>
<li>Greater than. Only <code>True</code> when the value in front of it is more than the value after it. <code>if x &gt; 3</code> means if x is greater than 3.</li>
</ul>
</li>
<li><code>&gt;=</code>
<ul>
<li>Greater than or equal to. Only <code>True</code> when the value in front of it is more OR equal to than the value after it.</li>
</ul>
</li>
</ul>
<h3 id="arithmetic-operators">Arithmetic operators:</h3>
<ul>
<li><code>+</code>
<ul>
<li>Addition. 9 + 10 = 21</li>
</ul>
</li>
<li><code>-</code>
<ul>
<li>Subtraction.</li>
</ul>
</li>
<li><code>*</code>
<ul>
<li>Multiplication</li>
</ul>
</li>
<li><code>/</code>
<ul>
<li>Division</li>
</ul>
</li>
<li><code>MOD</code>
<ul>
<li>Modulus. Gives the remainder. 20 mod 8 = 4. (16 remainder 4)</li>
</ul>
</li>
<li><code>DIV</code>
<ul>
<li>Quotient. Gives how many times the number can be fully divided. 20 div 8 = 2. (20 divided by 8 is 2 remainder 4.)</li>
</ul>
</li>
<li><code>^</code>
<ul>
<li>Exponentiation. To the power of. 2^8 = 256.</li>
</ul>
</li>
</ul>
<h3 id="boolean-operators">Boolean operators</h3>
<ul>
<li>AND - only True when the two values are True.</li>
<li>OR - only True if one or more values are True.</li>
<li>NOT - everything that is not the value.</li>
</ul>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979110986508292157/unknown.png" alt=""></p>
<h2 id="data-types">2.2.2 Data types</h2>
<p><a href="https://cdn.discordapp.com/attachments/972581792576053298/979059686441648138/2.2.2_Data_types.png">https://cdn.discordapp.com/attachments/972581792576053298/979059686441648138/2.2.2_Data_types.png</a></p>
<ul>
<li>Integer: Positive or negative whole numbers</li>
<li>Real/float: Numbers with decimal places</li>
<li>Boolean: True or False (1 or 0)</li>
<li>Character: A single character</li>
<li>String: Numbers and letters together.</li>
</ul>
<p>Casting is a method used to convert between these data types. For example, if you want to compare a user’s input to a value, you must change it to an integer first. The way to do this is by using:</p>
<p><code>x = input("how much cake do you want from to 10? &gt;&gt;")</code><br>
<code>if int(x) &gt; 5:</code><br>
<code>print("you really want cake lol")</code></p>
<p>You use <strong>int(x)</strong> to change x to an integer.<br>
Or, <strong>str()</strong> for strings, or <strong>float()</strong> for floating point data.</p>
<p>You can turn the above into two lines by using this:<br>
<code>if int(input("how much cake do you want from to 10? &gt;&gt;")) &gt;</code>5:<br>
<code>print("you really want cake lol")</code></p>
<h2 id="additional-programming-techniques">2.2.3 Additional programming techniques</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059762308210749/2.2.3_Additional_programming_stuff.png" alt=""><br>
<em>THERE IS A LOT HERE I WILL BE QUICK</em></p>
<h3 id="string-manipulation">String manipulation</h3>
<p>Not manipulating surds, or abusing strings, but just messing about with the sting.</p>
<p>The length of a string can be obtained by doing <code>len(string)</code>, where <code>string</code> is a variable holding a string value.</p>
<p>You can also get the characters at a specific point in a string. If <code>x</code> = ‘Baguette’, then <code>x[3]</code> would be ‘u’. Remember 0 is your first value.</p>
<p>To get the characters from positions 0 and 3 (not included), the syntax is this: <code>x[0:3]</code>  = would be ‘Bag’. This is known as ‘slicing’.</p>
<p>You can also manipulate the casing of everything in a string. If <code>x</code> = ‘Baguette’, then <code>x = x.upper()</code> would result in <code>x</code> being ‘BAGUETTE’. Likewise, <code>x.lower()</code>would be ‘baguette’.</p>
<p>Finally, concatenation is joining two strings together.<br>
If <code>one = "Baguette"</code> and <code>two = "Brigaders"</code>, then <code>one + " " + two</code> would print <code>Baguette Brigaders</code>.</p>
<blockquote>
<p>If you feel comfortable with f-strings then you could get the same by using <code>print(f"{one.lower()} {two.upper()}")</code> to  output ‘baguette BRIGADERS’.</p>
</blockquote>
<h3 id="d-arrays">(2D) Arrays</h3>
<p>Arrays (interchangeable with lists honestly) store lots of stuff and are denoted by their square brackets, like <code>[4, 5, 3, 6, 9]</code> or with strings as <code>["Yes", "No", "Baguettes", "Beans", "Haram"]</code>.  They can be accessed by the sting name and location in the list. If the above list with strings is called <code>random_words</code>, then to print the word ‘Baguettes’ I would call <code>print(random_words[2])</code>.</p>
<p>2D arrays take this principal and make it more complicated. Basically this means there is an array inside an array.</p>
<p><code>list_of_cars_and_prices = [["beans car", "bozo car", "fresh car"], [20, 30, 55]]</code></p>
<p>Notice how inside one list, there are actually 2 smaller lists? This is a 2D array. To get the value of ‘55’ from the second array, we do <code>print(list_of_cars_and_prices[1][2]</code>. This gets the <strong>third value</strong> from the <strong>second array</strong>, inside the list called ‘list_of_cars_and_prices’. This can be used to store values next to each other.</p>
<blockquote>
<p>To change a value of an item in an array/list, do <code>list_name[index] = "thing_to_change_it_to"</code></p>
</blockquote>
<h3 id="functions-and-procedures">Functions and procedures</h3>
<p>A procedure performs a task, whereas a function produces information.</p>
<p>Parameters can be invoked into both functions and procedures. For example, <code>beans(number_of_beans)</code> will result in the function or procedure using the invoked value of <code>number_of_beans</code> to perform a calculation.</p>
<p>Functions return a value. You can assign a value to a variable, and set this value to the result of a function, like <code>x = beans()</code>, where <code>beans</code> is a defined function. It could return a number or string or any data type.</p>
<blockquote>
<p>Programming languages have their own built-in functions and procedures. When you type <code>print("text")</code>,  you are actually passing in your <code>text</code> as a parameter used to display something on your screen! User-defined functions and procedures are the ones that the user creates.</p>
</blockquote>
<h3 id="file-handling">File handling</h3>
<p>writing:<br>
<code>file1 = open("file.txt")</code><br>
<code>x = file1.write("AMONG US FRENCH SUSSY BAGUETTES")</code><br>
<code>file1.close()</code></p>
<p>reading back:<br>
<code>file1 = open("file.txt")</code><br>
<code>x = file1.read()</code><br>
<code>file1.close()</code></p>
<p><code>print(x)</code></p>
<p>must always do <code>file.close()</code> to avoid corruption</p>
<h3 id="locals-and-globals">Locals and globals</h3>
<p>Global variables are accessed by every subroutine at all times. Present in memory during execution. Bad because if it gets maliciously changed than it could affect the entire code and every subroutine. Also memory hog if loads of variables are used at once - normal in big programs and games. Scope of these are the entire program.</p>
<p>Local variables are declared in one subroutine or function. The value of this is only held in memory whilst that part of the code is being executed. Therefore it’s more efficient. Scope of these are the sub-program of declaration.</p>
<p>Parameter passing - allows the values of local variables within the main program to be passed to sub-programs without the need to use global variables. The value of these variables (or a copy of the value of these variables) is passed as a parameter to and from sub-programs as necessary.</p>
<p><a href="https://www.bbc.co.uk/bitesize/guides/z2q6hyc/revision/3#:~:text=The%20scope%20of%20a%20global,where%20it%20has%20been%20declared.&amp;text=Local%20variables%20-%20only%20accessed%20within,program%20where%20they%20are%20located.">credit</a></p>
<h3 id="sql">SQL</h3>
<p>SQL is a programming language used for interrogating a database.</p>
<p>Data can be retrieved using the commands  <code>SELECT, FROM</code> and <code>WHERE</code></p>
<p><code>*</code> stands for wildcard, which means all records.</p>
<p>from the ibaguette emails database:<br>
<code>SELECT * FROM "Users" WHERE "Email Address" LIKE "admin" OR "draggie"</code><br>
would retrieve:</p>
<p>1			Draggie		306			Superuser			<a href="mailto:draggie@ibaguette.com">draggie@ibaguette.com</a><br>
6			Admin			Beans		Administrator	<a href="mailto:admin@ibaguette.com">admin@ibaguette.com</a><br>
7			Draggie1	306			<a href="mailto:admin@ibaguette.com">admin@ibaguette.com</a><br>
<em>ID		User			Surname	Email Address</em></p>
<p><a href="https://www.bbc.co.uk/bitesize/guides/zb3yb82/revision/7">i’m tired please just click this until it might get updated.</a></p>
<h3 id="randoms">Randoms</h3>
<p>You must <code>import random</code>at the start of the program for this to work.</p>
<p><code>random.randint(lower_bound, upper_bound)</code> is used to generate a random number between bounds. Assign this to a variable and you have your randomly generated number.</p>
<h1 id="producing-robust-programs">2.3 Producing robust programs</h1>
<h2 id="defensive-design">3.1 Defensive design</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059824711061554/2.3.1_Defensive_design.png" alt=""></p>
<p>A program must be able to handle all likely input values, not just the intended one. If valid data is inputted which might affect functionality, for example entering -10 to an age question, then this will produce logic errors. To accommodate this, there can be a range of things added to a program to ensure these do not occur.</p>
<ul>
<li>Anticipating misuse
<ul>
<li>A way of making sure age is not negative could be by making the part of the code that verifies age a function, which will return the age once verified to be valid. For example, a while statement could be added with a condition controlled loop, which will only change conditions <code>if age &gt; 10 AND age &lt; 100</code>. This is an example of input validation</li>
</ul>
</li>
<li>Authentication
<ul>
<li>Usernames and passwords. This can be easily implemented by adding <code>password = input("enter password")</code> and using double equals to check if it matches a previously defined variable, or even decrypted from an external file.</li>
</ul>
</li>
</ul>
<p>Code written must also be maintainable in the future. There are several ways of ensuring this.</p>
<ul>
<li>Subroutines. These are parts of the main program. If one part of the program needs to be changed, it can be in the subroutine which is called, so other parts of the code are not affected by changes. Also, it can reduce the amount of clutter in code as if something needs to happen multiple times, code can just link back to a pre-existing subroutine.</li>
</ul>
<blockquote>
<p>In BaguetteBot, whenever someone generates coins in the server, one subroutine takes care of this, instead of it being defined how to exactly add a coin whenever someone asks for their balance, joins voice chat, sends a message, etc. Type .coins to use it in Baguette Brigaders!</p>
</blockquote>
<ul>
<li>Naming conventions. There is a set of rules you should follow when naming variables and subroutines. For example naming something <code>x</code> doesn’t really tell you what it does, whereas <code>value_inputted</code> will. (I’m very guilty of this!)</li>
<li>Indentation. Essential for legibility, indentation also defines if statements and more. It also makes it easier to read what parts of the program does, as indented levels show that everything on that indent is as a result of something previously.</li>
<li>Commenting. Helps people read your code and helps you come back to work on it later. Denoted by either <code>#</code>, <code>"""</code> or <code>//</code>, depending on the language. The first two are for Pythion.</li>
</ul>
<h2 id="testing">2.3.2 Testing</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059974670000198/2.3.2_testing.png" alt=""></p>
<p>Testing is used to make sure there is no bugs or unexpected events when the code is run. You don’t want to send your code to a client if it doesn’t work!</p>
<p>Logic errors result in the program still executing, but producing unexpected results.</p>
<p>Syntax errors are errors which break the grammatical rules of the programming language and stop it from being run/translated into machine code.</p>
<p>Il existe deux exemples de tests :</p>
<ul>
<li>Iterative testing. This is testing the code, or parts of it, during development to ensure there are no seriously buggy things happening as a result of a typo. It may be easier to identify the mistake if the code is run every few minutes, as the programmer will remember what they’ve changed.</li>
<li>Final/terminal testing. This is testing which occurs at the end of production of some code, before sent to clients.</li>
</ul>
<p>Normal test data is data which should be accepted by a program, without causing errors</p>
<p>Boundary test data as data of the correct type which is on the very edge of being valid. For example, in the statement <code>if x &gt; 10</code>, the boundary would be 10.</p>
<p>Invalid test data is data of the correct data type which should be rejected by a computer system. This could be like if an age is -100 years old.</p>
<p>Erroneous test data as data of the incorrect data type which should be rejected by a computer system. This could be entering a name instead of an age.</p>
<blockquote>
<p>You need to know how to identify suitable test data for a scenario, and how to create and complete a test plan. By putting in ‘erroneous’, ‘boundary’ and ‘valid’ during iterative testing and final testing, this will get you full marks.</p>
</blockquote>
<h1 id="boolean-logic">2.4 Boolean logic</h1>
<h2 id="boolean-logic-1">2.4.1 Boolean logic</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979059975408189530/2.4.1_boolean_logic.png" alt=""><br>
<em>Ahhh… logic diagrams and truth tables. My worst enemy. There’s always a tricksy little 1 or 0 that I always put in the wrong place and there goes my full marks for the test. Grrrr!</em></p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979133277187244063/unknown.png" alt="And or not gates"><br>
<em>Your and or and not gates</em></p>
<p>You must be able to follow the lines in a truth table, and the interactions these have at these gates.</p>
<ul>
<li>An AND gate will only output 1 if <strong>both its inputs</strong> are 1 as well.</li>
<li>An OR gate will only output 1 if <strong>one or more</strong> of its inputs are 1.</li>
<li>A NOT gate will only output 1 if its input is 0. (Essentially reversing the input)</li>
</ul>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979134326962786354/unknown.png" alt="And gate"><br>
<em>AND gate outputs</em></p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979134130950381648/unknown.png" alt="Or gate "><br>
<em>OR gate outputs</em></p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979135318110392380/unknown.png" alt="Deez nots"><br>
<em>Deez NOTs</em></p>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979134378007461948/unknown.png" alt="Lmao"><br>
<em>You don’t have to know this lol</em></p>
<h1 id="languages-and-ides">2.5 Languages and IDEs</h1>
<h2 id="languages">2.5.1 Languages</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979060118387839047/2.5.1_languages.png" alt=""><br>
<em>Lae français est aussi une langue mignonne mdr. attendre, je n’ai dit jamais ca, d’accord ? Merci. 👀</em></p>
<p>There are two categories of programming language: high and low level languages.</p>
<ul>
<li>High level languages are those which sensible people code in, like Python, JavaScript, HTML. They are easy to read and write, and some have a human like syntax. They do not depend on the physical architecture of the processors executing them. However, as they are machine independent, they must be translated in order to run.</li>
<li>Low-level languages like assembly code and machine code. They must be changed depending on the make and model of the CPU. As they run ‘closer’ to the CPU itself, they often require less overhead on tasks, and machine code does not require translation as it is written purely in binary.</li>
</ul>
<blockquote>
<p>Assembly code, although is a low level language, not quite machine code. Machine code is what everything must be translated into in order to be executed.</p>
</blockquote>
<p><img src="https://bam.files.bbci.co.uk/bam/live/content/zbkjpg8/medium" alt="enter image description here"><br>
<em>Stolen from <a href="https://www.bbc.co.uk/bitesize/guides/z6x26yc/revision/5">here</a></em></p>
<p>A compiler parses the source code once, saving the results as a binary file, translating it. An interpreter reads the source code line by line and converts it to executable binary while executing.</p>
<p>Compiled code runs faster, as they have already been translated. If the code has no logic or syntax errors, and does not need to be debugged, compiled code is always better. It optimises code as well, allowing it to take up less memory. For example, comments are removed when generating compiled code. However, compiled code may also only on the hardware and OS it is targeted to. You can’t run an EXE file on your phone without an IDE.</p>
<p>Interpreted code is slower, as the CPU must wait for every line to be translated, but has the potential to run on multiple kinds of hardware, running different operating systems. It simply executes code, without saving a machine code version. They require less memory also as they do not translate the entire file.</p>
<blockquote>
<p>Interpreters can be built with a REPL, or a Read Execute Print Loop. Hence the name <a href="http://repl.it">repl.it</a>.</p>
</blockquote>
<h2 id="the-ide">2.5.2 The IDE</h2>
<p><img src="https://cdn.discordapp.com/attachments/972581792576053298/979060118605922314/2.5.2_The_Integrated_Development_Environment_IDE.png" alt=""></p>
<p>The IDE (integrated development environment) has a wide range of tools to help programmers develop programs. These include:</p>
<ul>
<li>Editors. Code can be edited.</li>
<li>Error diagnostics. Tracebacks can show what caused exactly what to fail at the exact line.</li>
<li>Run-time environment. This allows a program to run on a computer even if it was not designed to. This allows the programmer to just use their known high-level language, and the RTE will do the rest.</li>
<li>Translators. They translate code to be executed hehehehaw.</li>
</ul>
<p>You can also write about:</p>
<ul>
<li>Breakpoints - code can be stopped at a specific line and variables can be checked for logic errors</li>
<li>Auto correct and indent</li>
<li>Auto suggestion - can sometimes fix a problem automatically</li>
<li>Syntax highlighting - similar declarations can be coloured to see them better. For example, all variables could be yellow while classes are blue.</li>
<li>Linting - the IDE can analyse the code you’re writing as you’re writing it for errors. For example, it may recognise that you used a double equals instead of a singular equals for setting the value of a variable.</li>
</ul>
<h1 id="section"></h1>
<p>That’s it! Go get a grade 9! Of course you need to do some of your own programming, so a few examples are below for you to have a go at.</p>
<h2 id="section-1"></h2>
<h1 id="programming-examples.">Programming examples.</h1>
<h2 id="level-easy">Level: Easy</h2>
<ol>
<li>Randomly generate a number and have the user guess it. If the user makes an incorrect guess, then say how far out the user is. The maximum amount it can be is the user’s input. Maximum 20 lines.</li>
</ol>
<p><a href="https://cdn.discordapp.com/attachments/972581792576053298/979121731992178718/unknown.png">My example</a>. Download <a href="https://cdn.discordapp.com/attachments/972581792576053298/979125133417525298/target.py">Python</a> / <a href="https://cdn.discordapp.com/attachments/972581792576053298/979125211905556490/target.txt">txt</a></p>
<h2 id="level-warm">Level: Warm</h2>
<ol start="2">
<li>Write a program using functions and subroutines that checks an inputted age, through a menu. The function which checks the age must have a condition controlled <code>while</code> loop and the age must be between 10 and 100 years old. When done, return to the original function and print the age in a piece of text. Maximum 25 lines.</li>
</ol>
<p><a href="https://cdn.discordapp.com/attachments/972581792576053298/979120051200331826/CheatSheetExcersise1.png">My example</a>. Download <a href="https://cdn.discordapp.com/attachments/972581792576053298/979125132901613568/age.py">Python</a> / <a href="https://cdn.discordapp.com/attachments/972581792576053298/979125211729362954/age.txt">txt</a></p>
<h2 id="level-spicy">Level: Spicy</h2>
<ol start="3">
<li>Create a list of cars, each with a cost. The user can buy a certain amount of cars, with 100 coins. The user cannot buy the same car twice. Display these cars at the end when the user has no money left. Use a singular 2d list to store the available cars, the costs and owned cars. Maximum 20 lines.</li>
</ol>
<p><a href="https://cdn.discordapp.com/attachments/972581792576053298/979124703111315497/unknown.png">My example</a>. I used f-strings and more to make it look more complicated. Download <a href="https://cdn.discordapp.com/attachments/972581792576053298/979125133795016774/cars.py">Python</a> / <a href="https://cdn.discordapp.com/attachments/972581792576053298/979125211549028482/cars.txt">txt</a></p>
<h2 id="section-2"></h2>
    </div>
  </div>
</body>
</html>
`

const OLD_html_science_practicals = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>All Science Core Practicals</title>
  <link rel="stylesheet" href="https://www.ibaguette.com/static/Stackedit_Style.css" />
</head>
<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#all-science-core-practicals">All Science core practicals</a></li>
<li><a href="#chemistry">Chemistry</a>
<ul>
<li><a href="#paper-1">Paper 1</a></li>
<li><a href="#change-in-ph-on-adding-powdered-calcium-hydroxide-or-calcium-oxide-to-hydrochloric-acid">3.6: Change in pH on adding powdered calcium hydroxide or calcium oxide to hydrochloric acid</a></li>
<li><a href="#electrolysis-of-copper-sulfate">3.31: Electrolysis of copper sulfate</a>
<ul>
<li><a href="#part-1---using-inert-electrodes">Part 1 - using inert electrodes</a></li>
<li><a href="#part-2---using-copper-electrodes">Part 2 - using copper electrodes</a></li>
</ul>
</li>
<li><a href="#c-acid-alkali-titration-with-burette-pipette-and-indicator">5.9C: Acid-alkali titration with burette, pipette and indicator</a></li>
<li><a href="#paper-2">Paper 2</a></li>
<li><a href="#investigate-the-effects-of-changing-the-conditions-of-a-reaction-on-the-rates-of-chemical-reaction">7.1 Investigate the effects of changing the conditions of a reaction on the rates of chemical reaction</a></li>
<li><a href="#c-investigate-the-temperature-rise-produced-by-the-combustion-of-alcohols">9.28C: Investigate the temperature rise produced by the combustion of alcohols</a></li>
</ul>
</li>
<li><a href="#biology">Biology</a>
<ul>
<li><a href="#paper-1-1">Paper 1</a></li>
<li><a href="#investigating-biological-specimens">1.6: Investigating biological specimens</a>
<ul>
<li><a href="#method">Method</a></li>
<li><a href="#measuring-cell-size">Measuring cell size</a></li>
</ul>
</li>
<li><a href="#investigate-the-effect-of-ph-on-enzyme-activity">1.10: Investigate the effect of pH on enzyme activity</a>
<ul>
<li><a href="#method-1">Method</a></li>
<li><a href="#risks--problems">Risks & problems</a></li>
</ul>
</li>
<li><a href="#b-investigate-the-effects-of-antiseptics-antibiotics-or-plant-extracts-on-microbial-cultures">5.18B: Investigate the effects of antiseptics, antibiotics or plant extracts on microbial cultures</a>
<ul>
<li><a href="#method-a">Method (A)</a></li>
</ul>
</li>
<li><a href="#paper-2-1">Paper 2</a></li>
<li><a href="#investigate-the-rate-of-respiration-in-living-organisms">Investigate the rate of respiration in living organisms</a></li>
<li><a href="#investigate-the-relationship-between-organisms-and-their-environment-using-fieldwork-techniques-including-quadrats-and-belt-transects">Investigate the relationship between organisms and their environment using fieldwork techniques including quadrats and belt transects</a></li>
</ul>
</li>
</ul>
    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
    <p><a href="/cheatsheets/gcse">&lt; Back to GCSE Cheat Sheets</a></p>
      <h1 id="all-science-core-practicals">All Science core practicals</h1>
<p><a href="https://gist.github.com/Draggie306/1072270b844cda3e271d6f484aa9a976">Cheat Sheet Changelog</a> - Last recorded update to this one 15/05/2022 21:46</p>
<p>Note this only shows the ones explicitly defined in advance information.</p>
<p>Note this is the higher paper only, we don’t care about foundations lmao</p>
<h1 id="chemistry">Chemistry</h1>
<h2 id="paper-1"><strong>Paper 1</strong></h2>
<p>Advance Info avec Bitesize Links</p>
<ul>
<li><a href="https://www.bbc.co.uk/bitesize/guides/z8jt4qt/revision/4">Core practical 3.6</a> - Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid</li>
<li><a href="https://www.bbc.co.uk/bitesize/guides/zyg73k7/revision/3">Core practical 3.31</a> - Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes</li>
<li><a href="https://www.bbc.co.uk/bitesize/guides/zqxyjty/revision/3">Core practical 5.9C</a> - Carry out an accurate acid-alkali titration, using burette, pipette and a suitable indicator</li>
</ul>
<h2 id="change-in-ph-on-adding-powdered-calcium-hydroxide-or-calcium-oxide-to-hydrochloric-acid">3.6: Change in pH on adding powdered calcium hydroxide or calcium oxide to hydrochloric acid</h2>
<p>Specification summary:<br>
<img src="https://cdn.discordapp.com/attachments/971489035975540767/971489379262550086/unknown.png" alt="enter image description here"><br>
<em>This practical focuses on recording the pH at intervals when calcium hydroxide or calcium oxide reacts with dilute hydrochloric acid. An initial mass of the solid must be added to a fixed volume of the acid, and the pH recorded each time more of the solid is added to the acid. The pH can be recorded using a pH meter, or universal indicator paper with a glass rod used to take a pH measurement at each interval.</em></p>
<p><strong>How to perform</strong></p>
<ol>
<li>Firstly, use a measuring cylinder to add a known volume of HCl to a conical flask.</li>
<li>Then, use a glass rod to transfer a drop of liquid onto an universal indicator paper, or pH meter. Wait a minute and record the pH according to the colour, or the reading</li>
<li>Add a spatula with a known amount, e.g 2cm³, of calcium hydroxide powder, using a mass balance.</li>
<li>Stir thoroughly for 10 seconds, and use the method earlier to  transfer a drop and record the PH.</li>
<li>Record the results to the experiment in a table, amount</li>
<li>Repeat this until the pH no longer changes, which will be when unreacted calcium powder is sat on the bottom of the flask.</li>
</ol>
<p><strong>Analysing results</strong></p>
<p>Use the table’s results above to plot a graph. Amount of base added would be on the x-axis, and pH on the y-axis.<br>
<img src="https://cdn.discordapp.com/attachments/971489035975540767/971489037812650084/unknown.png" alt="enter image description here"><br>
<em>^^ What the graph would look like</em></p>
<p>A more accurate result can be achieved by using a balance to measure sodium hydroxide amounts, or using a pH meter instead of universal indicator, as it is difficult to read an exact value from it.</p>
<h2 id="electrolysis-of-copper-sulfate">3.31: Electrolysis of copper sulfate</h2>
<p><img src="https://cdn.discordapp.com/attachments/971489035975540767/971490473229299792/unknown.png" alt="enter image description here"></p>
<h3 id="part-1---using-inert-electrodes">Part 1 - using inert electrodes</h3>
<ol>
<li>Pour an amount of copper sulfate solution into a beaker, around 50ml.</li>
<li>Place 2 graphite rods (these are inert - carbon) and attach these electrodes to a DC power pack</li>
<li>Turn on the power supply. Ensure the rods don’t touch.</li>
<li>Test any gas produced at the electrodes. This would be hydrogen or oxygen. Hydrogen - lit splint makes a squeaky pop sound. Oxygen - relights a glowing splint.</li>
<li>Record the results and observations of the test.</li>
</ol>
<blockquote>
<p>Optional: place a test tube filled with CuSO4 over the anode to test for oxygen.</p>
</blockquote>
<p><strong>Results:</strong><br>
Copper will form at the cathode, and oxygen at the anode. This is because copper is less reactive than hydrogen so it will be discharged on to its surface, being shiny red. Oxygen will form at the cathode as a halide is not present.</p>
<p>Cu²⁺ + 2e⁻  -&gt; Cu(s)<br>
4OH⁻ -&gt; O2 + 2H₂O + 4e⁻</p>
<p>The gas is produced in small quantities, so may be difficult to take an accurate measurement of it and test it at all.</p>
<h3 id="part-2---using-copper-electrodes">Part 2 - using copper electrodes</h3>
<ol>
<li>Pour an amount of copper sulfate solution into a beaker, around 50ml.</li>
<li>Record the masses on a balance of two copper electrodes</li>
<li>Attach one to the negative terminal of the DC power pack, acting as the the cathode. Do the opposite for the other electrode.</li>
<li>Turn on the power pack and change the current (ammeter - amps in SERIES) to a constant value</li>
<li>Observe what happens!</li>
<li>Turn off the power pack after a few minutes, let’s say 10 mins</li>
<li>Remove one electrode. Gently wash it with distilled water, and let all the liquid to evaporate. <strong>Don’t wipe them with anything!</strong>. Measure and record the mass of it, and repeat with the other.</li>
<li>Record and repeat the experiment with more electrodes at different currents.</li>
</ol>
<h2 id="c-acid-alkali-titration-with-burette-pipette-and-indicator">5.9C: Acid-alkali titration with burette, pipette and indicator</h2>
<h2 id="paper-2"><strong>Paper 2</strong></h2>
<ul>
<li><a href="https://www.bbc.co.uk/bitesize/guides/zyb4h39/revision/6">Core practical 7.1</a> - Investigate the effects of changing the conditions of a reaction on the rates of chemical reaction</li>
<li><a href="https://www.bbc.co.uk/bitesize/guides/z2jndxs/revision/4">Core practical 9.28C</a> - Investigate the temperature rise produced in a known mass of water by the combustion of the alcohols ethanol, propanol, butanol and pentanol</li>
</ul>
<h2 id="investigate-the-effects-of-changing-the-conditions-of-a-reaction-on-the-rates-of-chemical-reaction">7.1 Investigate the effects of changing the conditions of a reaction on the rates of chemical reaction</h2>
<h2 id="c-investigate-the-temperature-rise-produced-by-the-combustion-of-alcohols">9.28C: Investigate the temperature rise produced by the combustion of alcohols</h2>
<h1 id="biology">Biology</h1>
<h2 id="paper-1-1">Paper 1</h2>
<ul>
<li>Core Practical 1.6: Investigate biological specimens using microscopes, including magnification calculations and labelled scientific drawings from observations</li>
<li>Core Practical 1.10: Investigate the effect of pH on enzyme activity</li>
<li>Core Practical 5.18B: Investigate the effects of antiseptics, antibiotics or plant extracts on microbial cultures</li>
</ul>
<h2 id="investigating-biological-specimens">1.6: Investigating biological specimens</h2>
<h3 id="method">Method</h3>
<ol>
<li>Set up your microscope.</li>
<li>Place the slide onto the stage, with clips to secure the coverslip in place. Make sure it is above the glass where light passes through.</li>
<li>Choose the lowest power objective lens and focus it. It should be almost touching the slide. (Don’t look through the eyepiece while doing this)</li>
<li>Look through the eyepiece. Turn the coarse focus dial to roughly focus by moving the space between the objective lens and the stage. The cells should be in focus</li>
<li>Draw the image - to show <strong>general arrangement of cells</strong> in a region of tissue.</li>
<li>Use the fine focusing dial to make the cells even more in focus</li>
</ol>
<blockquote>
<p>Multiply the eyepiece lens (10x) by the objective lens (4x) to calculate total magnification (total 40x)</p>
</blockquote>
<ol start="7">
<li>Choose a higher power objective lens and repeat. The dials will need to be refocused to produce a clear image.</li>
<li>Redraw the image, <strong>showing individual cells</strong>.</li>
</ol>
<blockquote>
<p>Usually, the cytoplasm, nucleus, cell membrane and mitochondria are visible in animal cells, and usually the cytoplasm, nucleus, cell wall and maybe the permanent vacuole and chloroplasts in plants.</p>
</blockquote>
<p>Risks include eye damage through high brightness and broken glass when handling slides and the cover slip.</p>
<h3 id="measuring-cell-size">Measuring cell size</h3>
<p>The cell size can be measured using a calibrated graticule and a stage micrometer. Alternatively, a ruler can be clipped onto a slide, and counting the amount of cells that fit across the length (1mm for a ruler). Divide 1000 μm by the number of cells to get the length, in micrometres, of a single cell.</p>
<h2 id="investigate-the-effect-of-ph-on-enzyme-activity">1.10: Investigate the effect of pH on enzyme activity</h2>
<p>Recap: Enzymes are biological catalysts, meaning they speed up reactions. Only one substrate type can fit into their active site, by the lock and key model. They denature, meaning their active sites change shape, under high temperature or in pH extremes.</p>
<h3 id="method-1">Method</h3>
<ol>
<li>Set up a Bunsen burner on a heatproof mat. Place a tripod above it and a gauze to put things on.</li>
<li>Get a beaker of water and place it on the gauze.</li>
<li>Turn on the gas and the Bunsen and heat the water up to around 37°C to simulate internal body temperature. Keep it this temperature.</li>
<li>Get a spotting tile (the white one with loads of dipples in) and place a drop of iodine solution in each ‘spot’ (still prefer dipple) to test for starch</li>
<li>Get 2cm³ of amylase enzyme solution and place this into a test tube.</li>
<li>Get 2cm³ of starch solution and place this in the same test tube.</li>
<li>Get 2cm³ of pH buffer solution (around pH 5) to keep the pH constant.</li>
<li>Place this test tube into the heated Bunsen water and mix with a stirring rod.</li>
<li>Every 30 seconds, use the stirring rod to transfer a drop of solution to the dipple containing the iodine.</li>
<li>Repeat until the iodine stops turning blue-black.</li>
<li>When it stops turning blue-black (remaining orange) the reaction has completed as starch is no longer present. Record the time for this.</li>
<li>Repeat the experiment several times, with different pH buffers at pH 6, 7 and 8.</li>
</ol>
<h3 id="risks--problems">Risks &amp; problems</h3>
<ul>
<li>
<p>Goggles should be warn at all times</p>
</li>
<li>
<p>Iodine is an irritant, so should be washed off immediately if it contacts the skin.</p>
</li>
<li>
<p>Samples could be taken more frequently to improve accuracy.</p>
</li>
<li>
<p>Colour change is gradual, so it’s not easy to tell when the reaction has finished.</p>
</li>
</ul>
<p><strong>Other useful things</strong><br>
The independent variable is the pH level.<br>
The dependant variable is the time it takes until there is no colour change (meaning that the starch has fully broken down)</p>
<h2 id="b-investigate-the-effects-of-antiseptics-antibiotics-or-plant-extracts-on-microbial-cultures">5.18B: Investigate the effects of antiseptics, antibiotics or plant extracts on microbial cultures</h2>
<p><img src="https://cdn.discordapp.com/attachments/971489035975540767/974409854020104232/unknown.png" alt="Specification content"><br>
<em>Specification content</em></p>
<p>Resources: <a href="https://www.youtube.com/watch?v=Cl6EMg0zA-A">Pearson Edexcel Example Video</a></p>
<h3 id="method-a">Method (A)</h3>
<ol>
<li>Sterilise the Petri dish and agar gel in an autoclave to kill any bacteria.</li>
<li>Turn the petri dish upside down to draw quarters in pen, labelling:
<ul>
<li>2 antibiotics (the name of them)</li>
<li>a control (paper circle)</li>
<li>plant extract (e.g rosemary oil)</li>
</ul>
</li>
<li>Light a Bunsen burner a safe distance from ethanol.</li>
<li>Get a nutrient agar bottle and pass the neck through the Bunsen flame.</li>
<li>Pour the agar carefully into the Petri dish, about halfway up, cover with the lid, and allow to fully set. Take care not to lift the Petri dish lid too much - this will allow microorganisms inside. (Alternatively use a pre-made agar plate)</li>
<li>Get a bottle of microorganism, and pass the neck over the Bunsen flame.</li>
<li>Use a pipette to draw a small amount of microorganism. Pass the bacteria bottle over flame again.</li>
<li>Add a few drops of microorganism into the agar. Use a sterilised spreader to spread the bacteria across the whole plate. Then sterilise it.</li>
<li>Add a paper disk with sterilised (in ethanol, then through Bunsen to ignite) forceps and place the paper in the ‘Control’ quarter.</li>
<li>Re-sterilise the forceps and place the antibiotic discs to test into the other 2 agar plate quarters.</li>
<li>Flip the Petri dish to stop any unwanted airborne bacteria into the dish. (This stops anaerobic bacteria growing which may be harmful while also giving the bacteria oxygen to grow).</li>
<li>Leave at between 20-25 degrees in schools for 2-3 days (this again reduces the risks of harmful bacteria - hospitals would grow at body temperature)</li>
</ol>
<p><strong>Measuring</strong></p>
<ol start="13">
<li>Use  𝝅r² to work out the ‘Zone of Inhibition’ around each zone where there is no growth.</li>
<li>The most effective antiseptic will have the largest zone of inhibition.</li>
</ol>
<p>This was how Alexander Fleming found penicillin in 1928!</p>
<h2 id="paper-2-1">Paper 2</h2>
<h2 id="investigate-the-rate-of-respiration-in-living-organisms">Investigate the rate of respiration in living organisms</h2>
<p>THE MAGGOTS PRACTICAL!!</p>
<p>Boiling tube containing soda lime, cotton wool plug, capillary tube and bung.</p>
<p>Firstly heat the boiling tubes at different temperatures from 30 to 40 degrees at regular intervals, maximum 40. Cotton wool is used to protect organisms and the person, soda lime is corrosive and absorbs the carbon dioxide produced by respiration.</p>
<p>Place the maggots inside the tube, on top of the wool which is above the soda lime, and bung it. Copy this with a control tube without maggots. Move this into a water bath for 5 minutes to adjust to the temperature.</p>
<p>Then add coloured liquid to a beaker, and bring this to the end of the capillary tube so the liquid begins being sucked up by the maggots. Mark the position on the tube and wait 5 minutes. After this mark the value and measure the distance.</p>
<p>Repeat at regular temperature intervals</p>
<h2 id="investigate-the-relationship-between-organisms-and-their-environment-using-fieldwork-techniques-including-quadrats-and-belt-transects">Investigate the relationship between organisms and their environment using fieldwork techniques including quadrats and belt transects</h2>
<p>Using this is a systematic sampling method along an area. Measuring tape from one area to another, place a quadrat on the value 0m. Count the population of a species and record in  a table. Progress further at regular intervals and repeat. Draw a bar chart to show the data obtained.</p>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>
    </div>
  </div>
</body>
</html>
`

const OLD_html_biology_braindump = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Biology Paper 2 recap</title>
  <link rel="stylesheet" href="https://www.ibaguette.com/static/Stackedit_Style.css" />
</head>
<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li>
<ul>
<li><a href="#core-practicals">Core Practicals</a>
<ul>
<li><a href="#investigate-the-rate-of-respiration-in-living-organisms">Investigate the rate of respiration in living organisms</a></li>
<li><a href="#investigate-the-relationship-between-organisms-and-their-environment-using-fieldwork-techniques-including-quadrats-and-belt-transects">Investigate the relationship between organisms and their environment using fieldwork techniques including quadrats and belt transects</a></li>
</ul>
</li>
<li><a href="#topic-6-plant-structures-and-their-functions">Topic 6: Plant Structures and their Functions</a></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li><a href="#topic-7-animal-coordination-control-and-homeostasis">Topic 7: Animal Coordination, Control and Homeostasis</a></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li><a href="#topic-8-exchange-and-transport-in-animals">Topic 8: Exchange and Transport in Animals</a></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li><a href="#topic-9-ecosystems-and-material-cycles">Topic 9: Ecosystems and Material Cycles</a></li>
</ul>
</li>
</ul>
    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
    <p><a href="/cheatsheets/gcse">&lt; Back to GCSE Cheat Sheets</a></p>
      <p><br><br><br></p>
<p>Not really a cheat sheet<br>
It’s more of my last minute revision brain dump and remembering of stuff<br>
There are loads of typos and mistakes, I wrote ~15,000 characters in 2 hours<br>
The content itself should be factual<br>
You might find it useful for a few things<br>
Not covered is the heart, kidney<br>
Also didn’t have time to do topic 9 (ecosystems) but I like that so I remember it anyway :)</p>
<h2 id="core-practicals">Core Practicals</h2>
<h3 id="investigate-the-rate-of-respiration-in-living-organisms">Investigate the rate of respiration in living organisms</h3>
<p>Boiling tube containing soda lime, cotton wool plug, capillary tube and bung.</p>
<p>Firstly heat the boiling tubes at different temperatures from 30 to 40 degrees at regular intervals, maximum 40. Cotton wool is used to protect organisms and the person, soda lime is corrosive and absorbs the carbon dioxide produced by respiration.</p>
<p>Place the maggots inside the tube, on top of the wool which is above the soda lime, and bung it. Copy this with a control tube without maggots. Move this into a water bath for 5 minutes to adjust to the temperature.</p>
<p>Then add coloured liquid to a beaker, and bring this to the end of the capillary tube so the liquid begins being sucked up by the maggots. Mark the position on the tube and wait 5 minutes. After this mark the value and measure the distance.</p>
<p>Repeat at regular temperature intervals</p>
<h3 id="investigate-the-relationship-between-organisms-and-their-environment-using-fieldwork-techniques-including-quadrats-and-belt-transects">Investigate the relationship between organisms and their environment using fieldwork techniques including quadrats and belt transects</h3>
<p>Using this is a systematic sampling method along an area. Measuring tape from one area to another, place a quadrat on the value 0m. Count the population of a species and record in  a table. Progress further at regular intervals and repeat. Draw a bar chart to show the data obtained.</p>
<h2 id="topic-6-plant-structures-and-their-functions">Topic 6: Plant Structures and their Functions</h2>
<p>The xylem has a lignified dead cells surrounding it to transport water and dissolved minerals one-way (usually up) the plant.</p>
<h2 id="section"></h2>
<p>Living cells in the phloem use energy to transport water and minerals up and down the plant, and also sucrose.</p>
<h2 id="section-1"></h2>
<p>Water and mineral ions are transported through the plant by a transpiration stream, from root hair cells which absorb water from the soil by osmosis to the stomata on the underside of leaves. These control gas exchange and amount of water lost. The size of the stomata is changed by neighbouring guard cells, which can become rigid or flaccid. The stomata opens (at day) when the guard cells are rigid and close when the guard cells become flaccid. They are found on the lower surface area of the leaf, and oxygen, water vapour and carbon dioxide diffuse into and out of the leaf for photosynthesis. A continuous column of water is therefore pulled up the stem in the transpiration stream by evaporation from the leaves.</p>
<h2 id="section-2"></h2>
<p>Photosynthesis produces glucose in plants which is converted to sucrose. It is then transferred around the plant in phloem vessels and destination cells can convert it back into glucose for respiration. This also happens for other things like amino acids.</p>
<p>Co2 + h2o -&gt; glucose + oxygen</p>
<h2 id="section-3"></h2>
<p>A leaf has a waxy cuticle to stop water escaping via the epidermis. To reduce water loss there are less stomata on the top of the leaf. They have a large surface area which allows them to do more photosynthesis.</p>
<p><strong>Top of leaf</strong></p>
<ul>
<li>Cuticle for protection and reduce water loss</li>
<li>Epidermis: thin and transparent to allow light to reach palisade cells</li>
<li>Palisade mesophyll: absorb light, increasing rate of photosynthesis, large amounts of chloroplasts. packed tightly</li>
<li>Spongy mesophyll: air spaces allow gases to diffuse</li>
<li>Lower epidermis, guard cells, stoma allow gas exchange to be regulated</li>
<li>Cuticle for protection<br>
<strong>Bottom of leaf</strong></li>
</ul>
<p>Carbon dioxide moves in at the same time oxygen goes out (due to lower concentrations of the gases - diffusion). Cells in the leaf are loosely packed to control water vapour.</p>
<h2 id="section-4"></h2>
<ul>
<li>Temperature increases transpiration as evaporation and diffusion happen faster at higher temperatures.</li>
<li>Humidity decreases rate of transpiration  as diffusion will slow down if the leaf is surrounded by moisture</li>
<li>Light intensity increases rate of transpiration as the stomata will open wider to allow more CO2 for photosynthesis</li>
<li>Wind speed will increase rate of transpiration as the water vapour is removed more rapidly increasing rate of diffusion</li>
</ul>
<h2 id="section-5"></h2>
<p>Phototropism: response to light. Sunlight breaks down auxins, bending the plant to the light source. Plants grow towards the light. Roots have a negative phototropism as they grow away from the light.<br>
Gravitropism: response to gravity. Roots have a positive gravitropism while the rest of the shoots have a negative gravitropism.</p>
<h2 id="section-6"></h2>
<p>Plant hormones can be used to have a desired effect.</p>
<ul>
<li>Auxins stimulate cell elongation which can be beneficial. Some weedkillers can contain high levels of auxins which result in the plant growing rapidly but cannot support this growth, killing the plant. Plant cuttings can be stimulated with auxins to promote growth.</li>
<li>Gibberellins are also used for growth and development of plants. They can be used to increase fruit size and make plants flower more quickly. They can also make seeds germinate earlier as they stop seeds being dormant. As a result of their ability to quickly make fruits grow, they are used to grow seedless fruits like grapes.</li>
<li>Ethene can be used to ripen fruit during storage and transport, bananas are ripened in shops and are picked green. bananas also release ethene naturally, causing other plants to ripen earlier.</li>
</ul>
<h2 id="topic-7-animal-coordination-control-and-homeostasis">Topic 7: Animal Coordination, Control and Homeostasis</h2>
<p>The endocrine system controls loads of stuff like metabolic rate, energy levels, reproduction and stuff with hormones.</p>
<ul>
<li>The pituitary gland is the ‘master gland’ at the base of the brain which secretes hormones to control body condition like blood water levels.</li>
<li>The thyroid gland produces thyroxine and is located in the neck and are responsible for metabolic rate</li>
<li>The pancreas produces insulin which controls blood glucose levels. It increases the conversion of glucose into glycogen for storage and targets the liver.</li>
<li>The ovaries in women produce oestrogen which does stuff to the menstrual cycle</li>
<li>The testes in boys produce testosterone which do stuff to sperm and increases in puberty</li>
</ul>
<h2 id="section-7"></h2>
<ul>
<li>The adrenal glands secrete adrenaline which prepares the body for ‘fight or flight’. It targets many organs by increasing the breathing rate, heart rate, increases blood flow to muscles.</li>
<li>It stimulates the liver to change glycogen into glucose, increasing blood sugar levels.</li>
<li>It makes the heart beat harder and faster. (Especially before an exam)</li>
</ul>
<h2 id="section-8"></h2>
<p>Thyroxine controls the metabolic rate and is an example of negative feedback. When there are low levels of thyroxine, TRH is produced in the hypothalamus, which causes the pituitary gland to release TSH. As a result of this, the TSH acts on the thyroid to produce more thyroxine. When thyroxine levels return to normal, the release of TRH is inhibited and I so the production of TSH</p>
<blockquote>
<p>TSH means thyroid stimulating hormone</p>
</blockquote>
<h2 id="section-9"></h2>
<p>The menstrual cycle has 4 hormones involved. In order:</p>
<ul>
<li>FSH causes the maturation of the egg in the ovary. (follicle-stimulating hormone)</li>
<li>Oestrogen is made from the corpus luteum in the ovaries (cells from when the egg was released) and stimulates the reparation and thickening of the uterus lining. Day 7-14. Stops FSH.</li>
<li>LH (luteinizing hormone) stimulates the release of the egg. It is only around day 14.</li>
<li>Progesterone maintains the uterus lining from days 14-28. It is also produced from the corpus luteum and inhibits FSH and LH (negative feedback).</li>
<li>If the egg is not fertilised the corpus luteum dies and progesterone levels drop and the uterus lining breaks down</li>
</ul>
<h2 id="section-10"></h2>
<p>Hormonal contraception can prevent pregnancy as ‘the pill’ contains small doses of oestrogen and/or progesterone (taken daily) inhibit the production of FSH which stops the egg developing. Low levels of oestrogen stimulate the release of an egg while high levels stop FSH. If the levels remain high, as with the pill, egg development will stop and no chance of a baby. Other pills like the morning after pill can reduce the amount of progesterone, inhibiting its release, and therefore results in the uterus lining breaking down.</p>
<h2 id="section-11"></h2>
<p>Barrier methods of contraception can also be used to prevent pregnancy. These are things like condoms which physically prevent sperm meeting with the egg. As a result, no fertilisation can happen. However there is a chance that they may rip or tear. Spermicide can be added to physical barriers like condoms to kill any potential sperm but this can cause an allergic reaction.</p>
<h2 id="section-12"></h2>
<p>Hormones are used in Assisted Reproductive Technology (ART) to help achieve pregnancy. These fertility drugs may contain FSH and LH which stimulates eggs to mature and to be released. It also increases the chance of twins or triplets as it could cause multiple eggs to be released. ART also includes IVF and clomifene. IVF collects eggs from the mother and combined with the father’s sperm in a dish, and then re-implanted in the woman. Clomifene is a drug blocks oestrogen’s negative feedback on LH. Therefore when this drug is removed, more LH is released at once, simulating the LH surge before ovulation.</p>
<blockquote>
<p>hormones travel in the bloodstream</p>
</blockquote>
<h2 id="section-13"></h2>
<p>Homeostasis is the maintaining of a constant internal environment in the body, controlled by the nervous system and hormones. They are all automatically controlled by the signals given by the receptor, move to a control centre and the effector creates the response.</p>
<p>Thermoregulation is controlled by the hypothalamus. When a chnage is detected, if it is too hot, sweat glands in the dermis release more sweat onto the epidermis. As this sweat evaporates, heat energy is transferred into the surroundings. On the contrary shivering happens if we are too cold, which results in the rapid contraction of muscles, which require respiration, releasing heat. Erector muscles also trap an insulating layer of air in the hairs.</p>
<blockquote>
<p>If a constant internal temperature is not maintained at around 37 degrees then enzymes will denature and cannot catalyse reactions.</p>
</blockquote>
<p>The amount of blood flowing in the capillaries is changed by also vasodilation and vasoconstriction. When it is too cold, capillaries vasoconstrict, making the arterioles narrower. As a result, blood flow is decreased, and physical distance from the bloodstream to the environment is decreased, resulting in little heat being lost. Conversely, when it is too hot, arterioles get wider from vasodilation, making blood flow increase and increases heat loss too, cooling the body. These are all controlled by nerve impulses from the hypothalamus.</p>
<h2 id="section-14"></h2>
<p>Osmoregulation is the control of water and mineral ions like salt in the blood. If the concentration of water in and out of the cell are similar, there is no overall change. If the water concentration on the outside is larger, then water enters via osmosis. Too much and the cells can burst. (Hypotonic)</p>
<p>If there is to little water on the outside, the cells may shrivel and lose water. Cells won’t function if there is not a good balance of water.</p>
<p>If there is too much salt, this can uncontrollably cause cells to shrivel as it is good at absorbing water.</p>
<h2 id="section-15"></h2>
<p>Insulin in the pancreas controls blood glucose concentration. Glucose is needed for respiration. If there is a high concentration of blood glucose, the pancreas secretes the insulin hormone, causing glucose to move from the blood into cells. In liver cells this glucose is stored as glycogen for use later on, resulting in decreased amounts of glucose. Glycogen is insoluble, whereas glucose is soluble and will disturb osmotic balance (hypertonic like salt).</p>
<p>When the concentration of blood glucose is low, glucagon is secreted. This makes glycogen convert into glucose, increasing the amounts of glucose available.</p>
<h2 id="section-16"></h2>
<p>Type 1 diabetes happens when your body cannot produce enough insulin to control blood glucose. This will result in uncontrolled high blood glucose levels. It is controlled by injecting insulin to simulate the pancreas’s work. Exercise can lower blood glucose levels due to muscles respiring more, or by taking foods with low blood sugar effects.</p>
<p>Type 2 diabetes is when the cells in a person no longer responds to insulin. It can be controlled by exercise and eating less carbohydrates. These are digested into glucose, which would raise blood glucose levels.</p>
<p>fat people are more likely to have type2 diabetis. waist:hip &gt;0.85 in women and &gt;1 in men.</p>
<p>BMI = mass / (height)<sup>2</sup></p>
<h2 id="section-17"></h2>
<p><strong>kidney stuff here</strong></p>
<h2 id="topic-8-exchange-and-transport-in-animals">Topic 8: Exchange and Transport in Animals</h2>
<p>Exchange surfaces are needed to move substances in and out of a cell quickly by diffusion. A simple, small, unicellular organism has a high surface area:volume ratio, so nutrients, water and substances can pass quickly through its membrane and circulate in the body of the organism. Hoverver, the surface area:volume ratio of a multicellular, large organism is small, so transport systems specialised in the movement of particles is needed, on top of specialised exchange surfaces.</p>
<p>Exchange surfaces are:</p>
<ul>
<li>thin for a short diffusion distance</li>
<li>have a large area (long and thin, flat or folded)</li>
</ul>
<p>Transport systems often:</p>
<ul>
<li>have vessels which transport substances around parts of the organism</li>
<li>are close to cells, reducing diffusion time and distance like exchange surfaces.</li>
</ul>
<p>The circulatory system in humans is pumped by the heart whereas the phloem and xylem in plants is not pumped.</p>
<h2 id="section-18"></h2>
<p>Gas exchange in humans occurs in the lungs, in the alveoli. When air is inhaled, this oxygenated air is added into the alveoli and diffuses into the bloodstream across the exchange surface of the alveoli. The capillary curves around the alveoli, maximising the contact with the air pocket, allowing for CO<sub>2</sub> to diffuse into the alveoli and O<sub>2</sub> to go in to the bloodstream.</p>
<ul>
<li>Large surface area</li>
<li>Thin walls</li>
<li>Moist walls</li>
<li>Permeable walls</li>
<li>Extensive blood supply</li>
<li>Large diffusion gradient</li>
</ul>
<h2 id="section-19"></h2>
<p>Fick’s law describes the relationship between the rate of diffusion and the factors that affect it.</p>
<p><span class="katex--inline"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>Rate&nbsp;of&nbsp;diffusion</mtext><mo>∝</mo><mfrac><mrow><mtext>surface&nbsp;area</mtext><mo>×</mo><mtext>concentration&nbsp;difference</mtext></mrow><mtext>thickness&nbsp;of&nbsp;membrane</mtext></mfrac></mrow><annotation encoding="application/x-tex">\text{Rate of diffusion} \propto \frac{\text{surface area} \times \text{concentration difference}}{\text{thickness of membrane}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord text"><span class="mord">Rate&nbsp;of&nbsp;diffusion</span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">∝</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1.22511em; vertical-align: -0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.880108em;"><span class="" style="top: -2.655em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">thickness&nbsp;of&nbsp;membrane</span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">surface&nbsp;area</span></span><span class="mbin mtight">×</span><span class="mord text mtight"><span class="mord mtight">concentration&nbsp;difference</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.345em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<h2 id="section-20"></h2>
<p>Cellular respiration occurs continuously in living cells to release energy metabolic processes, including aerobic and anaerobic respiration. It is exothermic.</p>
<p>Aerobic respiration needs oxygen and releases large amount of energy in cells by the breakdown of glucose with oxygen, producing carbon dioxide and water. Most aerobic respiration reactions occur in mitochondria. (19x more energy released than below)</p>
<p>Anaerobic respiration does not need oxygen but results in a relatively small amount of energy being released. It converts glucose straight into lactic acid. this lactic acid needs to be oxidised to carbon dioxide and water later. This is known as oxygen debt which needs to be repaid after the exercise has stopped.</p>
<blockquote>
<p>It also happens in plants and yeast, glucose -&gt; ethanol + CO<sub>2</sub></p>
</blockquote>
<h2 id="section-21"></h2>
<p>Calculate heart rate, stroke volume and cardiac output, using the equation cardiac output = stroke volume × heart rate</p>
<h2 id="section-22"></h2>
<h2 id="topic-9-ecosystems-and-material-cycles">Topic 9: Ecosystems and Material Cycles</h2>
<p>I really can’t be bothered. nitrifying bacteria. nitrogen fixing bacteria.</p>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>
    </div>
  </div>
</body>
</html>
`


const OLD_alevel_geog = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geography</title>
  <link rel="stylesheet" href="https://www.ibaguette.com/static/Stackedit_Style.css" />
</head>
<body class="stackedit">
  <!-- Add the dark mode toggle -->
  <div class="dark-mode-toggle"></div>
  <!-- Add a new container element around the content -->
  <div class="container">
    <div class="stackedit__left">
      <div class="stackedit__toc">
        
<ul>
<li><a href="#a-level-geography">A Level Geography</a></li>
<li><a href="#option-b-–-glaciated-landscapes">1.1 Option B – Glaciated Landscapes</a></li>
<li><a href="#option-b-–-glaciated-landscapes-1">1.1 Option B – Glaciated Landscapes</a>
<ul>
<li><a href="#glaciers-as-systems">Glaciers as Systems</a>
<ul>
<li><a href="#useful-key-terms">Useful key terms</a></li>
<li><a href="#the-glacial-budget-and-mass-balance">The Glacial Budget and Mass Balance</a></li>
<li><a href="#types-of-glacier-and-movement">Types of glacier and movement</a></li>
<li><a href="#tbd-useful-stuff">[tbd] Useful stuff</a></li>
<li><a href="#tbd-factors-affecting-the-microclimate">[tbd] Factors affecting the microclimate</a></li>
</ul>
</li>
<li><a href="#how-are-glacial-landscaped-developed">How are glacial landscaped developed?</a>
<ul>
<li><a href="#glacial-erosional-landforms">Glacial erosional landforms</a></li>
<li><a href="#tbd-corries">[tbd] Corries</a></li>
<li><a href="#arêtes">Arêtes</a></li>
<li><a href="#pyramidal-peaks">Pyramidal peaks</a></li>
<li><a href="#u-shaped-valleys">U-shaped valleys</a></li>
<li><a href="#glacial-troughs">Glacial troughs</a></li>
<li><a href="#roche-moutonnées">Roche moutonnées</a></li>
<li><a href="#glacial-depositional-landforms">Glacial depositional landforms</a></li>
<li><a href="#moraines">Moraines</a></li>
<li><a href="#erratics">Erratics</a></li>
<li><a href="#drumlins">Drumlins</a></li>
</ul>
</li>
<li><a href="#tbd-case-study-lake-district">[tbd] Case study: Lake District</a></li>
<li><a href="#tbd-case-study-lake-agassiz">[tbd] Case study: Lake Agassiz</a></li>
<li><a href="#glacio-fluvial-landforms">Glacio-fluvial landforms</a>
<ul>
<li><a href="#eskers">Eskers</a></li>
<li><a href="#kames-and-kame-terraces">Kames and kame terraces</a></li>
<li><a href="#essay-example-influence-of-climate-changes-and-geomorphic-processes-in-their-formation">Essay example: influence of climate changes and geomorphic processes in their formation</a></li>
<li><a href="#proglacial-lakes">Proglacial lakes</a></li>
<li><a href="#outwash-plains">Outwash plains</a></li>
<li><a href="#braided-streams">Braided streams</a></li>
<li><a href="#kettles">Kettles</a></li>
<li><a href="#tbd-troughs">[tbd] Troughs</a></li>
</ul>
</li>
<li><a href="#periglacial-landforms">Periglacial landforms</a>
<ul>
<li><a href="#permafrost">Permafrost</a></li>
<li><a href="#sorted-stone-polygons-slone-circles">Sorted Stone Polygons (slone circles)</a></li>
<li><a href="#stone-stripes">Stone stripes</a></li>
<li><a href="#pingos">Pingos</a></li>
<li><a href="#ice-wedge-polygons">Ice-wedge polygons</a></li>
</ul>
</li>
<li><a href="#ignore">ignore</a></li>
</ul>
</li>
</ul>
      </div>
    </div>
    <div class="stackedit__right">
      <div class="stackedit__html">
        <p><a href="https://ibaguette.com/cheatsheets/alevel">&lt; Back to A level Cheat Sheets</a></p>
<h1 id="a-level-geography">A Level Geography</h1>
<p><strong>⚠ This is a work in progress, unfinished document, unfinished sections are marked with [tbd]</strong></p>
<p>Use a PC to see the Table of Contents on the left-hand side to quickly navigate this document.</p>
<h1 id="option-b-–-glaciated-landscapes">1.1 Option B – Glaciated Landscapes</h1>
<p>"Feeling a little like a <strong>drumlin</strong> today.</p>
<p>British ice map <a href="https://shefuni.maps.arcgis.com/apps/webappviewer/index.html?id=fd78b03a74bb477c906c5d4e0ba9abaf">https://shefuni.maps.arcgis.com/apps/webappviewer/index.html?id=fd78b03a74bb477c906c5d4e0ba9abaf</a></p>
<h1 id="option-b-–-glaciated-landscapes-1">1.1 Option B – Glaciated Landscapes</h1>
<p>"Feeling a little like a <strong>drumlin</strong> today.</p>
<p>British ice map <a href="https://shefuni.maps.arcgis.com/apps/webappviewer/index.html?id=fd78b03a74bb477c906c5d4e0ba9abaf">https://shefuni.maps.arcgis.com/apps/webappviewer/index.html?id=fd78b03a74bb477c906c5d4e0ba9abaf</a></p>
<h2 id="glaciers-as-systems">Glaciers as Systems</h2>
<p>There are 3 main parts to any system: inputs, processes and outputs.<br>
Glaciers are dynamic. Glaciated landscapes may be seen as a system with many interrelated components (stores), processes (cause/effect mechanisms) and inputs &amp; outputs. This forms an open system.</p>
<ul>
<li>Inputs
<ul>
<li>snowfall</li>
<li>material from deposition, weathering and mass movement</li>
<li>thermal energy (from sun)</li>
<li>kinetic energy</li>
</ul>
</li>
<li>Outputs (Ablation)
<ul>
<li>evaporation</li>
<li>sublimation</li>
</ul>
</li>
<li>Stores
<ul>
<li>ice</li>
<li>water</li>
<li>debris</li>
<li>potential energy (from its location)</li>
</ul>
</li>
<li>Throughputs/processes
<ul>
<li>debris movement down slope</li>
<li>deposition</li>
<li>kinetic energy from glacier movement</li>
</ul>
</li>
</ul>
<h3 id="useful-key-terms">Useful key terms</h3>
<p>Terminus - the end of a glacier<br>
Snout - the end area of a glacier<br>
Ablation - melting<br>
Calving - when chunks of a glacier terminus fall into water<br>
Advance - when a glacier is moving forwards; gaining mass balance<br>
Recession - when a glacier is retreating; losing mass balance<br>
Area of accumulation - the area of a glacier where it is gaining mass<br>
Area of ablation/wastage - the area of a glacier where it losss mass<br>
Névé - yong granular snow<br>
Firn - névé which has survived a full season (year) of ablation and is partially compacted, and has been recrystallised into a substance denser than névé, an intermediate stage to becoming glacial ice.<br>
Firn/equilibrium line - the zone on a glacier where accumulation is equal to ablation over a 1-year period<br>
Sintering - continued fusion and removal of air as a result of compression by the continued accumulation of snow and ice<br>
Aspect - the direction that a slope faces.</p>
<h3 id="the-glacial-budget-and-mass-balance">The Glacial Budget and Mass Balance</h3>
<p>A glacier forms when snowfall exceeds summer melt in an area, therefore accumulates year after year.</p>
<p>Over time, snow is compacted and turned into glacial ice, and when this is around 40 m thick, the intense pressure causes it to begin flowing. The top of the glacier is white, but glacial ice at the base of the glacier is blue as oxygen has left the system…</p>
<p>Snowflakes -&gt; Granular snow -&gt; Névé -&gt; Firn -&gt; Glacial ice</p>
<p>Glacial ice has a density of 850kg/m<sup>3</sup>. It is rock hard and feels glassy and is almost translucent.</p>
<p>The glacier mass balance is the total <strong>sum</strong> of all the <strong>accumulation</strong> (snow, ice, freezing rain) and melt or <strong>ice loss</strong> (from calving icebergs, melting, sublimation) across the entire glacier, or ablation. Over a year, the graph of mass balance in a northern hemisphere glacier may look like this:</p>
<p><img src="https://cdn.discordapp.com/attachments/785620979300302869/1052904994283724850/image0.jpg" alt=""></p>
<p>Layers of snow within the ice give evidence for the way that it has formed.</p>
<h3 id="types-of-glacier-and-movement">Types of glacier and movement</h3>
<p>An ice sheet is a mass of snow and ice, greater than 50,000km<sup>2</sup> with considerable thickness.<br>
A piedmont glacier is one that spreads out as a wide lobe as it enters a wider plain typically from a smaller valley<br>
A valley glacier is one bound by valley walls, coming from higher mountain, from  a plateau on an ice cap or an ice sheet.<br>
Ice cap - a dome-shaped mass of glacial ice usually situated on a highland area and also covers &gt;50,000km<sup>2</sup>.</p>
<p>Valley glaciers usually occur in high altitude locations, with high relief, and have fast rates of flow at 20–200m/year and have distinct areas of ablation and accumulation, descending from mountains.<br>
Ice sheets however, are large masses of snow and ice defined by being greater than 50,000 km² and are usually in locations of a high/low latitude and have slow rates of movement and only around 5m/year. The base of the glacier is frozen to the bedrock and have a little precipitation but also lower temperatures so ablation levels are lower too.</p>
<p>fundamentally, glaciers move because of gravity. The gradient influences the effect of gravity on glaciers. Thickness of the ice, and the pressure exerted on the bedrock can also influence melting and movement. More accumulation also leads to more movement. When ice is solid and rigid, it breaks into crevasses (big gaps visible from the surface). Under study pressure, ice will deform and behave like plastic, (<strong>zone of Plastic Flow</strong> on the lower half of the glacier) making the size and base slower.  The <strong>rigid zone</strong> is on the top half of the glacier.</p>
<p>Cold-based glaciers:</p>
<ul>
<li>have a slow rate of movement (&lt;5m/year);</li>
<li>are located in extreme latitude (polar) regions;</li>
<li>are flat in general;</li>
<li>have a low basal temperature, remaining stuck to bedrock below the pressure melting point;</li>
<li>are in low precipitation areas and the glacier remains below freezing point.</li>
</ul>
<p>Warm-based glaciers:</p>
<ul>
<li>have rapid movement (20-200m/year);</li>
<li>are located in high altitude (mountainous) regions;</li>
<li>have a basal temperature at or above pressure melting point;</li>
<li>have steep relief;</li>
<li>have water present throughout, with ice acting as a lubricant.</li>
</ul>
<blockquote>
<p>Cold-based glaciers are unable to move by basal sliding as the basal temperature is below the pressure melting point. Instead, they move through internal deformation, and ice at 0°C deforms 100 times faster than at -20°C.</p>
</blockquote>
<h3 id="tbd-useful-stuff">[tbd] Useful stuff</h3>
<ul>
<li>
<p>Supraglacial material is material which is located on the top of a glacier.</p>
</li>
<li>
<p>Englacial material is material which is located inside a glacier.</p>
</li>
<li>
<p>Subglacial material is material which is located on the base of a glacier.</p>
</li>
<li>
<p>Material deposited during glaciation is called drift.</p>
</li>
<li>
<p>Material deposited directly by ice is called till</p>
</li>
<li>
<p>Material deposited by meltwater is called outwash, or glacio-fluvial material.</p>
</li>
</ul>
<p>Lodgement till is material deposited by advancing ice, due to pressure being exerted into existing Valley material, and left behind as ice advances, such as drumlins.<br>
Ablation till is material deposited at the terminus by melting ice from stagnant, or retreating glaciers during a warm period or end of glaciation event. Most depositional landforms are this type.</p>
<p>It can be known whether sediment was deposited by water or ice as ice-transported sediment will be angular, not curved, as it has not been subject to original forces by meltwater. The order of size of sediments can indicate this too, as a water, deposit sediment progressively due to reducing energy levels, while glaciers deposit, material, unsorted and en masse. Places deposit till in mounds and ridges to, as in glacier material can drop due to the glaciers height, rather than in layers in water depositional processes</p>
<h3 id="tbd-factors-affecting-the-microclimate">[tbd] Factors affecting the microclimate</h3>
<p><strong>Regional climate</strong><br>
The wind is a moving force and is able to carry out processes such as transportation, position and erosion. And in the air, these are known as Carolien processes, and contributes to shaping glaciated landscapes.<br>
The wind is a moving force and is able to carry out processes such as transportation, position and erosion. And in the air, these are known as Carolien processes, and contributes to shaping glaciated landscapes.<br>
When does more effective when acting upon fine materials, previously deposited by ice or meltwater.Temperature within the climate is another factor, as temperatures above 0° C will melt, accumulated snow and ice, resulting in outputs. In higher altitudes, minicrises experience, prolonged periods of above freezing temperatures, and melting, compared to in high latitude locations, where is below freezing most of the time, allowing glacier, thickening, and expensive ice sheets. Precipitation to is another climate factor, with its totals and patterns, both regionally and seasonally, in determining mass balance of a glacier system, as it provides the main inputs to these glaciers as snowfall.</p>
<p><strong>Geology</strong><br>
lithology is the chemical composition and physical properties of rocks. Some types, like basalt, are very resistant to erosion and weathering, as they are comprised of densely packed interlocking, crystals. Clay, on the other hand, is weak, and does not have the strong bonds on the molecular level. The solubility of rocks, like chalk can also be affected by acid is, making them prone to chemical weathering, through carbonation.<br>
Structure relates to the physical rock types, like faulting, bedding and jointing. These all have an impact on how permeable rocks are. Chalk, for example, is very porous, space is separates the particles between it on the molecular level. Some types of limestone, like Carboniferous limestone, has money into the connected joints, giving it secondary permeability. Primary permeability is when spaces brackets (pores) absorb and retain water…</p>
<p><strong>Latitude and Altitude</strong><br>
Beyond the Arctic and Antarctic circles, located at 66.5° north and south, the climate is very dry, with a little seasonal variation. Being so dry and extremely cold, they are much different to Valley glaciers, which are more dynamic, as they have higher precipitation levels.</p>
<h2 id="how-are-glacial-landscaped-developed">How are glacial landscaped developed?</h2>
<p>Glacial landforms are typically classified according to erosional and depositional processes, however they can also developed through a series of interrelated processes.</p>
<h3 id="glacial-erosional-landforms">Glacial erosional landforms</h3>
<h3 id="tbd-corries">[tbd] Corries</h3>
<p>Currys forming hollows, where is snow, accumulates, typically, on the north, west south east side of the mountain in the northern hemisphere due to its aspect, having less time in the Sun. This then compact into ice and névé turns into firn. This hollow, deepened by nivation, is the free with freeze thaw and material is removed by meltwater. This then moves because of gravity on the ice mass. The ice freezes to the back wall, plucking material (debris). This is washed out through rotational slumping, When the ice melts a tarn, or corrie lake, is created with a rock lip from moraine forming at its front. Scree can on fall down from the step back to sleep as it is now loose material.</p>
<h3 id="arêtes">Arêtes</h3>
<p>An arête is a knife-shaped sharp ridge formed when two corries’ back walls continually erode back-to-back. Over time, these back walls meet, and a distinct ridge is formed.</p>
<h3 id="pyramidal-peaks">Pyramidal peaks</h3>
<p>A pyramidal peak is a high mountain whose surrounding have been eroded from corries. Three or more corries eroding back-to-back (similarly to how arêtes form) results in this sharp peak forming.</p>
<h3 id="u-shaped-valleys">U-shaped valleys</h3>
<p>A V-shaped valley has steep sides and a central river channel, with interlocking spurs being a distinct feature. During glaciation periods, snow begins to accumulate in these sheltered valleys.</p>
<p><img src="https://cdn.discordapp.com/attachments/1052930066797039698/1052930119351681024/C186FA7B-7B73-41FC-8572-925D09410A4F.png" alt=""></p>
<p>Freeze-thaw weathering occurs above the glacier line, causing the valley to steepen, in the same way as a corrie steepens its back wall. The glacier itself also causes plucking, mostly on the sides, as rocks are frozen and ripped as the glacier moves. Abrasion also deepens the valley floor as subglacial material comes into contact with the bedrock.</p>
<h3 id="glacial-troughs">Glacial troughs</h3>
<p>A glacial trough is made from strongly channeled ice, plucking from a valley’s sides causing them to steepen.</p>
<h3 id="roche-moutonnées">Roche moutonnées</h3>
<p>A roche moutonnée is a more resistant rock in the path of a glacier. Is abrasion occurs on the upvalley (stoss) side, resulting in striations, grooves, and polishing. As meltwater is forced up over the roche moutonnée, plucking and freeze-thaw weathering occurs on the downvalley (lee) side, as pressure release results in refreezing, while the glacier continues to move, pulling away the rock.</p>
<h3 id="glacial-depositional-landforms">Glacial depositional landforms</h3>
<p><img src="https://www3.nd.edu/~cneal/planetearth/Lab-Glaciation/12_25.jpg" alt=""></p>
<h3 id="moraines">Moraines</h3>
<p>Moraines are ridges of soil, rocks and till which has been deposited by a glacial system.</p>
<p>Medial moraines - in the centre of a glacial channel<br>
Lateral moraines - at the side of a glacial channel<br>
End moraines - marking a halt of glacial retreat<br>
Terminal moraine - a larger ridge marking the maximum advance of a glacial period (glacial maximum)<br>
Recessional moraine - just the end and terminal moraines</p>
<h3 id="erratics">Erratics</h3>
<h3 id="drumlins">Drumlins</h3>
<p>Drumlins are streamlined Hill is commonly elongated, parallel to the former direction of ice flow, composed of grey seal debris, and sometimes having a bedrock core formed beneath an actively flowing glacier. they typically occur in larger groups, or ‘swarms’.</p>
<h2 id="tbd-case-study-lake-district">[tbd] Case study: Lake District</h2>
<p>Map of glacial features in the Lake District, including subglacial lineations, meltwater channels, eskers, drumlins, moraines, glacially streamlined bedrock</p>
<h2 id="tbd-case-study-lake-agassiz">[tbd] Case study: Lake Agassiz</h2>
<p>Lake Agassiz was a vast glacial lake located in central north America which was fed by glacial meltwater of the Laurentide glacier at the end of the last glacial period. It was larger than every great lake combined, covering around 300,000 square kilometers, around the same size as the black sea.</p>
<p>Its major drainage reorganization events greatly impacted climate, sea level and possibly even early human civilization.</p>
<p>The erosion and the melting formed the glacial river warren and formed the modern Minnesota and upper Mississippi rivers.</p>
<p>Lake Agassiz was a large glacial lake located in central North America. It was formed by contributory meltwater from the Laurentide ice sheet, which was up to 2 miles in height.</p>
<h2 id="glacio-fluvial-landforms">Glacio-fluvial landforms</h2>
<h3 id="eskers">Eskers</h3>
<p>Eskers are long sinuous (having many curves and turns) ridges made from sand, gravel and other types of glacial till deposited on valley floors by glacial meltwater flowing through subglacial and englacial tunnels, as well as through supraglacial channels.</p>
<blockquote>
<p>Elongated ridges of glaciofluvial sediment deposited in subglacial meltwater pipes</p>
</blockquote>
<p>These tunnels and channels over time become filled up with sediment. During deglaciation, this sediment is dropped onto the bedrock, leaving ridges, signifying that a glacial tunnel was somewhere above it.</p>
<p>Some argue that deposition is caused when pressure is released at the glacier’s snout, so as the glacier retreats, the point of deposition retreats too. This can describe their beaded appearance (vary in height and width throughout) with the beads of greater size representing periods of relative slow retreat or halted ablation. Others may say that the larger beads are caused as a result of greater load carried in the summer meltwater.</p>
<p><img src="https://www.antarcticglaciers.org/wp-content/uploads/2020/08/image.png" alt="enter image description here"><br>
<em>Here’s 2 angles showing what they look like, in Svalbard.</em></p>
<p>The weight of the ice above the subglacial tunnels mean that the water flowing is under extremely high pressure. When the ice melts, this pressure is released, so therefore dropping sediment. Eskers can be deposited, ignorant of local topography, meaning that they can traverse over hills in the landscape.<br>
The path taken by this pressurised meltwater is mostly controlled by the slope, size and direction of the ice surface rather than the bedrock. Because of this, eskers can be used to show the slope of the ice surface and its extend. It also runs parallel to the direction of ice flow, and therefore transverse to the glacial snout.</p>
<p><img src="https://www.antarcticglaciers.org/wp-content/uploads/2020/08/image-3.png" alt=""></p>
<p>Here is an example of an esker on Google Maps: <a href="https://www.google.com/maps/@64.0543235,-16.3193597,405m/data=!3m1!1e3?hl=en">https://www.google.com/maps/@64.0543235,-16.3193597,405m/data=!3m1!1e3?hl=en</a><br>
A meltwater stream is visible south of it, as well as another esker to the east.</p>
<p>Eskers on paleo-ice-sheet beds are more abundant in areas of crystalline bedrock with thin coverings of surficial sediment than in areas of thick deformable sediment, because meltwater flowing at the bed is more likely to incise upwards into the ice to form an R-channel where the bed is hard; where the bed is deformable, meltwater is more likely to incise downwards</p>
<p><strong>Examples</strong><br>
Many eskers are found in central Ireland, some are in Canada, as well as many in Iceland and Sweden</p>
<p><strong>Post glacial climate change in Eskers</strong><br>
As global climatic temperatures increase, the rate of glacial ablation increases and results in more meltwater being produced. This means that there is more accumulation of sediment in proglacial areas and the length of these eskers will increase.</p>
<h3 id="kames-and-kame-terraces">Kames and kame terraces</h3>
<p>A kame is an irregularly shaped hill, hummock or mound made of stratified glacial till comprised of mainly sand and gravel.</p>
<p>This till accumulates in a depression in a retreating glacier, and as the surrounding ice melts this build up of material in this hole (or <strong>moulin</strong>) is deposited on the land surface.</p>
<p>Delta kame terraces are often located on the side of a glacial valley, having been meltwater streams running between the glacier and valley sides. These are stratified (layered) deposits of subglacial meltwater streams glowing between the ice and the valley walls. Distinguished by their ‘long, flat benches with many pits on the surface made by kettles’, they gradually slope to the lee side (downvalley) and, like eskers, have similar gradients to the ice surface above it.</p>
<p>Kame deltas are formed by supraglacial streams transporting sediment loads into glacial lakes. In the process of doing this, sediment is deposited on the top of this ice and into crevasses, filling them with debris. As this ice then melts, the material then collapses onto the bedrock surface.</p>
<p><img src="https://www.coolgeography.co.uk/A-level/AQA/Year%2012/Cold%20environs/Fluvioglacial/Fluvioglacial%20during.jpg" alt=""><br>
<img src="https://www.coolgeography.co.uk/A-level/AQA/Year%2012/Cold%20environs/Fluvioglacial/Fluvioglacial%20post.jpg" alt=""></p>
<p>As climate change increases temperature levels, more meltwater is present, which transports and deposits sediment. This will result in a larger amount of all types of kame being more likely to form.</p>
<hr>
<h3 id="essay-example-influence-of-climate-changes-and-geomorphic-processes-in-their-formation">Essay example: influence of climate changes and geomorphic processes in their formation</h3>
<p>Kames are are mounds of sediment deposited by glacial meltwater or ice, found in areas where glacial ice melted and receded, leaving behind sediment deposits. The process of kame formation is complex, and is a result of a variety of interrelated factors, including climate change and geomorphic processes.</p>
<p>Climate change is one of the most significant influences on the formation of kames. During the Pleistocene epoch, large areas of the northern hemisphere were covered in thick glaciers. As the climate warmed and the glaciers receded, large volumes of meltwater were released, carrying sediment with it. The sediment was deposited in stratified piles, forming these kames, visible in places in the UK such as the Scottish Highlands or the Lake District. This can be proven to be the result of a glacio-fluvial deposition as they are deposited in one go by melting ice, while previous meltwater surface stream moved the sediment into crevasses or glacial marginal lakes.</p>
<p>Geomorphic processes also play a role in the formation of kames. As the glacier erodes the landscape, valley sides’ sediment may fall onto the glacier, ranging from large boulders to sand grains.  The size and shape of these kames varies depending on the type of sediment deposited, as well as the rate of erosion. In addition to erosion other geomorphic processes can play a role in the formation of kames such as weathering. These processes such as frost-shattering and chemical weathering can break down sediment particles and form smaller particles that can be easily carried by wind or water. This can cause further accumulation of sediment in certain areas and contribute to the formation of kames. Lithification may also occur when the sediment is compacted and cemented together, forming a solid mass among the trapped sediment.</p>
<p>In conclusion, climate change and geomorphic processes are both important factors in the formation of kames. Climate change causes the glaciers to melt, releasing large volumes of sediment, which is then deposited in strata. Geomorphic processes, such as erosion, sedimentation, and lithification, also contribute to the formation of kames. Together, these two factors contribute significantly to the formation kames, alongside many other factors like the topography, aspect and relief of the local region.</p>
<h3 id="proglacial-lakes">Proglacial lakes</h3>
<p>Proglacial lakes form in front of glaciers, usually when meltwater streams become blocked by terminal moraines, glacial dams (trapped against a large ice sheet) or due to isostatic depression of the lithosphere into the weaker asthenosphere.</p>
<p>The meltwater, over time, accumulates in this area, unable to flow outwards. This is similar to how a traditional valley glacier system starts with the corrie melting and a tarn being left due to a terminal moraine blockage.</p>
<p>After a glaciation period, the climate typically warms up. Over time, if there is a large ice sheet blocking the water flow, this sheet will ablate, and the lake will either overflow or undermine the dam, causing a glacial lake outburst flood, or jökulhlaup.</p>
<p>Modern example: Russell Fjord, Alaska (regularly blocked by the Hubbard Glacier: <a href="https://www.google.com/maps/@59.9434435,-139.3498929,38491m/data=!3m1!1e3?hl=en">https://www.google.com/maps/@59.9434435,-139.3498929,38491m/data=!3m1!1e3?hl=en</a></p>
<p>Glacial Lake Agassiz was a large glacial lake located in central North America. It was formed by contributory meltwater from the Laurentide ice sheet, which was up to 2 miles in height. When an outburst flood occurred, around 13,500 and 10,650 years ago, it resulted in large scale erosion of an area 8km wide and 76m deep in Browns Valley, Minnesota. This old river is known as the Glacial River Warren. It helped form the Minnesota and Mississippi rivers.</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/River_Warren_Valley.gif" alt=""><br>
<em>The top right is the bed of Lake Agassiz, and the eroded area is visible too. North Minnesota.</em></p>
<h3 id="outwash-plains">Outwash plains</h3>
<p>Outwash plains are also known as sandurs. They are dominated by other landforms, including braided streams and kettles. They occur in front of melting glaciers, and are mostly flat and expansive areas. Meltwater traversing this terrain has little energy, and therefore little vertical erosional power and more inclined to deposit material. As a result, these flat areas are created from stratified (strata; layered) sediment.</p>
<p>As the glacier moves over bedrock, plucking and abrasion (erosion) occurs resulting in silt and sediment  being carried in this meltwater. Braided streams are dominant in outwash plains. These are very shallow streams and rivulets which carry and redeposit till due to the little energy in the system.</p>
<p>In summer months, there is typically higher glacial discharge and ablation, resulting in these tilly islets being destroyed by water, which has a little more energy due to increased velocity. This leads to more erosion, and these islets then go on to reform later. This makes the outwash plain have a distinct look. This can be described as dynamic.</p>
<blockquote>
<p>The elevated level of erosion is typically closer to the glacial snout but then progressively loses energy.</p>
</blockquote>
<p><img src="https://api.ibaguette.com/revision_meta/geo/alevel/A%20Lovely%20Outwash%20Plain.jpg" alt=""></p>
<p>In areas that were once glaciated, old outwash pains can be found by looking for sediment, with large  angular rocks and boulders being present closer to the glacial mass and smaller, smoother rocks and sediment being further away from the glacier, similarly to a typical river system aside from their origin. Outwash plains can extend for miles beyond the glacial margin (terminal moraine).</p>
<h3 id="braided-streams">Braided streams</h3>
<p>The general consensus is that braided river form instead of meandering rivers due to a higher sediment load, caused by discharge from ablation, as well as variable rates of flow.<br>
At the end of a melting period, these lose water, lowering kinetic energy present in the system and therefore losing erosional power and increasing depositional power. This results in material being deposited into the river channel, causing it to divide in two. Braiding itself develops when this ‘mid-channel bar’ grows downstream, as a result of more, finer material being added to the bar as discharge amounts continue to decrease. These bars, during times of exceptionally low discharge like in winter months, may become home to vegetation, becoming more permanent. whereas unvegetated bars are less stable and often move with high discharge.</p>
<p>Many of these channels branch from other channels and merge to give it the ‘braided’ pattern. They are common in outwash plains due to the variable nature of ablation and meltwater amounts.</p>
<p><img src="https://worldrivers.net/wp-content/uploads/2020/04/Screenshot_32.png" alt=""><br>
<em>diagram of a braided stream</em></p>
<p>They are found in large quantities in south Iceland, for example.</p>
<p>Due to climate change, braided streams may dry up due to smaller amounts of ice present in these areas, after an initial increase in ablation due to temperature rise. This initial increased sediment load will progressively decrease as the ice mass decreases. As a result, there can be expected to be more eroded streams, being deeper and wider, inside this outwash plain, followed then by the area becoming dry and tundra-like. Whilst vegetation thrives in outwash plains due to the rich minerals present in the glacial meltwater, this may also dry up in the future, becoming a barren, sandy and gravelly area with little life.</p>
<h3 id="kettles">Kettles</h3>
<p>A kettle is a large depression in the ground formed by glacial deposition, and is therefore a depositional landform. They create ‘dimples’ in the landscape around mountainous areas.</p>
<p>They are formed by large blocks of ice breaking from the main glacier. As the main glacier retreats, this ‘dead’ ice becomes stranded and, over time, becomes buried by sediment deposits as meltwater flows around it from the main glacier. Of course, this ice melts and its water evaporates, leaving behind a large depression, or kettle holes. Water can then fill these in again, or if not all water drains originally, resulting in kettle lakes.<br>
<img src="https://media.discordapp.net/attachments/785620979300302869/1049804000221999144/kettles.png" alt="enter image description here"></p>
<h3 id="tbd-troughs">[tbd] Troughs</h3>
<h2 id="periglacial-landforms">Periglacial landforms</h2>
<p>Periglacial landforms exist as a result of climate change before and/or after glacial periods.</p>
<p><strong>Periglaciation</strong> is concerned with the process and landforms atributed to the action of <strong>permafrost</strong>.</p>
<p>Being in a periglacial area means an area that is near to, or on the fringe of, glacial areas’ ice mass. This means that there is no physical glacier system present in the area, but it is still cold, relative to surrounding environments.</p>
<h3 id="permafrost">Permafrost</h3>
<p>Permafrost itself is comprised of:</p>
<ul>
<li>the active layer (this is the top few metres or so. It is warmer as it is closer to the surface. It may become unfrozen during the summer months and vegetation may grow too.)</li>
<li>the permafrost layer.</li>
<li>talik (year-round sections of unfrozen ground, soil, rocks that lies in permafrost areas, but itself is not frozen)</li>
</ul>
<p>There are 3 types of permafrost:</p>
<ul>
<li>Continuous permafrost - there is little thawing, even in the summer. The</li>
</ul>
<h3 id="sorted-stone-polygons-slone-circles">Sorted Stone Polygons (slone circles)</h3>
<p>Elongated stone polygons form</p>
<h3 id="stone-stripes">Stone stripes</h3>
<h3 id="pingos">Pingos</h3>
<p>In an open-system pingo, pingos are dome-shaped, ice cored hills. Groundwater moves through the permafrost and towards an ice core, making it expand. This can be described as <strong>hydrostatic pressure</strong>. Sediment and rocks aid the water in travelling and also get frozen within this ice core, and as this core expands the ground above gets pushed further upwards to create a hill.</p>
<h3 id="ice-wedge-polygons">Ice-wedge polygons</h3>
<p>Soil cracks when cooled quickly. In summer the crack fills with meltwater, and as it refreezes many freeze-thaw events take place, expanding the ice by 9% each time. This eventually results in the formation of an ice wedge</p>
<h2 id="ignore">ignore</h2>
<p>$$</p>
      </div>
    </div>
  </div>
<!-- Add the CSS for the toggle -->
<style>
/* Add a position of relative to the container */
.container {
  position: relative;
}
/* Add a position of fixed and a top and right value of 20px to the toggle */
.dark-mode-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  /* Add some basic styling */
  background-color: #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  /* Use a pseudo-element to create the moon icon */
  &::before {
    content: "";
    background-image: url('https://api.ibaguette.com/static/svg/moon-regular.svg');
    background-size: cover;
    width: 20px;
    height: 20px;
    display: block;
    margin: auto;
  }
}
/* Style the toggle when it is in the "on" state */
.dark-mode-toggle.on {
  /* Add some basic styling */
  background-color: #fff;
  /* Use a pseudo-element to create the sun icon */
  &::before {
    content: "";
    background-image: url(sun.svg)
  }
}
/* Style the body when the "data-theme" attribute is "dark" */
html[data-theme='dark'] {
  background-color: #333;
  color: #fff;
}
/* Style the body when the "data-theme" attribute is "light" */
html[data-theme='light'] {
  background-color: #fff;
  color: #333;
}
</style>
<!-- Add the JavaScript for the toggle -->
<script>
const toggle = document.querySelector('.dark-mode-toggle');
// Add a click event listener to the toggle
toggle.addEventListener('click', () => {
  // Toggle the "on" class on the toggle
  toggle.classList.toggle('on');
  // Get the current value of the "data-theme" attribute on the "html" element
  const theme = document.documentElement.getAttribute('data-theme');
  // If the "data-theme" attribute is "dark", set it to "light"
  // Otherwise, set it to "dark"
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'dark');
}
});
</script>
</body>
</html>
`