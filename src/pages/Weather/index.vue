<script setup>
import { ref, computed } from 'vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/WeatherModal.vue'
import { locationService } from '@/services/location/location.service'
import { weatherService } from '@/services/weather/weather.service'

const form = ref({
  location: '',
})

const errors = ref({
  location: '',
})

const weather = ref(null)
const loading = ref(false)
const error = ref(null)

const handleSubmit = async () => {
  error.value = null
  errors.value.location = ''

  if (!form.value.location.trim()) {
    errors.value.location = 'Location is required'
    return
  }

  loading.value = true

  try {
    const location = await locationService.getLocation(form.value.location)
    const { lat, lon } = location.data.features[0]?.properties || {}

    if (!lat || !lon) throw new Error('Location not found')

    const res = await weatherService.getWeather(lon, lat)
    weather.value = res.data
  } catch (err) {
    error.value = 'Could not fetch weather. Please try again.'
    weather.value = null
  } finally {
    loading.value = false
  }
}

function handleModalClose() {
  weather.value = null
}
</script>

<template>
  <div
    class="max-w-md mx-auto mt-10 border border-gray-200 bg-white p-6 shadow-lg light:bg-gray-900 light:border-gray-800 md:px-30"
  >
    <h2 class="mb-4 text-xl font-semibold text-gray-800 light:text-gray-100 text-center">
      Weather App Exam
    </h2>

    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <Input
          label="Location"
          name="location"
          v-model="form.location"
          :error="errors.location"
          placeholder="Your location"
        />

        <Button type="submit" class="w-full" :disabled="loading">
          {{ loading ? 'Loading...' : 'Submit' }}
        </Button>
      </div>
    </form>

    <!-- Error Message -->
    <p v-if="error" class="mt-4 text-center text-red-500">{{ error }}</p>

    <!-- Modal -->
    <Modal v-if="weather" :weather="weather" title="Weather Result" @close="handleModalClose" />
  </div>
</template>
