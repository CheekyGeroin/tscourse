// 1
var age;
var firstName;
var toggle;
var empty;
var notInitialize;
var callback = function (a) { return 100 + a; };
age = 50;
firstName = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
// 2
var anything;
anything = -20;
anything = 'Text';
anything = {};
// 3
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// 4
var person;
person = ['Max', 21];
// 5
var Loader;
(function (Loader) {
    Loader[Loader["LOADING"] = 0] = "LOADING";
    Loader[Loader["READY"] = 1] = "READY";
})(Loader || (Loader = {}));
var waiting = {
    progress: Loader.LOADING
};
if (waiting.progress === Loader.LOADING) {
    console.log("Progress :", Loader.LOADING);
}
// 6
var union;
union = "Bill";
union = 150;
// 7
var action;
action = 'disabled';
// 8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Anton', 'Max'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Maria'],
    status: 'close'
};
