import request from '@/server/request'

export const AddApi = (params) => {
    return request.post(`/api/hotSwiper/add`, params)
}

export const GetApi = (params) => {
    return request.post(`/api/hotSwiper/get`, params)
}

export const UpdateApi = (params) => {
    return request.post(`/api/hotSwiper/update`, params)
}

export const FindByIdApi = (params) => {
    return request.post(`/api/hotSwiper/getById`, params)
}

export const DeleteApi = (params) => {
    return request.post(`/api/hotSwiper/delete`, params)
}

