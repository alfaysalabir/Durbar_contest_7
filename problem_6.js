/* Write a function trackElevator that simulates an elevator's movement given a starting floor, building bounds, and a sequence of movement commands.

The function takes four parameters:

startFloor: The floor where the elevator starts.
minFloor: The lowest floor allowed in the building.
maxFloor: The highest floor allowed in the building.
commands: An array of strings where each element is either "UP" or "DOWN".
Each "UP" command moves the elevator up by 1 floor (if it is not already at maxFloor). Each "DOWN" command moves the elevator down by 1 floor (if it is not already at minFloor). Commands that would move the elevator beyond the bounds are capped at the boundary.

Return the final floor number after all commands have been processed.

Examples
trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"]); // 2
trackElevator(9, 0, 10, ["UP", "UP", "UP", "DOWN"]); // 9
Example 1
Input: startFloor = 0, minFloor = 0, maxFloor = 10, commands = ["UP","UP","DOWN","UP"]

Output: 2

Explanation: Starts at 0, goes to 1, then 2, then down to 1, then up to 2.

Example 2
Input: startFloor = 9, minFloor = 0, maxFloor = 10, commands = ["UP","UP","UP","DOWN"]

Output: 9

Explanation: Starts at 9, goes to 10, stays at 10 on subsequent UP commands, then down to 9.

Constraints
-100 <= minFloor <= startFloor <= maxFloor <= 100
0 <= commands.length <= 1000
commands[i] is either 'UP' or 'DOWN'

Hints
Hint 1. Initialize a tracking variable with startFloor.
Hint 2. Loop through each command and update the floor position, using Math.min and Math.max to enforce minFloor and maxFloor boundaries. */


function trackElevator(startFloor, minFloor, maxFloor, commands) {
    let currentFloor = startFloor;

    for (let command of commands) {
        if (command === "UP") {
            currentFloor = Math.min(currentFloor + 1, maxFloor);
        }
        else if (command === "DOWN") {
            currentFloor = Math.max(currentFloor - 1, minFloor);
        }
    }

    return currentFloor;
}