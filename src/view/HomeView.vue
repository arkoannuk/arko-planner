<template>
  <main>
    <h1 class="mt-4">Projects</h1>

    <FilterNav @filterChange="(current = $event), filterView" :current="current" />

    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          @delete="handleDelete"
          @complete="handleComplete"
          :project="project"
        ></SingleProject>
      </div>
    </div>
    <div v-else>
      <p>Loading Projects</p>
    </div>
  </main>
</template>

<script>
import SingleProject from "../components/SingleProject.vue"
import FilterNav from "../components/FilterNav.vue"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all"
    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err))
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.complete)
      } else if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete)
      }
      return this.projects
    }
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    handleComplete(id) {
      let p = this.projects.find((project) => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  }
}
</script>
