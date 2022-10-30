const { generate } = require("cjp")
const fastify = require("fastify")({
  logger: true,
});

fastify.get("/cjp", async (request, reply) => {
  console.log(request.query.jp)
  reply.send(generate(request.query.jp));
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
