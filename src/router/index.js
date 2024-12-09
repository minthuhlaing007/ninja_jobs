import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import NotFound from "@/views/NotFound.vue";
import Job from "@/views/jobs/Job.vue";
import JobDetail from "@/views/jobs/JobDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/job",
    name: "job",
    component: Job,
  },
  {
    path: "/job/:id",
    name: "jobdetail",
    component: JobDetail,
    props: true,
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: "/job",
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
