import React from 'react';

const ActiveLink = ({ to }) => {
    return (
        <NavLink
            to={`contacts/${contact.id}`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
        >
            {/* other code */}
        </NavLink>
    );
};

export default ActiveLink;