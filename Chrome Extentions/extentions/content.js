(function() {
  let filenames = [
    "freddie-marriage-40645.jpg",
    "roxanne-desgagnes-277568.jpg"
  ];

  let imgs = document.getElementsByTagName('img');
  for (let imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'kittens/' + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
  }
  let a = document.getElementsByTagName('a');
  for (let i = 0; i < a.length; i++) {
    var currentLink = a[i].innerHTML;
    var res = currentLink.split(' ');
    if (res[0] != "<img") {
      a[i].innerHTML = "Hacked! You are under hackers eyes";
    }

  }
  let h = document.getElementsByTagName('h1', 'h2', 'h3', 'h4', 'h5', 'span', 'h6');
  for (let i = 0; i < h.length; i++) {
    h[i].innerHTML = "Cat You";
  }
  let d = document.getElementsByTagName('div');
  for (elt of d) {
    elt.style['background-color'] = '#FF00FF';
  }
})();