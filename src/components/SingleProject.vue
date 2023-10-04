<template>
  <div class="card my-3 bg-light text-start">
    <div class="card-body">
      <h5 @click="showDetails = !showDetails" class="card-title">{{ project.title }}</h5>
      <p v-show="showDetails" class="mb-0">{{ project.details }}</p>
    </div>

    <div class="card-footer p-1 px-2" :class="{ 'bg-success-subtle': project.complete }">
      <div class="hstack gap-2">
        <input
          @click="toggleComplete"
          class="form-check-input my-0 todoStatusBtn"
          type="checkbox"
          value=""
          :checked="project.complete"
        />
        <label class="form-check-label">Done</label>

        <RouterLink class="ms-auto" :to="{ name: 'EditProject', params: { id: project.id } }">
          <button type="button" class="btn btn-primary btn-sm todoEditBtn">
            <i class="bi bi-pencil-fill text-white stroke-2"></i>
          </button>
        </RouterLink>

        <button @click="deleteProject" type="button" class="btn btn-danger btn-sm">
          <i class="bi bi-trash-fill text-white stroke-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id
    }
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err))
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete })
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err))
    },
    editProject() {}
  }
}
</script>
