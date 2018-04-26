import request from '@/utils/request'
import axios from 'axios'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return axios({
    url: 'http://localhost:3000/api/loginIn',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

