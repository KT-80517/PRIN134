
function maleorfemale(firstName, lastName, gender) {
    let salutation = gender.toLowerCase() === "male" ? "Mr." : "Ms.";
  
    salutation = salutation.toUpperCase();
  
    const message = ` Greetings! ${salutation} ${firstName} ${lastName}`;
  
    console.log(message);
  }
  
  maleorfemale("Andres", "Bonifacio", "male");
  maleorfemale("Melchora", "Aquino", "female");