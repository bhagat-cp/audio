// const mediaList = {
//   audioInput: [],
//   audioOutput: [],
// };

// const audioInputHTML = document.querySelector("#audio-input");
// const constraints = {
//   audio: true,
//   video: false,
// };

// const volumeContHTML = document.querySelector('#volume-cont');
// const actualVolumeHTML = document.querySelector('#actual-volume');

// async function getMedia(constraints) {
//   let stream = null;
//   console.log("hgfcgjuyhfdcukyf");
//   try {
//     stream = await navigator.mediaDevices.getUserMedia(constraints);
//     console.log(stream);
//     /* use the stream */

//     audioContext = new AudioContext();
//     analyser = audioContext.createAnalyser();
//     microphone = audioContext.createMediaStreamSource(stream);
//     javascriptNode = audioContext.createScriptProcessor(256, 1, 1);

//     analyser.smoothingTimeConstant = 0.8;
//     analyser.fftSize = 1024;

//     microphone.connect(analyser);
//     analyser.connect(javascriptNode);
//     javascriptNode.connect(audioContext.destination);
//     javascriptNode.onaudioprocess = function () {
//       var array = new Uint8Array(analyser.frequencyBinCount);
//       analyser.getByteFrequencyData(array);
//       var values = 0;

//       var length = array.length;
//       for (var i = 0; i < length; i++) {
//         values += array[i];
//       }

//       var average = values / length;

//       console.log(Math.round(average));
//       // colorPids(average);
//       actualVolumeHTML.style.width = `${Math.round(average)}%`
//     };
//   } catch (err) {
//     /* handle the error */
//   }
// }

// function getList() {
//   if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
//     console.log("enumerateDevices() not supported.");
//     return;
//   }

//   // List cameras and microphones.

//   navigator.mediaDevices
//     .enumerateDevices()
//     .then(function (devices) {
//       devices.forEach(function (device) {
//         // console.log(device);
//         // console.log(
//         //   device.kind + ": " + device.label + " id = " + device.deviceId
//         // );
//         if (device.kind === "audioinput") {
//           mediaList.audioInput.push({
//             label: device.label,
//             deviceId: device.deviceId,
//             groupId: device.groupId,
//           });
//         }
//         if (device.kind === "audiooutput") {
//           mediaList.audioInput.push({
//             label: device.label,
//             deviceId: device.deviceId,
//             groupId: device.groupId,
//           });
//         }
//       });
//       displayInputDevices();
//     })
//     .catch(function (err) {
//       console.log(err.name + ": " + err.message);
//     });
// }

// getList();

// // //////////////////////////////////////////////////////////

// const displayInputDevices = () => {
//   let option = ``;
//   mediaList.audioInput.map((audio) => {
//     if (audio.deviceId === "default")
//       option += `<option checked value="${audio.deviceId}"> ${audio.label} </option>`;
//     else {
//       option += `<option value="${audio.deviceId}"> ${audio.label} </option>`;
//     }
//   });
//   audioInputHTML.innerHTML += option;
// };

// // //////////////////////////////////////////////////////////////

// const audioTestBtnHTML = document.querySelector("#audio-test-btn");
// let testAudio = false;

// const testVolume = async (e) => {
//   testAudio = !testAudio;
//   console.log("aaaa");
//   if (testAudio) {
//     console.log("hey");
//     // getMedia()
//     getMedia(constraints);
//   } else {
//   }
// };

// audioTestBtnHTML.addEventListener("click", testVolume);




// // //////////////////////////////////////////////////////////////////

// with p5js

var mic
var vol = 0
const audioBtnH = document.querySelector('#audioBtn');

function setup() {
  createCanvas(710, 200);
  // Create an Audio input
  mic = new p5.AudioIn();
     // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
   var vol = mic.getLevel();
  
  fill(127);
  stroke(0);
  
  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 0.5, height, 0);
  ellipse(width/2, h - 25, 50, 50);
}

function touchStarted() {
  audioBtnH.addEventListener('click', () => {
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }

  })
}
// ///////////////////////////////////////////////////////////////
