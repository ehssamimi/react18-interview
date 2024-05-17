export default function  mutable(){


    // @ts-ignore
    const x=2;

    const obj = {
        x: 1,
        f: function() {
            return console.log("x: "+this.x);
        } ,
        function: ()=> {
              console.log("function hi: "+x);
        }
    };

    obj.f();
    // obj.f.apply(obj);

    const f = obj.f.bind(obj);
    f(); /*x=1*/
    obj.function(); /*x=1*/

    // const newVa = obj.f;
    // newVa();x=2





         const obj1 = {first: "x"};

    const obj2 = obj1;

    const obj3 = {first: "x"};

    obj1.first = "y"
    console.log(obj1 == obj2 ) // true
    console.log(obj1 == obj3  )// false
    console.log(obj1.first == "y"  )// true
    console.log(obj2.first == "y"  )// true


    // @ts-ignore
    var name = "David";

    var person = {
        name: "John",
        getName() {
            console.log(this.name);
        }
    }
    person.getName();

    // const myGetName = person.getName;
    //
    // myGetName();      // David
    // person.getName(); // John


    //  var name = "John";
    //
    // const person = {
    //     name: 'David',
    //      printName: () => {
    //         // @ts-ignore
    //         console.log(this.name);
    //     }
    // }
    //  person.printName();///john
    //
    //
    // const person = {
    //     name: 'David',
    //     printName: () => {
    //         alert(person.name);
    //     }
    // }
    //
    // person.printName();//David







}