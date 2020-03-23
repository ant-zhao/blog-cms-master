import request from '@/server/request'

export const AddApi = (params) => {
    return request.post(`/api/banner/add`, params)
}

export const GetApi = (params) => {
    return request.post(`/api/banner/get`, params)
}

export const UpdateApi = (params) => {
    return request.post(`/api/banner/update`, params)
}

export const FindByIdApi = (params) => {
    return request.post(`/api/banner/getById`, params)
}

export const DeleteApi = (params) => {
    return request.post(`/api/banner/delete`, params)
}