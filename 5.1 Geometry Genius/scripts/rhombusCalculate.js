function calculateRhombusArea() {
    const diagonals1 = getInputValueById('rhombus-diagonals1');
    const diagonals2 = getInputValueById('rhombus-diagonals2');
    const area = 0.5 * diagonals1 * diagonals2;
    setInnerTextById('rhombus-area', area);
}