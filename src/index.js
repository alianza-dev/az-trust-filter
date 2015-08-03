import angular from 'angular';
const ngModuleName = 'azTrustFilter';
const ngModule = angular.module(ngModuleName, ['ngSanitize']);

export default ngModule
  .filter('trust', trustFunction)
  .name; // <-- exporting the module name

function trustFunction($sce) {
  return trust;

  function trust(value, type) {
    if (value) {
      return $sce.trustAs(type || 'html', value);
    } else {
      return value;
    }
  }
}
