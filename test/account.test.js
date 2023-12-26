import React from 'react';
import { render, screen, fireEvent , waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Account from '../src/pages/Account';
import '@testing-library/jest-dom'

jest.mock("../src/components/Footer/Footer", () => () => <div data-testid="mocked-footer">Mocked Footer</div>);

jest.mock('../src/components/CourseCard/CardPaid', () => ({ picture, course, rating, topic, author, level, module, time, price, isPaid }) => (
    <div data-testid="mock-card">
      {/* Mocked CardPaid component content */}
    </div>
));

jest.mock('../src/components/Allert/AllertReset', () => ({ message, type }) => (
    <div data-testid="mock-alert">
        {/* Mocked AllertReset component content */}
    </div>
));

    // Mocking react-router-dom
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

    // Mocking Firebase and its storage functions
jest.mock('../src/lib/firebaseInit', () => ({
    getStorage: jest.fn(),
    ref: jest.fn(),
    uploadBytes: jest.fn(),
    getDownloadURL: jest.fn(),
}));

    // Mocking API functions
jest.mock('../src/api/user', () => ({
    consumeUserApi: {
        getCurrentUser: jest.fn(() => Promise.resolve({ data: {} })),
        updateUser: jest.fn(() => Promise.resolve({ status: 'OK' })),
        updatePassword: jest.fn(() => Promise.resolve({ status: 'OK' })),
    },
}));

jest.mock('../src/api/order', () => ({
    consumeOrderApi: {
        getOrderUser: jest.fn(() => Promise.resolve({ status: 'OK', data: [] })),
    },
}));


describe('Account Component', () => {
    it('renders Account component', async () => {

        render(<Account />);

        
        expect(screen.getByText('Kembali ke Beranda')).toBeInTheDocument();

 
    });
});