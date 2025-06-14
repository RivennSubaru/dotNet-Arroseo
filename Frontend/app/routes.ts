import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout("routes/layout.tsx", [
    route("home", "routes/home.tsx"),
    route("edit/:id", "routes/Edit.tsx"),
    route("add", "routes/Add.tsx"),
])] satisfies RouteConfig;
