import React from 'react'
const logo = 'https://i.imgur.com/v727TrS.png'

export default class IconComponent extends React.Component {
  render() {
    return (
      <img src={logo} alt="something not good" style={styles.icon}/>
    )
  }
}

const styles = {  
  icon: {
    width: "10%"
  }
}