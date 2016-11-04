    var numbers=["10","29","2"];
    var largest=numbers[0]; //Assuming element in 0th position to be highest
    for(var i=1;i<numbers.length;i++)
    {
        if(numbers[i]>largest){
            largest=numbers[i]; // If any number is greater than 0th position replacing largest value with it
        }
    }

    console.log("Largest of 3 numbers --> "+ largest);