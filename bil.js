/**
 * Created by grimax on 01/04/2017.
 */

$(document).ready(function() {

    getContacts();
    getFooter();

    scrollToSection();
    closeNavbarOnClick();
    spyForScrollSpy();

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

    let portfolioFolder = window.location.pathname.split('/').indexOf('portfolio') !== -1;

    let path = portfolioFolder ? '../contacts.html' : 'contacts.html';

    $.get(path, function(data) {

        let contacts = $(data).filter('#bil-contacts');
        $('#bil-contacts').replaceWith(contacts);

    });

}

function getFooter() {

    let portfolioFolder = window.location.pathname.split('/').indexOf('portfolio') !== -1;

    let path = portfolioFolder ? '../footer.html' : 'footer.html';

    $.get(path, function(data) {

        let footer = $(data).filter('#bil-footer');
        $('#bil-footer').replaceWith(footer);

    });

}