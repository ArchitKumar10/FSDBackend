const sum=(a,b)=>{return a+b};
const dif=(a,b)=>{return a-b};
const mult=(a,b)=>{return a*b};
const div=(a,b)=>{return a/b};
const obj={
    sum: sum,
    diff: this.diff,
    mult: mult,
    div: div,
}
module.exports=obj;