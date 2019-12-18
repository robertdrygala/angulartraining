// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  angular_course_api_gateway: 'https://g3odpxbuo9.execute-api.eu-central-1.amazonaws.com/prod_angular/crud',
  angular_course_api_gateway_create: 'https://g3odpxbuo9.execute-api.eu-central-1.amazonaws.com/prod_angular/create',
  angular_course_api_gateway_update: 'https://g3odpxbuo9.execute-api.eu-central-1.amazonaws.com/prod_angular/update',
  angular_course_api_gateway_query: 'https://g3odpxbuo9.execute-api.eu-central-1.amazonaws.com/prod_angular/query',
  angular_course_api_gateway_auth: 'https://g3odpxbuo9.execute-api.eu-central-1.amazonaws.com/prod_angular/auth',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
