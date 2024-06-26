$(document).ready(function () {

    new WOW({
            animateClass: 'animate__animated',
        }
    ).init();

    let menu = $('#menu');
    let burger = $('#burger');
    burger.click(function (event) {
        menu.toggleClass('open');
        burger.toggleClass('open');
        $('body').toggleClass('lock');
    })

$('.menu__item').click(function (event) {
        menu.toggleClass('open');
        burger.toggleClass('open');
        $('body').toggleClass('lock');
    })


    //--------Слайдер для программ----------//

    let programs = [
        {
            day: "1",
            title: "Познакомимся с исландскими овечками",
            text: "Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c бapaшкaми.",
            img: "assets/images/day1.png"
        },
        {
            day: "2",
            title: "Освоение исландских вулканов",
            text: "День начнется с восхождения на один из многих дремлющих вулканов Исландии, где вы сможете почувствовать мощь природных элементов и насладиться захватывающими видами. Позже мы посетим местные геотермальные источники, чтобы расслабиться после невероятных приключений дня.",
            img: "assets/images/day2.jpg"
        },
        {
            day: "3",
            title: "Исследование ледниковой лагуны",
            text: "Приготовьтесь к круизу по ледниковой лагуне Йёкульсарлон, где ледяные глыбы всех форм и размеров плавают в прозрачной холодной воде. После круиза мы отправимся на пляж с черным песком, чтобы увидеть, как эти ледяные скульптуры оказываются на берегу Атлантического океана.",
            img: "assets/images/day3.jpg"
        },
        {
            day: "4",
            title: "Поход по полям лавы",
            text: "В четвертый день нашей поездки вы сможете ощутить уникальный ландшафт Исландии, прогулявшись по лунным полям лавы. Далее нас ожидает купание в природном горячем источнике, погружение в который не только успокаивает тело, но и дух.",
            img: "assets/images/day4.jpg"
        },
        {
            day: "5",
            title: "Знакомство с водопадами",
            text: "Будет посвящен водопадам Скафтафэлл и их великолепию. После восхищения природными красотами мы вернемся в город, чтобы погрузиться в культурную атмосферу Исландии, посетить местные маркеты и попробовать кухню.",
            img: "assets/images/day5.jpeg"
        },
        {
            day: "6",
            title: "Изучение подводного мира",
            text: "В этот день предлагаем вам нырнуть с аквалангом в прозрачные воды силфраканьона, где две тектонические плиты сходятся вместе. Вас ожидает незабываемое погружение между Северной Америкой и Европой.",
            img: "assets/images/day6.jpg"
        },
        {
            day: "7",
            title: "Отдых и исландские традиции",
            text: "Последний день вашего путешествия по Исландии будет менее насыщенным, чтобы вы могли спокойно подводить итоги увиденного и испытанного. Посетим рынок ручных работ, где вы сможете купить сувениры в виде исландской вязаной продукции. Завершим день традиционным исландским ужином.",
            img: "assets/images/day7.jpg"
        }
    ];

    let currentIndex = 0;

    function displayProgram(index) {
        let program = programs[index];

        $('.now-day').slideUp(400, function () {
            $('.now-day').text(program.day);
            $('.now-day').slideDown(400);
        });

        $('.program-title, .program-text, .day-photo').fadeOut(400, function () {


            $('.program-title').text(program.title);
            $('.program-text').text(program.text);
            $('.day-photo').css('background-image', 'url(' + program.img + ')');

            $('.program-title, .program-text, .day-photo').fadeIn(400);
        });
    }


    displayProgram(currentIndex);

    $('.program-next').click(function () {
        currentIndex = (currentIndex + 1) % programs.length;
        displayProgram(currentIndex);
    });

    $('.program-prev').click(function () {

        currentIndex = (currentIndex - 1 + programs.length) % programs.length;
        displayProgram(currentIndex);
    });


    //--------Слайдер для отзывов----------//

    let testimonials = [
        {
            name: "Иван",
            rate: "10/10",
            text: "Хочу сказать организаторам тура огромное спасибо за это шикарное путешествие! Мы с девушкой давно мечтали побывать в Исландии и благодаря ребятам из iceland.travel эта страна оставила невероятные впечатления далёкого, но теперь изведанного края, которые мы запомним надолго!",
            img: "assets/images/testimonials1.png"
        },
        {
            name: "Александра",
            rate: "10/10",
            text: "Спасибо iceland.travel за великолепный тур по Исландии! С нетерпением жду следующего приключения с вами! Всё было организовано на высшем уровне, а ледники и вулканы просто заворожили. Это путешествие навсегда останется в моём сердце!",
            img: "assets/images/testimonials2.jpg"
        },
        {
            name: "Олег",
            rate: "9/10",
            text: "Огромная благодарность команде iceland.travel за прекрасно организованный тур в Исландию! Ваш профессионализм и внимание к деталям сделали путешествие незабываемым. Фьорды, водопады, гейзеры — каждый день был наполнен чудесами. С нетерпением жду следующего приключения с вами!",
            img: "assets/images/testimonials3.jpg"
        },

    ];

    let testimonialsIndex = 0;

    function displayTestimonials(index) {
        let testimonial = testimonials[index];
        $('.testimonials-name, .testimonials-rate, .testimonials-text, .testimonials-photo').fadeOut(300, function () {

            $('.testimonials-name').text(testimonial.name);
            $('.testimonials-rate').text(testimonial.rate);
            $('.testimonials-text').text(testimonial.text);
            $('.testimonials-photo').css('background-image', 'url(' + testimonial.img + ')');

            $('.testimonials-name, .testimonials-rate, .testimonials-text, .testimonials-photo').fadeIn(300);
        });
    }


    displayTestimonials(testimonialsIndex);

    $('.testimonials-next').click(function () {
        testimonialsIndex = (testimonialsIndex + 1) % testimonials.length;
        displayTestimonials(testimonialsIndex);
    });

    $('.testimonials-prev').click(function () {

        testimonialsIndex = (testimonialsIndex - 1 + testimonials.length) % testimonials.length;
        displayTestimonials(testimonialsIndex);
    });


//----------------Запуск видео------------//
    $('.play-button').click(function () {
        $('.play-button').hide();

        let videoFrame = $('.iframe');
        let src = videoFrame.attr('src');
        videoFrame.show();

        videoFrame.attr('src', src + "&autoplay=1");
        $('.video').css('background', '#2c2c2c');
    })


    //----------Слайдер----------//

    $('.gallery-carousel-pc').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.gallery-carousel-mobile').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });


    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',

        // If you enable allowHTMLInTemplate -
        // make sure your HTML attributes are sanitized if they can be created by a non-admin user
        allowHTMLInTemplate: true,
        image: {
            verticalFit: true,
        },

        gallery: {
            enabled: false
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });


//-----------------FORM Переделать с той контрольной----//

    let nameInput = $('#order_name');
    let numberInput = $('#order_number');
    let radioCount = $('input[name="count"]:checked');
    let loader = $('.loader');

    function thanksOrder() {
        $('.order-count').fadeOut(300, function() {
            $('.order-success').css('display', 'flex').html('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!').hide().fadeIn(500);
        });
    }

    function errorOrder() {
        $('.order-count').fadeOut(300, function() {
            $('.order-success').css('display', 'flex').html('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ').hide().fadeIn(500);
        });
    }

    function formOrder() {
        $('.order-success').fadeOut(300, function() {
            $('.order-count').show();
        });
    }

//------------маска телефона и проверка

    $('#order_number').mask("+375 (99) 999-99-99");


    numberInput.on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    nameInput.on('input', function () {
        // Заменяем все небуквенные символы на пустую строку
        this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    });


    $('#order_button').click(function () {
        let hasError = false;
        $('.order__action_input').css('border-width', '1px').css('border-color', '#ffffff');

        $('.error-input').hide();


        let selectedCount = $('input[type="radio"][name="count"]:checked').val();
        if (!selectedCount) {
            $('.error-input').show();
            hasError = true;
        }
        
        if (!nameInput.val()) {
            nameInput.next().show();
            hasError = true;
            nameInput.css('border-width', '1px').css('border-color', '#FF0000');
        }
        if (!numberInput.val()) {
            numberInput.next().show();
            hasError = true;
            numberInput.css('border-width', '1px').css('border-color', '#FF0000');
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: { name: nameInput.val(), phone: numberInput.val() }
            }).done(function (msg) {
                $('.order_form').trigger('reset');
                loader.hide();
                if (msg.success) {
                    thanksOrder();
                    setTimeout(formOrder, 3000);
                } else {
                    errorOrder();
                    setTimeout(formOrder, 3000);
                }
                console.log(msg);
            });
        }
    })


});


