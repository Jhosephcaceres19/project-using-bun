import { Hono } from "hono";
const app = new Hono()

app.get("/hello", c =>{
    return c.json({message: "hola mundo de holo"})
})

export default app;
