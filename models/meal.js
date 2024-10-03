class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    ingredients,
    steps
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.complexity = complexity;
    this.affordability = affordability;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
  }
}

export default Meal;
