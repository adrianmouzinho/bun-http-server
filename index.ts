import figlet from 'figlet';

const server = Bun.serve({
  port: 3333,
  fetch() {
    const body = figlet.textSync('Hello World!');
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
