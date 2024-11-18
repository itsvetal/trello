import React from 'react';
import './Error.scss';

interface ErrorProps {
  error: string;
}

function Error({ error }: ErrorProps): React.ReactElement {
  return <div className="error-text">Error: {error}</div>;
}

export default Error;
