const checkProperty = (user, property) => {
  if (property) {
    if (user.hasOwnProperty(property)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  } else if (user) {
    console.log("Please enter the property name to check");
  } else {
    console.log("Please enter the object and property name to check");
  }
};

checkProperty({ name: "raj", gender: "male" }, "gender");
checkProperty({ name: "raj", gender: "male" }, "interests");
checkProperty({ name: "raj", gender: "male" });
checkProperty();
