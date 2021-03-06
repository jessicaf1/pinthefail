export const fetchPins = () => {
    return $.ajax({
        method: "GET",
        url: "/api/pins"
    });
};

export const fetchPin = id => {
    return $.ajax({
        method: "GET",
        url: `/api/pins/${id}`
    });
};

export const createPin = (pin, boardId) => {
    debugger
    return $.ajax({
        method: "POST",
        url: `/api/boards/${boardId}/pins`,
        data: pin,
        contentType: false,
        processData: false
    });
};

export const updatePin = ({ pin, boardId }) => {
    debugger
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${boardId}/pins/${pin.id}`,
        data: {
            pin,
            boardId
        }
    });
};

export const deletePin = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/pins/${id}`,
    });
};