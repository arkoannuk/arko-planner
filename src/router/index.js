import { createRouter, createWebHistory } from "vue-router"
import Home from "../view/HomeView.vue"
import NotFound from "../view/NotFound.vue"
import Add from "../view/AddProjectView.vue"
import EditProjectView from "../view/EditProjectView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/add",
      name: "AddProject",
      component: Add
    },
    {
      path: "/projects/:id",
      name: "EditProject",
      component: EditProjectView,
      props: true
    },
    // catchall 404
    {
      path: "/:catchAll(.*)",
      component: NotFound
    }
  ]
})

export default router
