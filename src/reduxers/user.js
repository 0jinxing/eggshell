const user = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_USER_INFO":
      return { ...state, request: true };
    case "GET_USER_INFO_SUCCESS":
      return {
        ...state,
        request: false,
        "nickname": action.nickname,
        "introduction": action.introduction,
        "sex": action.sex,
        "role": action.role,
        "createtime": action.createtime,
        "email": action.email,
        "imgurl": action.imgurl
      };
    case "REQUEST_MODIFY_USER_INFO":
      return { ...state, request: true };
    case "MODIFY_USER_INFO_SUCCESS":
      return {
        ...state,
        request: false,
        "nickname": action.nickname,
        "introduction": action.introduction,
        "sex": action.sex,
        "role": action.role,
        "createtime": action.createtime,
        "email": action.email,
        "imgurl": action.imgurl
      };
    default: return state;
  }
};
export default user;