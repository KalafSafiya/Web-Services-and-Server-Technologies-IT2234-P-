console.log("Hello")
console.log("Addition "+(5+3))
console.log("Subtraction "+(5-3))
console.log("Multiplication "+(5*3))
console.log("Division "+(5/3)+"\n")


console.log("Printing Numbers from 1 to 10")
for(var i=1; i<=10; i++)
{
	console.log(i + " ")
}
console.log("\n")

console.log("Printing Odd Numbers from 1 to 10")
for(var i=1; i<=10; i++)
{
	if(i%2 != 0)
	console.log(i + " ")
}
console.log("\n")

console.log("Printing Even Numbers from 1 to 10")
for(var i=1; i<=10; i++)
{
	if(i%2 == 0)
	console.log(i + " ")
}
console.log("\n")

console.log("Printing Numbers from 1 to 10 in reverse")
for(var i=10; i>0; i--)
{
	console.log(i + " ")
}
console.log("\n")

let num = 15
for(var i = parseInt(num/2)+1; i>0; i--)
{
	console.log(i);
}
console.log("-")

console.log (parseInt(num/2)+1);

console.log("-")
for(var x=num; x>parseInt(num/2)+1; x--)
{
	console.log(x);
}
console.log("\n")