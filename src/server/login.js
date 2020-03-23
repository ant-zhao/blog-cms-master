import request from '@/server/request'

export const LoginApi = (params) => {
    return request.post(`/api/users/login`, params)
}