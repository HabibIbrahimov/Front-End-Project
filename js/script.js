$(document).ready(function(){

//NAVBAR
$(document).on('click', '#search', function () {
    $(this).next().toggle();
})

$(document).on('click', '#mobile-navbar-close', function () {
    $(this).parent().removeClass("active");

})
$(document).on('click', '#mobile-navbar-show', function () {
    $('.mobile-navbar').addClass("active");

})

$(document).on('click', '.mobile-navbar ul li a', function () {
    if ($(this).children('i').hasClass('fa-caret-right')) {
        $(this).children('i').removeClass('fa-caret-right').addClass('fa-sort-down')
    }
    else {
        $(this).children('i').removeClass('fa-sort-down').addClass('fa-caret-right')
    }
    $(this).parent().next().slideToggle();
})


 //slider 
 $(function() {
    $(".Slider").vegas({
        slides: [
            { src: './img/h3-slider-background-2.jpg' },
            { src: './img/h3-slider-background-3.jpg' },
            { src: './img/h3-slider-background.jpg' }
        ],
        animation: 'kenburnsDownLeft'
    });
});


 // PRODUCT

 $(document).on('click', '.categories', function(e)
 {
     e.preventDefault();
     $(this).next().next().slideToggle();
 })

 $(document).on('click', '.category li a', function (e) {
     e.preventDefault();
     let category = $(this).attr('data-id');
     let products = $('.product-item');
     
     products.each(function () {
         if(category == $(this).attr('data-id'))
         {
             $(this).parent().fadeIn();
         }
         else
         {
             $(this).parent().hide();
         }
     })
     if(category == 'all')
     {
         products.parent().fadeIn();
     }
 })


//slider_2 
$(document).ready(function(){
    $(".slider2").owlCarousel(
        {
            items: 1,
            loop: true,
            autoplay: true
        }
    )
//SHOPLIST Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
  });

//ACCORDION

$(document).on('click', '.question', function()
    {   
       $(this).siblings('.question').children('i').removeClass('fa-minus').addClass('fa-plus');
       $(this).siblings('.answer').not($(this).next()).slideUp();
       $(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
       $(this).next().slideToggle();
       $(this).siblings('.active').removeClass('active');
       $(this).toggleClass('active');
    })


 // TAB

      $(document).on('click', 'ul li', function()
      {   
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          let dataId = $(this).attr('data-id');
          $(this).parent().next().children('p.active').removeClass('active');
  
          $(this).parent().next().children('p').each(function()
          {
              if(dataId == $(this).attr('data-id'))
              {
                  $(this).addClass('active')
              }
          })
      })
  
      $(document).on('click', '.tab4 ul li', function()
      {   
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          let dataId = $(this).attr('data-id');
          $(this).parent().parent().next().children().children('p.active').removeClass('active');
  
          $(this).parent().parent().next().children().children('p').each(function()
          {
              if(dataId == $(this).attr('data-id'))
              {
                  $(this).addClass('active')
              }
          })
      })


      // Progress Bar Page 
$('.loading').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});


//Product Tab
let product_menus = document.querySelectorAll("#product_tab .menus .menu");
let product_contents = document.querySelectorAll("#product_tab .contents .content");

for (let menu of product_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#product_tab .menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of product_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}



