// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(driversArray, driver) {
    return driversArray.filter((name) => {
        return name.toLowerCase() === driver.toLowerCase();
    });
}
    function fuzzyMatch(driversArray, driverString) {
        return driversArray.filter((name) => {
            return name.toLowerCase().startsWith(driverString.toLowerCase());

        });
    }
    
    const driversHometowns = [
        {
            name: "Bobby",
            homeTown: "Pittsburgh",
        },
        {
            name: "Sammy",
            homeTown: "New York",
        },
        {
            name: "Sally",
            homeTown: "Cleveland",
        },
        {
            name: "Annette",
            homeTown: "Los Angeles",
        },
        {
            name: "Bobby",
            homeTown: "Tampa Bay",
        },
    ];

    function matchName(driversObjectInArray, driverString) {
        return driversObjectInArray.filter((driver) => {
            return driver.name.toLowerCase() === driverString.toLowerCase();
        });
    }
