const isValidEmail = email => {
    // eslint-disable-next-line no-useless-escape
    const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(String(email).toLowerCase());
};

export {
    isValidEmail,
};
