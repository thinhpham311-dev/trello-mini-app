// src/store/storage.js
import webStorage from 'redux-persist/es/storage'

const storage =
  typeof window !== 'undefined'
    ? webStorage
    : {
        getItem: () => Promise.resolve(null),
        setItem: (_k, v) => Promise.resolve(v),
        removeItem: () => Promise.resolve(),
      }

export default storage
