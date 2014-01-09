document.onclick = function(e) {
var target = e && e.target || window.event.srcElement;

var dataToggleClass = target.getAttribute('data-toggle-class');
if (!dataToggleClass) return;

var elem = document.getElementById(dataToggleClass);
elem.style.display = elem.offsetHeight ? 'none' : 'block';
}