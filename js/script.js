$(document).ready(function(){
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {

            // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

            const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle("active");
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }

        });
    });
    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 5000ms"
        });
        // $('.owl-carouselIndex .slide').addClass('active');
    }
    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
    $(".owl-carousel.owl-carouselIndex").owlCarousel({
        items:1,
        loop: true,
        nav:true,
        navText:false,
        autoplay: true,
        autoplaySpeed:1000,
        autoplayTimeout:10000,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });

        $('.b').on('click', function() {
            $(".fpfirst").trigger('click');
        });
    $(".sertificateSlider.owl-carousel").owlCarousel({
        items:1,
        loop: true,
        nav:false,
        navText:false,
    });
    $(".owl-carouselExample.owl-carousel").owlCarousel({
            items:4,
            nav:true,
            navText:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:4
                }
            }
    });

    // if($(window).width()>768) {
    //     $('.owl-carouselIndex').on('changed.owl.carousel', function (event) {
    //         var item = event.item.index -3;
    //         $('.imgInSlide').removeClass('animate__animated  animate__fadeInRight animate__delay-2s');
    //
    //         $('.owl-item').not('.cloned').eq(item).find('.imgInSlide').addClass('animate__animated  animate__fadeInRight animate__delay-2s');
    //     });
    // } else {
    //     $('.owl-carouselIndex').on('changed.owl.carousel', function (event) {
    //         var item = event.item.index - 3;
    //         $('.imgInSlide').removeClass('animate__animated  animate__fadeInDowm animate__delay-2s');
    //
    //         $('.owl-item').not('.cloned').eq(item).find('.imgInSlide').addClass('animate__animated  animate__fadeInUp animate__delay-2s');
    //     });
    // }
    $('.descTovar span').on('click', function () {
        $(this).next().toggle();
    })
    $('.imgExample').on('click', function () {
        var name = $(this).data('name');
        var img = $(this).data('img');
        var img1 = $(this).data('img1');
        var img2 = $(this).data('img2');
        var img3 = $(this).data('img3');
        var num = $(this).data('number');
        var skidka = $(this).data('skidka');
        var price = $(this).data('price');
        var time = $(this).data('time');
        var square = $(this).data('square');
        $('#name').replaceWith('<div class="name" id="name">'+name+'</div>');
        $('#img').replaceWith('<a href="'+img+'" data-lightbox="images" id="img"><img src="'+img+'" alt=""></a>');
        $('#img1').replaceWith('<div href="'+img1+'" data-images="'+img1+'" data-lightbox="imge'+num+'" id="img1"><img src="'+img1+'" alt=""></div>');
        $('#img2').replaceWith('<div href="'+img2+'" data-images="'+img2+'" data-lightbox="imge'+num+'" id="img2"><img src="'+img2+'" alt=""></div>');
        $('#img3').replaceWith('<div href="'+img3+'" data-images="'+img3+'" data-lightbox="imge'+num+'" id="img3"><img src="'+img3+'" alt=""></div>');
        $('#skidka').replaceWith('<div class="skidka" id="skidka">'+skidka+'%</div>');
        $('#price').replaceWith('<div class="right" id="price">'+price+'</div>');
        $('#time').replaceWith('<div class="right" id="time">'+time+'</div>');
        $('#square').replaceWith('<div class="right" id="square">'+square+'</div>');
    });

    $(".m").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".secondImg").delegate('#img1', 'click',function(){
        event.preventDefault();
        $("#img").replaceWith('<a href="'+$(this).data('images')+'" data-lightbox="images" id="img"><img src="'+$(this).data('images')+'" alt=""></a>');
    });
    $(".secondImg").delegate('#img2', 'click',function(){
        event.preventDefault();
        $("#img").replaceWith('<a href="'+$(this).data('images')+'" data-lightbox="images" id="img"><img src="'+$(this).data('images')+'" alt=""></a>');
    });
    $(".secondImg").delegate('#img3', 'click',function(){
        event.preventDefault();
        $("#img").replaceWith('<a href="'+$(this).data('images')+'" data-lightbox="images" id="img"><img src="'+$(this).data('images')+'" alt=""></a>');
    });

    $(".rewievsSlider.owl-carousel").owlCarousel({
        items:2,
        nav:true,
        dots:false,
        navText:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });
    $(".tabSlider.owl-carousel").owlCarousel({
        items:3,
        nav:true,
        navText:false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            }
        }
    });
    $(".owl-carouselSlider.owl-carousel").owlCarousel({
        items:4,
        nav:true,
        navText:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            }
        }
    });

    // $(".tabs>li").click(function() {
    //     myCarousel.trigger("destroy.owl.carousel");
    //     $("#my-carousel").html(newHtmlContent);
    //     myCarouselStart();
    // });
    let myCarousel; //a variable thats hold owlCarousel object
    function myCarouselStart() {
        myCarousel = $(".active .owl-carouselSlider:visible").owlCarousel({
            items:4,
            nav:true,
            navText:false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                }
            }
        });
    }

        myCarouselStart(); // run owl carousel for first time
    $(".active .owl-carouselSlider").owlCarousel({
        items:4,
        nav:true,
        navText:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            }
        }
    });
    $(".tabs>li").click(function() {
        $(".active .owl-carouselSlider").trigger("destroy.owl.carousel");
        // $(".owl-carouselSlider").html(new htmlcontent);
        $(".active .owl-carouselSlider").owlCarousel({
            items:4,
            nav:true,
            navText:false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                }
            }
        });
    })
    $('.tabs-container').each(function(){
        // const tabLinks = document.querySelectorAll(".tab a");
        // const tabPanels = document.querySelectorAll(".tabs-panel");
        //
        // for(let el of tabLinks) {
        //     el.addEventListener("click", e => {
        //         e.preventDefault();
        //
        //         document.querySelector('.tabs li.active').classList.remove("active");
        //         document.querySelector('.tabs-panel.active').classList.remove("active");
        //
        //         const parentListItem = el.parentElement;
        //         parentListItem.classList.add("active");
        //         const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
        //
        //         const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        //         panel[0].classList.add("active");
        //     });
        // }
        let tabTabs = $(this).find('.tabs li');
        let tabItems = $(this).find('.tabs-panel');

        tabTabs.each(function(i){
            $(this).click(function(){
                $(this).addClass('active');
                tabTabs.not(this).removeClass('active');
                $(tabItems[i]).addClass('active');
                tabItems.not(tabItems[i]).removeClass('active');
                $(".active .owl-carouselSlider").trigger("destroy.owl.carousel");
                // $(".owl-carouselSlider").html(new htmlcontent);
                $(".active .owl-carouselSlider").owlCarousel({
                    items:4,
                    nav:true,
                    navText:false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 4
                        }
                    }
                });
                $(".active .owl-carouselSlider").removeClass('owl-hidden');
            });
        });
    });
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true
    })



    // var tab = $('.tabs-container .tabs li'); //grab tabs
    // var panel = $('.tabs-container .tabs-panel'); //grab contents
    //
    // tab.bind('click',function(){
    //     panel.hide(); //hide all contents
    //     tab.removeClass('current'); //remove 'current' classes
    //     $(panel[$(this).index()]).show(); //show tab content that matches tab title index
    //     $(this).addClass('current'); //add current class on clicked tab title
    // });

    var tabs = $('#tabs-titles li'); //grab tabs
    var contents = $('#tabs-contents li'); //grab contents

    tabs.bind('click',function(){
        contents.hide(); //hide all contents
        tabs.removeClass('current'); //remove 'current' classes
        $(contents).removeClass('current');
        $(contents[$(this).index()]).addClass('current'); //show tab content that matches tab title index
        $(this).addClass('current'); //add current class on clicked tab title
    });
    $('.lazyYT').lazyYT();
    document.getElementById('headerForm').addEventListener('submit', function(evt){

            var form = $(this);
            var field = [];
            var error = 0;
            form.find('input[data-validate]').each(function () {
                field.push('input[data-validate]');
                var value = $(this).val(),
                    line = $(this).closest('.some-form__line');
                for(var i=0;i<field.length;i++) {
                    if( !value ) {
                        line.addClass('some-form__line-required');
                        error = 1;
                        setTimeout(function() {
                            line.removeClass('some-form__line-required')
                        }.bind(this),2000);
                        evt.preventDefault();
                    }
                }
            });
            if (error == 0) {
                var http = new XMLHttpRequest(), f = this;
                var th = $(this);
                evt.preventDefault();
                http.open("POST", "mail.php", true);
                http.onreadystatechange = function () {
                    if (http.readyState == 4 && http.status == 200) {
                        th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                        if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                            th.trigger("reset");
                        }
                    }
                }
                http.onerror = function () {
                    alert('Ошибка, попробуйте еще раз');
                }
                http.send(new FormData(f));
            }
        }, false);
    document.getElementById('podarokForm').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('rassrochka').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('karnizForm').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('cvetForm').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('shinoprovodForm').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('zapis').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('bonus').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('qwith').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('potolok').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('karnizPopup').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('cvetPopup').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    document.getElementById('shinoprovodPopup').addEventListener('submit', function(evt){

        var form = $(this);
        var field = [];
        var error = 0;
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    error = 1;
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    evt.preventDefault();
                }
            }
        });
        if (error == 0) {
            var http = new XMLHttpRequest(), f = this;
            var th = $(this);
            evt.preventDefault();
            http.open("POST", "mail.php", true);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    th.html('<div style=\'font-family:Verdana; font-size:26px; color:#e4070a;\'><center><b><step>Спасибо! Ваша заявка была отправлена!</step></b></center></div>');
                    if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                        th.trigger("reset");
                    }
                }
            }
            http.onerror = function () {
                alert('Ошибка, попробуйте еще раз');
            }
            http.send(new FormData(f));
        }
    }, false);
    $('[data-fancybox]').fancybox({
        // Options will go here
    });
    $(window).scroll(function(){
        if ( $(this).scrollTop() > $('.animate').offset().top - 400 ) {
            $('.animate').addClass('animation_car8');
        }
    });
    $(window).scroll(function(){
        if ( $(this).scrollTop() > $('.animate1').offset().top - 400 ) {
            $('.animate1').addClass('animation_car8');
        }
    });
    $(window).scroll(function(){
        if ( $(this).scrollTop() > $('.animate2').offset().top - 400 ) {
            $('.animate2').addClass('animation_car8');
        }
    });
    $(window).scroll(function(){
        if ( $(this).scrollTop() > $('.animate3').offset().top - 400 ) {
            $('.animate3').addClass('animation_car8');
        }
    });
});