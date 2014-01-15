/**
 * jQuery tidyParallax plugin
 * http://www.irishmiss.com/
 * Version 1.0
 *
 * Copyright 2014 Irish Miss Limited
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Jarod Denison
 */

;(function ($) {
  $.fn.tidyParallax = function() {
    var $this = this;
    $(window).on(
      'scroll',
      function() {
        $this.css('background-position','center ' + $("body").scrollTop() + 'px');
      }
    );

  };
}( jQuery ));