let string = "pizza";
reversed = reverseString(string);

isPalindrome('lol');

function printString(string)
{
  var char = string.slice(0, 1);

  if(string.length === 1)
  {
    console.log(char);
  } else {
    console.log(char);
    return printString(string.slice(1, string.length));
  }
}

function reverseString(string, reversedString = ''){

  if(string.length >= 1)
  {
    reversedString += string.slice(string.length - 1);
    return reverseString(
      string.substring(0, string.length - 1),
      reversedString
    );
  } else {
    return reversedString;
  }
}

function isPalindrome(str, index = 0) {

  var frontIndex = index;
  var rearIndex = str.length - 1 - index;

  if (frontIndex == rearIndex || rearIndex - frontIndex == 1) {
    return true;
  } else {
    if (str.slice(frontIndex, frontIndex + 1) === str.slice(rearIndex, rearIndex + 1)) {
      return isPalindrome(str, index + 1);
    } else {
      return false;
    }
  }
}

// console.log(addUpTo([1, 4, 5, 3], 2));

function addUpTo(array, index)
{
  if(array.length > index + 1)
  {
    array = array.slice(0, index + 1);
  }

  if(array.length === 1)
  {
    return array[0];
  } else {
    return array[0] + addUpTo(array.slice(1, array.length), index);
  }
}

// console.log(maxOf([1, 6, 5, 3]));

function maxOf(array)
{
  if(array.length === 1) {
    return array[0];
  } else {
    // If first is less than second OR they are equal
    if(array[0] < array[1] || array[0] === array[1])
    {
      return maxOf(array.slice(1, array.length));
    }
    // If first is greater than second
    else if(array[0] > array[1])
    {
      var adjustedArray = array.slice(0,1).concat(array.slice(2, array.length));
      return maxOf(adjustedArray);
    }
  }
}

// console.log(includesNumber([1, 4, 5, 3], 5));

function includesNumber(array, number)
{
  if(array.length === 0)
  {
    return false;
  } else {
    if(array[0] === number)
    {
      return true;
    } else {
      // console.log(array.slice(1, array.length));
      return includesNumber(array.slice(1, array.length), number);
    }
  }
}
