var a = "1";
console.log('add', a);
// constだとhelloのtypeは'world'になる。
// const hello = 'world';
// hello = 'foo';
// letだとhelloのtypeはstringになる。
var hello = 'world';
hello = 'foo';
// このようにtypeを割り当てられる。割り当てたtype以外は変数に入れられない。
// let hello: string = 'world';
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
// console.log(getFullName(true, ['foo']))
console.log(getFullName('山本', '博'));
var user = {
    name: 'Monster',
    age: 30
};
var user3 = {
    name: '山本博',
    // age: 40,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user4 = {
    name: '山本博',
    age: 40,
    getMessage: function () {
        return "Hello " + name;
    }
};
console.log(user3.age);
console.log(user3.getMessage);
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var username = 'alex';
// union型
var pageName = "1";
var errorMessage = null;
var user5 = null;
var someProp;
var doSomething = function () {
    console.log('doSomething');
};
var foo = null;
var bar = undefined;
// errorが出ない
var cool = 'cool';
console.log(cool.c());
