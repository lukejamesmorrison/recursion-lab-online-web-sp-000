let string = "pizza";
reversed = reverseString(string);

isPalindrome('lol');

function printString(string, start = 0, end = 1)
{
  var char = string.substring(start, end);
  console.log(char);

  if(end < string.length)
  {
    printString(string, end, end+1);
  } else {
    return;
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


addUpTo([1, 4, 5, 3], 2);

function addUpTo(array, index)
{
  if(array.length > index + 1)
  {
    array = array.slice(0, index + 1);
  }

  if(array.length === 0)
  {
    return 0;

  } else {
    var currentIndex = array.length - 1;
    console.log(array[currentIndex]);

    return array[currentIndex] + addUpTo(array.slice(0, currentIndex));

  }
}
