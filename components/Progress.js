export default function Progress(value) {
  return /*html*/ `
    <div class="relative pt-1">
        <div class="overflow-hidden h-2 text-xs flex rounded bg-white">
            <div
                style="width: ${value}%;"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
        </div>
    </div>
    `;
}
