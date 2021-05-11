import styled from 'styled-components';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.35;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-right: 1px solid lightgray;
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;
`

export const ChatIcon = styled(Chat)`
    margin-right: 2vw;
    font-size: 24px !important;
`

export const DonutLargeIcon = styled(DonutLarge)`
    margin-right: 2vw;
    font-size: 24px !important;
`

export const MoreVertIcon = styled(MoreVert)`
    margin-right: 2vw;
    font-size: 24px !important;
`


export const Searchbar = styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 39px;
    padding: 10px;
    `

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
`

export const SearchOutlinedIcon = styled(SearchOutlined)`
    margin-right: 2vw;
    font-size: 24px !important;
`
export const SearchInput = styled.input`
    border: none;
    outline-width: 0;
    margin-left: 10px;
`

export const ChatCardsContainer = styled.div`
    flex: 1;
    background-color: white;
    overflow: scroll;
`

export const ChatCardContainer = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
        background-color: #ebebeb;
    }
`

export const ChatCardInfo = styled.div`
    margin-left: 15px;
    h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }
`

