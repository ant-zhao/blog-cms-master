import request from '@/server/request'

export const AddApi = (params) => {
    return request.post(`/api/book/add`, params)
}

export const GetApi = (params) => {
    return request.post(`/api/book/get`, params)
}

export const UpdateApi = (params) => {
    return request.post(`/api/book/update`, params)
}

export const FindByIdApi = (params) => {
    return request.post(`/api/book/getById`, params)
}

export const DeleteApi = (params) => {
    return request.post(`/api/book/delete`, params)
}