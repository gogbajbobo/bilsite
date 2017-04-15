/**
 * Created by grimax on 01/04/2017.
 */

$(document).ready(function() {

    scrollToSection();
    closeNavbarOnClick();
    spyForScrollSpy();
    getContacts();

});

function scrollToSection() {

    $('[data-toggle="tooltip"]').tooltip();

    $(".navbar a, footer a[href='#bil-page']").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });

        }

    });

}

function closeNavbarOnClick() {

    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

}

function spyForScrollSpy() {

    $('body').on('activate.bs.scrollspy', function () {

        let navbarMenu = $('#bil-menu');
        let activeMenuItem = navbarMenu.find('li.active');
        let activeMenuText = activeMenuItem.children('a').text();
        $('#infotext-navbar').text(activeMenuText);

    });

}

function getContacts() {

    let path = 'contacts.html';

    $.get(path, function(data) {

        let contacts = $(data).filter('#bil-contacts');
        $('#bil-contacts').replaceWith(contacts);

    });

}