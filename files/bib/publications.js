$.get('files/bib/publications.bib', {}, function(content) {

  let ent = BibtexParser(content);

  entries = ent.entries
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
                  var pub_html = "<li> <a  class='btn btn-danger btn-xs' title='Conference'>&nbsp;</a>  " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.booktitle + ".</li>"
                  all_content += pub_html

              } else if (ordenated_entries[j].EntryType == "article") {
                  var pub_html = "<li> <a  class='btn btn-primary btn-xs' title='Journal'>&nbsp;</a>  " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.journal + ".</li>"
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
                  var pub_html = "<li> <a  class='btn btn-danger btn-xs' title='Conference'>&nbsp;</a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.booktitle + ".</li>"
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
                  var pub_html = "<li> <a  class='btn btn-primary btn-xs' title='Journal'>&nbsp;</a> " + ordenated_entries[j].Fields.author + ", <b>" + ordenated_entries[j].Fields.title + "</b>. " + ordenated_entries[j].Fields.journal + ".</li>"
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

});

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