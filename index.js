const freelancers = [
  {name: `Dr.Slice`, price: 25, occupation: `Gardener`},
  {name: `Dr.Pressure`, price: 51, occupation: `Programmer`}
]

//Displays list of freelancers
function displayFreelancers() {
  const freelancerList = document.getElementById('freelancer-list');
  freelancerList.innerHTML = ''; // Clear list

  freelancers.forEach(freelancer => {
    const li = document.createElement('li');
    // Use template literals and cleaner formatting for readability
    li.innerHTML = `<strong>Name:</strong> ${freelancer.name}<br>
                    <strong>Occupation:</strong> ${freelancer.occupation}<br>
                    <strong>Starting Price:</strong> $${freelancer.price.toFixed(2)}`;
    freelancerList.appendChild(li);
  });
}

//Function to calculate and display average price
function updateAveragePrice() {
  const total = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
  const avgPrice = total / freelancers.length;
  document.getElementById(`average-price`).textContent = `Average Starting Price: ${avgPrice.toFixed(2)}`;
}

//Initial display
displayFreelancers();
updateAveragePrice();

//Function to add a new freelancer
function addFreelancer(freelancer){
  freelancers.push(freelancer);
  displayFreelancers();
  updateAveragePrice();
}

//Simulate adding new freelancers
const newFreelancers = [
  {name: 'Carol', occupation: 'Programmer', price: 70},
  {name: 'David', occupation: 'Designer', price: 45},
  {name: 'Eve', occupation: 'Photographer', price: 60},
  {name: `Prof. Possibility`, price: 43, occupation: `Teacher`},
  {name: `Prof. Prism`, price: 81, occupation: `Teacher`},
  {name: `Dr.Impulse`, price: 43, occupation: `Teacher`},
  {name: `Prof. Spark`, price: 76, occupation: `programmer`},
  {name: `Dr.Wire`, price: 47, occupation: `Teacher`},
  {name: `Prof. Goose`, price: 72, occupation: `Driver`}
];

let index = 0;
const interval = setInterval(()=>{
  if (index < newFreelancers.length){
    addFreelancer(newFreelancers[index]);
    index++;
  } else{
    clearInterval(interval); //Stops when all new freelancers added
  }
}, 3000); //Adds freelancers every 3 seconds