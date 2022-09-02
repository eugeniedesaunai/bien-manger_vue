<template lang="">
    <article class="designGreen absolute"></article>
    <article class="formSearch absolute">
    </article>
</template>
<script>
export default {
    name: "SearchForm",
}
</script>
<style scoped>
.designGreen {
    z-index: 1;
    top: 59%;
    left: 14%;
    background-color: #E0F2C4;
    width: 50vw;
    height: 50vw;
}

.formSearch {
    z-index: 2;
    width: 60vw;
    height: 60vw;
    top: 62%;
    left: 18%;
    background-color: #D9D3CC;
    border: solid rgba(29, 40, 75, 0.7);
}

@media(min-width: 768px) {
    .designGreen {
        top: 35%;
        left: 50%;
        width: 30vw;
        height: 30vw;
    }

    .formSearch {
        top: 37%;
        left: 54%;
        width: 35vw;
        height: 35vw;
    }
}

@media(min-width: 1280px) {
    .designGreen {
        top: 40%;
        left: 30%;
        width: 40vw;
        height: 40vw;
    }

    .formSearch {
        top: 45%;
        left: 35%;
        width: 40vw;
        height: 40vw;
    }
}
</style>