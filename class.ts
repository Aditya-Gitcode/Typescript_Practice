abstract class Animal {
    abstract sound(): void;
}

class Dog extends Animal {
    sound(): void {
        console.log("Dog barks");
    }
}

let d = new Dog();
d.sound();