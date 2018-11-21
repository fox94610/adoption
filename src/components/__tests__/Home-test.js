import Home from '../Home';

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

// Test success
test('get local animal list', async () => {
  const json = `{ "dogs": [
                    {
                      "image": "img/1.jpeg",
                      "source": "https://unsplash.com/photos/ybHtKz5He9Y",
                      "petName": "Jenny"
                    }
                  ]
                }`;

  // Overwrote fetch with fake fetch method with fake response
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200, null, json)));
  const home = new Home({});
  const animal = 'dogs';
  const data = await home.fetchData(animal);
  expect(data[animal]).toBeDefined(); // Make sure key 'dogs' exists and is defined
});


// TODO Test failure
/* test('get local animal list', async () => {
  // Overwrote fetch with fake fetch
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(404, null, null)));
  const home = new Home({});
  const animal = 'dogs';
  const data = await home.fetchData(animal);
  expect(data[animal]).toBeDefined();
}); */