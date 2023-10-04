<template>
  <div class="hstack mt-3">
    <div class="mx-auto">
      <button
        @click="updateFilter('all')"
        class="btn btn-sm mx-2"
        :class="{
          'btn-secondary': current === 'all',
          'btn-outline-secondary': current !== 'all'
        }"
        :disabled="current === 'all'"
      >
        VIEW ALL
      </button>
      <button
        @click="updateFilter('completed')"
        class="btn btn-sm mx-2"
        :class="{
          'btn-secondary': current === 'completed',
          'btn-outline-secondary': current !== 'completed'
        }"
        :disabled="current === 'completed'"
      >
        COMPLETED
      </button>
      <button
        @click="updateFilter('ongoing')"
        class="btn btn-sm mx-2"
        :class="{
          'btn-secondary': current === 'ongoing',
          'btn-outline-secondary': current !== 'ongoing'
        }"
        :disabled="current === 'ongoing'"
      >
        ONGOING
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by)
    }
  }
}
</script>
