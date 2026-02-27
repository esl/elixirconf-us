/**
 *
 *  Main JavaScript
 *
 *  @package gleesik_scripts
 *
 **/

// IIFE - Immediately Invoked Function Expression
;(function ($, window, document) {
  // The $ is now locally scoped

  // Listen for the jQuery ready event on the document
  $(function () {
    // The DOM is ready!

    // Global Variables
    var $window = $(window)

    /**
     *  Page Loader
     **/
    setTimeout(function () {
      $('.page-loader').addClass('load-complete')
    }, 1500)

    /**
     *  Header background on scroll
     **/
    var header = document.querySelector('.navbar-fixed-top')
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 300) {
        header.classList.add('navbar-shrink')
      } else {
        header.classList.remove('navbar-shrink')
      }
    })


    /**
     *  Main Menu Navigation
     **/
    var $body = $('body')
    var $nav_menu = $('.navigation-bar')
    var $nav_menu_link = $('#navMenu ul li a')
    var $toggle_menu_button = $('.navTrigger')

    // Navigation Menu Link
    $nav_menu_link.on('click', function () {
      // Select Current Navigation Item
      $nav_menu_link.parent().removeClass('current-menu-item')
      $(this).parent().addClass('current-menu-item')

      // Close Mobile Menu
      $nav_menu.removeClass('active')
      $toggle_menu_button.removeClass('active')
      $body.removeClass('no-scroll')
    })

    // Toggle Mobile Menu
    $toggle_menu_button.on('click', function () {
      $nav_menu.toggleClass('active')
      $body.toggleClass('no-scroll')
      $(this).toggleClass('active')
    })

    // Remove all classes on window resize
    $window.on('resize', function () {
      $nav_menu.removeClass('active')
      $body.removeClass('no-scroll')
      $toggle_menu_button.removeClass('active')
    })

    /**
     *  Portfolio
     **/
    var $filter_menu_item = $('.filter-menu ul li')
    var $portfolio_grid = $('.portfolio-grid')
    var $portfolio_grid_item = $portfolio_grid.children('.item')
    var $overlay = $portfolio_grid.children('#overlay')
    var $img = '<img alt="Portfolio Overlay Image" />'
    var $data_filters = null

    // Filter Menu
    $filter_menu_item.on('click', function () {
      // Filter Menu
      $filter_menu_item.removeClass('current')
      $(this).addClass('current')

      // Collecting Data Filters
      $data_filters = $(this).data('filter')

      // Hide All Portfolio Items
      if ($data_filters == 'all') {
        $portfolio_grid_item.addClass('visible')
      } else {
        // Show Portfolio Items from filter
        $portfolio_grid_item.removeClass('visible')
        $($data_filters).addClass('visible')
      }
    })

    // Show Image - Lightbox
    $portfolio_grid_item.find('.item-expand').on('click', function (e) {
      // Prevent Default Link Event
      e.preventDefault()

      // Get Image Link
      var $src = $(this).attr('href')

      // Create Image on the DOM
      $overlay.append($img)

      // Show Overlay Image
      $overlay.fadeIn(200).children('img').attr('src', $src)

      // Lock Body Scroll
      $body.toggleClass('no-scroll')
    })

    // Hide Overlay Lightbox
    $overlay.on('click', function () {
      // Hide Overlay Image
      $(this).fadeOut(200)

      // Remove Image from DOM
      $overlay.children('img').remove()

      // Unlock Body Scroll
      $body.toggleClass('no-scroll')
    })

    /**
     *  Testimonials Carousel
     **/
    document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
      var track = carousel.querySelector('.carousel-track')
      var originalItems = track ? Array.from(track.children) : []
      var dotsContainer = carousel.querySelector('.carousel-dots')
      var currentIndex = 0
      var autoplayInterval
      var isTransitioning = false
      var itemCount = originalItems.length

      // Clone items for infinite loop
      originalItems.forEach(function (item) {
        var clone = item.cloneNode(true)
        clone.setAttribute('aria-hidden', 'true')
        track.appendChild(clone)
      })

      function getItemsPerView() {
        if (window.innerWidth >= 1024) return 3
        if (window.innerWidth >= 640) return 2
        return 1
      }

      function updateCarousel(animate) {
        var itemsPerView = getItemsPerView()
        var offset = currentIndex * (100 / itemsPerView)

        if (animate === false) {
          track.style.transition = 'none'
        } else {
          track.style.transition = 'transform 0.4s ease'
        }

        track.style.transform = 'translateX(-' + offset + '%)'
        updateDots()
      }

      function updateDots() {
        if (!dotsContainer) return
        var itemsPerView = getItemsPerView()
        var totalDots = Math.ceil(itemCount / itemsPerView)
        var activeDot = Math.floor((currentIndex % itemCount) / itemsPerView)

        dotsContainer.innerHTML = ''
        for (var i = 0; i < totalDots; i++) {
          var dot = document.createElement('button')
          dot.setAttribute('aria-label', 'Go to slide ' + (i + 1))
          if (i === activeDot) {
            dot.classList.add('active')
          }
          dot.addEventListener('click', (function (index) {
            return function () {
              if (isTransitioning) return
              currentIndex = index * getItemsPerView()
              updateCarousel()
              restartAutoplay()
            }
          })(i))
          dotsContainer.appendChild(dot)
        }
      }

      function next() {
        if (isTransitioning) return
        isTransitioning = true
        currentIndex++
        updateCarousel()

        // Check if we've scrolled into the cloned section
        setTimeout(function () {
          if (currentIndex >= itemCount) {
            currentIndex = 0
            updateCarousel(false) // Jump back instantly
          }
          isTransitioning = false
        }, 420)
      }

      function startAutoplay() {
        autoplayInterval = setInterval(next, 4000)
      }

      function stopAutoplay() {
        clearInterval(autoplayInterval)
      }

      function restartAutoplay() {
        stopAutoplay()
        startAutoplay()
      }

      if (itemCount > 0) {
        updateCarousel()
        startAutoplay()
        carousel.addEventListener('mouseenter', stopAutoplay)
        carousel.addEventListener('mouseleave', startAutoplay)
        window.addEventListener('resize', function () {
          updateCarousel(false)
        })
      }
    })

    /**
     *  Smooth Scrolling for Links
     **/
    $('a[href*="#"]:not([href="#"])').on('click', function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          )
          return false
        }
      }
    })
  })
})(window.jQuery, window, document)
// The global jQuery object is passed as a parameter
