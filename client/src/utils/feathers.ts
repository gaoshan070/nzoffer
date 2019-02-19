// @ts-ignore
import feathers from '@feathersjs/client';
// @ts-ignore
import auth from '@feathersjs/authentication-client';

const app = feathers();
const restClient = feathers.rest();

app.configure(restClient.fetch(window.fetch));
app.configure(
  auth({
    path: '/api/authentication', // the server-side authentication service path
    jwtStrategy: ['jwt', 'local'], // the name of the JWT authentication strategy

    entity: 'user', // the entity you are authenticating (ie. a users)

    service: 'api/user', // the service to look up the entity

    storageKey: 'offer111-jwt', // the key to store the accessToken in localstorage or AsyncStorage on React Native
    storage: window.localStorage, // Passing a WebStorage-compatible object to enable automatic storage on the client.
  }),
);

// Connect to the `http://feathers-api.com/messages` service
// const messages = app.service('messages');

export const regFromChatService = app.service('api/reg-from-chat');
export const userService = app.service('api/user');
export const universityService = app.service('api/university');

export { app as feathersApp };
