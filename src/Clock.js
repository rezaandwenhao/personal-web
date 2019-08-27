import React from 'react';

const Pip = ({ isOn }) => React.createElement("div", { className: `pip ${isOn && "pip--on"}` });

const BinaryDigit = ({ base2NumberAsArray }) =>
    React.createElement("div", { className: "binary-digit" },
        base2NumberAsArray.map((pip, idx) => React.createElement(Pip, { key: idx, isOn: pip === 1 })));



const BinaryDigitGroup = ({ group }) =>
    React.createElement("div", { className: "binary-digit-group" },
        group.map((binaryDigit, idx) =>
            React.createElement(BinaryDigit, { base2NumberAsArray: binaryDigit, key: idx })));




class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            digits: [[], [], []]
        };

    }

    componentDidMount() {
        setInterval(
            function () {
                const date = new Date();
                const newDigits = [
                    numberAsBinaryArrayPair(date.getHours()),
                    numberAsBinaryArrayPair(date.getMinutes()),
                    numberAsBinaryArrayPair(date.getSeconds())];

                this.setState({
                    digits: newDigits
                });

            }.bind(this), 1000);

    }

    render() {
        return (
            React.createElement("div", { className: "app" },
                React.createElement("div", { className: "clock" },
                    this.state.digits.map(digit => React.createElement(BinaryDigitGroup, { group: digit })))));



    }
}

function numberToBinary(base10Number) {
    const base2Values = [8, 4, 2, 1];
    let output = [0, 0, 0, 0];
    let remainder = base10Number;

    base2Values.forEach((val, idx) => {
        const left = remainder - val;

        if (left >= 0) {
            output[idx] = 1;
            remainder = left;
        }
    });

    return output;
}

function numberAsBinaryArrayPair(number) {
    const pair = [];
    if (number < 10) {
        pair[0] = numberToBinary();
        pair[1] = numberToBinary(number);
    } else {
        const numberAsArray = String(number).split("");
        pair[0] = numberToBinary(parseInt(numberAsArray[0], 10));
        pair[1] = numberToBinary(parseInt(numberAsArray[1], 10));
    }

    return pair;
}

export default Clock;