<template>
        <div class='backgroundStatics'></div>
        <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #131E28;
}

.texteColor {
  color: #131E28;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
        background-color: D9D3CC;
        margin: 0;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .backgroundStatics {
        position: fixed;
        z-index:-1;
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
