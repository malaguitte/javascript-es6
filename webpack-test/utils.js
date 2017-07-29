function sum(x, y)
{
  return x + y;
}

//named export 
//we can have many exports on the same file
//we can only call the method later using the same name
//the import needs curly braces.
export function sub(x, y)
{
  return x - y;
}

function mult(x, y)
{
  return x * y;
}

function div(x,y)
{
  return x / y;
}

export { mult as multiply, div };

//export main method,
//it only allows one `export default` per file
//you can later import it with any name
//without using curly braces
export default sum;

