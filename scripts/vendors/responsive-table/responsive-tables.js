$(document).ready(function() {
  var switched = false;
  var updateTables = function() {
    if (($(window).width() <= 768) && !switched ){
      switched = true;
      $("table.responsive").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    }
    else if (switched && ($(window).width() > 768)) {
      switched = false;
      $("table.responsive").each(function(i, element) {
        unsplitTable($(element));
      });
    }
  };
   
  $(window).load(updateTables);
  $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
  $(window).on("resize", updateTables);
   
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");
		



		var header = original.clone();
		header.find("tr:not(.table-header)").css("display", "none");
		original.find("tr.table-header").css("display", "none");
		header.removeClass("responsive");

		original.closest(".table-wrapper").prepend(header);
		header.wrap("<div class='mobile-header' />");

		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("responsive");

		original.closest(".table-wrapper").prepend(copy);
		copy.wrap("<div class='pinned' />");

		original.wrap("<div class='scrollable' />");

    setCellHeights(original, copy);
	}
	
	function unsplitTable(original) {
    original.closest(".table-wrapper").find(".pinned").remove();
    original.unwrap();
    original.unwrap();
	}

  function setCellHeights(original, copy) {
    var tr = original.find('tr'),
        tr_copy = copy.find('tr'),
        heights = [];

    tr.each(function (index) {
      var self = $(this),
          tx = self.find('th, td');

      tx.each(function () {
        var height = $(this).outerHeight(true);
        heights[index] = heights[index] || 0;
        if (height > heights[index]) heights[index] = height;
      });

    });

    tr_copy.each(function (index) {
      $(this).height(heights[index]);
    });
  }

});
