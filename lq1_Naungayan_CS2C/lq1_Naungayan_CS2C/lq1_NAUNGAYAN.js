// Persona 1 Data
var persona1Name = "Maria Delos Santos Las Marias";
var persona1Age = 25;
var persona1Address = "Upper Session Road, Baguio City,, Benguet";

//Persona 2 Data 
var persona2Name = "Juan Gamoso Dela Cruz";
var persona2Age = 28;
var persona2Address = "San Nicolas, Candon City, Ilocos Sur";

//Rearranging names
var persona1NameParts = persona1Name.split(" ");
var persona1RearrangedName = `${persona1NameParts[3]}, ${persona1NameParts[0]} ${persona1NameParts[1]}`;

var persona2NameParts = persona2Name.split(" ");
var persona2RearrangedName = `${persona2NameParts[2]}, ${persona2NameParts[0]} ${persona2NameParts[1]}`;

//Output
console.log(`${persona1RearrangedName}, ${persona1Age}, ${persona1Address}`);
console.log(`$[persona2RearrangedName}, ${persona2Age}, ${persona2Address}`);

//Lengths of names and addresses
var persona1NameLength = persona1Name.length;
var persona2NameLength = persona2Name.length;
var persona1AddressLength = persona1Address.length
var persona2AddressLength = persona2Address.length;

//Operations 
//Sum of all numeric values
var sumOfNumericValues = persona1Age + persona2Age + persona1NameLength + persona2NameLength + persona1AddressLength + persona2AddressLength;
console.log("Sum of all numeric values:", sumOfNumericValues);

//Age addition, subtraction and multiplication
var ageAdditionResult = persona1Age + persona2Age;
var ageSubtractionResult = ageAdditionResult - persona1NameLength;
var finalResult = ageSubtractionResult * persona2NameLength;
console.log("Final result after age ageAdditionResult, subtraction, and multiplication:",finalResult);

//Raising to the power
var powerResult = persona1AddressaLength ** persona2AddressLength;
console.log("Result of raising Persona 1 address length to the power of Persona 2 address length:", powerResult);