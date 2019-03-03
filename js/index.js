 //DOM load event
window.addEventListener("DOMContentLoaded", function () {

    var spotlight = document.querySelector('.spotlight');

    var spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

    window.addEventListener('mousemove', function (e) {return updateSpotlight(e);});

    window.addEventListener('mousedown', function (e) {

        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', function (e) {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = 'radial-gradient(circle at ' + e.pageX / window.innerWidth * 100 + '% ' + e.pageY / window.innerHeight * 100 + '%, ' + spotlightSize;

    }
});