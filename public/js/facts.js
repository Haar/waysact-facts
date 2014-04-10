(function($) {
  facts = [];
  persons = [
    "anthcourtney", "brunomattarollo", "daniellehickie", "jamesgoodridge",
    "jonjames", "jorgekalmbach", "lisabritt", "robertwhite", "vikkifurse"];

  shown_facts = [];
  shown_persons = [];

  working = false;

  function getNextPerson() {
    var person;

    if (persons.length == 0) {
      while (shown_persons.length > 0) {
        persons.push(shown_persons.pop())
      }
    }

    person = persons.splice(Math.floor(Math.random() * persons.length), 1).pop();
    shown_persons.push(person)

    return person;
  }

  function getNextFact() {
    var name, fact;

    if (facts.length == 0) {
      while (shown_facts.length > 0) {
        facts.push(shown_facts.pop());
      }
    }

    person = getNextPerson();
    name = $("#" + person).data("name");
    fact = facts.splice(Math.floor(Math.random() * facts.length), 1).pop();
    shown_facts.push(fact);
    fact = fact.replace(/\{person\}/g, name);

    $("div#fact, #persons > span:visible").fadeOut(1000, function(){
      $("#" + person).fadeIn(1000);
      $("div#fact").html(fact).fadeIn(1000);
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
