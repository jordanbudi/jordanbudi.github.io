// Function to handle success
function handleSuccess(stream) {
  console.log('Camera access granted');
  // Do something with the stream if needed, or just stop all tracks to release the camera
  stream.getTracks().forEach(track => track.stop());
}

// Function to handle error
function handleError(error) {
  console.error('Error accessing webcam:', error);
}

// Request access to the webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess)
  .catch(handleError);
