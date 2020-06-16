
import axios from 'axios';


function handleServiceFailure() {
  return ( err ) => {
    if ( err && err.response && err.response.status ) {
      // the user should be informed there was an error in the service
      let message = {
        messageType: 'warning', 
        messageText: 'An error occured on the server: ' + err.response.statusText,
        timeout: 0,
        id: new Date().toTimeString()
      };
      switch ( err.response.status ) {
        case 403:
          console.log( message.messageText );
        case 500:
          console.log( message.messageText );
        default:
          console.log(message.messageText);
      }
    }
    throw err;
  };
}
export const service = endPoint => ({
  get(){
    return axios
      .get( endPoint  )
      .catch( handleServiceFailure() );
  },

  post( data ){
    return axios
      .post( endPoint, data )
      .catch( handleServiceFailure() );
  }
})
