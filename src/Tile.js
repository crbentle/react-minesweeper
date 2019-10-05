import React from 'react'
import PropTypes from 'prop-types'

const Tile = (props) => {
    const className = 'tile-' + props.status;
    return (
        <div className={'tile ' + className}>
            <span className={'mine mine-' + props.mines} data-mines={props.mines}  />
        </div>
    )
}

Tile.propTypes = {
    status: PropTypes.oneOf(['cleared', 'unknown', 'flagged', 'question']).isRequired,
    mines: PropTypes.number.isRequired
}

export default Tile
