(function($) {
  var facts = [];

  function getNextPerson() {
    var currentPerson = $("div#persons span:visible").attr('id');
    var person = currentPerson;
    var persons = [
      "anthcourtney", "brunomattarollo", "daniellehickie", "jamesgoodridge",
      "jonjames", "jorgekalmbach", "lisabritt", "robertwhite", "vikkifurse"];

    while(currentPerson == person) {
      person = persons[Math.floor(Math.random() * persons.length)];
    }

    $("#" + currentPerson).fadeOut(1000, function(){
      $("#" + person).fadeIn(1000);
    });

    return person;
  }

  function getNextFact() {
    var currentFactIndex = Number($("div#fact").data("fact"));
    var person = $("#" + getNextPerson()).data("name");
    var factIndex = currentFactIndex;
    var fact = "";

    while(currentFactIndex == factIndex) {
      factIndex = Math.floor(Math.random() * facts.length);
    }

    fact = facts[factIndex].replace(/\{person\}/g, person);
    $("div#fact").fadeOut(1000, function(){
      $("div#fact").html(fact).data("fact", factIndex).fadeIn(1000);
    });

    return fact;
  }

  $(function() {
    $.get("/data/facts.txt",function(data) {
      facts = data.split("\n");
      facts.pop();
      getNextFact();
    });

    $("div#next a").bind("click", function(event) {
      event.preventDefault();
      getNextFact();
    });
  });
})(jQuery);
