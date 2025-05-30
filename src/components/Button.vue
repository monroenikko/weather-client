<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  disabled: Boolean,
})

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400',
}[props.variant]
</script>

<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none',
      variantClasses,
      disabled && 'cursor-not-allowed opacity-50',
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
