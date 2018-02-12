<template>
    <div>
        <h1>Movie Details</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'MovieList' }" class="btn btn-success">Return to Movies</router-link></div>
        </div>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Title</td>
                <td>Year</td>
                <td>Language</td>
                <td>Director</td>
                <td>Nationality</td>
                <td>BirthDate</td>
                <td>Genre</td>
                <td>Synopsys</td>
                <td>Mark</td>
            </tr>
            </thead>
            <tbody>
                <tr v-model="movie">
                    <td>{{ movie.title }}</td>
                    <td>{{ movie.year }}</td>
                    <td>{{ movie.language }}</td>
                    <td>{{ movie.director }}</td>
                    <td>{{ movie.nationality }}</td>
                    <td>{{ movie.birthDate }}</td>
                    <td>{{ movie.genre }}</td>
                    <td>{{ movie.synopsys }}</td>
                    <td>{{ movie.mark }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
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
    }
}
</script>
