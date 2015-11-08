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


$('.btn-search').click(function(evt) {
    evt.preventDefault();
    $('.search-hotel-form').removeClass('hidden');
    $('.search-hotel-form').toggleClass('form-show');
    $('.search-hotel-form').toggleClass('form-hide');
}); 

$('.search-hotel-form').submit(function() {
    var $statusValidInput = false;
    $('.form-input').each(function() {
        if (!checkInputValue($(this))){
            $statusValidInput = true;
        }
    });
    if ($statusValidInput) {
        return false;
    }
});

$('.form-input').change(function(){
    $(this).css('border-color', '#f2f2f2');
});

function checkInputValue(obj){
    if (obj.val()=='') {
        obj.css('border-color', 'red');
        return false;
    };
};