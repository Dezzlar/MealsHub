import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
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
    return {
      ...restaurants,
      isOpenNow:
        restaurants.opening_hours && restaurants.opening_hours.open_now,
      isClosedTemporarily: restaurants.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
