const orders = [
  {
    orderID: 1,
    userID: 4,
    menuID: 1,
    orderDate: '2019-02-14',
    orderBill: 4050,
    orderItems: [
      {
        mealName: 'Coconut Rice',
        mealPrice: 780,
      },
      {
        mealName: 'Okra Stew',
        mealPrice: 1670,
      },
      {
        mealName: 'Yam & Fish Sauce',
        mealPrice: 1600,
      },
    ],
  },
  {
    orderID: 2,
    userID: 6,
    menuID: 1,
    orderDate: '2019-02-14',
    orderBill: 2270,
    orderItems: [
      {
        mealName: 'Moi Moi',
        mealPrice: 900,
      },
      {
        mealName: 'Curried Plantain',
        mealPrice: 550,
      },
      {
        mealName: 'Fish & Chips',
        mealPrice: 820,
      },
    ],
  },
  {
    orderID: 3,
    userID: 1,
    menuID: 2,
    orderDate: '2019-02-15',
    orderBill: 2930,
    orderItems: [
      {
        mealName: 'Egusi Soup & Semo',
        mealPrice: 1250,
      },
      {
        mealName: 'Chicken Noodles',
        mealPrice: 860,
      },
      {
        mealName: 'Fish & Chips',
        mealPrice: 820,
      },
    ],
  },
];

export default orders;
