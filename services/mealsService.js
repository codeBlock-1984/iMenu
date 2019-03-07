// import Validate from '../middlewares/validate';
import db from '../database/models';

const { Meal } = db;

// const { validate } = Validate;

class mealsService {
  static createMeal(req, res) {
    const singleMeal = req.body;
    return Meal.create(singleMeal).then((meal) => {
      return res.status(201).json({
        status: 201,
        data: meal,
      });
    }).catch((error) => {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error!',
      });
    });
  }

  static editMeal(req, res) {
    const mealID = parseInt(req.params.id, 10);
    const { name, price } = req.body;
    return Meal.update({ name, price }, { where: { id: mealID } })
      .then((meal) => {
        if (meal === null || meal === undefined) {
          return res.status(404).json({
            status: 404,
            error: 'Meal with specified ID not found!',
          });
        }
        return res.status(200).json({
          status: 200,
          data: meal,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error,
        });
      });
  }

  static getMeals(req, res) {
    return Meal.findAll({ attributes: ['id', 'name', 'price', 'createdAt', 'updatedAt'] }).then((allMeals) => {
      return res.status(200).json({
        status: 200,
        data: allMeals,
      });
    }).catch((error) => {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error!',
      });
    });
  }

  static getMeal(req, res) {
    const mealID = parseInt(req.params.id, 10);
    return Meal.findOne({ attributes: ['id', 'name', 'price', 'createdAt', 'updatedAt'], where: { id: mealID } })
      .then((meal) => {
        if (!meal) {
          return res.status(404).json({
            status: 404,
            error: 'Meal with specified ID not found!',
          });
        }
        return res.status(200).json({
          status: 200,
          data: meal,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }

  static removeMeal(req, res) {
    const mealID = parseInt(req.params.id, 10);
    return Meal.destroy({ where: { id: mealID } })
      .then((meal) => {
        return res.status(200).json({
          status: 200,
          data: meal,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }
}

export default mealsService;
