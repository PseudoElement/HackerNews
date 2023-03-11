export function decodeText(str: string) {
     var txt = document.createElement("textarea");
     txt.innerHTML = str;
     return txt.value;
}
