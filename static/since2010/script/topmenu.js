/* topmenu.js */

jQuery(document).ready(function($){
  var text = $("#topmenu-desc").addClass("js").children("span");
  var defaultText = text.text();
  $("#topmenu")
  .addClass("js")
  .find("dl > dt")
    .each(function(){
      var $this = $(this);
      var desc = $this.next().text();
      $this.mouseenter(function(){
        text.text(desc);
      })
    })
  .end();
});