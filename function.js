window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

document.querySelector('ons-splitter-content').setAttribute('someAttribute', 'true')
document.querySelector('ons-splitter-content').page
document.querySelector('ons-splitter-content').someMethod()

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

ons.bootstrap();

function editSelects(event) {
  document.getElementById('choose-sel').removeAttribute('modifier');
  if (event.target.value == 'material' || event.target.value == 'underbar') {
    document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  }
}
function addOption(event) {
  const option = document.createElement('option');
  var text = document.getElementById('optionLabel').value;
  option.innerText = text;
  text = '';
  document.getElementById('dynamic-sel').appendChild(option);
}

$(document).ready(function () {
  var bgColor = $('body').css("background-color");
  $("#testBtn").click(function () {
      $('.navigation-bar').css("background-color", bgColor);
  });
});