import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


const SuccessMessage = props => (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={props.notification}
        autoHideDuration={3000}
        onClose={props.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Your quote was added!</span>}
        // action={[
        //   <IconButton key="close" aria-label="Close" color="inherit" onClick={props.handleClose}>
        //     <CloseIcon />
        //   </IconButton>,
        // ]}
      />
    </div>
  );
  
  export default SuccessMessage;
  