 function  Animal (){
      this.name="动物";
 }
  function f1(){
    let  dog=new Animal();
     Animal.prototype.age=10;
    console.log(dog.name);
    console.log(dog.age);
  }
   f1();

 