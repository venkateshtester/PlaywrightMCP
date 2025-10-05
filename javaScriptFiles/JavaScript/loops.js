//loops

for(let i =0; i<=10;i++){
    console.log(i)
}

//for loop

const array = [1,2,3,4,5];
for(const a of array){
    console.log(a);
}
console.log("-------");
for(let i =0; i<array.length;i++){
    console.log(array[i]);
}

console.log("------");

let l=2;
while(l<=10){
    console.log(l);
    l++;
}
console.log("------");
//do-while

let h=1;

do{
    console.log(h);
    h++;
}

while(h<=10);

console.log("------");
//break
//1 to 100 : print hi when u see the multiplication of 5 and break

let num =5;
while(num<=15){
    console.log(num);


    if(num % 5 ==0){
        console.log("hi and bye");
        break;
    }
    num++;
}

//for of loop
console.log("------");

const browser = ["chrome", "firefox", "edge"];
for(const a of browser){
    if(a=="edge"){
        console.log("launch edge..")
        break;
    }
}

//for in loop
console.log("------");

const user = {
    name: "John Doe",
    age: "90",
    city: "India"
}
let count =0;
for(const key in user){
    if(count===1){
    console.log(key+":"+user[key]);
    break;
    }
    count++;
}