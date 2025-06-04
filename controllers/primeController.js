// Controller for prime checking logic

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

exports.checkPrime = (req, res) => {
    const number = parseInt(req.query.number);

    if (isNaN(number)) {
        return res.status(400).json({ error: "Invalid or missing 'number' query parameter" });
    }

    const prime = isPrime(number);
    res.json({ number, is_prime: prime });
};
