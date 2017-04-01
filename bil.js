/**
 * Created by grimax on 01/04/2017.
 */

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $(".navbar a, footer a[href='#bil-page']").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });

        }

    });

});

