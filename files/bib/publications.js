// all pub has all bibs in ./publications.bib without break of lines
all_pub = '@INPROCEEDINGS{8790161, author={S. M. {Sampaio} and C. G. {Camilo-Junior}}, booktitle={2019 IEEE Congress on Evolutionary Computation (CEC)}, title={IVF/GDE3 - In Vitro Fertilization method coupled to GDE3}, year={2019}, volume={}, number={}, pages={2066-2073}, keywords={evolutionary computation;genetic algorithms;Pareto optimisation;Vitro Fertilization Module;mono-objective implementation;canonical GDE3 results;host algorithm;NSGA-II;Genetics;Sociology;Statistics;In vitro fertilization;Genetic algorithms;Convergence;In Vitro Fertilization Genetic Algorithm;GDE3;ZDT;Multiobjective optimization;MOEA;differential evolution}, doi={10.1109/CEC.2019.8790161}, ISSN={}, month={June},}@Article{Oliveira2018, author="Oliveira, Vinicius Paulo L. and Souza, Eduardo Faria de and Goues, Claire Le and Camilo-Junior, Celso G.", title="Improved representation and genetic operators for linear genetic programming for automated program repair", journal="Empirical Software Engineering", year="2018", month="Oct", day="01", volume="23", number="5", pages="2980--3006", abstract="Genetic improvement for program repair can fix bugs or otherwise improve software via patch evolution. Consider GenProg, a prototypical technique of this type. GenProg\'s crossover and mutation operators manipulate individuals represented as patches. A patch is composed of high-granularity edits that indivisibly comprise an edit operation, a faulty location, and a fix statement used in replacement or insertions. We observe that recombination and mutation of such high-level units limits the technique\'s ability to effectively traverse and recombine the repair search spaces. We propose a reformulation of program repair representation, crossover, and mutation operators such that they explicitly traverse the three subspaces that underlie the search problem: the Operator, Fault and Fix Spaces. We provide experimental evidence validating our insight, showing that the operators provide considerable improvement over the baseline repair algorithm in terms of search success rate and efficiency. We also conduct a genotypic distance analysis over the various types of search, providing insight as to the influence of the operators on the program repair search problem.", issn="1573-7616", doi="10.1007/s10664-017-9562-9", url="https://doi.org/10.1007/s10664-017-9562-9" }@INPROCEEDINGS{8285710, author={S. M. {Sampaio} and C. G. {Camilo}}, booktitle={2017 IEEE Latin American Conference on Computational Intelligence (LA-CCI)}, title={IVF/NSGAII: In vitro fertilization method coupled to NSGAII}, year={2017}, volume={}, number={}, pages={1-6}, keywords={evolutionary computation;genetic algorithms;medical computing;IVF/NSGAII;MultiObjective Evolutionary Algorithms;canonical NSGAII;In Vitro Fertilization Genetic Algorithm;inverted generational distance;canonical version;Zitzler-Deb-Thiele functions;Genetics;Sociology;Statistics;In vitro fertilization;Genetic algorithms;Proposals;Evolutionary computation;In Vitro Fertilization Genetic Algorithm;NSGAII;Multiobjective Optimization;MOEA}, doi={10.1109/LA-CCI.2017.8285710}, ISSN={}, month={Nov},}'



function selectionSort(items) {
  var length = items.length;
  for (var i = 0; i < length - 1; i++) {
    //Number of passes
    var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
    for (var j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
      if (items[j].Fields.year < items[min].Fields.year) { //Compare the numbers
        min = j; //Change the current min number position if a smaller num is found
      }
    }
    if (min != i) {
      //After each pass, if the current min num != initial min num, exchange the position.
      //Swap the numbers
      var tmp = items[i];
      items[i] = items[min];
      items[min] = tmp;
    }
  }
  return items
}

function get_all_years(element, index, array) {
  ordenated_entries.push(element);
  if (!(all_years.indexOf(element.Fields.year) >= 0)) {
    all_years.push(element.Fields.year)
  }
}

function get_conferences_years(element, index, array) {
  if (!(conferences_years.indexOf(element.Fields.year) >= 0) && element.EntryType == "inproceedings") {
    conferences_years.push(element.Fields.year)
  }
}

function get_journals_years(element, index, array) {
  if (!(journals_years.indexOf(element.Fields.year) >= 0) && element.EntryType == "article") {
    journals_years.push(element.Fields.year)
  }
}

function get_others_years(element, index, array) {
  if (!(others_years.indexOf(element.Fields.year) >= 0) && element.EntryType == "misc") {
    others_years.push(element.Fields.year)
  }
}

// console.log(all_pub)
var entries = BibtexParser(all_pub);

entries = entries.entries
ordenated_entries = []
all_years = []
conferences_years = []
journals_years = []
others_years = []

entries.forEach(get_all_years)
entries.forEach(get_conferences_years)
entries.forEach(get_journals_years)
entries.forEach(get_others_years)


ordenated_entries = selectionSort(ordenated_entries)
console.log(ordenated_entries)

all_content = ""
journals_content = ""
conferences_content = ""
others_content = ""

for (i = 0; i < all_years.length; i++) {
  var year = "<ul><h3>" + all_years[i] + "</h3><ul style='list-style-type:none'>";
  all_content += year

  for (j = 0; j < ordenated_entries.length; j++) {

    if (ordenated_entries[j].Fields.year == all_years[i]) {

      if (ordenated_entries[j].EntryType == "inproceedings") {
        var pub_html = "<li> <a  class='btn btn-danger btn-xs' title='Conference'> </a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.booktitle + ".</li>"
        all_content += pub_html

      } else if (ordenated_entries[j].EntryType == "article") {
        var pub_html = "<li> <a  class='btn btn-primary btn-xs' title='Journal'> </a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.journal + ".</li>"
        all_content += pub_html

      } else {
        var pub_html = "<li><a href='" + ordenated_entries[j].Fields.url + "' class='btn btn-success btn-xs' target='_blank' >Download Poster</a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " +
          ordenated_entries[j].Fields.booktitle + ".</li>"
        all_content += pub_html

      }
    }
  }
}
var parent1 = document.getElementById('all-publication');
parent1.innerHTML += all_content + "</ul>"

for (i = 0; i < conferences_years.length; i++) {
  var year = "<ul><h3>" + conferences_years[i] + "</h3><ul style='list-style-type:none'>";
  conferences_content += year

  for (j = 0; j < ordenated_entries.length; j++) {

    if (ordenated_entries[j].Fields.year == conferences_years[i]) {

      if (ordenated_entries[j].EntryType == "inproceedings") {
        var pub_html = "<li> <a  class='btn btn-danger btn-xs' title='Conference'> </a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.booktitle + ".</li>"
        conferences_content += pub_html

      }
    }
  }
}
var parent2 = document.getElementById('conference');
parent2.innerHTML += conferences_content + "</ul>"

for (i = 0; i < journals_years.length; i++) {
  var year = "<ul><h3>" + journals_years[i] + "</h3><ul style='list-style-type:none'>";
  journals_content += year

  for (j = 0; j < ordenated_entries.length; j++) {

    if (ordenated_entries[j].Fields.year == journals_years[i]) {

      if (ordenated_entries[j].EntryType == "article") {
        var pub_html = "<li> <a  class='btn btn-primary btn-xs' title='Journal'> </a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.journal + ".</li>"
        journals_content += pub_html

      }
    }
  }
}
var parent3 = document.getElementById('journal');
parent3.innerHTML += journals_content + "</ul>"

for (i = 0; i < others_years.length; i++) {
  var year = "<ul><h3>" + others_years[i] + "</h3><ul style='list-style-type:none'>";
  others_content += year


  for (j = 0; j < ordenated_entries.length; j++) {

    if (ordenated_entries[j].Fields.year == others_years[i]) {

      if (ordenated_entries[j].EntryType == "misc") {
        var pub_html = "<li><a href='" + ordenated_entries[j].Fields.url + "' class='btn btn-success btn-xs' target='_blank' >Download Poster</a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " +
          ordenated_entries[j].Fields.booktitle + ".</li>"
        others_content += pub_html

      }
    }
  }
}

var parent4 = document.getElementById('other');
parent4.innerHTML += others_content + "</ul>"
