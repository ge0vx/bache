import {takeEvery} from 'redux-saga/effects';
import {GET_ALL_USER_INFO_REQUEST} from './actions';

function* handler(){
    yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

function getAllUserInfo(action){
    try{

    }catch(err){

    }
}

export {handler};