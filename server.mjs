import cors from "@koa/cors";
import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

app.use(cors({ origin: "*" }));

const user = { email: "john@example.com" };

router.get("/user", (ctx, next) => {
  ctx.body = user;
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = +process.argv[2] || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
