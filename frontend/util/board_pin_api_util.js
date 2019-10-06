export const fetchBoardPins = () => {
    return $.ajax({
        method: "GET",
        url: "/api/board_pins"
    });
};

export const fetchBoardPin = id => {
    return $.ajax({
        method: "GET",
        url: `/api/board_pins/${id}`
    });
};

export const createBoardPin = board_pin => {
    return $.ajax({
        method: "POST",
        url: "/api/boards_pins",
        data: { board_pin }
    });
};

export const updateBoardPin = board_pin => {
    return $.ajax({
        method: "PATCH",
        url: `/api/board_pins/${board_pin.id}`,
        data: { board_pin }
    });
};

export const deleteBoardPin = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/board_pins/${board_pin.id}`,
    });
};