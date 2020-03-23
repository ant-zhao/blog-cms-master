import request from '@/server/request'

export const AddApi = (params) => {
    return request.post(`/api/blogType/add`, params)
}

export const GetApi = (params) => {
    return request.post(`/api/blogType/get`, params)
}

export const UpdateApi = (params) => {
    return request.post(`/api/blogType/update`, params)
}

export const FindByIdApi = (params) => {
    return request.post(`/api/blogType/getById`, params)
}

export const DeleteApi = (params) => {
    return request.post(`/api/blogType/delete`, params)
}

