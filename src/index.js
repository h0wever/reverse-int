module.exports = function reverse(a) {
    const int = (positive = (a) => (a < 0 ? a * -1 : a));

    const reverse = Number(
        String(int(a)).split("").map(Number).reverse().join("")
    );
    return reverse;
};
