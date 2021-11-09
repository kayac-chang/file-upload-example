import "https://cdn.jsdelivr.net/npm/miragejs@0.1.42/dist/mirage-umd.js";

const { createServer } = MirageJS.Server;

createServer({
  routes() {
    this.post("/upload", (schema, request) => {
      const formData = request.requestBody;

      const data = Object.fromEntries(formData.entries());

      console.log(data);
    });
  },
});
