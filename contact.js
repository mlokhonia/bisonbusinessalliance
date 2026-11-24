// Set this to the Alliance's public inbox when it is ready.
const contactEmail = "";
const form = document.querySelector("#interest-form");
const status = document.querySelector("#form-status");
const download = document.querySelector("#download-inquiry");
const send = document.querySelector("#send-inquiry");
const note = document.querySelector("#contact-note");

function readInquiry() {
  const fields = new FormData(form);
  return [
    "Inquiry: " + form.elements.namedItem("interest").selectedOptions[0].text,
    "Name: " + fields.get("name"),
    "Organization: " + (fields.get("organization") || "—"),
    "Email: " + fields.get("email"),
    "",
    fields.get("message")
  ].join("\n");
}

download.addEventListener("click", () => {
  if (!form.reportValidity()) return;
  const file = new Blob([readInquiry()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "bison-business-alliance-inquiry.txt";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = "Your inquiry draft was downloaded.";
});

if (contactEmail) {
  send.hidden = false;
  note.textContent = "Open a draft in your email app, or download a copy.";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const subject = "Bison Business Alliance inquiry";
    window.location.href = "mailto:" + contactEmail + "?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(readInquiry());
    status.textContent = "Your email app will open with your draft.";
  });
} else {
  form.addEventListener("submit", (event) => event.preventDefault());
}

const requestedInterest = new URLSearchParams(window.location.search).get("interest");
const interest = form.elements.namedItem("interest");
if (Array.from(interest.options).some(option => option.value === requestedInterest)) {
  interest.value = requestedInterest;
}
