import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';
import { UserProfile } from './testUser';

it("renders without crashing", function() {
    render(
        <UserProfile>
            <Profile />
        </UserProfile>
    );
});

it("matches snapshot", function() {
    const { asFragment } = render(
        <UserProfile>
            <Profile />
        </UserProfile>
    );
    expect(asFragment()).toMatchSnapshot();
});