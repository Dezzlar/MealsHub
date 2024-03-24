import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchInfo) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchInfo];
    if (!locationMock) {
      reject("location not found!!");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const camelizedResult = camelize(result);
  const { geometry = {} } = camelizedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
