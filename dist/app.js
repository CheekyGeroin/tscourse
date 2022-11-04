"use strict";
let age;
let firstName;
let toggle;
let empty;
let notInitialize;
let callback = (a) => { return 100 + a; };
age = 50;
firstName = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ['Max', 21];
var Loader;
(function (Loader) {
    Loader[Loader["LOADING"] = 0] = "LOADING";
    Loader[Loader["READY"] = 1] = "READY";
})(Loader || (Loader = {}));
const waiting = {
    progress: Loader.LOADING
};
if (waiting.progress === Loader.LOADING) {
    console.log("Progress :", Loader.LOADING);
}
let union;
union = "Bill";
union = 150;
let action;
action = 'disabled';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Anton', 'Max'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Maria'],
    status: 'close'
};
//# sourceMappingURL=app.js.map