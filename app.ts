// 1
let age: number;
let firstName: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number) => { return 100 + a }

age = 50;
firstName = 'Max';
toggle = true;
empty = null;
notInitialize = undefined

// 2
let anything: any;

anything = -20;
anything = 'Text';
anything = {};

// 3
let some: unknown;

some = "Text";

let str: string;

if (typeof some === "string") {
  str = some
}

// 4
let person: [string, number]

person = ['Max', 21]

// 5

enum Loader {LOADING, READY}

const waiting = {
  progress: Loader.LOADING
}

if (waiting.progress === Loader.LOADING) {
  console.log("Progress :" , Loader.LOADING)
}

// 6
let union: string | number;

union = "Bill";
union = 150;

// 7
let action: "enabled" | "disabled"

action = 'disabled'

// 8
function showMessage(message:string): void{
  console.log(message)
}

function calc(num1: number, num2: number):number{
  return num1 + num2
}

function customError():never {
  throw new Error('Error')
}

//9
type Pages1 = {
  title: string,
  likes: number,
  accounts: string[],
  status: string
  details: {
    createAt: string,
    updateAt: string
  }
}

const page1: Pages1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Anton', 'Max'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01'
  }
}

type Pages2 = {
  title: string,
  likes: number,
  accounts: string[],
  status: string
}

const page2: Pages2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Maria'],
  status: 'close'
}