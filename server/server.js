const Rayconnect = require("rayconnect-client").default;
const permissions = require("./permissions");
const miapp = new Rayconnect(
  {
    scopes: process.env.APP_SCOPES,
    space: "main",
    appID: process.env.APP_ID,
    type: "micros",
  },
  undefined,
  true
);

miapp.OnConnect(async () => {
  const user = await miapp.GetUserAccess({
    username: process.env.APP_USERNAME,
    password: process.env.APP_PASSWORD,
  });

  console.log("connected to rayconnect server :)");

  // load permissions
  permissions.forEach(async (element) => {
    await miapp.changePermissions(element);
  });
});

miapp.Query(
  {
    scope: "messages",
    address: "messages/subscribe",
    method: "SUBSCRIBE",
  },
  (data) => {
    console.log(data.token);
  }
);
