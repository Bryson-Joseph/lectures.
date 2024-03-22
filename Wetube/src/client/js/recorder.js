const startBtn = document.getElementById('startBtn')
const preview = document.getElementsById('preview')

const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  })
  video.srcObject = stream
  video.play()
}

startBtn.addEventListener('click', handleStart)
