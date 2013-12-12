# ngAnimate-animate.css Module

## Requirements

AngularJS 1.2.3+ (it should also work with 1.2.0 and 1.2.1, but 1.2.2 does not work. Please use 1.2.3 or higher for best results).

## Installation

1. Prepare angular.js 1.2 into your application with the ngAnimate module
2. Download and include animate.css into your webpage
3. Include animate.js into your webpage
4. Set **ngAnimate-animate.css** as a dependency inside of your application module.

You can also use bower:

```javascript
# this should install v0.1.1 or higher
# and it should also include animate.css
bower install ngAnimate-animate.css --save
```

## Usage

This plugin automatically registers simple CSS classes to all animations for animate.css within the AngularJS ngAnimate
JavaScript animation API.

Once installed, animations can be performed by attaching the following CSS classes to an element.

### Flip Animations
- **.dn-flip-x** (runs flipInX for enter, move and show, runs flipOutX for leave and hide)
- **.dn-flip-y** (runs flipInY for enter, move and show, runs flipOutY for leave and hide)

### Fade Animations
- **.dn-fade** (runs fadeIn for enter, move and show, runs fadeOut for leave and hide)
- **.dn-fade-up** (runs fadeInUp for enter, move and show, runs fadeOutUp for leave and hide)
- **.dn-fade-down** (runs fadeInDown for enter, move and show, runs fadeOutDown for leave and hide)
- **.dn-fade-left** (runs fadeInLeft for enter, move and show, runs fadeOutLeft for leave and hide)
- **.dn-fade-right** (runs fadeInRight for enter, move and show, runs fadeOutRight for leave and hide)
- **.dn-fade-up-big** (runs fadeInUpBig for enter, move and show, runs fadeOutUpBig for leave and hide)
- **.dn-fade-down-big** (runs fadeInDownBig for enter, move and show, runs fadeOutDownBig for leave and hide)
- **.dn-fade-left-big** (runs fadeInLeftBig for enter, move and show, runs fadeOutLeftBig for leave and hide)
- **.dn-fade-right-big** (runs fadeInRightBig for enter, move and show, runs fadeOutRightBig for leave and hide)

### Bounce Animations
- **.dn-bounce** (runs bounceIn for enter, move and show, runs bounceOut for leave and hide)
- **.dn-bounce-up** (runs bounceInUp for enter, move and show, runs bounceOutUp for leave and hide)
- **.dn-bounce-down** (runs bounceInDown for enter, move and show, runs bounceOutDown for leave and hide)
- **.dn-bounce-left** (runs bounceInLeft for enter, move and show, runs bounceOutLeft for leave and hide)
- **.dn-bounce-right** (runs bounceInRight for enter, move and show, runs bounceOutRight for leave and hide)

### Rotate Animations
- **.dn-rotate** (runs rotateIn for enter, move and show, runs rotateOut for leave and hide)
- **.dn-rotate-down-left** (runs rotateInDownLeft for enter, move and show, runs rotateOutDownLeft for leave and hide)
- **.dn-rotate-down-right** (runs rotateInDownRight for enter, move and show, runs rotateOutDownRight for leave and hide)
- **.dn-rotate-up-left** (runs rotateInUpLeft for enter, move and show, runs rotateOutUpLeft for leave and hide)
- **.dn-rotate-up-right** (runs rotateInUpRight for enter, move and show, runs rotateOutUpRight for leave and hide)

### Other Animations
- **.dn-lightspeed** (runs lightSpeedIn for enter, move and show, runs lightSpeedOut for leave and hide)
- **.dn-roll** (runs rollIn for enter, move and show, runs rollOut for leave and hide)
- **.dn-hinge** (runs fadeIn for enter, move and show, runs hinge for leave and hide)
