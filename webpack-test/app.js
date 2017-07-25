//import method  from 'library'
//import * as myownname from 'library'
// import * as Ramda from 'ramda';
// import union from 'ramda'; //Would work if Ramda had only one method
// import { union } from 'ramda'; //Ramda has many methods
import { union as join, uniq as filter_unique } from 'ramda'; //Ramda has many methods

const arr1 = [1,1,1,2,2,3,4,5,6,6];
const arr2 = [5,5,5,6,6,7,7,9,8,10,1];

const arr3 = join(arr1, arr2);
const arr4 = filter_unique(arr1);

console.log(arr3);
console.log(arr4);