/* Given an array of undirected friendships represented as pairs of names [person1, person2], and a startPerson, return the total number of people in the connected network starting from startPerson (including startPerson themselves).

Friendships are mutual. If person A is friends with B, and B is friends with C, then A, B, and C are all in the same connected network.

If startPerson has no listed friendships, the size of their network is 1 (just themselves).

Examples
countConnectedFriends([["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]], "Alice");
// Output: 3
countConnectedFriends([["Alice", "Bob"], ["Charlie", "David"]], "Eve");
// Output: 1
Example 1
Input: friendships = [["Alice","Bob"],["Bob","Charlie"],["David","Eve"]], startPerson = "Alice"

Output: 3

Explanation: Alice is connected to Bob, and Bob is connected to Charlie. Total connected network size is 3.

Example 2
Input: friendships = [["Alice","Bob"],["Charlie","David"]], startPerson = "Eve"

Output: 1

Explanation: Eve has no friends in the list, so only Eve is in her network (size 1).

Constraints
0 <= friendships.length <= 1000
Each element of friendships is a pair of non-empty strings.
startPerson is a non-empty string.

Hints
Hint 1. Build an adjacency list (a Map where key is a person and value is an array of their friends).
Hint 2. Use a traversal algorithm like BFS or DFS starting from startPerson.
Hint 3. Keep track of visited people using a Set to avoid infinite loops in cycles and return the size of the set. */


function countConnectedFriends(friendships, startPerson) {

    const friendsOf = new Map();

    for (let i = 0; i < friendships.length; i++) {
        const a = friendships[i][0];
        const b = friendships[i][1];

        if (!friendsOf.has(a)) {
            friendsOf.set(a, []);
        }
        if (!friendsOf.has(b)) {
            friendsOf.set(b, []);
        }

        friendsOf.get(a).push(b);
        friendsOf.get(b).push(a);
    }

    const visited = new Set();
    visited.add(startPerson);
    const queue = [startPerson];

    while (queue.length > 0) {
        const person = queue.shift();

        let friends = [];
        if (friendsOf.has(person)) {
            friends = friendsOf.get(person);
        }

        for (let i = 0; i < friends.length; i++) {
            const friend = friends[i];
            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }

    return visited.size;
}