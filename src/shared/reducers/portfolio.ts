import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import store from '../init-store'

export const SET_INITIALIZED: string = 'SET_INITIALIZED'
export const SET_SECTIONS_OFFSETS: string = 'SET_SECTIONS_OFFSETS'
export const SET_ACTIVE_NAV: string = 'SET_ACTIVE_NAV'

export const initial_state = {
    active_nav: 'profile',
    section_offset: {},
    data: {},
    intialized: false,
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: initial_state,
    reducers: {
        [SET_INITIALIZED]: (state, action: PayloadAction<any>) => ({ ...state, initialized: action.payload }),
        [SET_ACTIVE_NAV]: (state, action: PayloadAction<any>) => ({ ...state, active_nav: action.payload }),
        [SET_SECTIONS_OFFSETS]: (state, action: PayloadAction<any>) => ({ ...state, section_offsets: action.payload }) 
    }
})

const { actions } = portfolioSlice

export const setSectionsOffsets = () => (dispatch) => {

    const getOffset = (selector: string): number => {
        try {
            const element: HTMLElement = document.querySelector(selector)
            return element.offsetTop
        } catch (error) { return 0 }
    }

    const offsets: object = {
        profile: getOffset('#profile'),
        experiences: getOffset('#experiences'),
        abilities: getOffset('#abilities'),
        projects: getOffset('#projects'),
        contact: getOffset('#contact')
    }

    dispatch(actions[SET_SECTIONS_OFFSETS](offsets))
    dispatch(actions[SET_INITIALIZED](true))
}

export const windowScroll = (offsets, getActiveNav) => (dispatch) => {
    const { profile, experiences, abilities, projects, contact } = offsets
    const currentOffsetY = window.scrollY
    const action = actions[SET_ACTIVE_NAV]

    const active_nav = getActiveNav()

    if (currentOffsetY >= profile && currentOffsetY < experiences) {
        if (active_nav !== 'Profile') dispatch(action('Profile'))
    } else if (currentOffsetY >= experiences && currentOffsetY < abilities) {
        if (active_nav !== 'Experiences') dispatch(action('Experiences'))
    } else if (currentOffsetY >= abilities && currentOffsetY < projects) {
        if (active_nav !== 'Abilities') dispatch(action('Abilities'))
    } else if (currentOffsetY >= projects && currentOffsetY < contact) {
        if (active_nav !== 'Projects') dispatch(action('Projects'))
    } else if (currentOffsetY >= contact) {
        if (active_nav !== 'Contact') dispatch(action('Contact'))
    }
}


export const addWindowEvents = (offsets, getActiveNav) => (dispatch) => {
    window.addEventListener('scroll', () => {
        dispatch(windowScroll(offsets, getActiveNav))
    })

    window.addEventListener('resize', () => {
        dispatch(setSectionsOffsets())
    })

}

export default portfolioSlice