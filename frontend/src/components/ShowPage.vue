<template>
  <div>
    <h1>상세 내용</h1>
    <div v-for="item in movie" class="movie">
      <img v-bind:src="item.poster" class="poster">
      <div>
        <strong>{{ item.name }}<br></strong>
        <strong>{{ item.year }}년. {{ item.director }}감독<br></strong>
        <router-link :to="{ name: 'index'}">뒤로가기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/movies/${id}`)
      .then((response) => {
        this.movie = response.data
      })
  },
  data: function () {
    return {
      movie: {}
    }
  }
}
</script>
