function initialize() {
    var mapOptions = {
        zoom:8, 
        center:new google.maps.LatLng(34.89043,-111.74194) 
    }
    var map=new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var image="img/balun.png";
    var myLatLng=new google.maps.LatLng(34.89043,-111.74194);
    var beachMarker=new google.maps.Marker({
        position:myLatLng,
        map:map,
        icon:image});
}
google.maps.event.addDomListener(window,'load',initialize);

$(document).ready(function(){
    $('#btn-search').click(function(evt) {
        evt.preventDefault();
        $('#search-form').removeClass('hidden');
        $('#search-form').toggleClass('popup-show');
        $('#search-form').toggleClass('popup-hide');
    }); 
    
    $('#search-form').submit(function() {
        $('.form-input').each(function() {
            if ($(this).val()=='') {
                $(this).css('border', '2px solid red');
            }
        })
    })
});

