$(document).ready(function() {
    function showSlide(achievements) {
        // Remove active class from all achievements and add to the specified one
        $('.achievements').removeClass('active');
        $('.num').removeClass('active');
        $('.achievements[data-achievements="' + achievements + '"]').addClass('active');
        $('.achievements[data-achievements="' + achievements + '"] .num').addClass('active');

        // Show the corresponding slide
        $('.slide').removeClass('active');
        $('.slide[data-achievements="' + achievements + '"]').addClass('active');
    }

    // Handle manual click
    $('.achievements').on('click', function() {
        var achievements = $(this).data('achievements');
        currentIndex = achievementss.indexOf(achievements);
        showSlide(achievements);
        resetAutoSlide();
    });

    // Auto slide functionality
    var achievementss = $('.achievements').map(function() {
        return $(this).data('achievements');
    }).get();
    
    var currentIndex = achievementss.indexOf(1);
    var direction = 1;
    var autoSlideInterval = setInterval(function() {
        currentIndex += direction;
        if (currentIndex >= achievementss.length) {
            currentIndex = achievementss.length - 1;
            direction = -1;
        } else if (currentIndex < 0) {
            currentIndex = 0;
            direction = 1;
        }
        showSlide(achievementss[currentIndex]);
    }, 3000);

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(function() {
            currentIndex += direction;
            if (currentIndex >= achievementss.length) {
                currentIndex = achievementss.length - 1;
                direction = -1;
            } else if (currentIndex < 0) {
                currentIndex = 0;
                direction = 1;
            }
            showSlide(achievementss[currentIndex]);
        }, 3000);
    }
});
