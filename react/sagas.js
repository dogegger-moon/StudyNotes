import { takeEvery, put } from 'redux-saga/effects'
import { 
    HOMEPAGE_CAROUSEL_DATA_IMG, 
} from './actionTypes'
import { 
    getLanternSlide, 
} from '@/services/pay'
import { 
    getHomePageCarouselData, 
} from '@/redux/actionCreators'

// generator 函数
// yield  一个基于生成器的版本的return关键字

function* getHomePageCarouselImg () {
    const res = yield getLanternSlide()
    const action = getHomePageCarouselData(res.data)
    yield put(action)
}

function* mySaga() {
    yield takeEvery(HOMEPAGE_CAROUSEL_DATA_IMG, getHomePageCarouselImg);
}

export default mySaga;
