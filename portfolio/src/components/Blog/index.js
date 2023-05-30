import React from 'react'
import blogInfo from './Data'

import {
    BlogContainer,
    BlogTitle,
    BlogArticlesContainer,
    BlogArticleBox,
    BlogArticleTitle,
    BlogArticleSummary,
} from './BlogElements'

const Blog = () => {
    return (
        <BlogContainer id="blog">
            <BlogTitle>My Thoughts...</BlogTitle>
            <BlogArticlesContainer>
                {blogInfo.map((element) => {
                    return (
                        <BlogArticleBox>
                            <BlogArticleTitle>{element.title}</BlogArticleTitle>
                            <BlogArticleSummary>
                                {element.summary}
                            </BlogArticleSummary>
                        </BlogArticleBox>
                    )
                })}
            </BlogArticlesContainer>
        </BlogContainer>
    )
}

export default Blog
