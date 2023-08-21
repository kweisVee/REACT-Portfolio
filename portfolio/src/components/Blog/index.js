import React from 'react'
import blogInfo from './Data'

import {
    BlogContainer,
    BlogTitle,
    BlogArticlesContainer,
    BlogArticleBox,
    BlogArticleHeader,
    BlogArticleTitle,
    BlogArticleDate,
    BlogArticleSummary,
    BlogMore,
    BlogMoreText,
} from './BlogElements'

const Blog = () => {
    const goToArticle = (element) => {
        window.location.assign(element.link)
    }

    const goToArticlesPage = () => {
        window.location.assign('https://dev.to/kweisvee')
    }

    return (
        <BlogContainer id="blog">
            <BlogTitle>BLOG</BlogTitle>
            <BlogArticlesContainer>
                {blogInfo.map((element) => {
                    return (
                        <BlogArticleBox onClick={() => goToArticle(element)}>
                            <BlogArticleHeader>
                                <BlogArticleTitle>
                                    {element.title}
                                </BlogArticleTitle>
                                <BlogArticleDate>
                                    {element.date}
                                </BlogArticleDate>
                            </BlogArticleHeader>
                            <hr
                                style={{
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    borderColor: '#6e68e2',
                                    marginRight: '70%',
                                    borderWidth: '0.5px',
                                }}
                            ></hr>
                            <BlogArticleSummary>
                                {element.summary}
                            </BlogArticleSummary>
                        </BlogArticleBox>
                    )
                })}
            </BlogArticlesContainer>
            <BlogMore>
                <BlogMoreText onClick={() => goToArticlesPage()}>
                    Read more articles &#8594;
                </BlogMoreText>
            </BlogMore>
        </BlogContainer>
    )
}

export default Blog
