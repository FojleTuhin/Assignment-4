

function calculateMoney(ticket) {

    const msg = "Give me a positive number";

    if (totalTicket >= 0) {
        const saving = (totalTicket * 120) - (500 + (8 * 50));
        return saving;
    }
    else {
        return msg
    }

}

/*
const totalTicket=1055;
const totalSaving= calculateMoney(totalTicket);
console.log(totalSaving)
*/




function checkName(name) {
    const good = "Good Name";
    const bad = "Bad Name";
    const invalid = "Invalid"

    if (typeof nameis === "number") {
        return invalid

    }
    else if (typeof nameis !== "number" && typeof nameis !== "string") {
        return invalid
    }

    else {
        const names = nameis.toLowerCase()
        let nameLength = names.length;
        let lastChar = names.charAt(nameLength - 1)
        if (lastChar === "a" || lastChar === "e" || lastChar === "i" || lastChar === "o" || lastChar === "u" || lastChar === "y" || lastChar === "w") {
            return good
        }

        else {
            return bad
        }
    }


}
/*const nameis = "jhankar"
const check = checkName(nameis)
console.log(check)
*/





function deleteInvalids(arr) {

    const checkArray = "Give a valid array"
    if (Array.isArray(arr) === true) {

        const arr2 = [];

        for (let number of arr)

            if (typeof number === "number" && !isNaN(number)) {
                arr2.push(number)
            }

        return arr2
    }
    else {
        return checkArray
    }
}
/*const arr = ["1",{num:2},NaN]
const list = deleteInvalids(arr)
console.log(list)*/




function password(pass) {

    let invaliditem = "invalid"
    const length1 = pass.birthYear.toString().length;

    const UpSiteName = pass.siteName[0].toUpperCase() + pass.siteName.slice(1);



    if (pass.name === undefined || pass.siteName === undefined || length1 !== 4) {
        return invaliditem
    }

    else {
        let fullpassword = UpSiteName.concat("#").concat(pass.name).concat("@").concat(pass.birthYear)
        return fullpassword
    }

}

/*let pass = {
    name: "tuhin",
    birthYear: 2001,
    siteName: "google"
}

const input = password(pass)
console.log(input)
*/


function monthlySavings(arr3, cost) {
    let invalidchoice = "Invalid input"
    let earnmore = "Earn more"

    if (Array.isArray(arr3) === true && typeof cost === "number") {
        let arr4 = []

        for (let num of arr3) {

            if (num >= 3000) {
                let percentage = num - (num * 20) / 100
                arr4.push(percentage)
            }
            else {
                arr4.push(num)
            }
        }


        let sum = 0;
        for (let nums of arr4) {
            sum = sum + nums;
        }

        let afterTotalSaving = sum - cost

        if (afterTotalSaving >= 0) {
            return afterTotalSaving
        }
        else {
            return earnmore
        }
    }

    else {
        return invalidchoice
    }

}


/*let arr3 = [1000,2000,3000]
let cost = 5400
let savings = monthlySavings(arr3, cost)
console.log(savings)*/