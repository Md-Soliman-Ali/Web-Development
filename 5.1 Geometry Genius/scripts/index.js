function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const value = parseFloat(inputField.value);
    return value;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}