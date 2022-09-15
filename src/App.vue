<template>
  <div class='backgroundStatics'></div>
  <router-view />
</template>

<style>
:root {
  --body-bg: #D9D3CC;
}



#app {
  font-family: 'Poppins', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  width: 100vw;
}

body {
  background-color: BF9E80;
  margin: 0;
  overflow-x: hidden;
}

.widthForm {
  margin: auto;
  width: 40vh;
}

.buttonHome {
  margin: 0;
  border-radius: 1rem;
  width: 60vw;
  height: 8vh;
  white-space: normal;
  background-color: rgba(29, 40, 75, 0.7);
}


.buttonForm {
  margin: 0;
  border-radius: 1rem;
  width: 25vw;
  height: 5vh;
  white-space: normal;
  background-color: rgba(29, 40, 75, 0.9);
}

.marginForm {
  margin: 2rem;
}

.backgroundStatics {
  position: fixed;
  z-index: -1;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation .2s infinite;
  opacity: .9;
  visibility: visible;
}

@keyframes bg-animation {
  0% {
    transform: translate(0, 0)
  }

  10% {
    transform: translate(-5%, -5%)
  }

  20% {
    transform: translate(-10%, 5%)
  }

  30% {
    transform: translate(5%, -10%)
  }

  40% {
    transform: translate(-5%, 15%)
  }

  50% {
    transform: translate(-10%, 5%)
  }

  60% {
    transform: translate(15%, 0)
  }

  70% {
    transform: translate(0, 10%)
  }

  80% {
    transform: translate(-15%, 0)
  }

  90% {
    transform: translate(10%, 5%)
  }

  100% {
    transform: translate(5%, 0)
  }
}
</style>
