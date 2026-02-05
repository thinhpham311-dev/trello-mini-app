import React from 'react'
import classNames from 'classnames'

const withHeaderItem = (Component) => {
  return function WithHeaderItem(props) {
    const {
      className,
      hoverable = true,
      ...rest
    } = props

    return (
      <Component
        {...rest}
        className={classNames(
          'header-action-item',
          hoverable && 'header-action-item-hoverable',
          className
        )}
      />
    )
  }
}

export default withHeaderItem
