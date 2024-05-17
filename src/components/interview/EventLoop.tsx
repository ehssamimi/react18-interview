
export default function  EventLoop(){

    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 0);

    Promise.resolve(console.log(4))
    async function waitFunction  (){
        await console.log(5)
    }
    new Promise(function func1(resolve) {
        console.log(6)

        setTimeout(() => {
            console.log(7);
        }, 0);
        resolve(1)
    }).then(function (){
        return console.log(8)
    })
    waitFunction()

    console.log(3);

}
/*
1-4-6-5-3-8-
 */
/*
تماما برمیگرده به مسائل event loop و الویت بندی های ایشون نسبت به push کردن macrotasks و microtasks.
الویت synchronous کد ها مون از بقیه همیشه بیشتره, بعد microtask ها که اعم از promise ها و … است و سپس macrotask ها که تایمر های ما و …
همچنین رفتار event loop با task management ها FIFO هستش که هر کدوم از statement هایی که زودتر تکمیل شده باشند زودتر هم داخل callstack پوش میشوند.
و در آخر اینکه تنها زمانی این task ها داخل callstack پوش میشوند که تمامی synchronous های ما execute شده باشند…
 */
