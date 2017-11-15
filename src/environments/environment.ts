// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hostUrl: 'http://test.pnpsw.com',
  firebase: {
    apiKey: 'AIzaSyDAJ8Iv0ujpNF8ibRpmnp5_xf3Ft7ARjR4',
    authDomain: 'ngweb-3883a.firebaseapp.com',
    databaseURL: 'https://ngweb-3883a.firebaseio.com',
    projectId: 'ngweb-3883a',
    storageBucket: 'ngweb-3883a.appspot.com',
    messagingSenderId: '326497805723'
  }
};
