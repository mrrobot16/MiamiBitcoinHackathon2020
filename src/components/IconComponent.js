import React from 'react'

export default class IconComponent extends React.Component {
  render() {
    return (
      <img src='/images/cryptid.svg' alt="something not good" style={styles.icon}/>
    )
  }
}

const styles = {
  icon: {
    width: "25%"
  }
}
