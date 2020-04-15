export const createFollow = follow => {
    return $.ajax({
        method: "POST",
        url: "/api/follows",
        data: { follow }
    });
};

export const deleteFollow = follow => {
    debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/follows/${follow.id}`,
        data: { follow }
    });
};


export const fetchFollows = () => {
    return $.ajax({
        method: "GET",
        url: `/api/follows`,
    });
};