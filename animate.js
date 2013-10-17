angular.module('ngAnimate-animate.css', ['ngAnimate'])

  .factory('animateCSSBuild', ['-animation','$timeout', function(css3Animation, $timeout) {
    return function(baseClass, classNames) {
      if(arguments.length == 3) {
        var a = classNames;
        var b = arguments[2];
        classNames = {
          enter : a,
          move : a,
          leave : b,
          show : a,
          hide : b,
          addClass : a,
          removeClass : b
        };
      }
      var animateCSSStart = function(element, className) {
        element.addClass(className);
        element.addClass('animated');
      };
      var animateCSSEnd = function(element, className, done) {
        return function() {
          element.removeClass(className);
          element.removeClass('animated');
          done();
        }
      };
      return {
        enter : function(element, done) {
          animateCSSStart(element, classNames.enter);
          return animateCSSEnd(element, classNames.enter, css3Animation.enter(element, done));
        },
        leave : function(element, done) {
          animateCSSStart(element, classNames.leave);
          return animateCSSEnd(element, classNames.leave, css3Animation.leave(element, done));
        },
        move : function(element, done) {
          animateCSSStart(element, classNames.move);
          return animateCSSEnd(element, classNames.move, css3Animation.move(element, done));
        },
        addClass : function(element, className, done) {
          var klass = className == 'hide' && classNames.hide ?
            classNames.hide :
            angular.isFunction(classNames.addClass) ?
              (angular.noop || classNames.addClass(className)) :
              classNames.addClass;
          if(className == baseClass) {
            animateCSSStart(element, klass);
            return animateCSSEnd(element, klass, css3Animation.addClass(element, klass, done));
          }
          else {
            done();
          }
        },
        removeClass : function(element, className, done) {
          var klass = className == 'hide' && classNames.show ?
            classNames.show :
            angular.isFunction(classNames.removeClass) ?
              (angular.noop || classNames.removeClass(className)) :
              classNames.removeClass;
          if(className == baseClass) {
            animateCSSStart(element, klass);
            return animateCSSEnd(element, klass, css3Animation.removeClass(element, klass, done));
          }
          else {
            done();
          }
        }
      }
    };
  }])


  //
  // Flip Animations
  //
  .animation('.dn-flip-x', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-flip-x','flipInX','flipOutX');
  }])

  .animation('.dn-flip-y', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-flip-y','flipInY','flipOutY');
  }])

  //
  // Fade Animations
  //
  .animation('.dn-fade', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade','fadeIn','fadeOut');
  }])

  .animation('.dn-fade-up', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-up','fadeInUp','fadeOutUp');
  }])

  .animation('.dn-fade-down', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-down','fadeInDown','fadeOutDown');
  }])

  .animation('.dn-fade-left', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-left','fadeInLeft','fadeOutLeft');
  }])

  .animation('.dn-fade-right', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-right','fadeInRight','fadeOutRight');
  }])

  .animation('.dn-fade-up-big', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-up-big','fadeInUpBig','fadeOutUpBig');
  }])

  .animation('.dn-fade-down-big', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-down-big','fadeInDownBig','fadeOutDownBig');
  }])

  .animation('.dn-fade-left-big', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-left-big','fadeInLeftBig','fadeOutLeftBig');
  }])

  .animation('.dn-fade-right-big', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-fade-right-big','fadeInRightBig','fadeOutRightBig');
  }])


  //
  // Bounce Animations
  //
  .animation('.dn-bounce', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-bounce','bounceIn','bounceOut');
  }])

  .animation('.dn-bounce-up', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-bounce-up','bounceInUp','bounceOutUp');
  }])

  .animation('.dn-bounce-down', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-bounce-down','bounceInDown','bounceOutDown');
  }])

  .animation('.dn-bounce-left', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-bounce-left','bounceInLeft','bounceOutLeft');
  }])

  .animation('.dn-bounce-right', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-bounce-right','bounceInRight','bounceOutRight');
  }])

  //
  // Rotate Animations
  //
  .animation('.dn-rotate', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-rotate','rotateIn','rotateOut');
  }])

  .animation('.dn-rotate-up-left', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-rotate-up-left','rotateInUpLeft','rotateOutUpLeft');
  }])

  .animation('.dn-rotate-down-left', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-rotate-down-left','rotateInDownLeft','rotateOutDownLeft');
  }])

  .animation('.dn-rotate-up-right', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-rotate-up-right','rotateInUpRight','rotateOutUpRight');
  }])

  .animation('.dn-rotate-down-right', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-rotate-down-right','rotateInDownRight','rotateOutDownRight');
  }])

  //
  // Other Animations
  //
  .animation('.dn-lightspeed', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-lightspeed','lightSpeedIn','lightSpeedOut');
  }])

  .animation('.dn-roll', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-roll','rollIn','rollOut');
  }])

  .animation('.dn-hinge', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('dn-hinge','fadeIn','hinge');
  }])
