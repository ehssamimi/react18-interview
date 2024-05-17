
export default function  Closure(){

    function init() {
        var counter = 0;

        function jump_counter() {
            counter++;

            return 'counter'+counter;
        }

        return jump_counter;
    }

    var jump = init();



    jump(); // counter: 1
    jump(); // counter: 2
    jump(); // counter: 3

    // for(var i = 1; i <= 5; i++) {
    //
    //     setTimeout(function timer() {
    //         console.log('let'+i);
    //     }, i * 1000);
    // }

    // for(var i = 1; i <= 5; i++) {
    //     setTimeout(function timer() {
    //         console.log('var'+i);
    //     }, i * 1000);
    // }
}
/*
  */
/*
Closure یا کلوژر، یک تابعی هست که توی یک تابع دیگه تعریف میشه که می‌تونه علاوه بر متغیرهای حوزه‌ی خودش، به متغیرهای حوزه‌ی تابع بیرونی هم دسترسی داشته باشه.
 */
