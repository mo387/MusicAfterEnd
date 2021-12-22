export default function (context) {
  context.$http.get('/searchSong',
    {
      params: {
        keyword: context.$store.state.Searchcontent
      }
    }
  ).then(res => {
    context.$store.commit('set_SearchSong', res.data.musicData)
    context.$store.state.pageIndex = res.data.page
    // console.log(this.$store.state.pageIndex)
    context.$store.state.resultNum = res.data.total
    // console.log(this.$store.state.resultNum)
  })
}
