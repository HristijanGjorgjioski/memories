import React from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import {Link} from 'react-router-dom'

import useStyles from './styles'

const Paginate = () => {
    const classes = useStyles()

    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={() => (
                <PaginationItem {...item} component={Link} />
            )}
        />
    )
}

export default Paginate
