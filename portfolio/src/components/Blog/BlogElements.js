import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BlogContainer = styled.div`
    background-color: #f9f9f9;
    padding: 3rem 1rem 3rem 1rem;
    margin: 0rem 5rem;
    border-radius: 10px;
`

export const BlogTitle = styled.div`
    margin-bottom: 40px;
    text-align: center;
    color: #3f5371;
    align-self: center;
    font-size: 6rem;
`
export const BlogArticlesContainer = styled.div`
    margin: 0.25rem, 1rem;
    background-color: #f9f9f9;
    padding: 1rem 1rem 2.5rem 1rem;
`
export const BlogArticleBox = styled.div`
    border: #6e68e2 1px solid;
    border-left: #6e68e2 6px solid;
    border-radius: 8px;
    margin: 30px 30px 0px 30px;
    padding: 30px 20px 30px 20px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
export const BlogArticleHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BlogArticleTitle = styled.div`
    font-size: 1.5rem;
    color: #565656;
    /* margin-bottom: 10px; */
`

export const BlogArticleDate = styled.h5`
    color: #565656;
    font-weight: lighter;
    margin-bottom: 5px;
`
export const BlogArticleSummary = styled.div`
    color: #565656;
`
export const BlogMore = styled.div`
    text-align: right;
    padding-right: 70px;
    font-style: italic;
`
export const BlogMoreText = styled(Link)`
    color: #a8a8a8;
    text-decoration: none;
    &:hover {
        font-style: italic;
        text-decoration: underline;
        color: #3f5371;
    }
`
