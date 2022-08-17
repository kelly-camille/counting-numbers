window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
  });

function handleFormSubmission(event) {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  const countBy = parseInt(document.getElementById("countBy").value);
  const finalNumb = []
  for (let index = 0; index <= countTo ; index += countBy) {
  finalNumb.push(index);
}
  document.getElementById("result").innerText = finalNumb
}

