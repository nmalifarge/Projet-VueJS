<template>
    <div>
        <h1>Edit Movie</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'MovieList' }" class="btn btn-success">Return to Movies</router-link></div>
        </div>

        <form v-on:submit.prevent="updateMovie">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="movie.title">
            </div>

            <div class="form-group">
                <label name="product_price">Year</label>
                <input type="number" min="1850" max="2050" class="form-control" v-model="movie.year">
            </div>

            <div class="form-group">
                <label>Language</label>
                <input type="text" class="form-control" v-model="movie.language">
            </div>

            <div class="form-group">
                <label>Director</label>
                <input type="text" class="form-control" v-model="movie.director">
            </div>

            <div class="form-group">
                <label>Nationality</label>
                <input type="text" class="form-control" v-model="movie.nationality">
            </div>

            <div class="form-group">
                <label>BirthDate</label>
                <input type="date" class="form-control" v-model="movie.birthDate">
            </div>

            <div class="form-group">
                <label>Genre</label>
                <input type="text" class="form-control" v-model="movie.genre">
            </div>

            <div class="form-group">
                <label>Synopsys</label>
                <input type="text" class="form-control" v-model="movie.synopsys">
            </div>

            <div class="form-group">
                <label>Mark</label>
                <input type="number" min="0" max="5" class="form-control" v-model="movie.mark">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>




    </div>
</template>

<script>

    export default{
        data(){
            return{
                movie:{}
            }
        },

        created: function(){
            this.getMovie();
        },

        methods: {
            getMovie()
            {
              let uri = 'http://localhost:4000/movies/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.movie = response.data;
                });
            },

            updateMovie()
            {
              let uri = 'http://localhost:4000/movies/update/' + this.$route.params.id;
                this.axios.post(uri, this.movie).then((response) => {
                  this.$router.push({name: 'MovieList'});
                });
            }
        }
    }
</script>
