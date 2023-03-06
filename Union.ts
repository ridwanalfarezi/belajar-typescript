// Union
const birthMonth = (m: string | number) => {
  console.log(`My Birth Month is ${m}`);
};

birthMonth(4);
birthMonth("April");
