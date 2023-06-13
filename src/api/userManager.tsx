import { UserManager, WebStorageStateStore } from 'oidc-client-ts';
import window from "@react-navigation/native/lib/typescript/src/__mocks__/window";

export const login = async () => {
  await userManager.signinRedirect();
};

export const logout = async () => {
  await userManager.signoutRedirect();
};

export const userManager = new UserManager({
  client_id: 'admin_client',
  authority: 'https://dev.h2.profbg.ru',
  scope: 'openid offline_access public_api',
  redirect_uri: 'http://localhost:3005/callback',
  response_type: 'code',
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});
