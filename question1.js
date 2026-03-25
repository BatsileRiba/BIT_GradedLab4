document.getElementById("compare-btn").addEventListener("click", function() {

  var expectedText = document.getElementById("expected").value;
  var actualText = document.getElementById("actual").value;

  var resultList = document.getElementById("result");
  resultList.innerHTML = "";
  resultList.className = "";

  if (expectedText.trim() === "" && actualText.trim() === "") {
    alert("Please enter text in both text areas before comparing.");
    return;
  }

  var expectedLines = expectedText.split("\n");
  var actualLines = actualText.split("\n");

  var ol = document.createElement("ol");
  ol.id = "differences";

  var differencesFound = false;

  if (expectedLines.length !== actualLines.length) {
    var li = document.createElement("li");
    li.textContent = "Number of lines differs. Expected has " + expectedLines.length + " lines, Actual has " + actualLines.length + " lines.";
    ol.appendChild(li);
    differencesFound = true;
  }

  var totalLines = Math.max(expectedLines.length, actualLines.length);

  for (var i = 0; i < totalLines; i++) {
    if (expectedLines[i] !== actualLines[i]) {
      var li = document.createElement("li");
      li.textContent = "Line " + (i + 1) + ": Expected = \"" + expectedLines[i] + "\" but got \"" + actualLines[i] + "\"";
      ol.appendChild(li);
      differencesFound = true;
    }
  }

  if (differencesFound) {
    resultList.className = "change";
    var heading = document.createElement("li");
    heading.textContent = "Texts are different";
    resultList.appendChild(heading);
    var wrapLi = document.createElement("li");
    wrapLi.appendChild(ol);
    resultList.appendChild(wrapLi);
  } else {
    resultList.className = "nochange";
    var li = document.createElement("li");
    li.textContent = "No differences found";
    resultList.appendChild(li);
  }

});

document.getElementById("clear-btn").addEventListener("click", function() {
  document.getElementById("expected").value = "";
  document.getElementById("actual").value = "";
  var resultList = document.getElementById("result");
  resultList.innerHTML = "";
  resultList.className = "";
});