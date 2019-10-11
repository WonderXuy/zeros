module.exports = function zeros(expression) {
  // your solution
  let flag = false;
  let count = 0;
  let expr = String(expression).split('*');
  for(let i = 0; i<expr.length; i++){
    if(isNaN(expr[i][expr[i].length-1])&&isNaN(expr[i][expr[i].length-2])){
      let num = expr[i].slice(0,expr[i].length-2);
      if (num % 2 == 0) {
        flag = true;
        for (let i = 2; i <= num; i+=2) {
          if (i % 5 == 0) {
              let number = i;
              while (number % 5 == 0) {
                count++;
                number = number / 5;
              }
            }
          }
        }
        else{
          for (let i = 1; i <= num; i+=2) {
            if (i % 5 == 0) {
                let number = i;
                while (number % 5 == 0) {
                  count++;
                  number = number / 5;
                }
              }
            }
        }
    }
    else{
      flag = true;
      let num = expr[i].slice(0,expr[i].length-1);
      let c = 1;
      while(Math.floor(+num/Math.pow(5,c)!=0)){
        count += Math.floor(+num/Math.pow(5,c));
        c++;
      }
    }
  }
  return flag ? count : 0;
}
