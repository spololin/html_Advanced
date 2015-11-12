function initialize() {
    var mapOptions = {
        zoom:8, 
        center:new google.maps.LatLng(34.89043,-111.74194) 
    };
    var map=new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var image="img/balun.png";
    var myLatLng=new google.maps.LatLng(34.89043,-111.74194);
    var beachMarker=new google.maps.Marker({
        position:myLatLng,
        map:map,
        icon:image});
}
google.maps.event.addDomListener(window,'load',initialize);


var btnSearch = document.querySelector('.btn-search');
var formSearch = document.querySelector('.search-hotel-form');
var formInput = document.querySelector('.form-input');

btnSearch.addEventListener('click', function(evt) {
    evt.preventDefault(); 
    formSearch.classList.toggle('form-hide');
    formSearch.classList.toggle('form-show');
});

window.addEventListener('keydown', function(evt) {
if (evt.keyCode === 27) {
  if (formSearch.classList.contains('form-show')) {
    formSearch.classList.remove('form-show');
    formSearch.classList.add('form-hide');
    formSearch.classList.remove('form-error');
  }
}
});

formSearch.addEventListener("submit", function(evt) {
    var formInputs = formSearch.querySelectorAll('.form-input');
    var inputStatusError = false;
    for(var i = 0; i < formInputs.length; i++) {
        if(formInputs[i].value !== '') continue;
        evt.preventDefault();
        formInputs[i].focus();
        inputStatusError = true;
        formInputs[i].oninput = clearErrorState;
        formInputs[i].style.borderColor='#ff0000';
        formSearch.classList.add('form-error');
    };
    if(inputStatusError) return;
});

function clearErrorState(){
    this.style.borderColor='#f2f2f2';
    this.oninput = null;
};