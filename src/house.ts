abstract class House {
    constructor(k:Key) {
       this.key = k
    }
    protected door = false
    protected key: Key
    private tenants: Person[] = []
    
    comeIn(person:Person) :void {
        if (!this.door) {
            throw new Error(`Door is close`)
        }
        this.tenants.push(person)
        console.log(`Person inside house`)

    }
}
class MyHouse extends House{
    openDoor(key:Key) {
        if (key.getSignature() !== key.getSignature()) {
            throw new Error(`This key does not match for this door`)
        }
        console.log(`Door is open`)
        return this.door = true
        
        
    }
}

class Key {
    private signature: number
    constructor() {
        this.signature = Math.random()
    }
    
    getSignature():number {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) { }
    getKey() :Key {
        return this.key
    }
}

const key = new Key()

const house = new MyHouse(key)
const person = new Person(key) 

house.openDoor(person.getKey())
house.comeIn(person)