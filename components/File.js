import Progress from "./Progress.js";

export default function File({ name, progress }) {
  return /*html*/ `
      <div class="flex flex-col gap-2">
          <p>${name}</p>
  
          <div class="flex flex-col gap-1">
              ${Progress(progress)}
  
              <p>
                  <span>${progress}</span>% is complete
              </p>
          </div>
      </div>
      `;
}
