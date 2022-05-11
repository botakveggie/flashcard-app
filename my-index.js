const grantAccess = (status, time) => {
    if (status == 'Admin') {
        return true;
    } else if (time == 'Day') {
        return true;
    } else return false;
}