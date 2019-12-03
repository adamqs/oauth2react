export const apiBaseUrl = "http://Kima:56777/CirqaApi";
export const apiVersion = "v5-5";
const identityBaseUrl = "http://Kima:56778/CirqaIdentity/connect/authorize";

export const settings = {
  authority: identityBaseUrl,
  client_id: "matt",
  redirect_uri: "http://localhost:58658/popup.html",
  response_type: "id_token token",
  scope: "openid profile cirqa",
  accessTokenExpiringNotificationTime: 4
  // automaticSilentRenew: true,
  // post_logout_redirect_uri: "http://localhost:58658/index.html",
  // silent_redirect_uri: "http://localhost:58658/silent-renew.html",
  // popup_redirect_uri: "http://localhost:58658/popup.html",
  // acr_values: "login_hint:R0009",
  // filterProtocolClaims: true
};

// before running npm start
//export port=58658
