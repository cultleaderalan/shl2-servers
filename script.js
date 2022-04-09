var url = "https://games.roblox.com/v1/games/718655742/servers/Public?sortOrder=Asc&limit=100";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
