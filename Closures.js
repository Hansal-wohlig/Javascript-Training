function init(){
    var name = "Hansal"

    function greet(){
        console.log("Hello"+ " "+name)
    }
    name="Shivam"// here reference is passed so it will change the value of name in greet function
    // name="Shivam" // if we comment this line then it will print "Hello Hansal" because the value of name is not changed
    return greet
}
let c = init()
c()

function returnfunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
    //   let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z(); 
    };
    a =999
    y();
  };
  return x; 
}

let a = returnfunc(); 
a(); 
