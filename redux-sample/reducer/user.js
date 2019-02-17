const LOAD = "user/LOAD"
const ADD = "user/ADD"

const initialState = {
  users: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        users: state.users ? state.users : action.results
      }
    case ADD:
      return {
        users: state.users ? [...state.users, action.results] : [action.results]
      }
    default:
      return state
  }
}

export function load() {
  // clientはaxiosの付与したクライアントパラメータ
  // 非同期処理をPromise形式で記述する
  return (dispatch, getState, client) => {
    return client
      .get("https://randomuser.me/api/")
      .then(res => res.data)
      .then(data => {
        const results = data.results
        // dispatchしてreducer呼び出し
        dispatch({ type: LOAD, results })
      })
  }
}

export function add(user) {
  // ユーザを追加
  return (dispatch, getState, client) => {
    // 疑似ユーザ作成(本来はサーバ送信&DB保存)
    const data = {
      results: [
        {
          gender: user.gender,
          name: {
            first: user.firstname,
            last: user.lastname
          },
          email: user.email,
          picture: {
            thumbnail: "https://avatars1.githubusercontent.com/u/771218?s=460&v=4"
          }
        }
      ]
    }
    const results = data.results[0]
    dispatch({ type: ADD, results })
    return Promise.resolve()
  }
}