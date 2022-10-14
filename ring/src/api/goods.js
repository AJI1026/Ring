import request from '@/utils/request'

// 获取轮播数据
export const swipedata=(data)=> {
    return request({
        url: '/goods/list',
        method: 'get',
        data
    })
}