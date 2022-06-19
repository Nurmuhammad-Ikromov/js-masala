var numbers = [1,3,0,5,0,7,0]
var result = ""

function zeroEnd(numbers)
{
    var zero = []
    for (var i=numbers.length-1; i>=0; i--)
    {
        if (numbers[i]==0)
        {
            zero.push(numbers[i])
           
        }

        else {
        zero.unshift(numbers[i])}

        
    }

    for (var i=0; i < zero.length; i++)
    {
        result += zero[i]
    }


    return result
}

console.log(zeroEnd(numbers));