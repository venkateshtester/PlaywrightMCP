import { test, expect, request } from '@playwright/test';
import Ajv from 'ajv';

test('GET product details from fakestoreapi.in', async () => {
  // 1. Define the API endpoint URL
  const endpoint = 'https://fakestoreapi.in/api/products/2';

  // 2. Send a GET request to the endpoint
  const apiRequest = await request.newContext();
  const response = await apiRequest.get(endpoint);

  // 3. Verify the response status is 200
  expect(response.status()).toBe(200);

  // 4. Validate the response contains required keys in the 'product' object
  const body = await response.json();
  expect(body).toHaveProperty('product.id');
  expect(body).toHaveProperty('product.title');
  expect(body).toHaveProperty('product.price');
  expect(body).toHaveProperty('product.description');

  // 5. Optionally validate the data types using a JSON schema (Ajv)
  const schema = {
    type: 'object',
    properties: {
      product: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          title: { type: 'string' },
          price: { type: 'number' },
          description: { type: 'string' },
        },
        required: ['id', 'title', 'price', 'description'],
      },
    },
    required: ['product'],
  };
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  expect(validate(body)).toBe(true);

  // 6. Log the product title and price to the console
  console.log('Product Title:', body.product.title);
  console.log('Product Price:', body.product.price);
});
