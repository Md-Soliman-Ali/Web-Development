function calculateRectangleArea() {
    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');
    const area = width * length;
    setInnerTextById('rectangle-area', area);
}