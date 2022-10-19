let str="ababa";

let newStr="";
for(let i=str.length-1;i>=0;i--){
		
	newStr+=str[i];


}
str==newStr?console.log("Palindrome"):console.log("Not a Palindrome");