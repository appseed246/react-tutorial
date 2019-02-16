import React from "react"

export default class Rect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { number: this.props.num }
  }

  componentWillMount() {
    const { bgcolor } = this.props

    this.rectStyle = {
      background: bgcolor,
      display: "table-cell",
      border: "1px #000 solid",
      fontSize: 20,
      width: 30,
      height: 30,
      textAlign: "center",
      verticalAlign: "center",
    }
  }

  countUp(num) {
    // ステートオブジェクトのパラメータを更新→renderメソッドが呼ばれ、再描画される
    this.setState({ number: num + 1 })
  }

  render() {
    return (
      <div style={this.rectStyle} onClick={(e) => this.countUp(this.state.number)}>
        <span style={{ color: "#eeeeee" }}>{this.state.number}</span>
      </div>
    )
  }
}