<script setup>
defineProps({
  label: String,
  name: String,
  type: {
    type: String,
    default: 'text',
  },
  modelValue: String,
  placeholder: String,
  error: String,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="name" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="[
        'rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
      ]"
    />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
