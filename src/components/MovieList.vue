<template>
    <div>
        <h1>Movie List</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'AddMovie' }" class="btn btn-primary">Add Movie</router-link>
          </div>
        </div><br />
        Search : <input type="text" v-model="search" placeholder="Search movie.."/>
        <br><br>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>Title</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movie_search">
                    <td>{{ movie.title }}</td>
                    <td><router-link :to="{name: 'MovieDetails', params: { id: movie._id }}" class="btn btn-primary">Details</router-link></td>
                    <td><router-link :to="{name: 'EditMovie', params: { id: movie._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteMovie(movie._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                search: '',
                movies: []
            }
        },

        created: function()
        {
            this.fetchMovies();
        },

        methods: {
            fetchMovies()
            {
              let uri = 'http://localhost:4000/movies';
              this.axios.get(uri).then((response) => {
                  this.movies = response.data;
              });
            },
            deleteMovie(id)
            {
              let uri = 'http://localhost:4000/movies/delete/'+id;
              this.movies.splice(id, 1);
              this.axios.get(uri);
            }
        },
        computed: {
          movie_search: function() {

            return this.movies.filter(m => m.title.indexOf(this.search)!=-1);
          }
        }
    }
</script>
