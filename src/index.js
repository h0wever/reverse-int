module.exports = function reverse(a) {
    let int = function positive(a) {
        if (a < 0) {
            return a * -1;
        } else {
            return a;
        }
    };

    const reverse = Number(
        String(int(a)).split("").map(Number).reverse().join("")
    );
};
