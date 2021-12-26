export async function islike (context, songindex) {
  return new Promise((resolve, reject) => {
    const Songindex2 = songindex
    const UserID = context.$store.state.userId
    const SongID = context.$store.state.playlist[Songindex2].songID
    const parms2 = { userID: UserID, songID: SongID }
    context.$http({
      url: '/islike', params: parms2
    }).then(res => {
      const data = res.data
      resolve(data)
    })
  })
}
export async function like (context) {
  if (context.love !== 'color: #ec4141') {
    // 安军，在这部分发送网络请求，添加这首歌到喜欢的歌单
    const Songindex = context.$store.state.songindex
    const likeuserID = context.$store.state.userId
    const likesongID = context.$store.state.playlist[Songindex].songID
    const parms = { userID: likeuserID, songID: likesongID }
    const { data } = await context.$http({
      url: '/like', params: parms
    })
    // console.log(data)
    if (data.success === true) {
      // 添加成功
      context.$tip.showWarm({ id: 'globalWarm', text: '成功添加至喜欢' })
      context.love = 'color: #ec4141'
    } else {
      // 添加失败
      context.$tip.showWarm({ id: 'globalWarm', text: '添加至喜欢失败' })
      context.love = 'color: white;-webkit-text-stroke: 1px #000'
    }
  } else {
    console.log('进删除了')
    const Songindex1 = context.$store.state.songindex
    const likeuserID1 = context.$store.state.userId
    const likesongID1 = context.$store.state.playlist[Songindex1].songID
    const parms1 = { userID: likeuserID1, songID: likesongID1 }
    const { data } = await context.$http({
      url: '/delelike', params: parms1
    })
    if (data.success === true) {
      // 删除成功
      context.$tip.showWarm({ id: 'globalWarm', text: '删除成功' })
      context.love = 'color: white;-webkit-text-stroke: 1px #000'
    } else {
      // 删除失败
      context.$tip.showWarm({ id: 'globalWarm', text: '删除失败' })
      context.love = 'color: #ec4141'
    }
  }
  const { data } = await context.$http({ url: '/songList', params: { listName: context.$store.state.rightNowSongListName, userID: context.$store.state.userId } })
  context.$store.commit('set_rightNowSongList', data)
}
