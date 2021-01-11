import React from 'react';
import { render } from '@testing-library/react';
import Company from './Company';
import { MemoryRouter } from 'react-router-dom';
import { UserProfile } from './testUser';

it('renders without crashing', function () {
    render(
        <MemoryRouter>
            <UserProfile>
                <Company />
            </UserProfile>
        </MemoryRouter>
    );
});


it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProfile>
                <Company />
            </UserProfile>
        </MemoryRouter>    
    );
    expect(asFragment()).toMatchSnapshot();
});