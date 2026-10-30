/* Given a list of booked time intervals and a working-day time range, return all available time intervals when no booking exists. All time values are numbers representing points in time (e.g., minutes from midnight).

Booked intervals may overlap with each other or extend beyond the working hours. The output should be a list of non-overlapping intervals, sorted by their start times.

Examples
findFreeTime([[10, 12], [14, 16]], [9, 17]);
// Expected output: [[9, 10], [12, 14], [16, 17]]

findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17]);
// Expected output: [[9, 10], [16, 17]]
// Explanation: [10, 12], [11, 15], and [14, 16] merge into one booked block [10, 16].
Example 1
Input: bookedIntervals = [[10,12],[14,16]], workingHours = [9,17]

Output: [[9,10],[12,14],[16,17]]

Example 2
Input: bookedIntervals = [[10,12],[14,16],[11,15]], workingHours = [9,17]

Output: [[9,10],[16,17]]

Constraints
Time values are non-negative numbers.
Intervals `[start, end]` always have `start < end`.
The `workingHours` array will always be a valid interval `[start, end]`.
The output intervals must be sorted by start time and be non-overlapping.

Hints
Hint 1. First, filter and clip all booked intervals to be strictly within the `workingHours` range.
Hint 2. Then, sort the clipped booked intervals by their start times.
Hint 3. Merge any overlapping booked intervals to get a consolidated list of occupied time.
Hint 4. Finally, find the gaps between the consolidated booked intervals and the `workingHours` boundaries to determine the free time. */


function findFreeTime(bookedIntervals, workingHours) {
    const workStart = workingHours[0];
    const workEnd = workingHours[1];

    const clipped = [];
    for (let i = 0; i < bookedIntervals.length; i++) {
        const start = Math.max(bookedIntervals[i][0], workStart);
        const end = Math.min(bookedIntervals[i][1], workEnd);

        if (start < end) {
            clipped.push([start, end]);
        }
    }

    clipped.sort(function (a, b) {
        return a[0] - b[0];
    });

    const freeTimes = [];
    let freeStart = workStart;

    for (let i = 0; i < clipped.length; i++) {
        const start = clipped[i][0];
        const end = clipped[i][1];

        if (start > freeStart) {
            freeTimes.push([freeStart, start]);
        }

        freeStart = Math.max(freeStart, end);
    }

    if (freeStart < workEnd) {
        freeTimes.push([freeStart, workEnd]);
    }

    return freeTimes;
}