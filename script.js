// ////Object assign
// //ادغام اطلاعات 2 ابجکت و استفاده از ابجکت اول به عنوان منبع
// //Merging the information of 2 objects and using the first object as a source

// let person = {
//     name: 'Jack',
//     age:18,
//     sex: 'Male',
// };

// let student = {
//     name: 'Raymond',
//     age:12,
//     xp: '2',
//     color: 'Red'
// };

// //ترتیب 2 گزینه ابجکت مهم است و نشان میدهد که کدام منبع است
// //The order of the 2 object options is important and indicates which source it is

// let newStudent = Object.assign({}, person, student);

// let infoPerson = " ";
// for(let x in newStudent){
//     infoPerson = infoPerson += newStudent[x] + " . ";
// };

// //برای مثال در ابجکت دوم جنسیت وجود ندارد اما از ابجکت اول وام گرفته
// //For example, there is no sex in the second object, but it is borrowed from the first object

// document.write(infoPerson); //Raymon . 12. Male. Red


// //----------------------------------------------------------------------------------------------------
// //کپی کردن مقدار ابجکت بدون تغییر مقدار اولیه منبع
// // Copy the value of the object without changing the initial value of the resource

// //در روش قدیمی این مشکل وجود داشت که با تغییر اطلاعات کپی شده از یک منبع اطلاعات ابجکت منبع هم تغییر می کرد.
// //In the old method, there was this problem that by changing the information copied from a source, the information of the source object also changed.

// //old method for example:

// let person = {
//     name: 'Jack',
//     age: 17
// };
// let newPerson = person; //ریختن اطلاعات ابجکت 1 در دل ابجکت جدید Copy the information of object 1 to the new object

// console.log(person.name); //Jack
// console.log(newPerson.name); //Jack

// newPerson.name = "Raymond"; //تغییر نام در ابجکت جدید Change the name in the new object

// console.log(person.name); //Raymond - در اینجا نام در ابجکت اول هم که منبع اولیه بود تغییر کرده است Here, the name has been changed in the first object, which was the primary source
// console.log(newPerson.name); //Raymond


// //solution راه حل

let person = {
    name: 'Jack',
    age: 17
};

let newPerson = Object.assign({},person);

console.log(person.name); //Jack
console.log(newPerson.name); //Jack

newPerson.name = 'Bob';

console.log(person.name); //Jack
console.log(newPerson.name); //Bob


//افزودن به ویژگی شی بوسیله object assign ----------------------------------------------------

// let person = {
//     name: 'Jack',
//     age: 17
// };

// ////here, in addition to creating a new object from the information of the first object as a source, we also change the name and age in the new object
// //در اینجا علاوه بر ساخت ابجکت جدید از اطلاعات ابجکت اول به عنوان منبع، نام و سن را هم در ابجکت جدید تغییر می دهیم
// let newPerson = Object.assign({},person, {name: 'Bob', age: 13});

// console.log(person.name +" "+ person.age); //Jack 17
// console.log(newPerson.name +" "+ newPerson.age); //Bob 13


//Test
let basic = {
    ex1: 100,
    ex2: 200,
    exOldArchive: 1000
};

let advanced = {
    ex3: 300,
    ex4: 400
};

let advanced2 = {
    ex5: 500,
    ex6: 600
};

let total = Object.assign(basic,advanced,advanced2);

for(let ex in total){
    document.write(total[ex] + " ")
};