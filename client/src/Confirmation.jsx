import React, { Component } from 'react';

const Confirmation = ({ firstName }) => {
    return (
        <div className="Confirmation">
          {firstName ?
              `Thank you ${firstName} for your interest in this position. We will get back to you shortly` :
              `Thank you for your interest in this position. We will get back to you shortly.`
          }
        </div>
    );
};

export default Confirmation;
