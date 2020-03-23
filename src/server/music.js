import request from '@/server/request'

export const AddApi = (params) => {
    return request.post(`/api/music/add`, params)
}

export const GetApi = (params) => {
    return request.post(`/api/music/get`, params)
}

export const UpdateApi = (params) => {
    return request.post(`/api/music/update`, params)
}

export const FindByIdApi = (params) => {
    return request.post(`/api/music/getById`, params)
}

export const DeleteApi = (params) => {
    return request.post(`/api/music/delete`, params)
}