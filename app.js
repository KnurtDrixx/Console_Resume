let myName = 'Joseph Moran';



console.log("Name:", myName.toUpperCase()); 


console.log("Career: Licensed Massage Therapist, Future Coder")

console.log("Description: Nondescript")

console.log("My Interests: Video Games,", "Anime,", "Reading");

console.log("Past Positions: Burger King Casher, - Handled the money" , "Country Club Dishwasher - Washed the dishes,",
     "Massage Therapist, rub oil on people")

console.log( "Skills: " + displaySkill( "Strong Hands, ", true) +
    displaySkill("Charm and Charisma, " , true) + displaySkill("Gaming Skills", true ));

function displayPosition(companyName, jobTitle, pizzaDescription){ 
        console.log("Company Name: " , companyName)
        console.log("Job Title:" , jobTitle)
        console.log("Job Description:" , pizzaDescription)
}

displayPosition("Borger King" , "Cashier", "Handled da money");

displayPosition("Country Club", "Dishwasher", "Washed da Dishes");

displayPosition("Massage Therapist", "Massage Therapist", "Rub oil on People");

function displaySkill(skillName, cool){
    
    if (cool){
        return ("BAM:" + skillName)
    }
    
    return skillName
    
    
}