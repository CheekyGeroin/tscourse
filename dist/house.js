"use strict";
class House {
    constructor(k) {
        this.door = false;
        this.tenants = [];
        this.key = k;
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error(`Door is close`);
        }
        this.tenants.push(person);
        console.log(`Person inside house`);
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== key.getSignature()) {
            throw new Error(`This key does not match for this door`);
        }
        console.log(`Door is open`);
        return this.door = true;
    }
}
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
//# sourceMappingURL=house.js.map