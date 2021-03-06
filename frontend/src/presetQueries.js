const queries = new Map([
    // q1
    ["IpsilateralImpact", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: ">",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Min Mean",
            comparator: "Same Signs",
            value: "Fore Diff Min Mean",
            abs: "None",
        }
    ]],
    // q2
    ["IpsilateralPushoff", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: ">",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Max Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Max Mean",
            comparator: "Same Signs",
            value: "Fore Diff Min Mean",
            abs: "None",
        }
    ]],
    // q3
    ["IpsilateralMostlyImpact", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: ">",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Max Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 6,
            parametor: "Hind Diff Min Mean",
            comparator: "Same Signs",
            value: "Hind Diff Max Mean",
            abs: "None",
        },
        {
            id: 7,
            parametor: "Hind Diff Min Mean",
            comparator: "Same Signs",
            value: "Fore Diff Min Mean",
            abs: "None",
        },
        {
            id: 8,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "Hind Diff Max Mean",
            abs: "Both",
        }
    ]],
    // q4
    ["IpsilateralMostlyPushoff", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: ">",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Max Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 6,
            parametor: "Hind Diff Min Mean",
            comparator: "Same Signs",
            value: "Hind Diff Max Mean",
            abs: "None",
        },
        {
            id: 7,
            parametor: "Hind Diff Min Mean",
            comparator: "Same Signs",
            value: "Fore Diff Min Mean",
            abs: "None",
        },
        {
            id: 8,
            parametor: "Hind Diff Min Mean",
            comparator: "<",
            value: "Hind Diff Max Mean",
            abs: "Both",
        }
    ]],
    // q5
    ["JustImpact", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: "<",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Max Mean",
            comparator: "<",
            value: "3",
            abs: "Left",
        },
    ]],

    // q6
    ["JustPushoff", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: "<",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Max Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Min Mean",
            comparator: "<",
            value: "3",
            abs: "Left",
        },
    ]],

    // q7
    ["MostlyImpact", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: "<",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Max Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 6,
            parametor: "Hind Diff Min Mean",
            comparator: "Same Signs",
            value: "Hind Diff Max Mean",
            abs: "None",
        },
        {
            id: 7,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "Hind Diff Max Mean",
            abs: "Both",
        }
    ]],
    // q8
    ["MostlyPushoff", [
        {
            id: 0,
            parametor: "Trial",
            comparator: "==",
            value: "Straight Line",
            abs: "None",
        },
        {
            id: 1,
            parametor: "Blocks",
            comparator: "==",
            value: "Null",
            abs: "None",
        },
        {
            id: 2,
            parametor: "Fore Strides",
            comparator: ">=",
            value: "20",
            abs: "None",
        },
        {
            id: 3,
            parametor: "Fore Signed Vector Sum",
            comparator: "<",
            value: "8.5",
            abs: "Left",
        },
        {
            id: 4,
            parametor: "Hind Diff Min Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 5,
            parametor: "Hind Diff Max Mean",
            comparator: ">",
            value: "3",
            abs: "Left",
        },
        {
            id: 6,
            parametor: "Hind Diff Min Mean",
            comparator: "Same Signs",
            value: "Hind Diff Max Mean",
            abs: "None",
        },
        {
            id: 7,
            parametor: "Hind Diff Min Mean",
            comparator: "<",
            value: "Hind Diff Max Mean",
            abs: "Both",
        }
    ]]
]);

export default queries;