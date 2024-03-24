import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found!!!");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurants) => {
    restaurants.photos = restaurants.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restaurants,
      address: restaurants.vicinity,
      isOpenNow:
        restaurants.opening_hours && restaurants.opening_hours.open_now,
      isClosedTemporarily: restaurants.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
