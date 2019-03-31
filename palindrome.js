function palindrome(str) {
  // Clean str
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  str = str.replace(/_/g, "");

  let arr = str.split("")
  let reverse = arr.reverse();
  let reverseStr = arr.join("");

  console.log(str, reverseStr);
  
  if(str === reverseStr){
    return true;
  } else {
    return false;
  }
}



palindrome("A man, a plan, a canal. Panama");
