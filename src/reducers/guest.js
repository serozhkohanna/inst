const initialState = {
  followers: ['user1','user2', 'user3'],
  userPic:'',
  userName:'user123'
}
export default function (state = initialState, action) {
  switch (action.type) {
    case 'FOLLOW':
      return {...state,followers:[...state.followers, action.followers] }
    case 'UNFOLLOW':
      return {...state, followers: [ action.followers] };
    default:
      return state
  }
}
