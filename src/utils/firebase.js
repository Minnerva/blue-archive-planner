import { getAuth } from 'firebase/auth'
import { 
  getDatabase, ref, query, push, set, get, child, onValue, 
  orderByChild, limitToFirst, limitToLast
 } from 'firebase/database'

export const getUID = () => {
  const auth = getAuth()
  return auth.currentUser ? auth.currentUser.uid : false
}

export const getData = async (db_path) => {
  const db = getDatabase()

  try {
    const snapshot = await get(child(ref(db), db_path))
    const value = snapshot.val()
    return value ? value : false
  } catch (err) {
    console.error(err)
  }
}

export const getDataListen = (db_path, callback) => {
  const db = getDatabase()
  const dbRef = ref(db, db_path)
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val()
    callback(data)
  })
}

export const saveData = (db_path, data) => {
  const db = getDatabase()
  set(ref(db, db_path), data)
}

export const pushData = (db_path, data) => {
  const db = getDatabase()
  const dbRef = ref(db, db_path)
  set(push(dbRef), data)
}

export const setListDataListen = (db_path, callback, options = {}) => {
  const db = getDatabase()
  let queryRef = null
  let order = null
  let filter = null

  if (options.order && options.order_key) {
    switch (options.order) {
      case `child`:
        order = orderByChild(options.order_key)
        break
      case `key`:
        order = orderByKey()
        break
      case `value`:
        order = orderByValue(options.order_key)
        break
    }
  }

  // TODO: Add more accepted filter
  // https://firebase.google.com/docs/database/web/lists-of-data#filtering_data
  if (options.filter && options.filter_value) {
    switch (options.filter) {
      case `first`:
        filter = limitToFirst(options.filter_value)
        break
      case `last`:
        filter = limitToLast(options.filter_value)
        break
    }
  }

  if (options.order && options.filter) {
    queryRef = query(ref(db, db_path), order, filter)
  } else if (options.order) {
    queryRef = query(ref(db, db_path), order)
  } else if (options.filter) {
    queryRef = query(ref(db, db_path), filter)
  } else {
    queryRef = query(ref(db, db_path))
  }

  onValue(queryRef, (snapshopt) => callback(snapshopt.val()))
}
