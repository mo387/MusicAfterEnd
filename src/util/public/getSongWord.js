export default async function (context) {
  const thissongindex = context.$store.state.songindex
  // console.log(thissongindex)
  const songID = context.$store.state.playlist[thissongindex].songID
  // console.log(songID)
  const parms = { songID: songID }
  const songWordObj = await context.$http({ url: '/songWord', params: parms })
  // console.log(songWordObj.data.songWord)// success
  context.$store.commit('set_songWord', songWordObj.data.songWord)
}
