import { defineStore } from 'pinia'

export const useWeatherStore = defineStore({
  id: 'weatherStore',
  state: () => ({
    API_KEY: 'ba59641e9a64cdd35a34e230c7e31b69',
    URL_BASE: 'https://api.openweathermap.org/data/2.5/',
    weather: {},
    query: '',
    isNotActive: true,
    loading: false
  }),
  getters: {

  },
  actions: {
    async fetchWeather() {
      this.isNotActive = false
      this.loading = true;
      const response = await fetch(`${this.URL_BASE}weather?q=${this.query}&units=metric&APPID=${this.API_KEY}`);
      const data = await response.json();

      if (!response.ok) {
        this.loading = false;
        throw data;
      }

      this.weather = data;
      this.loading = false;
    }
  }
})
