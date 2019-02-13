// import { validationResult } from 'express-validator/check';
import meals from '../models/meals';

const mealsData = meals;

class mealsService {
  static createMeal(req, res) {
    // const vError = validationResult(req);
    // if (!vError) {
    //  res.status(400).json(vError.array());
    //  }
    req.body.mealID = mealsData.length + 1;
    mealsData.push(req.body);
    return res.status(200).json({
      status: 200,
      data: mealsData,
    });
  }

  static editMeal(req, res) {
    const mealID = parseInt(req.params.id, 10);
    const newMeal = req.body;
    const singleMeal = mealsData.find(meal => meal.mealID === mealID);

    if (singleMeal) {
      if (newMeal.mealName) singleMeal.mealName = newMeal.mealName;
      if (newMeal.mealPrice) singleMeal.mealPrice = newMeal.mealPrice;
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
}

export default mealsService;
