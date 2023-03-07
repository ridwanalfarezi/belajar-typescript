// Casting

// as
const fname: any = "Ridwan";
console.log((fname as string).length); 

// <>
const lname: unknown = "Alfarezi";
console.log((<string>lname).length);

const fullname = "Ridwan Alfarezi";
console.log(((fullname as unknown) as string).length);