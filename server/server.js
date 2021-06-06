const Rayconnect = require("rayconnect-client").default;
const permissions = require("./permissions");
const app = new Rayconnect(
  {
    scopes: process.env.APP_SCOPES,
    space: "main",
    appID: process.env.APP_ID,
    type: "micros",
  },
  undefined,
  true
);

app.OnConnect(async () => {
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

app.Query(
  {
    scope: "messages",
    address: "messages/subscribe",
    method: "POST",
  },
  (data) => {
    
    data.send({
       message:"hello world"
    })
    
  }
);
