export default function (context) {
  context.$http.get('/searchSinger',
    {
      params: {
        keyword: context.$store.state.Searchcontent
      }
    }
  ).then(res => {
    context.$store.commit('set_SearchSinger', res.data.singerData)
    // this.$store.state.pageIndex = res.data.page
    // console.log(this.$store.state.pageIndex)
    // this.$store.state.resultNum = res.data.total
    // console.log(this.$store.state.resultNum)
  })
}
