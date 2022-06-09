// Add your code here

function submitData(name, email) {
fetch('http://localhost:3000/users', {
    method: 'POST',

    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

    body: JSON.stringify({name, email})
  }
      .then((response) => response.json())

      .then((object) => console.log(object))

      .catch((error) => {
        alert("Bad things! Ragnarők!")
        console.log(error.message)
}) 
)}

submitData("Fleabag", "fleabagisnormal@smth.com")