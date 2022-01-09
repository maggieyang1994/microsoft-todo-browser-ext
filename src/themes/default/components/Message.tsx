import React, { useCallback } from 'react';
import { Snackbar, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux';
import messageSlice from '../../../redux/message';
import MuiAlert from '@material-ui/lab/Alert';

type MessageProps = {};

const Message: React.FC<MessageProps> = () => {
  const dispatch = useDispatch();
  const { content, options } = useSelector((state: State) => state.message);
  let { snackbar, alert, link } = options

  const handleClose = useCallback(() => {
    dispatch(messageSlice.actions.hideMessage())
  }, [])

  const {callback, linkContent} = link || {}
  const defaultLink = link ? (
    <Link href="#" onClick={callback}>
      {linkContent}
    </Link>
  ): null;

  const mergedAlertOptions = {
    onClose: handleClose,
    action: defaultLink,
    ...alert
  }

  return (
      <Snackbar {...snackbar}>
        <MuiAlert {...mergedAlertOptions}>
          {content}
        </MuiAlert>
      </Snackbar>
  )
}

export default Message