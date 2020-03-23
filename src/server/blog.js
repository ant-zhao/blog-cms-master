import request from '@/server/request'

export const GetBlogTypeApi = (params) => {
    return request.post(`/api/blogType/get`, params)
}

export const AddApi = (params) => {
    return request.post(`/api/blog/add`, params)
}

export const GetApi = (params) => {
    return request.post(`/api/blog/get`, params)
}

export const UpdateApi = (params) => {
    return request.post(`/api/blog/update`, params)
}

export const FindByIdApi = (params) => {
    return request.post(`/api/blog/getById`, params)
}

export const DeleteApi = (params) => {
    return request.post(`/api/blog/delete`, params)
}