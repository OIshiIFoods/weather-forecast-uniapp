import { getCurPosition, searchPosition } from "@/service/geoPosition";
import { defineStore } from "pinia";
import type { State } from "./types/position.d.ts";

export const usePositionStore = defineStore('position', {
    state() {
        return {
            positionInfo: {}
        } as State
    },
    getters: {

    },
    actions: {
        changePositionInfo(params: State['positionInfo']) {
            this.positionInfo = params
        }
    }
})