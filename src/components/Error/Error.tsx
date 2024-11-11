import React from 'react';
import './Error.scss';

interface ErrorProps {
  error: string;
}

function Error({ error }: ErrorProps): React.ReactElement {
  return <p className="error-text">Error: {error}</p>;
}

export default Error;
