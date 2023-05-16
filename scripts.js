let myColor = "#000000";
let person  = ""

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function aktualizujZpravy() {
  document.getElementById("reload-gif").style.display = "inline";
  $.ajax({
    url: 'http://vos.maple-webdesign.cz/wtk2/chat-seznam-zprav.php',
    method: 'get',
    data: {        
    }
  }).done(function(data){      
      let zpravy = jQuery.parseJSON(data); 
      let html   = "";
      for(var i=0; i < zpravy.length; i++) {
        datum = zpravy[i].datum.slice(8, 10) + "." + zpravy[i].datum.slice(5, 7) + "." + zpravy[i].datum.slice(0, 4) + " " + zpravy[i].datum.slice(11, 13) + ":" + zpravy[i].datum.slice(14, 16)
        html  = html + '<div class="zprava"><h3 style="color:' + zpravy[i].barva + ';">' + zpravy[i].jmeno + '</h3><p>' + zpravy[i].zprava + '</p><i>' + datum + '</i></div>';
      }      
      document.getElementById('chat-window').innerHTML = html;      
  });
  
  document.getElementById("reload-gif").style.display = "none";  
}

function odesliZpravu() {
  zpravicka = $('#id_pzprava').val().replace(/(\r\n|\r|\n)/g, '<br>');
  $.ajax({
    url: 'http://vos.maple-webdesign.cz/wtk2/chat-nova-zprava.php',
    method: 'get',
    data: {
      barva: myColor,
      jmeno: person,
      zprava: zpravicka
    }
  }).done(function(data){      
      if (data = "OK") {
        alert("Zpráva odeslána");
        $('#id_pzprava').val("") 
      } else {
        alert("Zprávu se nepodařilo odeslat");
      }    

  });
}

$( document ).ready(function() {
  let text;
  person = prompt("Please enter your name:");

  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "!";
  }
  document.getElementById("demo").innerHTML = text;

  aktualizujZpravy();
});

document.getElementById("aktualizuj").addEventListener("click", function() {  
  aktualizujZpravy();
});

document.getElementById("odesli").addEventListener("click", function() {  
  odesliZpravu();
  aktualizujZpravy();
});

dot.addEventListener('click', function onClick(event) {
  document.getElementById("demo").style.color = '#008000';
  myColor = '#008000';
});

dot2.addEventListener('click', function onClick(event) {
  document.getElementById("demo").style.color = '#FF0000';
  myColor = '#FF0000';
});

dot3.addEventListener('click', function onClick(event) {
  document.getElementById("demo").style.color = '#0000FF';
  myColor = '#0000FF';
});

dot4.addEventListener('click', function onClick(event) {
  document.getElementById("demo").style.color = '#FFFF00';
  myColor = '#FFFF00';
});

dot5.addEventListener('click', function onClick(event) {
  document.getElementById("demo").style.color = '#800080';
  myColor = '#800080';
});

dot6.addEventListener('click', function onClick(event) {
  document.getElementById("demo").style.color = '#00FFFF';
  myColor = '#00FFFF';
});

dot7.addEventListener('click', function onClick(event) {
  document.getElementById("demo").style.color = '#000000';
  myColor = '#000000';
});
