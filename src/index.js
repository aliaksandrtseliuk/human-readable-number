module.exports = function toReadable (number) {
    let onesArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let betArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    function concat(num) {
        return (num === 0) ? 'zero' : get100(num)
    }

    function get100(num) {
        return (num > 99) ? onesArray[Math.floor(num / 100)] + " hundred " + get10(num % 100) : get10(num)
    }

    function get10(num) {
        return (num < 10) ? onesArray[num] :
        (num >= 10 && num < 20) ? betArray[num - 10] : tensArray[Math.floor(num / 10)] + " " + onesArray[num % 10]
    }

    return concat(number).trim()
}
