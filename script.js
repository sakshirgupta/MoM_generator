const uploadForm = document.getElementById('uploadForm');
const uploadedVideo = document.getElementById('uploadedVideo');
const generateMomButton = document.getElementById('generateMomButton');

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const videoFile = document.getElementById('videoFile').files[0];
    const meetingId = document.getElementById('meetingId').value;

    if (videoFile && meetingId) {
    // here we can implement the code to upload the video to the server
    uploadedVideo.src = 'Internship.mp4'; 
    uploadedVideo.style.display ='block';
    generateMomButton.style.display = 'block'
    alert('Video uploaded successfully with Meeting ID: ' + meetingId);
    } else {
    alert('Please select a video and enter Meeting ID to upload.');
    }
});
generateMomButton.addEventListener('click', function() {
    // We need to mplement the code to generate MoM here
    alert('Generating MoM...');
  });