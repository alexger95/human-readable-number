module.exports = function toReadable(number) {
    numbersarray = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    tensarray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    /*from 0 to 19 */
    if (number == 0) return 'zero';
    if (number < 20) return numbersarray[number];
    if (number > 19 & number < 100 & number % 10 == 0) {
        return tensarray[number / 10];
    } else {

        /*from 19 to 99 */
        if (number < 100) {

            return tensarray[Math.floor(number / 10)] + " " + numbersarray[number % 10];
        } else {

            /*from 100 to 999 */
            let second = ''; /*second = all after hundred*/
            if (number % 100 == 0) second = '';
            if (number % 100 < 20) second = numbersarray[number % 100];
            if (number % 100 > 19 & (number % 100) < 100 & (number % 100) % 10 == 0) {
                second = tensarray[(number % 100) / 10];
            } else {
                if ((number % 100) < 100 & (number % 100) > 19) {
                    if (number % 100 == 0) {
                        second = '';
                    } else {
                        second = tensarray[Math.floor((number % 100) / 10)] + " " + numbersarray[(number % 100) % 10];
                    }
                }
            }
            if (second) second = ' ' + second;
            return numbersarray[Math.floor(number / 100)] + " hundred" + second;

        }
        number = number.toString().split('');
        for (let i = 0; i < number.length; i++) {

        }
        number = number.reverse().join('');
    }




}