<template>
  <div>
    <h1>Add Movie</h1>
    <form v-on:submit.prevent="addMovie">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="movie.title" required>
          </div>
        </div>
        </div>


        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Year:</label>
              <input type="number" min="1850" max="2050" class="form-control col-md-6" v-model="movie.year" />
            </div>
          </div>
        </div><br />

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Language:</label>
              <input type="text" class="form-control col-md-6" v-model="movie.language" />
            </div>
          </div>
        </div><br />

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Director:</label>
              <input type="text" class="form-control col-md-6" v-model="movie.director" />
            </div>
          </div>
        </div><br />

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Nationality:</label>
              <input type="text" class="form-control col-md-6" v-model="movie.nationality" />
            </div>
          </div>
        </div><br />

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>BirthDate:</label>
              <input type="date" class="form-control col-md-6" v-model="movie.birthDate" />
            </div>
          </div>
        </div><br />

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Genre:</label>
              <input type="text" class="form-control col-md-6" v-model="movie.genre" />
            </div>
          </div>
        </div><br />

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Synopsys:</label>
              <input type="text" class="form-control col-md-6" v-model="movie.synopsys" />
            </div>
          </div>
        </div><br />

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Mark:</label>
              <input type="number" min="0" max="5" class="form-control col-md-6" v-model="movie.mark" />
            </div>
          </div>
        </div><br />




        <div class="form-group">
          <button class="btn btn-primary">Add Movie</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          movie:{}
        }
    },
    methods: {
      addMovie(){
        let uri = 'http://localhost:4000/movies/add';
        this.axios.post(uri, this.movie).then((response) => {
          this.$router.push({name: 'MovieList'})
        })
    }
  }
}
</script>
