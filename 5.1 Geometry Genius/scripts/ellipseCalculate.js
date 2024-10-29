function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-majorRadius');
    const minorRadius = getInputValueById('ellipse-minorRadius');
    const area = Math.PI * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}