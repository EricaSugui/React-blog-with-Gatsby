import * as React from 'react'
import propTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({ url, title }) => {
    const completeURL = `https://esuguimo.com.br/${url}`
    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>

            <ReactDisqusComments
            shortname="esuguimo"
            identifier={completeURL}
            title={title}
            url={completeURL}
            />

        </S.CommentsWrapper>
        
    )
}

Comments.propTypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
}

export default Comments