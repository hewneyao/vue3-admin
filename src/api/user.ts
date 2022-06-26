import http from '@/utils/request'

interface logingForm {
  account: string;
  password: string
}

// 封装登录请求
export function login(loginFrom: logingForm) {
  return http({

  })
}