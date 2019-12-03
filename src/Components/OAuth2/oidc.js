import Oidc from "oidc-client";
import { settings } from "../../settings";

function display(data) {
  if (data && typeof data === "string") {
    data = JSON.parse(data);
  }
  if (data) {
    data = JSON.stringify(data, null, 2);
  }

  console.log(data);
}

const manager = new Oidc.UserManager(settings);
let user;

Oidc.Log.logger = console;

manager.events.addUserLoaded(function(loadedUser) {
  user = loadedUser;
  console.log(".js-user", user);
});
manager.events.addSilentRenewError(function(error) {
  console.error("error while renewing the access token", error);
});
manager.events.addUserSignedOut(function() {
  alert("The user has signed out");
});

export default manager;
