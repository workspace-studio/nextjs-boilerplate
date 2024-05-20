import React from 'react';

interface ExampleProps {
  children: React.ReactNode;
}

const Example: React.FC<ExampleProps> = ({ children }) => <div>{children}</div>;

export default Example;
