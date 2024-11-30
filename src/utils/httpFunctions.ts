import { AxiosResponse } from "axios";

import api from '../services/api'

interface IGetDTO {
    url: string
    params?: any
    headers?: any 
}

export const getRequest = async ({
    url,
    params = {},
    headers = {},
}: IGetDTO): Promise<AxiosResponse<any>> => {
    const response = await api.get(url, {params, headers: {...headers}})
    return response
}

interface IPostDTO {
    url: string
    body?: any
    headers?: any
}

export const postRequest = async ({
    url,
    body = {},
    headers = {},
}: IPostDTO): Promise<AxiosResponse<any>> => {
    const response = await api.post(url, body, {headers: {...headers}})
    return response
}

interface IPutDTO {
    url: string
    body?: any
    headers?: any
}

export const putRequest = async ({
    url,
    body = {},
    headers = {},
}: IPutDTO): Promise<AxiosResponse<any>> => {
    const response = await api.put(url, body, {headers: {...headers}})
    return response
}

interface IPatchDTO {
    url: string
    body?: any
    headers?: any
}

export const patchRequest = async ({
    url,
    body = {},
    headers = {},
}: IPatchDTO): Promise<AxiosResponse<any>> => {
    const response = await api.patch(url, body, {headers: {...headers}})
    return response
}

interface IDeleteDTO {
    url: string,
    data?: any,
    headers?: any
}

export const deleteRequest = async ({
    url,
    data = {},
    headers = {},
}: IDeleteDTO): Promise<AxiosResponse<any>> => {
    const response = await api.delete(url, {data, headers: {...headers}})
    return response
}