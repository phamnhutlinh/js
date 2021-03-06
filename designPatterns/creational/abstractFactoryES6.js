"use strict";

/**
 * Extending our door example from Simple Factory. Based on your needs you
 * might get a wooden door from a wooden door shop, iron door from an iron
 * shop or a PVC door from the relevant shop. Plus you might need a guy with
 * different kind of specialities to fit the door, for example a carpenter
 * for wooden door, welder for iron door etc. As you can see there is a dependency
 * between the doors now, wooden door needs carpenter, iron door needs a welder etc.
 *
 * A factory of factories; a factory that groups the individual but related/dependent
 * factories together without specifying their concrete classes.
 *
 * The abstract factory pattern provides a way to encapsulate a group of individual
 * factories that have a common theme without specifying their concrete classes
 *
 * When to use?
 * When there are interrelated dependencies with not-that-simple creation logic involved
 */
class Door {

    getDescription() {}

}
class WoodenDoor extends Door {

    getDescription() {
        console.log("I'm a wooden door");
    }

}

class IronDoor extends Door {

    getDescription() {
        console.log("I'm an iron door");
    }

}

class DoorFittingExpert {

    getDescription() {}

}

class Welder extends DoorFittingExpert {

    getDescription() {
        console.log("I can only fit iron doors");
    }

}

class Carpenter extends DoorFittingExpert {

    getDescription() {
        console.log("I can only fit wooden doors");
    }

}

class DoorFactory {

    static makeDoor() {}

    static makeFittingExpert() {}

}

class WoodenDoorFactory extends DoorFactory {
    static makeDoor() {
        return new WoodenDoor();
    }
    static makeFittingExpert() {
        return new Carpenter();
    }
}

class IronDoorFactory extends DoorFactory {
    static makeDoor() {
        return new IronDoor();
    }
    static makeFittingExpert() {
        return new Welder();
    }
}

let door = WoodenDoorFactory.makeDoor();
let expert = WoodenDoorFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

door = IronDoorFactory.makeDoor();
expert = IronDoorFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();