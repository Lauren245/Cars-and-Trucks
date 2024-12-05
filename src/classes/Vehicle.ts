// import Driveable interface
import Driveable from '../interfaces/Driveable.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;

  // Constructor for the Vehicle class
  constructor() {
    this.started = false;
    this.currentSpeed = 0;
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log('Vehicle started');
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  /*  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      //make sure the car can't go negative speeds.
        if(this.currentSpeed >= 5){
          this.currentSpeed -= change;
          console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
        }
        //error message if the vehicle was on but decelarating it would have cause the currentSpeed to be negavive.
        else{
          console.log("vehicle cannot reach speeds below 0 mph.");
        }
      //error message if vehicle was off
    } else {
      console.log('Start the vehicle first');
    }
  }
 */

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
        this.currentSpeed -= change;
        console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log('Vehicle reversed');
    } else {
      console.log('Start the vehicle first');
    }
  }
}

// Export the Vehicle class
export default Vehicle;
