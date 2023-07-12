import _ from "lodash";

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

console.log("\n1. All Companies Name :");
_.forEach(companies, (item) => {
  console.log(item.name);
});

console.log("\n2. All Companies Name started after 1987 :");

_.forEach(companies, (item) => {
  if (item.start >= 1987) {
    console.log(`${item.name}`);
  }
});

const sortingEndDate = _.sortBy(companies, ["end"]);
console.log(`\n3. companies based on their end date in ascending order: `);
console.log(sortingEndDate);

const ageArray = [];

_.forEach(companies, (item) => {
  ageArray.push(item.end - item.start);
});

const sortedAgeArray = _.orderBy(ageArray, [], ["desc"]);
console.log("\n4. Ages array in descending order: ");
console.log(sortedAgeArray);

const sum = (sum, item) => {
  return sum + item;
};
const sumOfAgeArray = _.reduce(ageArray, sum, 0);

console.log(`\n5. Sum of all the ages in ageArray: `);
console.log(sumOfAgeArray);

const [company] = companies;
const { name, category } = company;
const print = () => {
  console.log(
    `\n6. Name and category of companies[0] : \nName: ${name}\nCategory: ${category}`
  );
};
print();

const unknownArgumentSum = (...sumAll) => {
  return _.reduce(sumAll, sum, 0);
};

console.log("\n7. Sum Of unknown number of arguments: ");
console.log(unknownArgumentSum(12));
console.log(unknownArgumentSum(10, 20));
console.log(unknownArgumentSum(120, 25, 15));

const argumentInArray = (...values) => {
  const array = [];
  for (const i of values) {
    if (typeof i === "object") {
      array.push(...i);
    } else {
      array.push(i);
    }
  }
  return array;
};
console.log(`\n8. Arguments Collection : `);

console.log(argumentInArray("Shardul", [120, 232, 120]));

let count = 0;
const increment = () => {
  return ++count;
};

console.log(`\n9. Incremented Value:\nAfter First Call\n${increment()}`);
console.log(`\nAfter Second Call\n${increment()}`);
console.log(`\nAfter Third Call\n${increment()}`);
console.log(`\nAfter Fourth Call\n${increment()}`);

const query = (urlInput) => {
  const url = new URL(urlInput);
  let queryObject = {};
  url.searchParams.forEach((value, name) => {
    queryObject[name] = value;
  });
  return queryObject;
};

console.log(`\n10. Destructure the query parameters of a URL`);
console.log(query(`https://gautam.com/shardul?gautam=brahmin&bicep=15'`));
