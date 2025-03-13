// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

module.exports = findMatching; // Export the function
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

module.exports = fuzzyMatch; // Ensure this is exported properly
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

module.exports = { fuzzyMatch, matchName }; // Export both functions
