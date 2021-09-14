const idRegex = /^[a-z0-9]{8,20}$/g; // 8~20자 영문소문자숫자조합
const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/; //  8 ~ 20자 영문대소문자구분,대문자1개이상,기호1개이상,숫자 조합
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{2,}[-]+[0-9]{3,}[-]+[0-9]{4,}$/;
const numRegex = /[^0-9.]+/g;

export const isId = (id) => {    
    return idRegex.test(id);
};

export const isPw = (pw) => {
    return pwRegex.test(pw);
};

export const isEmail = (email) => {
    return emailRegex.test(email);
};

export const isPhone = (phone) => {
    return phoneRegex.test(phone);
};

export const numOnly = (num) => {
    return num.replace(numRegex, '');
}