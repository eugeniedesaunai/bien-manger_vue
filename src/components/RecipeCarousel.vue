<template>
    <Carousel :settings="settings" :breakpoints="breakpoints" v-if="getRecipes.length!==0">
        <Slide v-for='recipe in getRecipes' :key='recipe'>
            <div class="carousel__item ">
                <MiniRecipeSeason :recipe='recipe'></MiniRecipeSeason>
            </div>

        </Slide>
        <template v-slot:addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import MiniRecipeSeason from '@/components/SearchBySeason/MiniRecipeSeason.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
    name: 'RecipeCarousel',
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                mouseDrag: false,
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
        };
    },
    props: {
        seasonId: String,
    },
    components: {
        MiniRecipeSeason,
        Carousel,
        Slide,
        Navigation,

    },
    computed: {
        getRecipes() {
            return this.$store.getters['recipe/getRecipePerSeason'](this.seasonId)
        }
    },
    created() {
        this.$store.dispatch('recipe/checkRecipe');
    },
}
</script>
<style >
.carousel {
    width: 90%;
    height: ;
    margin: auto;
}

.carousel__item {
    min-height: 200px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    transform: translate(0);
    background-color: rgba(169, 191, 153, 0.5);
}

.carousel__prev:focus,
.carousel__next:focus {
    background-color: rgba(169, 191, 153, 0.9);
}


.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}
</style>