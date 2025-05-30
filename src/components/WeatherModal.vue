<script setup>
import Button from './Button.vue'

defineProps({
  weather: Array | Object,
  title: {
    type: String,
    default: 'Title',
  },
})
const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}
</script>
<template>
  <div
    v-if="weather"
    class="fixed inset-0 z-50 flex items-center justify-center shadow-md bg-opacity-50 bg-black"
  >
    <div class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl shadow-lg shadow-gray-500">
      <h2 class="mb-4 text-lg font-semibold text-center">
        {{ title }}
      </h2>

      <p class="font-bold mt-3 mb-3">
        {{ weather.name }}: {{ weather.weather[0].main }} - {{ weather.main.temp }}°C
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-100 p-4 rounded-lg shadow mb-3">
        <div class="p-4">
          <p>Condition: {{ weather.weather[0].description }}</p>
          <p>Humidity: {{ weather.main.humidity }}%</p>
          <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
        </div>

        <div class="p-4">
          <img
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
            :alt="weather.weather[0].description"
          />
        </div>
      </div>

      <div class="flex justify-end">
        <Button @click="closeModal" type="button" variant="danger"> Close </Button>
      </div>
    </div>
  </div>
</template>
