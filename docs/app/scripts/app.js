/* ========================================================================
 * Sir Mobile Emulator Docs: app.js v 0.0.1-beta
 * http://sirideas.github.io/sir.mobile.emulator/
 * ========================================================================
 * Copyright 2014-2015 Sir Ideas, C. A.
 * Licensed under MIT (https://github.com/sirdieas/sir.mobile.emulator/LICENSE)
 * ========================================================================
 */

 (function(){
  'use strict';

  $('body').scrollspy({ target: '#sideBar' });

  $('.side-nav').affix({
    offset: {
      top: function(){
        return $('.container-introduction').outerHeight(true);
      }
    }
  });

  $('[highlight]').each(function(k,e){
    var self = $(e);
    $.get(self.attr('highlight'), function(response){
      response = response
        .split('&').join('&amp;')
        .split('<').join('&lt;')
        .split('>').join('&gt;');
        self
          .empty()
          .wrap($('<div class="highlight"/>'))
          .append($('<code class="prettyprint"/>')
            .html(response));
      
      prettyPrint();

    })
  });

})();