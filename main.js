import File from "./components/File.js";

const $ = (query) => document.querySelector(query);

const list = $("output ul");

function render(file) {
  list.innerHTML = /*html */ `
        <li>
            ${File(file)}
        </li>
    `;
}

const ENDPOINT = "/upload";

const fileupload = $("input");

function uploadByFetch(formdata) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: formdata,
  });
}

function uploadByXMLHTTPRequest(name, formdata) {
  const req = new XMLHttpRequest();

  req.open("POST", ENDPOINT);

  req.upload.addEventListener("progress", (e) => {
    render({ name, progress: percent(e.loaded, e.total) });
  });

  req.send(formdata);

  return new Promise((resolve) => {
    req.addEventListener("load", (e) => {
      resolve(e);
    });
  });
}

const percent = (value, total) => (value / total) * 100;

fileupload.addEventListener("change", (e) => {
  Array.from(e.target.files).forEach((file) => {
    const formdata = new FormData();

    formdata.append("file", file);

    uploadByXMLHTTPRequest(file.name, formdata).then(() => {
      console.log("success");
    });
  });
});
