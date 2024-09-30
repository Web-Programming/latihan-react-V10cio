import React from "react";
const Home = React.lazy(()=> import("./hello"));
const Product = React.lazy(()=> import("./product"));
const Register = React.lazy(()=> import("./Registrasi"));

const routes = [
    {path: "/", Component : Home},
    {path: "/product", Component : Product},
    {path: "/register", Component : Register},
];

export default routes;
