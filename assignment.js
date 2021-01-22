https://github.com/Archi0709/assignment.js

// 1. Convert Kilometer to Meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var meter = kilometerToMeter (-180.70);
console.log(meter);

// 2. Budget Calculator:
function budgetCalculator(clock, phone, laptop){
    var result = clock + phone + laptop;
    return result;

}

var total = budgetCalculator(50, 100, 500); 
console.log(total);

// 3. Hotel Cost:
function hotelCost(day) {
    {
        if (day <= 10) {
            var totalCost = 10 * 100;
        } else if (day <= 20) {
            var firstPart = 10 * 100;
            var remainingPart = day - 10;
            var secondPart = remainingPart * 80;
            totalCost = firstPart + secondPart;
        } else {
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remainingPart = day - 20;
            var thirdPart = remainingPart * 50;
            totalCost = firstPart + secondPart + thirdPart;
        }
        return totalCost;
    }
}
var count = hotelCost(35);
console.log(count);


// 4. Mega Friend Name:

function megaFriend(name) {
    
        var megaName = name[0];
        for (var i = 0; i < name.length; i++) {
            var nickName = name[i];
            if (nickName.length > megaName.length) {
                megaName = nickName;
            }
        }
        return megaName;
    }

var result = megaFriend(["Moupia", "Khaif Borno", "Tanni"]);
console.log(result);



 





