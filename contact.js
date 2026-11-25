const form = document.querySelector("#interest-form");
const interest = form.elements.namedItem("interest");
const status = document.querySelector("#form-status");
const emailLink = document.querySelector("#contact-email").getAttribute("href");
const requestedInterest = new URLSearchParams(window.location.search).get("interest");

if (Array.from(interest.options).some(option => option.value === requestedInterest)) {
  interest.value = requestedInterest;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(form);
  const subject = "Bison Business Alliance · " + interest.selectedOptions[0].text;
  const body = [
    "Name: " + fields.get("name"),
    "Organization: " + (fields.get("organization") || "—"),
    "Email: " + fields.get("email"),
    "",
    fields.get("message")
  ].join("\r\n");
  window.location.href = emailLink + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);
  status.textContent = "Send your message from your email app.";
});

form.hidden = false;
