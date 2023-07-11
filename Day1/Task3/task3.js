import { readFile } from "node:fs";
import _ from "lodash";

readFile("samples.json", function (err, fileData) {
  const data = JSON.parse(fileData);

  const totalMale = _.countBy(data, (res) => {
    return res.gender === "male";
  });

  console.log("Total Number Of Male Users are " + totalMale.true);

  console.log("Total Number Of FeMale Users are " + totalMale.false);

  const userDetail = _.find(data, (res) => {
    if (res.name.firstName === "Vinay" && res.name.lastName === "Gajjar") {
      return res;
    }
  });

  console.log("Details of Vinay Gajjar :");
  console.log(userDetail);

  const maleUserId = [];
  const feMaleUserId = [];

  const maleUserName = [];
  const feMaleUserName = [];

  _.find(data, (res) => {
    if (res.gender === "male") {
      maleUserId.push(res.id);
      maleUserName.push(res.name.firstName + " " + res.name.lastName);
    } else {
      feMaleUserId.push(res.id);
      feMaleUserName.push(res.name.firstName + " " + res.name.lastName);
    }
  });

  console.log("ID of Male Users: ");
  console.log(maleUserId);

  console.log("ID of FeMale Users: ");
  console.log(feMaleUserId);

  //   const maleUserName = [];
  //   const feMaleUserName = [];

  //   _.forEach(data, (res) => {
  //     if (res.gender === "male") {
  //       maleUserName.push(res.name.firstName + res.name.lastName);
  //     } else {
  //       feMaleUserName.push(res.name.firstName + res.name.lastName);
  //     }
  //   });

  console.log("Name of Male Users: ");
  console.log(maleUserName);

  console.log("Name of FeMale Users: ");
  console.log(feMaleUserName);

  let maleCount = 0;
  let feMaleCount = 0;

  _.find(data, (res) => {
    _.find(res.interests, (res1) => {
      if (res1 === "c") {
        if (res.gender === "male") {
          maleCount++;
        } else {
          feMaleCount++;
        }
      }
    });
  });

  console.log("Male User Interested in C : " + maleCount);
  console.log("FeMale User Interested in C : " + feMaleCount);

  //   commonInterest = _.intersectionWith(data, data, (array1, array2) => {
  //     return (
  //       _.isEqual(array1.interests, array2.interests) && array1.id !== array2.id
  //     );
  //   });

  //   const interestArray = [];
  //   _.find(data, (res) => {
  //     _.forEach(interestArray, (res1) => {
  //       if (_.isEqual(res1, res.interests)) {
  //         interestArray.push(res.interests);
  //       }
  //     });
  //   });
  let commonInterest = [];
  _.intersectionWith(data, data, (array1, array2) => {
    if (
      _.isEqual(array1.interests, array2.interests) &&
      array1.id != array2.id
    ) {
      if (
        !_.includes(
          commonInterest,
          array1.name.firstName + " " + array1.name.lastName
        )
      ) {
        commonInterest.push(array1.name.firstName + " " + array1.name.lastName);
      }
    }
  });

  const res = _.filter(data, "interests");
  console.log(res);
  console.log("Common Interest Users: ");
  console.log(commonInterest);

  const descSortById = _.orderBy(data, ["id"], ["desc"]);

  console.log("Descending Order Sorting By ID :");
  console.log(descSortById);

  const sortByFirstName = _.orderBy(data, ["name.firstName"]);

  console.log("Sorting By First Name :");
  console.log(sortByFirstName);

  console.log(commonInterest);
});
