export const initialState = {
    isModalOpen: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        default: throw new Error('Error')
    }
}

export default reducer