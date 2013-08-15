angular.module('ngAnimate-animate.css', ['ngAnimate'])

  .factory('animateCSSBuild', ['$timeout', function($timeout) {
    return function(baseClass, classNames) {
      if(arguments.length == 3) {
        var a = classNames;
        var b = arguments[2];
        classNames = {
          enter : a,
          leave : b,
          show : a,
          hide : b,
          addClass : a,
          removeClass : b
        };
      }
      var animateCSSStart = function(element, className, delay, done) {
        element.addClass(className);
        element.addClass('animated');
        $timeout(done, delay || 2000, false);
      };
      var animateCSSEnd = function(element, className) {
        return function(cancelled) {
          element.removeClass(className);
          element.removeClass('animated');
        };
      };
      return {
        enter : function(element, done) {
          animateCSSStart(element, classNames.enter, classNames.delay, done);
          return animateCSSEnd(element, classNames.enter);
        },
        leave : function(element, done) {
          animateCSSStart(element, classNames.leave, classNames.delay, done);
          return animateCSSEnd(element, classNames.leave);
        },
        move : function(element, done) {
          animateCSSStart(element, classNames.move, classNames.delay, done);
          return animateCSSEnd(element, classNames.move);
        },
        addClass : function(element, className, done) {
          var klass = className == 'hide' && classNames.hide ?
            classNames.hide :
            angular.isFunction(classNames.addClass) ?
              (angular.noop || classNames.addClass(className)) :
              classNames.addClass;
          if(className == baseClass) {
            animateCSSStart(element, klass, classNames.delay, done);
            return animateCSSEnd(element, klass);
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
            animateCSSStart(element, klass, classNames.delay, done);
            return animateCSSEnd(element, klass);
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
  .animation('.flip-x', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('flip-x','flipInX','flipOutX');
  }])

  .animation('.flip-y', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('flip-y','flipInY','flipOutY');
  }])

  //
  // Fade Animations
  //
  .animation('.fade', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('fade','fadeIn','fadeOut');
  }])

  .animation('.fade-up', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('fade-up','fadeInUp','fadeOutUp');
  }])

  .animation('.fade-down', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('fade-down','fadeInDown','fadeOutDown');
  }])

  .animation('.fade-left', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('fade-left','fadeInLeft','fadeOutLeft');
  }])

  .animation('.fade-right', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('fade-right','fadeInRight','fadeOutRight');
  }])


  //
  // Bounce Animations
  //
  .animation('.bounce', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('bounce','bounceIn','bounceOut');
  }])

  .animation('.bounce-up', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('bounce-up','bounceInUp','bounceOutUp');
  }])

  .animation('.bounce-down', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('bounce-down','bounceInDown','bounceOutDown');
  }])

  .animation('.bounce-left', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('bounce-left','bounceInLeft','bounceOutLeft');
  }])

  .animation('.bounce-right', ['animateCSSBuild', function(animateCSSBuild) {
    return animateCSSBuild('bounce-right','bounceInRight','bounceOutRight');
  }])
