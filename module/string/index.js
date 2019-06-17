(function(){
    console.log(HUAWEI('aba3'))

}())
function HUAWEI(value){

      if(typeof value!=='string') return false;
      return value.split('').reverse().join('')===value


}