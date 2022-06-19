

function numbers(arr)
{
    var s = 0
    for (var i=0; i<arr.length; i++)
    {
        if (arr[i]>0)
        {
            s=s+arr[i]
        }

        else s=s
    }

    return s;
}

console.log(numbers([1,2,0,-1,-2,3,4]));