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

export const updatePin = (pin) => {
    debugger
    return $.ajax({
      method: "PATCH",
      url: `/api/boards/${pin.boardId}/pins/${pin.id}`,
      data: pin,
      
      contentType: false,
      processData: false
    });
};

export const deletePin = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/pins/${id}`,
    });
};