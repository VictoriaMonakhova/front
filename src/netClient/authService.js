import http from '@/netClient/config';
export async function doRegister(login, password, email) {
    try {
        const responce = await http.post('/auth/reqistration', {
            login,
            password,
            email
        });
        return responce.data;
    } catch (error) {
        console.error({ error })
        throw error;
    }
}

export async function doLogin(login, password) {
    try {
        const responce = await http.post('/auth/login', {
            login,
            password
        });
        const { accessToken } = responce.data;
        localStorage.accessToken = accessToken;
        return accessToken;
    } catch (error) {
        console.error({ error })
        throw error;
    }
}

export async function doLogout() {
    try {
        const responce = await http.post('/user/logout', {});
        localStorage.removeItem('accessToken');
        return responce.data;
    } catch (error) {
        console.error({ error })
        throw error;
    }
}