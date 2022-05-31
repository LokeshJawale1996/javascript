let data = [
  {
    name: "Lokesh",
    age: "25",
  },
  {
    name: "Mayur",
    age: "23",
  },
  {
    name: "Dhanaji",
    age: "25",
  },
  {
    name: "Kartik",
    age: "24",
  },
  {
    name: "Shaunak",
    age: "27",
  },
  {
    name: "Gaurav",
    age: "27",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return (
    "<div>" + item.name + "" + " is " + item.age + " years old." + "</div>"
  );
});
info.innerHTML = details.join("\n");
