import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

export default ({ className, children, style, ariaLabel, opener, closer }) => (
  <div
    role="list"
    aria-label={ariaLabel}
    className={classnames(className, styles.commaSeparatedList)}
    style={style}
  >
    {opener}
    {React.Children.map(children, child => (
      <div role="listitem" className={styles.listItem}>
        {child}
      </div>
    ))}
    {closer}
  </div>
)