//spot check 1 

const fetchRecipes = async function (ingredient) {
    let ingredint = await $.get(`/recipe/${ingredient}`);
    console.log(ingredint)
  }