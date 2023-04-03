function redirect(destination) {
    window.location.href = destination;
}

function showNav() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("logo-nav").src = "../assets/logo-transparent.png";
  } else {
    x.className = "topnav";
    document.getElementById("logo-nav").src = "../assets/transparent-logo-small.png";
  }
}

function searchNewPageQueries() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const type = urlParams.get('type')

  if (type == "post") {
    document.getElementById("newsnippet-content").className = "hidden";
  } else if (type == "snippet") {
    document.getElementById("newpost-content").className = "hidden";
  }
}