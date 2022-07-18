<script>
const WEATHER_CLASS_MAP = {
  Clear: "bg-clear-weather",
  Sunny: "bg-sunny-weather",
  Cloudy: "bg-cloudy-weather",
  Clouds: "bg-cloudy-weather",
  Drizzle: "bg-rain-weather",
  Haze: "bg-rain-weather",
  Rainy: "bg-rain-weather",
  Raining: "bg-rain-weather",
  Snowing: "bg-snow-weather",
  Snowing: "bg-snow-weather",
};
</script>

<script setup>
import { computed, ref } from "vue";
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();
let notFound = ref("");

const weatherStatusString = computed(() => weatherStore?.weather?.weather?.[0]?.main);

const defineWeatherByEachCountry = computed(() => {
  if (
    weatherStatusString.value &&
    WEATHER_CLASS_MAP.hasOwnProperty(weatherStatusString.value)
  ) {
    return WEATHER_CLASS_MAP[weatherStatusString.value];
  }

  return "bg-sky";
});

const onEnter = async () => {
  try {
    notFound.value = "";
    await weatherStore.fetchWeather();
  } catch (e) {
    if (e.cod === "404") {
      notFound.value = "Not found, please try again";
    }
    console.dir(e);
  }
};
</script>

<template>
  <div
    class="wrapper max-w-xl mx-auto bg-cover bg-bottom"
    :class="defineWeatherByEachCountry"
  >
    <div class="main min-h-screen p-6">
      <input
        type="text"
        class="search-bar p-3 rounded-[4px] text-lg w-full outline-none opacity-80 focus-within:opacity-100"
        placeholder="Type a country"
        v-model="weatherStore.query"
        @keypress.enter.prevent="onEnter"
      />

      <div v-if="weatherStore.loading" class="loader mt-5"></div>
      <div v-if="weatherStore.isNotActive" class="mt-5">
        <h1 class="text-[20px] text-white">
          Please, type a country by search input above!
        </h1>
      </div>
      <h1 class="text-[20px] text-white mt-5">{{ notFound }}</h1>
      <div
        class="weather-wrap mt-5"
        v-if="typeof weatherStore.weather.main != 'undefined'"
      >
        <div class="location-box">
          <div class="location">
            {{ weatherStore.weather.name }}, {{ weatherStore.weather.sys.country }}
          </div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weatherStore.weather.main.temp) }}°c</div>
          <div class="weather">{{ weatherStore.weather.weather[0].main }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
