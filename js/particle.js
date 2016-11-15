// Limit particles to only work on tablet or bigger
if (window.innerWidth > 768) {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
}
