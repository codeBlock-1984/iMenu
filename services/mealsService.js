import meals from '../models/meals';
import Validate from '../middlewares/validate';

const mealsData = meals;
const { validate } = Validate;

class mealsService {
  static createMeal(req, res) {
    validate(req, res);

    req.body.mealID = mealsData.length + 1;
    const singleMeal = req.body;
    mealsData.push(singleMeal);
    return res.status(200).json({
      status: 200,
      data: singleMeal,
    });
  }

  static editMeal(req, res) {
    validate(req, res);

    const mealID = parseInt(req.params.id, 10);
    const newMeal = req.body;
    const singleMeal = mealsData.find(meal => meal.mealID === mealID);

    if (singleMeal) {
      singleMeal.mealName = newMeal.mealName;
      singleMeal.mealPrice = newMeal.mealPrice;
      return res.status(200).json({
        status: 200,
        data: singleMeal,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Meal with specified ID not found!',
    });
  }

  static getMeals(req, res) {
    const allMeals = mealsData;
    return res.status(200).json({
      status: 200,
      data: allMeals,
    });
  }

  static getMeal(req, res) {
    validate(req, res);

    const mealID = parseInt(req.params.id, 10);
    const singleMeal = mealsData.find(meal => meal.mealID === mealID);

    if (singleMeal) {
      return res.status(200).json({
        status: 200,
        data: singleMeal,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Meal with specified ID not found!',
    });
  }

  static removeMeal(req, res) {
    validate(req, res);

    const mealID = parseInt(req.params.id, 10);
    const singleMeal = mealsData.find(meal => meal.mealID === mealID);

    if (singleMeal) {
      const deletedMeal = mealsData.splice(singleMeal, 1);
      return res.status(200).json({
        status: 200,
        data: deletedMeal,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Meal with specified ID not found!',
    });
  }
}

export default mealsService;
