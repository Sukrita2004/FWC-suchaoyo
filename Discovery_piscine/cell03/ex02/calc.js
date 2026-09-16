setInterval(() => {
    alert('Please, use me...');
}, 30000);

document.getElementById('calcForm').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const leftStr = document.getElementById('left').value.trim();
    const rightStr = document.getElementById('right').value.trim();
    const op = document.getElementById('op').value;

    const isValidPositiveInteger = (str) => /^\d+$/.test(str);

    if (!isValidPositiveInteger(leftStr) || !isValidPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftStr, 10);
    const rightNum = parseInt(rightStr, 10);

    if ((op === '/' || op === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;

    switch (op) {
        case '+': result = leftNum + rightNum; break;
        case '-': result = leftNum - rightNum; break;
        case '*': result = leftNum * rightNum; break;
        case '/': result = leftNum / rightNum; break;
        case '%': result = leftNum % rightNum; break;
    }

    alert(result);
    console.log(result);
});