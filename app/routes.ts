import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./", [
    index("routes/home.tsx"),
    route("courses", "routes/courses.tsx"),
    route("courses/:courseId", "routes/course.tsx")
  ])
] satisfies RouteConfig;
