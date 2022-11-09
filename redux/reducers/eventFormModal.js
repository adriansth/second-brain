const INITIAL_STATE = {
    eventFormOpen: false, // event form not opened
}

const eventFormModalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "OPEN_EVENT_FORM": 
            return {
                ...state,
                eventFormOpen: true,
            };
        case "CLOSE_EVENT_FORM":
            return {
                ...state,
                eventFormOpen: false,
            };
        default: 
            return {
                ...state,
                eventFormOpen: false,
            };
    }
}

export default eventFormModalReducer;