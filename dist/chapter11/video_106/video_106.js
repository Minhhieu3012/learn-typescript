const btnElement = document.getElementById("myBtn");
//intersection
const inputElement = document.getElementById("name");
btnElement?.addEventListener("click", () => {
    alert(inputElement.value);
});
export {};
