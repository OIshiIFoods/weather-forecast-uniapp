import { defineStore } from "pinia";

export const useIndexStore = defineStore('index', {
    state() {
        return {

        }
    },
    getters: {

    },
    actions: {

    },
    // 配置持久化
    persist: {
        storage: {
            setItem(key, value) {
                uni.setStorageSync(key, value)
            },
            getItem(key) {
                return uni.getStorageSync(key)
            }
        }
    }
})