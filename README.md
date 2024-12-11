# Cars and Trucks (and Motorbikes)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) - https://opensource.org/licenses/MIT

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Tests](#tests)

[License](#license)

[Questions](#questions)

[Resources](#resources)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tutorials](#tutorials)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3rd-Party Software](#3rd-party-software)

[Screenshots](#screenshots)

[Video Demonstration](#video-demonstration)

## Description
This application is a command-line interface (CLI) for managing and performing actions on different types of vehicles, including cars, trucks, and motorbikes. It allows users to:

1. Create new vehicles (cars, trucks, and motorbikes) by providing details such as color, make, model, year, weight, top speed, and specific properties like towing capacity for trucks.

2. Select existing vehicles to perform various actions such as:
    - Printing vehicle details
    - Starting the vehicle
    - Accelerating or decelerating the vehicle
    - Stopping the vehicle
    - Turning the vehicle left or right
    - Reversing the vehicle
    - Selecting or creating another vehicle
    - Towing another vehicle (for trucks)
    - Performing a wheelie (for motorbikes)

3. Use the [inquirer package](https://www.npmjs.com/package/inquirer) to prompt the user for input and guide them through the available options and actions.
The application is structured with classes representing different vehicle types and a Cli class to handle user interactions and vehicle management.

## Installation
To install this application, follow these steps:
1. Clone [repository](https://github.com/Lauren245/Cars-and-Trucks)
2. Open code in a code editor such as VS Code.
3. Install dependencies by running the command *npm install* in the root directory using the integrated terminal.
4. Navigate to the src file in the integrated terminal and run the *npm start* command to run the application.

## Usage
- Upon startup, the CLI will prompt you to either create a new vehicle or select an existing vehicle.
    - If you choose to create a new vehicle, you will be asked to provide details such as color, make, model, year, weight, top speed, and specific properties like towing capacity for trucks.
    - If you choose to select an existing vehicle, you will be presented with a list of vehicles to choose from.

- After selecting or creating a vehicle, you can perform the following actions:
    - Print details 
    - Start vehicle
    - Accelerate 5 MPH
    - Decelerate 5 MPH
    - Stop vehicle
    - Turn right 
    - Turn left
    - Reverse
    - Tow a vehicle
    - Do a wheelie
    - Select or create another vehicle
    - Exit

- A truck is required for towing, and a motorbike is required for performing wheelies. If the user selects an option intended for a specific vehicle type that does not match their own vehicle type, they will be notified that the action cannot be performed.

- You can choose to exit the application at any time by selecting the *Exit* option from the actions list.

**Note: The actions list is too long to fit in the console without scrolling, making it appear as though the list regenerates. In reality, the selector simply can't return to the top.**

## Tests
Currently, there are no unit tests. There are test objects created for each type of vehicle in the index.ts file.

## License
Copyright 2024 Lauren Moore

This software uses an [MIT license](https://opensource.org/license/MIT).

## Questions
If you have additional questions, you can contact me at: 

GitHub: [Lauren245](https://github.com/Lauren245)

Email: laurenmoorejm@gmail.com


## Resources

### Tutorials
1. **[TypeScipt implements keyword Google search](https://www.google.com/search?q=typescript+implements&rlz=1C1VDKB_enUS1100US1100&oq=typescript+implements&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiRAhiABBiKBTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIMCAQQABgUGIcCGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMg0ICBAAGIYDGIAEGIoFMg0ICRAAGIYDGIAEGIoF0gEINzY4NGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8)** Google Gemini-generated reference for the implements keyword functionality.
2. **[What's the Difference Between 'extends' and 'implements' in TypeScript ?](https://www.geeksforgeeks.org/whats-the-difference-between-extends-and-implements-in-typescript/)** by Geeks For Geeks: Used as reference for distinguishing between the extends and implements keywords.
3. **[How TypeScript Interfaces Work – Explained with Examples](https://www.freecodecamp.org/news/how-typescript-interfaces-work/)** by Sahil Mahapatra (freeCodeCamp): Guide on interface functionality and syntax.
4. **[How to get the class name of an object in JavaScript](https://www.geeksforgeeks.org/how-to-get-the-class-name-of-an-object-in-javascript/)** by Geeks for Geeks: Used as reference for checking what an object is an instance of using the instanceof keyword (i.e. ensuring only trucks are allowed to tow other vehicles). Also used as a reference for getting class names (i.e. the error message when attempting to tow a vehicle when the user's vehicle type is not a truck).

### 3rd-Party Software
1. **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)** Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart)) - Licensed under the MIT license.


## Screenshots
![Image of the integrated terminal showing the selection list that lets the user create a new vehicle or select an existing one.](./assets/screenshots/vehicles-project-opening-menu.jpg)

**Image showing a selection list to create a new vehicle or select an existing one.**


![Image of the integrated terminal showing the selection list for vehicle type that pops up if the user opts to create a new vehicle](./assets/screenshots/vehicles-project-creation-select-vehicle.jpg)

**Image showing the vehicle type selection list for creating a new vehicle.**


![Image of the integrated terminal showing a completed Truck creation form. It has the following fields with these inputs. enter color bright white. enter make ram. enter model 2500 laramie. enter year 2021. enter weight 7500. enter top speed 100. enter towing capacity 19000.](./assets/screenshots/vehicles-project-vehicle-creation.jpg)

**Image of a completed Truck creation form.**


![Image of the integrated terminal showing the first part of a selection list of actions that a vehicle can perform. The list has the following options. print details. start vehicle. accelerate 5 mph. decelerate 5 mph. stop vehicle. turn right. turn left.](./assets/screenshots/vehicles-project-actions-list-1-of-2.jpg)

**Image showing the first half of the selection list of actions that a vehicle can perform.**


![Image of the integrated terminal showing the second part of a selection list of actions that a vehicle can perform. The list has been scrolled down so that the first item in the list of options is now turn right. The list has the following options. turn right. turn left. reverse. tow a vehicle. do a wheelie. select or create another vehicle. exit.](./assets/screenshots/vehicles-project-actions-list-2-of-2.jpg)

**Image showing the second half of the selection list of actions that a vehicle can perform.**


![Image of the integrated terminal showing the selection list of towable vehicles that appear when the selects the tow a vehicle option out of the actions list while using a truck. There are three choices in the list. Each choice is a vehicle and includes a vin number followed by two dashes and the make and model of the vehicle with the corresponding vin number.](./assets/screenshots/vehicles-project-tow-vehicle-selection-menu.jpg)

**Image of the towable vehicle selection list for trucks.**

![Image of the integrated terminal showing a selection list of existing vehicles that can be chosen from if the user opts to select an existing vehicle instead of creating a new one.Each choice includes a vin number followed by two dashes and the make and model of the vehicle with the corresponding vin number.](./assets/screenshots/vehicles-project-select-vehicle.jpg)

**Image of the selection list for selecting an existing vehicle.**

![Image of the integrated terminal showing the outcome of selecting the do a wheelie option from the actions selection list. The output says Motorbike Harley Davidson Sportster is doing a wheelie.](./assets/screenshots/vehicles-project-wheelie-action.jpg)

**Image showing the outcome of performing the *do a wheelie* action on a Harley Davidson Sportster motorbike.**

![Image of the integrated terminal showing the outcome of selecting the print details option from the actions selection list on a toyota camry.The list contains. vehicle started false. vehicle current speed 0 mph. a VIN number consiting of a long string of randomly generated numbers and letters. color blue. make toyota. model camry. year 2021. weight 3000 lbs. top speed 130 mph. wheel 1 18 inch with a goodyear tire. wheel 2 18 inch with a goodyear tire. wheel 3 18 inch with a goodyear tire. wheel 4 18 inch with a goodyear tire](./assets/screenshots/vehicles-project-print-details.jpg)

**Image showing the outcome of performing the *print details* action on a Toyota Camry.**

## Video Demonstration



**[Back to top](#cars-and-trucks-and-motorbikes)**