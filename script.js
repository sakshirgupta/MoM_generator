const uploadForm = document.getElementById("uploadForm");
const uploadedVideo = document.getElementById("uploadedVideo");
const generateMomButton = document.getElementById("generateMomButton");

uploadForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   const videoFile = document.getElementById("videoFile").files[0];
  const videoFile = URL.createObjectURL( document.getElementById("videoFile").files[0]);
  const meetingId = document.getElementById("meetingId").value;

  if (videoFile && meetingId) {
    // here we can implement the code to upload the video to the server
    console.log(document.getElementById("videoFile").files);
    uploadedVideo.src = videoFile
    document.getElementById("result").style.display = "flex";
    // generateMomButton.style.display = "block";
    alert("Video uploaded successfully with Meeting ID: " + meetingId);
  } else {
    alert("Please select a video and enter Meeting ID to upload.");
  }
});
generateMomButton.addEventListener("click", function () {
  // We need to Implement the code to generate MoM here
  alert("Generating MoM...");
});