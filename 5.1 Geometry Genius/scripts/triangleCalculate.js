// console.log("Connected");

// function calculateTriangleArea() {
//     const triangleBaseInput = document.getElementById('triangle-base');
//     const base = parseFloat(triangleBaseInput.value);

//     const triangleheightInput = document.getElementById('triangle-height');
//     const height = parseFloat(triangleheightInput.value);

//     const area = 0.5 * base * height;

//     const triangleAreaSpan = document.getElementById('triangle-area');
//     triangleAreaSpan.innerText = area;
// }

function calculateTriangleArea() {
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const area = 0.5 * base * height;
    setInnerTextById('triangle-area', area);
}