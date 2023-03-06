// Function 

  // Return
  const getTime = (): number => {  
    return new Date().getTime();
  }
  
  console.log(getTime());

  // Void
  const greeting = (): void => {
    console.log('Hello!');
  }

  console.log(greeting());

  // Optional Parameter
  const add = (a: number, b:number, c?: number) => {
    let result = a + b + ( c || 0);
    return result;
  }

  console.log(add(1, 2));

  // Default Parameter
  const expon = (v: number, ex: number = 2) => {
    return v ** ex;
  }

  console.log(expon(3));

  // Named Parameter
  const divide = ({ dibagi, pembagi } : { dibagi: number, pembagi: number }) => {
  return dibagi / pembagi; 
  }

  console.log(divide({dibagi: 90, pembagi: 10}));

  // Rest Parameter
  const penjumlahan = (x: number, y: number, ...rest: number[]) => {
    const result = x + y + rest.reduce((a, b) => a + b, 0);
    return result;
  }

  console.log(penjumlahan(1,2,3,4,5,6,7));

  // Type Alias
  type Increment = (value: number) => number;

  const autoIncrement: Increment = (value) => value + 1;

  console.log(autoIncrement(3));