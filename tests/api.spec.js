const { test, expect } = require('@playwright/test');

const API_URL = 'https://reqres.in/api';

// API TC01: Get users
test('GET users should return 200', async ({ request }) => {
    const response = await request.get(`${API_URL}/users?page=2`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
});

// API TC02: Get single user
test('GET single user should return user details', async ({ request }) => {
    const response = await request.get(`${API_URL}/users/2`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.id).toBe(2);
});

// API TC03: Create user
test('POST should create a user', async ({ request }) =>    {
    const response = await request.post(`${API_URL}/users`, {
        data: {
            name: 'Megha',
            job: 'QA Tester'
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('Megha');
    expect(body.job).toBe('QA Tester');
});

// API TC04: User not found
test('GET invalid user should return 404', async ({ request }) => {
    const response = await request.get(`${API_URL}/users/9999`);

    expect(response.status()).toBe(404);
});

// API TC05: Missing password
test('Login without password should return error', async ({ request }) => {
    const response = await request.post(`${API_URL}/login`, {
        data: {
            email: 'peter@klaven'
        }
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body.error).toBeTruthy();
});