(function($) {
  var facts = [];

  function get_next_fact() {
    var currentFact = Number($("div#fact").data("fact"));
    var fact = currentFact;

    while(currentFact == fact) {
      fact = Math.floor(Math.random() * facts.length);
    }

    $("div#fact").hide().html(facts[fact]).data("fact", fact).fadeIn(1500);
  }

  $(function() {
    $.get("/data/facts.txt",function(data) {
      facts = data.split("\n");
      facts.pop();
      get_next_fact();
    });

    $("div#next a").bind("click", function(event) {
      event.preventDefault();
      get_next_fact();
    });
  });
})(jQuery);
