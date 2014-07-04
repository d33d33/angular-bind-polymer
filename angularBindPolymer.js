/**
 * Copyright (c) 2014 d33d33. All rights reserved.
 * This code may only be used under the MIT style license found at https://raw.github.com/D33D33/angular-bind-polymer/master/LICENSE
**/

angular.module( 'd33d33.bindPolymer', [] ).
  directive( 'bindPolymer', function()
  {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var attrMap = {};

        for(var prop in attrs.$attr) {
          if (prop != 'bindPolymer' && attrs.$attr.hasOwnProperty(prop)) {
            var valueAttr = element.attr(prop);
            if (valueAttr) {
              var _match = valueAttr.match(/\{\{\s*([A-Za-z0-9_\.]+)\s*\}\}/);
              if (_match) {
                if (prop == 'inputvalue') {
                  prop = 'inputValue';
                }
                attrMap[prop] = _match[1];
              }
            }
          }
        }

        var update = function(e)
        {
          scope.$apply(function() {
            for(var prop in attrMap) {
              if(attrMap.hasOwnProperty(prop)) {
                var val = scope,
                  props = attrMap[prop].split('.'),
                  level = props.length - 1;
                
                for(var i = 0; i < level; i++) {
                  val = val[props[i]];
                }
                val[props[level]] = e.target[prop];
              }
            }
          });
        };
        element.on('input', update);
        element.on('change', update);
      }
    }
  });
