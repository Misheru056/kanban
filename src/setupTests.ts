import "@testing-library/jest-dom";

const mockGeolocation = {
  getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
      coords: {
        latitude: 51.1,
        longitude: 45.3
      }
    }))),
  watchPosition: jest.fn(),
  clearWatch: jest.fn()
};
// @ts-ignore
navigator.geolocation = mockGeolocation;

