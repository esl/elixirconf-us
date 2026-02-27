/**
 * Main JavaScript (Vanilla)
 */

document.addEventListener('DOMContentLoaded', function () {

  /**
   * Page Loader
   */
  setTimeout(function () {
    var loader = document.querySelector('.page-loader')
    if (loader) loader.classList.add('load-complete')
  }, 1500)

  /**
   * Header background on scroll
   */
  var header = document.querySelector('.navbar-fixed-top')
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 300) {
        header.classList.add('navbar-shrink')
      } else {
        header.classList.remove('navbar-shrink')
      }
    })
  }

  /**
   * Main Menu Navigation
   */
  var body = document.body
  var navMenu = document.querySelector('.navigation-bar')
  var navLinks = document.querySelectorAll('#navMenu ul li a')
  var toggleButton = document.querySelector('.navTrigger')

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Update current menu item
      navLinks.forEach(function (l) {
        l.parentElement.classList.remove('current-menu-item')
      })
      this.parentElement.classList.add('current-menu-item')

      // Close mobile menu
      if (navMenu) navMenu.classList.remove('active')
      if (toggleButton) toggleButton.classList.remove('active')
      body.classList.remove('no-scroll')
    })
  })

  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      if (navMenu) navMenu.classList.toggle('active')
      body.classList.toggle('no-scroll')
      this.classList.toggle('active')
    })
  }

  window.addEventListener('resize', function () {
    if (navMenu) navMenu.classList.remove('active')
    body.classList.remove('no-scroll')
    if (toggleButton) toggleButton.classList.remove('active')
  })

  /**
   * Testimonials Carousel
   */
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

      setTimeout(function () {
        if (currentIndex >= itemCount) {
          currentIndex = 0
          updateCarousel(false)
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
   * Smooth Scrolling for Anchor Links
   */
  function smoothScrollTo(targetPosition, duration) {
    var startPosition = window.scrollY
    var distance = targetPosition - startPosition
    var startTime = null

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime
      var elapsed = currentTime - startTime
      var progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      var ease = 1 - Math.pow(1 - progress, 3)

      window.scrollTo(0, startPosition + distance * ease)

      if (elapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1)
      if (!targetId) return

      var target = document.getElementById(targetId)
      if (target) {
        e.preventDefault()
        var headerOffset = 60
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset

        smoothScrollTo(targetPosition, 800)
      }
    })
  })

})
