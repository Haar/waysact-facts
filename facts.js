(function($) {
  var facts = [], factsFile;

  $.get("facts.txt",function(data){
    facts = data.split("\n");
  });

  $(function() {
    console.log(facts);
  });
})(jQuery);
