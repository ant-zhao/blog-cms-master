import request from '@/server/request'

export const AddApi = (params) => {
    return request.post(`/api/sheet/add`, params)
}

export const GetApi = (params) => {
    return request.post(`/api/sheet/get`, params)
}

export const UpdateApi = (params) => {
    return request.post(`/api/sheet/update`, params)
}

export const FindByIdApi = (params) => {
    return request.post(`/api/sheet/getById`, params)
}

export const DeleteApi = (params) => {
    return request.post(`/api/sheet/delete`, params)
}