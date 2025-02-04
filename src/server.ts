const server = Bun.serve({
    port:3000,
    fetch(request) {
        return new Response("Bienvenido a Bun!!!!")
    }
});
console.log(`Esta corriendo el puerto: ${server.port}`)
