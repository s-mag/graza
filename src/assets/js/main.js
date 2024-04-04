
// QUANTITY
var productQuantityRadios = document.querySelectorAll('.product-quantity-radio');
if (productQuantityRadios.length !== 0) {
    productQuantityRadios.forEach(function(radio) {
        var parent = radio.parentNode;
        if (radio.checked) {
            parent.classList.add('bg-accent');
            parent.classList.remove('bg-transparent');
            parent.classList.remove('lg:hover:bg-background');
        } else {
            parent.classList.remove('bg-accent');
            parent.classList.add('bg-transparent');
            parent.classList.add('lg:hover:bg-background');
        }
    });

    productQuantityRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            var radioGroup = this.parentNode.parentNode.querySelectorAll('.product-quantity-item');
            var parent = this.parentNode;
            radioGroup.forEach(function(radioItem) {
                radioItem.classList.remove('bg-accent');
                radioItem.classList.add('bg-transparent');
                radioItem.classList.add('lg:hover:bg-background');
            });
            parent.classList.add('bg-accent');
            parent.classList.remove('bg-transparent');
            parent.classList.remove('lg:hover:bg-background');
        });
    });
}


// Subscription
var productSubscriptionRadios = document.querySelectorAll('.product-subscription-radio');
if (productSubscriptionRadios.length !== 0) {
    var subscribeMonths = document.querySelector('.subscribe-months');
    var oneTimeContent = document.querySelector('.one-time-content');
    var subscriptionContent = document.querySelector('.subscription-content');
    var addToCart = document.querySelector('.add-to-cart');
    var subscription = document.querySelector('.product-subscription-radio#subscription');

    function handleSubscriptionChange() {
        if (subscription.checked) {
            subscribeMonths.style.display = 'block';
            oneTimeContent.style.display = 'none';
            subscriptionContent.style.display = 'block';
            addToCart.setAttribute('data-content', 'Subscribe – $33.30');
        } else {
            subscribeMonths.style.display = 'none';
            oneTimeContent.style.display = 'block';
            subscriptionContent.style.display = 'none';
            addToCart.setAttribute('data-content', 'Add to Cart – $199');
        }
    }

    handleSubscriptionChange(); // Initial setup

    productSubscriptionRadios.forEach(function(radio) {
        radio.addEventListener('change', handleSubscriptionChange);
    });
}


// frequency
var frequencyDropdown = document.querySelector('#frequency');
if (frequencyDropdown) {
    var frequency = frequencyDropdown.value;
    var text = frequencyDropdown.options[frequencyDropdown.selectedIndex].text;
    var frequencyCurrentValue = document.querySelector('.frequency-current-value');
    var frequencyDropdownItems = document.querySelectorAll('.frequency-dropdown-item');

    frequencyCurrentValue.innerHTML = text;
    frequencyDropdownItems.forEach(function(item) {
        var dataMonth = item.getAttribute('data-month');
        if (dataMonth === frequency) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });

    document.querySelectorAll('.custom-select').forEach(function(select) {
        select.addEventListener('click', function() {
            this.classList.toggle('h-8');
            this.classList.toggle('h-24');
        });
    });

    document.querySelectorAll('.frequency-dropdown-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var selectValue = this.getAttribute('data-month');
            var text = this.querySelector('.frequency-dropdown-value').textContent;
            frequencyCurrentValue.textContent = text;
            frequencyDropdownItems.forEach(function(item) {
                var dataMonth = item.getAttribute('data-month');
                if (dataMonth === selectValue) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            });
            frequencyDropdown.value = selectValue;
        });
    });
}


//Tab
document.querySelectorAll('.nav-tab-item').forEach(function(item) {
    item.addEventListener('click', function() {
        var obj = this;
        var target = obj.getAttribute('data-target');
        var tabItem = obj.parentNode.querySelectorAll('.nav-tab-item');
        var tabContentTarget = document.querySelector('.nav-tab-content-item[id="' + target + '"]');
        var tabContent = tabContentTarget.parentNode.querySelectorAll('.nav-tab-content-item');

        tabContent.forEach(function(content) {
            content.classList.remove('active');
        });
        tabContentTarget.classList.add('active');

        tabItem.forEach(function(item) {
            item.classList.remove('h-9', 'bg-text', 'text-background');
            item.classList.add('bg-transparent', 'h-8', 'lg:hover:bg-highlight', 'text-text');
        });

        obj.classList.remove('bg-transparent', 'h-8', 'lg:hover:bg-highlight', 'text-text');
        obj.classList.add('h-9', 'bg-text', 'text-background');
    });
});


const productGalleryNav = new Swiper('.product-gallery-nav', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    height: 70,
    sticky: true,
    slidesPerView: 1

});
const productGallerySlider = new Swiper('.product-gallery-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.product-gallery-pagination',
      clickable: true,
    },
    thumbs: {
        swiper: productGalleryNav,
    },
});
