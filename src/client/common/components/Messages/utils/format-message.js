import React from 'react';

export const formatMessage = (message, isMessageHtml) => {
  if (isMessageHtml) {
    return (
      <span id="message-id">
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </span>
    );
  }
  return (<span id="message-id">{message}</span>);
};

export default formatMessage;
