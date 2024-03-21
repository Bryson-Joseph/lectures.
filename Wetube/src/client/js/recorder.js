const startBtn = document.getElementById('startBtn')
const preview = document.getElementsById('preview')

const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  })
  video.srcObject
}

startBtn.addEventListener('click', handleStart)
