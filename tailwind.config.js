module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clear-weather': "url('./src/assets/clear.jpg')",
        'sunny-weather': "url('./src/assets/sunny.jpg')",
        'cloudy-weather': "url('./src/assets/cloudy.jpg')",
        'rain-weather': "url('./src/assets/rain.jpg')",
        'snow-weather': "url('./src/assets/snow.jpg')",
        'sky': "url('./src/assets/sky.jpg')",
      }
    },
  },
  plugins: [],
}