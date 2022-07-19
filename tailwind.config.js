module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clear-weather': "url('../src/assets/img/clear.jpg')",
        'sunny-weather': "url('../src/assets/img/sunny.jpg')",
        'cloudy-weather': "url('../src/assets/img/cloudy.jpg')",
        'rain-weather': "url('../src/assets/img/rain.jpg')",
        'snow-weather': "url('../src/assets/img/snow.jpg')",
        'sky': "url('../src/assets/img/sky.jpg')",
      }
    },
  },
  plugins: [],
}