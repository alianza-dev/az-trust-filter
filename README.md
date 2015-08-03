# az-trust-filter

Status:
[![npm version](https://img.shields.io/npm/v/az-trust-filter.svg?style=flat-square)](https://www.npmjs.org/package/az-trust-filter)
[![npm downloads](https://img.shields.io/npm/dm/az-trust-filter.svg?style=flat-square)](http://npm-stat.com/charts.html?package=az-trust-filter&from=2015-06-01)
[![Build Status](https://snap-ci.com/alianza-dev/az-trust-filter/branch/master/build_image)](https://snap-ci.com/alianza-dev/az-trust-filter/branch/master)
[![Code Coverage](https://img.shields.io/codecov/c/github/alianza-dev/az-trust-filter.svg?style=flat-square)](https://codecov.io/github/alianza-dev/az-trust-filter)

az-trust-filter is an AngularJS module which has a directive to help customize and render JavaScript/JSON configured forms.
The `formly-form` directive and the `formlyConfig` service are very powerful and bring unmatched maintainability to your
application's forms.

[Demo](https://jsbin.com/qozude/edit?html,js,console,output)

## Installation

```
npm install -S az-trust-filter
```

## Usage:

Depend on the module

```javascript
angular.module('yourModule', ['azTrustFilter']);
```

Use it

```html
<strong>Arbitrary HTML</strong>
<div>
  <input ng-model="userHtml" placeholder="Type at your own risk!" />
</div>
<div ng-bind-html="userHtml | trust"></div>

<hr />

<strong>Custom trust type</strong>
<div>
  <input ng-model="userUrl" type="url"  placeholder="Type a url" />
</div>
<div ng-bind-html="userUrl | trust:'url'"></div>
```

## LICENSE

MIT

## Code of Conduct

[Contributor Covenant](http://contributor-covenant.org)

## Credits

The code for this filter was taken ([with permission](https://twitter.com/kentcdodds/status/628245089962209280))
from [Eric Clemmons](http://ericclemmons.com/)'s post:
[Angular Trust Filter](http://ericclemmons.com/angular/angular-trust-filter/)
